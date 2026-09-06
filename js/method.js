(() => {
  const CIRCUMFERENCE = 339.292;
  const CLIPS = {
    inhale1: "/assets/video/breath-swallow-1.mp4",
    inhale2: "/assets/video/breath-swallow-2.mp4",
    hold: "/assets/video/hold-30.mp4",
    exhale: "/assets/video/thin-straw-exhale.mp4",
    extra: "/assets/video/thin-straw-exhale.mp4"
  };
  const STILLS = {
    idle: {
      src: "/assets/ugc/host-idle.webp",
      alt: "Young woman with brown hair and green eyes smiling at the camera in a cream sweater"
    },
    inhale1: {
      src: "/assets/ugc/host-breath-1.webp",
      alt: "Same host mid first deep breath and swallow demo"
    },
    inhale2: {
      src: "/assets/ugc/host-breath-2.webp",
      alt: "Same host mid second stacked breath and swallow"
    },
    hold: {
      src: "/assets/ugc/host-hold.webp",
      alt: "Same host holding a calm breath for the timed hold"
    },
    exhale: {
      src: "/assets/ugc/host-exhale.webp",
      alt: "Same host slowly exhaling as through a thin straw"
    },
    extra: {
      src: "/assets/ugc/host-exhale.webp",
      alt: "Same host slowly exhaling as through a thin straw"
    }
  };

  const STEPS = [
    {
      id: "inhale1",
      beat: 0,
      kicker: "Step 1 of 4",
      label: "Deep breath all the way in",
      copy: "Swallow it.",
      kind: "guided",
      nextLabel: "I swallowed"
    },
    {
      id: "inhale2",
      beat: 1,
      kicker: "Step 2 of 4",
      label: "Another breath on top",
      copy: "Swallow completely.",
      kind: "guided",
      nextLabel: "I swallowed"
    },
    {
      id: "hold",
      beat: 2,
      kicker: "Step 3 of 4",
      label: "Hold. 30 full seconds.",
      copy: "Stay with the countdown.",
      kind: "count",
      durationMs: 30000,
      unit: "seconds",
      share: true
    },
    {
      id: "exhale",
      beat: 3,
      kicker: "Step 4 of 4",
      label: "Thin stream. 10 seconds.",
      copy: "Slowly blow out as through the tiniest straw.",
      kind: "count",
      durationMs: 10000,
      unit: "seconds",
      share: true
    },
    {
      id: "extra",
      beat: 3,
      kicker: "If you can",
      label: "Keep it thin to 12 or 15 if you can.",
      copy: "Same thin stream. Keep it gentle.",
      kind: "count",
      durationMs: 5000,
      unit: "seconds",
      optional: true
    }
  ];

  const els = {
    phase: document.getElementById("phase"),
    kicker: document.getElementById("phase-kicker"),
    label: document.getElementById("phase-label"),
    copy: document.getElementById("phase-copy"),
    timer: document.getElementById("timer"),
    progress: document.getElementById("timer-progress"),
    count: document.getElementById("timer-count"),
    unit: document.getElementById("timer-unit"),
    start: document.getElementById("start-btn"),
    next: document.getElementById("next-btn"),
    reset: document.getElementById("reset-btn"),
    extraNote: document.getElementById("extra-note"),
    card: document.getElementById("method"),
    timerWrap: document.getElementById("timer-wrap"),
    live: document.getElementById("live"),
    still: document.getElementById("host-still"),
    video: document.getElementById("host-video"),
    share: document.getElementById("share-btn"),
    rail: document.getElementById("beat-rail"),
    written: document.getElementById("written-steps")
  };

  if (!els.start || !els.timer) return;

  let raf = 0;
  let stepIndex = -1;
  let startedAt = 0;
  let durationMs = 0;
  let running = false;
  let token = 0;
  let lastShownSecond = null;
  const warmed = new Set();

  function invalidate() {
    token += 1;
    window.cancelAnimationFrame(raf);
  }

  function announce(text) {
    if (!els.live) return;
    els.live.textContent = "";
    window.requestAnimationFrame(() => {
      els.live.textContent = text;
    });
  }

  function setProgress(fraction) {
    const clamped = Math.min(1, Math.max(0, fraction));
    els.progress.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - clamped));
  }

  function flashCount() {
    els.timer.classList.remove("is-tick");
    void els.timer.offsetWidth;
    els.timer.classList.add("is-tick");
  }

  function setCount(value) {
    const next = String(value);
    if (els.count.textContent !== next) {
      els.count.textContent = next;
      if (next !== "in" && next !== "now" && next !== "✓") {
        flashCount();
      }
    }
  }

  function paintPhase(kicker, label, copy) {
    if (els.phase) els.phase.classList.add("is-changing");
    window.setTimeout(() => {
      els.kicker.textContent = kicker;
      els.label.textContent = label;
      els.copy.textContent = copy;
      if (els.phase) els.phase.classList.remove("is-changing");
    }, 90);
  }

  function warmStill(id) {
    const still = STILLS[id];
    if (!still || warmed.has(still.src)) return;
    warmed.add(still.src);
    const img = new Image();
    img.src = still.src;
  }

  function showStill(id) {
    if (!els.still) return;
    const still = STILLS[id] || STILLS.idle;
    if (els.still.getAttribute("src") === still.src) return;
    els.still.classList.add("is-changing");
    window.setTimeout(() => {
      els.still.src = still.src;
      els.still.alt = still.alt;
      els.still.classList.remove("is-changing");
    }, 80);
  }

  const SHARE_URL = "https://howtofixhiccups.com/";

  function markBeat(beat) {
    const dots = els.rail ? [...els.rail.children] : [];
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-current", beat === i);
      dot.classList.toggle("is-done", beat > i);
    });
    const items = els.written ? [...els.written.children] : [];
    items.forEach((item, i) => {
      item.classList.toggle("is-current", beat === i);
    });
  }

  function showShare(on) {
    if (!els.share) return;
    els.share.hidden = !on;
    if (!on) els.share.textContent = "Share";
  }

  function trackShare() {
    const key = "htfh-share-count";
    let count = 0;
    try {
      count = Number(window.localStorage.getItem(key) || 0) + 1;
      window.localStorage.setItem(key, String(count));
    } catch {
      count += 1;
    }
    console.log("share", count);
    if (els.share) els.share.dataset.count = String(count);
  }

  async function shareLink() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "How to fix hiccups",
          url: SHARE_URL
        });
        trackShare();
        return;
      }
    } catch (err) {
      if (err && err.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      if (els.share) els.share.textContent = "Copied";
      trackShare();
      window.setTimeout(() => {
        if (els.share) els.share.textContent = "Share";
      }, 1600);
    } catch {
      /* Clipboard can fail in locked-down browsers. */
    }
  }

  function hideClip() {
    if (!els.video) return;
    els.video.pause();
    els.video.hidden = true;
    els.video.removeAttribute("src");
    els.video.load();
  }

  function playClip(id) {
    if (!els.video) return;
    const src = CLIPS[id];
    if (!src) {
      hideClip();
      return;
    }
    try {
      els.video.preload = "none";
      if (els.video.getAttribute("src") !== src) {
        els.video.src = src;
      }
      const play = els.video.play();
      if (play && typeof play.then === "function") {
        play.then(() => {
          els.video.hidden = false;
        }).catch(() => {
          hideClip();
        });
      }
    } catch {
      hideClip();
    }
  }

  function renderIdle() {
    invalidate();
    running = false;
    stepIndex = -1;
    lastShownSecond = null;
    els.kicker.textContent = "The method";
    els.label.textContent = "Four steps";
    els.copy.textContent = "Start when you are ready.";
    if (els.phase) els.phase.classList.remove("is-changing");
    if (els.card) {
      els.card.classList.add("is-idle");
      els.card.classList.remove("is-running", "is-timing");
    }
    if (els.timerWrap) els.timerWrap.hidden = true;
    els.count.textContent = "";
    els.unit.textContent = "";
    setProgress(0);
    els.start.hidden = false;
    els.next.hidden = true;
    els.reset.hidden = true;
    if (els.extraNote) els.extraNote.hidden = true;
    showShare(false);
    markBeat(-1);
    showStill("idle");
    hideClip();
  }

  function finish() {
    invalidate();
    running = false;
    paintPhase(
      "The method",
      "That is the sequence.",
      "If they are still going after one pass, you can try once more. If they last, keep coming back, or come with other symptoms, stop."
    );
    if (els.card) {
      els.card.classList.remove("is-idle", "is-timing");
      els.card.classList.add("is-running");
    }
    if (els.timerWrap) els.timerWrap.hidden = true;
    els.count.textContent = "✓";
    els.unit.textContent = "done";
    setProgress(1);
    els.start.hidden = true;
    els.next.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Stop";
    if (els.extraNote) els.extraNote.hidden = true;
    showShare(false);
    markBeat(4);
    announce("That is the sequence.");
    showStill("idle");
    hideClip();
  }

  function beginStep(index) {
    const step = STEPS[index];
    if (!step) {
      finish();
      return;
    }

    const myToken = ++token;
    window.cancelAnimationFrame(raf);
    stepIndex = index;
    running = true;
    startedAt = performance.now();
    lastShownSecond = null;
    paintPhase(step.kicker, step.label, step.copy);
    els.start.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Stop";
    if (els.card) {
      els.card.classList.remove("is-idle");
      els.card.classList.toggle("is-timing", step.kind === "count");
      els.card.classList.add("is-running");
    }
    if (els.timerWrap) els.timerWrap.hidden = step.kind !== "count";
    if (els.extraNote) els.extraNote.hidden = !(step.id === "exhale" || step.optional);
    showShare(Boolean(step.share));
    markBeat(step.beat);
    showStill(step.id);
    playClip(step.id);
    const upcoming = STEPS[index + 1];
    if (upcoming) warmStill(upcoming.id);

    if (step.kind === "guided") {
      durationMs = 0;
      setCount("");
      els.unit.textContent = "";
      els.next.hidden = false;
      els.next.disabled = false;
      els.next.textContent = step.nextLabel;
      setProgress(0);
      announce(`${step.label}. ${step.copy}`);
      return;
    }

    durationMs = step.durationMs;
    els.next.disabled = false;
    if (step.optional) {
      els.next.hidden = false;
      els.next.textContent = "I'm done";
    } else {
      els.next.hidden = true;
    }
    const seconds = Math.ceil(step.durationMs / 1000);
    setCount(seconds);
    lastShownSecond = seconds;
    els.unit.textContent = step.unit;
    setProgress(0);
    announce(`${step.label}. ${step.copy} ${seconds} seconds.`);

    const tick = (now) => {
      if (myToken !== token || !running) return;
      const elapsed = now - startedAt;
      setProgress(elapsed / durationMs);
      const remaining = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      if (remaining !== lastShownSecond) {
        lastShownSecond = remaining;
        setCount(remaining);
      }
      if (elapsed >= durationMs) {
        if (myToken !== token) return;
        beginStep(index + 1);
        return;
      }
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
  }

  function start() {
    warmStill("inhale1");
    beginStep(0);
  }

  function next() {
    const step = STEPS[stepIndex];
    if (!step || !running) return;
    invalidate();
    if (step.optional) {
      finish();
      return;
    }
    beginStep(stepIndex + 1);
  }

  function reset() {
    renderIdle();
    announce("Stopped.");
  }

  els.start.addEventListener("click", start);
  els.next.addEventListener("click", next);
  els.reset.addEventListener("click", reset);
  if (els.share) els.share.addEventListener("click", shareLink);
  renderIdle();
})();
