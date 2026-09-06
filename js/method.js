(() => {
  const CIRCUMFERENCE = 339.292;
  const VIDEO_SRC = "/media/host/walkthrough.mp4";
  const VIDEO_ALT = "/media/host/walkthrough.webm";
  const CUES_SRC = "/media/host/cues.json";

  const STEPS = [
    {
      id: "inhale1",
      kicker: "Step 1 of 4",
      label: "Deep breath in",
      copy: "Fill your lungs. When you are ready, swallow.",
      kind: "guided",
      inhaleMs: 5000,
      swallowMs: 2800,
      swallowCopy: "Swallow now.",
      nextLabel: "I swallowed"
    },
    {
      id: "inhale2",
      kicker: "Step 2 of 4",
      label: "Second breath on top",
      copy: "Add another inhale without letting the first one go. Then swallow.",
      kind: "guided",
      inhaleMs: 5000,
      swallowMs: 2800,
      swallowCopy: "Swallow now.",
      nextLabel: "I swallowed"
    },
    {
      id: "hold",
      kicker: "Step 3 of 4",
      label: "Hold",
      copy: "Hold for 30 full seconds. Stay as still as you can.",
      kind: "count",
      durationMs: 30000,
      unit: "seconds"
    },
    {
      id: "exhale",
      kicker: "Step 4 of 4",
      label: "Thin straw blow",
      copy: "Slowly blow out as through the thinnest straw.",
      kind: "count",
      durationMs: 10000,
      unit: "seconds"
    },
    {
      id: "extra",
      kicker: "If you can",
      label: "Keep the thin stream going",
      copy: "Twelve to fifteen seconds if you still have a gentle stream of air.",
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
    live: document.getElementById("live"),
    video: document.getElementById("host-video"),
    placeholder: document.getElementById("host-placeholder")
  };

  if (!els.start || !els.timer) return;

  let raf = 0;
  let stepIndex = -1;
  let startedAt = 0;
  let durationMs = 0;
  let swallowAt = 0;
  let running = false;
  let token = 0;
  let lastShownSecond = null;
  let hostReady = false;
  let hostCues = {};

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

  function cueFor(id) {
    const value = hostCues[id];
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  }

  function syncHost(id) {
    if (!hostReady || !els.video) return;
    const cue = cueFor(id);
    try {
      if (cue !== null) els.video.currentTime = cue;
      const play = els.video.play();
      if (play && typeof play.catch === "function") play.catch(() => {});
    } catch {
      /* Autoplay can fail; the countdown still runs. */
    }
  }

  function pauseHost(reset) {
    if (!els.video) return;
    els.video.pause();
    if (reset) {
      try {
        els.video.currentTime = 0;
      } catch {
        /* Ignore seek errors on an empty source. */
      }
    }
  }

  function renderIdle() {
    invalidate();
    running = false;
    stepIndex = -1;
    lastShownSecond = null;
    els.kicker.textContent = "The sequence";
    els.label.textContent = "Ready when you are";
    els.copy.textContent =
      "Start walks you through it. Two breaths with a swallow, a 30-second hold, then a thin blow.";
    if (els.phase) els.phase.classList.remove("is-changing");
    els.count.textContent = "30";
    els.unit.textContent = "second hold ahead";
    setProgress(0);
    els.start.hidden = false;
    els.next.hidden = true;
    els.reset.hidden = true;
    if (els.extraNote) els.extraNote.hidden = true;
    pauseHost(true);
  }

  function finish() {
    invalidate();
    running = false;
    paintPhase(
      "That's the sequence",
      "You can rest",
      "If hiccups are still there, you may try it once more. If they linger, keep coming back, or arrive with other symptoms, talk to a clinician."
    );
    els.count.textContent = "✓";
    els.unit.textContent = "done";
    setProgress(1);
    els.start.hidden = true;
    els.next.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Start over";
    if (els.extraNote) els.extraNote.hidden = true;
    announce("Sequence finished.");
    pauseHost(false);
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
    els.reset.textContent = "Reset";
    if (els.extraNote) els.extraNote.hidden = !(step.id === "exhale" || step.optional);
    syncHost(step.id);

    if (step.kind === "guided") {
      durationMs = step.inhaleMs + step.swallowMs;
      swallowAt = step.inhaleMs;
      setCount("in");
      els.unit.textContent = "breathe";
      els.next.hidden = false;
      els.next.disabled = true;
      els.next.textContent = step.nextLabel;
      window.setTimeout(() => {
        if (myToken === token) els.next.disabled = false;
      }, 280);
      setProgress(0);
      announce(`${step.label}. ${step.copy}`);
    } else {
      durationMs = step.durationMs;
      swallowAt = 0;
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
    }

    const tick = (now) => {
      if (myToken !== token || !running) return;
      const elapsed = now - startedAt;
      setProgress(elapsed / durationMs);

      if (step.kind === "guided") {
        if (elapsed >= swallowAt) {
          els.copy.textContent = step.swallowCopy;
          setCount("now");
          els.unit.textContent = "swallow";
        } else {
          setCount("in");
          els.unit.textContent = "breathe";
        }
      } else {
        const remaining = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
        if (remaining !== lastShownSecond) {
          lastShownSecond = remaining;
          setCount(remaining);
        }
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
    announce("Sequence reset.");
  }

  function revealHost() {
    hostReady = true;
    if (els.video) els.video.hidden = false;
    if (els.placeholder) els.placeholder.hidden = true;
  }

  function keepPlaceholder() {
    hostReady = false;
    if (els.video) {
      els.video.hidden = true;
      els.video.removeAttribute("src");
      els.video.querySelectorAll("source").forEach((node) => node.remove());
    }
    if (els.placeholder) els.placeholder.hidden = false;
  }

  function attachVideo(src, type) {
    els.video.addEventListener("loadeddata", revealHost, { once: true });
    els.video.addEventListener("error", keepPlaceholder, { once: true });
    const source = document.createElement("source");
    source.src = src;
    source.type = type;
    els.video.appendChild(source);
    els.video.load();
  }

  function loadHost() {
    if (!els.video) return;
    keepPlaceholder();

    const probe = (url) =>
      window.fetch(url, { method: "HEAD", cache: "no-store" }).then((res) => {
        if (res.ok) return true;
        if (res.status === 404) return false;
        return window.fetch(url, { method: "GET", headers: { Range: "bytes=0-0" }, cache: "no-store" }).then((r) => r.ok);
      }).catch(() => false);

    Promise.all([probe(VIDEO_SRC), probe(VIDEO_ALT), probe(CUES_SRC)]).then(([mp4, webm, cues]) => {
      if (mp4) attachVideo(VIDEO_SRC, "video/mp4");
      else if (webm) attachVideo(VIDEO_ALT, "video/webm");

      if (!cues) return;
      return window.fetch(CUES_SRC, { cache: "no-store" }).then((res) => (res.ok ? res.json() : null));
    }).then((data) => {
      if (data && typeof data === "object") hostCues = data;
    }).catch(() => {
      /* Assets are optional until Stills & Clips Desk delivers them. */
    });
  }

  els.start.addEventListener("click", start);
  els.next.addEventListener("click", next);
  els.reset.addEventListener("click", reset);
  renderIdle();
  loadHost();
})();
