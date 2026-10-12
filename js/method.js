(() => {
  const CIRCUMFERENCE = 339.292;
  // Full v2 pack. Idle/done stay on stills (do not play old start.mp4).
  // Exhale is clean 04. Skip hero-loop/thin-straw-loop-4s.
  // Hero muted: hero-loop/straw-blow-loop-3s.mp4 only, playbackRate 0.45.
  const UGC_MOTION_V2 = "/media/video/ugc-motion-v2-2026-09-06";
  const CLIPS = {
    idle: [],
    inhale1: [`${UGC_MOTION_V2}/01-breath-swallow.mp4`],
    inhale2: [`${UGC_MOTION_V2}/02-breath-swallow.mp4`],
    hold: [`${UGC_MOTION_V2}/03-hold-30.mp4`],
    exhale: [`${UGC_MOTION_V2}/04-thin-straw-exhale.mp4`],
    extra: [`${UGC_MOTION_V2}/04-thin-straw-exhale.mp4`]
  };
  const POSTERS = {
    idle: "/media/stills/host-idle.jpg",
    inhale1: "/media/stills/host-breath-1.jpg",
    inhale2: "/media/stills/host-breath-2.jpg",
    hold: "/media/stills/host-hold.jpg",
    exhale: "/media/stills/host-exhale.jpg",
    extra: "/media/stills/host-exhale.jpg"
  };
  const STILLS = {
    idle: {
      src: "/assets/ugc/host-idle.webp",
      alt: "Person on camera, ready to start the four-step hiccup method."
    },
    inhale1: {
      src: "/assets/ugc/host-breath-1.webp",
      alt: "Person on camera taking a deep breath, then swallowing."
    },
    inhale2: {
      src: "/assets/ugc/host-breath-2.webp",
      alt: "Person on camera adding a second breath, then swallowing."
    },
    hold: {
      src: "/assets/ugc/host-hold.webp",
      alt: "Person on camera holding their breath."
    },
    exhale: {
      src: "/assets/ugc/host-exhale.webp",
      alt: "Person on camera blowing out slowly through pursed lips."
    },
    extra: {
      src: "/assets/ugc/host-exhale.webp",
      alt: "Person on camera blowing out slowly through pursed lips."
    }
  };

  // One screen per step: inhale label + swallow helper, then I swallowed.
  // Deck also lists a later swallow-confirm line if we ever split the tap.
  const STEPS = [
    {
      id: "inhale1",
      beat: 0,
      kicker: "Step 1 of 4",
      label: "Breathe all the way in.",
      copy: "Wait until the swallow finishes. Then tap.",
      kind: "guided",
      nextLabel: "I swallowed"
    },
    {
      id: "inhale2",
      beat: 1,
      kicker: "Step 2 of 4",
      label: "Second breath on top.",
      copy: "Swallow all the way. Then tap.",
      kind: "guided",
      nextLabel: "I swallowed"
    },
    {
      id: "hold",
      beat: 2,
      kicker: "Step 3 of 4",
      label: "Hold.",
      copy: "Keep the air in. Stay still. Full 30.",
      kind: "count",
      durationMs: 30000,
      unit: "seconds",
      copyLink: true
    },
    {
      id: "exhale",
      beat: 3,
      kicker: "Step 4 of 4",
      label: "Thin blow.",
      copy: "Like the tiniest straw. Stay on the count.",
      kind: "count",
      durationMs: 10000,
      unit: "seconds"
    },
    {
      id: "extra",
      beat: 3,
      kicker: "If you can",
      label: "Keep it thin.",
      copy: "Twelve to 15 if you can.",
      kind: "count",
      durationMs: 5000,
      unit: "seconds",
      optional: true,
      nextLabel: "Done"
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

  const HERO_PLAYBACK_RATE = 0.45;

  function setHeroPlaybackRate(hero) {
    hero.defaultPlaybackRate = HERO_PLAYBACK_RATE;
    hero.playbackRate = HERO_PLAYBACK_RATE;
  }

  function playHeroPlate() {
    const hero = document.getElementById("hero-video");
    if (!hero) return;
    const src = hero.getAttribute("data-src");
    if (!src) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hero.pause();
      hero.removeAttribute("src");
      hero.load();
      hero.hidden = true;
      return;
    }
    hero.muted = true;
    hero.defaultMuted = true;
    hero.playsInline = true;
    hero.loop = true;
    setHeroPlaybackRate(hero);
    if (hero.dataset.rateBound !== "1") {
      hero.dataset.rateBound = "1";
      hero.addEventListener("loadedmetadata", () => setHeroPlaybackRate(hero));
      hero.addEventListener("playing", () => setHeroPlaybackRate(hero));
    }
    if (hero.getAttribute("src") !== src) {
      hero.setAttribute("src", src);
    }
    const play = hero.play();
    if (play && typeof play.then === "function") {
      play.then(() => {
        setHeroPlaybackRate(hero);
        hero.hidden = false;
      }).catch(() => {
        hero.hidden = true;
      });
    }
  }

  playHeroPlate();

  if (!els.start || !els.timer) return;

  let raf = 0;
  let stepIndex = -1;
  let startedAt = 0;
  let durationMs = 0;
  let running = false;
  let token = 0;
  let lastShownSecond = null;
  let clipPhase = "idle";
  const warmed = new Set();
  const blockedClips = new Set();

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
    if (els.rail) {
      const progress = beat < 0 ? 0 : Math.min(1, beat / 3);
      els.rail.style.setProperty("--beat", String(progress));
    }
  }

  function showShare(on) {
    if (!els.share) return;
    els.share.hidden = !on;
    if (!on) els.share.textContent = "Copy link";
  }

  function inHoldWindow() {
    const step = STEPS[stepIndex];
    return Boolean(running && step && step.id === "hold");
  }

  function readHoldLog() {
    try {
      const raw = window.localStorage.getItem("htfh-hold-copy");
      const data = raw ? JSON.parse(raw) : {};
      let completed = Array.isArray(data.completed) ? data.completed : [];
      const forwarded = Array.isArray(data.forwarded) ? data.forwarded : [];
      if (!completed.length && Array.isArray(data.taps)) {
        completed = data.taps
          .filter((tap) => tap.phase === "hold" && tap.beforeBlowEnd)
          .map((tap) => ({ t: tap.t, phase: "hold", ok: true }));
      }
      return { completed, forwarded };
    } catch {
      return { completed: [], forwarded: [] };
    }
  }

  function writeHoldLog(data) {
    const proves = data.completed.length;
    const helperForwards = data.forwarded.length;
    try {
      window.localStorage.setItem("htfh-hold-copy", JSON.stringify({
        completed: data.completed,
        forwarded: data.forwarded,
        proves,
        helperForwards
      }));
      window.localStorage.setItem("htfh-share-count", String(proves));
    } catch {
      /* Private prove only. */
    }
    if (els.share) {
      els.share.dataset.proves = String(proves);
      els.share.dataset.forwards = String(helperForwards);
    }
  }

  function logHoldCompleted() {
    if (!inHoldWindow()) return;
    const data = readHoldLog();
    data.completed.push({ t: Date.now(), phase: "hold", ok: true });
    writeHoldLog(data);
  }

  function logHoldForward() {
    if (!inHoldWindow()) return;
    const data = readHoldLog();
    data.forwarded.push({ t: Date.now(), phase: "hold", incomplete: true });
    writeHoldLog(data);
  }

  async function shareLink() {
    if (!inHoldWindow()) return;
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      if (els.share) els.share.textContent = "Copied";
      logHoldCompleted();
      window.setTimeout(() => {
        if (els.share && !els.share.hidden) els.share.textContent = "Copy link";
      }, 1600);
      return;
    } catch {
      /* Failed clipboard is not a score. */
    }
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: "How to get rid of hiccups",
        url: SHARE_URL
      });
      if (inHoldWindow()) logHoldCompleted();
    } catch (err) {
      if (err && err.name === "AbortError") {
        logHoldForward();
      }
    }
  }

  function keepStill() {
    if (!els.still) return;
    els.still.hidden = false;
    els.still.removeAttribute("hidden");
  }

  function hideClip() {
    if (!els.video) return;
    els.video.pause();
    els.video.classList.remove("is-on");
    els.video.hidden = true;
    els.video.removeAttribute("src");
    els.video.load();
    keepStill();
  }

  function posterFor(id) {
    return POSTERS[id] || POSTERS.idle;
  }

  function markBlocked(src) {
    if (src) blockedClips.add(src);
  }

  function sourcesFor(id) {
    const value = CLIPS[id] || [];
    const list = Array.isArray(value) ? value : [value];
    return list.filter((src) => src && !blockedClips.has(src));
  }

  function playClip(id) {
    if (!els.video) return;
    clipPhase = id;
    keepStill();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hideClip();
      return;
    }
    const src = sourcesFor(id)[0];
    if (!src) {
      hideClip();
      return;
    }
    try {
      els.video.muted = true;
      els.video.defaultMuted = true;
      els.video.playsInline = true;
      els.video.loop = id !== "hold";
      els.video.preload = "none";
      els.video.setAttribute("poster", posterFor(id));
      els.video.classList.remove("is-on");
      if (els.video.getAttribute("src") !== src) {
        els.video.hidden = true;
        els.video.src = src;
      }
      const play = els.video.play();
      if (play && typeof play.then === "function") {
        play.then(() => {
          keepStill();
          els.video.hidden = false;
          els.video.classList.add("is-on");
        }).catch(() => {
          markBlocked(src);
          playClip(id);
        });
      }
    } catch {
      hideClip();
    }
  }

  if (els.video) {
    els.video.addEventListener("error", () => {
      markBlocked(els.video.getAttribute("src"));
      if (sourcesFor(clipPhase)[0]) playClip(clipPhase);
      else hideClip();
    });
  }

  function renderIdle() {
    invalidate();
    running = false;
    stepIndex = -1;
    lastShownSecond = null;
    els.kicker.textContent = "The method";
    els.label.textContent = "Start";
    els.copy.textContent = "";
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
    playClip("idle");
  }

  function finish() {
    invalidate();
    running = false;
    paintPhase(
      "The method",
      "Done. Breathe normally.",
      "One more pass the same evening is fine for a short spell."
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
    announce("That is the method.");
    showStill("idle");
    playClip("idle");
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
    showShare(Boolean(step.copyLink));
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
      els.next.textContent = step.nextLabel || "Done";
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
  const heroStart = document.querySelector('.hero-cta a[href="#method"]');
  if (heroStart) {
    heroStart.addEventListener("click", (event) => {
      event.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (els.card) {
        els.card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
      els.start.focus();
    });
  }
  renderIdle();
})();
