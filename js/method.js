(() => {
  const CIRCUMFERENCE = 339.292;
  const FULL_VIDEOS = [
    "/media/video/method-full.mp4",
    "/assets/video/method-full.mp4",
    "/media/video/walkthrough.mp4"
  ];
  const STEP_CLIPS = {
    inhale1: ["/media/video/breath-swallow-1.mp4", "/assets/video/breath-swallow-1.mp4"],
    inhale2: ["/media/video/breath-swallow-2.mp4", "/assets/video/breath-swallow-2.mp4"],
    hold: ["/media/video/hold-30.mp4", "/assets/video/hold-30.mp4"],
    exhale: ["/media/video/thin-straw-exhale.mp4", "/assets/video/thin-straw-exhale.mp4"],
    extra: ["/media/video/thin-straw-exhale.mp4", "/assets/video/thin-straw-exhale.mp4"]
  };
  const INTRO_CLIPS = ["/media/video/start.mp4", "/assets/video/start.mp4"];
  const CUES_SRC = ["/media/video/cues.json", "/assets/video/cues.json"];
  const STILLS = {
    idle: {
      src: "/assets/ugc/ugc-host-01-start.png",
      alt: "Person on camera running the four-step hiccup method."
    },
    inhale1: {
      src: "/assets/ugc/ugc-host-02-breath-swallow-1.png",
      alt: "Person on camera taking a deep breath, then swallowing."
    },
    inhale2: {
      src: "/assets/ugc/ugc-host-03-breath-swallow-2.png",
      alt: "Person on camera adding a second breath, then swallowing."
    },
    hold: {
      src: "/assets/ugc/ugc-host-04-hold-30.png",
      alt: "Person on camera holding their breath."
    },
    exhale: {
      src: "/assets/ugc/ugc-host-05-thin-straw-exhale.png",
      alt: "Person on camera blowing out slowly through pursed lips."
    },
    extra: {
      src: "/assets/ugc/ugc-host-05-thin-straw-exhale.png",
      alt: "Person on camera blowing out slowly through pursed lips."
    }
  };

  const STEPS = [
    {
      id: "inhale1",
      kicker: "Breathe. Swallow. Stack. Swallow.",
      label: "Deep breath all the way in",
      copy: "Swallow it.",
      kind: "guided",
      inhaleMs: 5000,
      swallowMs: 2800,
      swallowCopy: "Swallow it.",
      nextLabel: "I swallowed"
    },
    {
      id: "inhale2",
      kicker: "Breathe. Swallow. Stack. Swallow.",
      label: "Another breath on top",
      copy: "Swallow completely.",
      kind: "guided",
      inhaleMs: 5000,
      swallowMs: 2800,
      swallowCopy: "Swallow completely.",
      nextLabel: "I swallowed"
    },
    {
      id: "hold",
      kicker: "The method",
      label: "Hold. 30 full seconds.",
      copy: "Use the countdown. A count in your head tends to shrink.",
      kind: "count",
      durationMs: 30000,
      unit: "seconds"
    },
    {
      id: "exhale",
      kicker: "The method",
      label: "Thin stream. 10 seconds.",
      copy: "Slowly blow out as through the tiniest straw.",
      kind: "count",
      durationMs: 10000,
      unit: "seconds"
    },
    {
      id: "extra",
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
    live: document.getElementById("live"),
    video: document.getElementById("host-video"),
    still: document.getElementById("host-still"),
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
  let fullVideoSrc = "";
  let clipMap = {};

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

  function cueFor(id) {
    const value = hostCues[id];
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  }

  function playSrc(src, seek) {
    if (!els.video || !src) return;
    if (els.video.getAttribute("src") !== src) {
      els.video.src = src;
      els.video.load();
    }
    if (typeof seek === "number") {
      try {
        els.video.currentTime = seek;
      } catch {
        /* Ignore seek errors on a fresh source. */
      }
    }
    const play = els.video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  }

  function syncHost(id) {
    if (!hostReady || !els.video) return;
    try {
      if (fullVideoSrc) {
        playSrc(fullVideoSrc, cueFor(id) ?? 0);
        return;
      }
      if (clipMap[id]) playSrc(clipMap[id], 0);
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
    els.kicker.textContent = "The method";
    els.label.textContent = "Four steps";
    els.copy.textContent = "Press Start if you want the page to keep time.";
    if (els.phase) els.phase.classList.remove("is-changing");
    if (els.card) {
      els.card.classList.add("is-idle");
      els.card.classList.remove("is-running");
    }
    els.count.textContent = "";
    els.unit.textContent = "";
    setProgress(0);
    els.start.hidden = false;
    els.next.hidden = true;
    els.reset.hidden = true;
    if (els.extraNote) els.extraNote.hidden = true;
    showStill("idle");
    pauseHost(true);
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
      els.card.classList.remove("is-idle");
      els.card.classList.add("is-running");
    }
    els.count.textContent = "✓";
    els.unit.textContent = "done";
    setProgress(1);
    els.start.hidden = true;
    els.next.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Stop";
    if (els.extraNote) els.extraNote.hidden = true;
    announce("That is the sequence.");
    showStill("idle");
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
    els.reset.textContent = "Stop";
    if (els.card) {
      els.card.classList.remove("is-idle");
      els.card.classList.add("is-running");
    }
    if (els.extraNote) els.extraNote.hidden = !(step.id === "exhale" || step.optional);
    showStill(step.id);
    syncHost(step.id);

    if (step.kind === "guided") {
      durationMs = 0;
      swallowAt = 0;
      setCount("");
      els.unit.textContent = "";
      els.next.hidden = false;
      els.next.disabled = true;
      els.next.textContent = step.nextLabel;
      window.setTimeout(() => {
        if (myToken === token) els.next.disabled = false;
      }, 280);
      setProgress(0);
      announce(`${step.label}. ${step.copy}`);
      return;
    }

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

  function revealHost() {
    hostReady = true;
    if (els.video) els.video.hidden = false;
    if (els.still) els.still.hidden = true;
    if (els.placeholder) els.placeholder.hidden = true;
  }

  function keepPlaceholder() {
    hostReady = false;
    if (els.video) {
      els.video.hidden = true;
      els.video.removeAttribute("src");
      els.video.querySelectorAll("source").forEach((node) => node.remove());
    }
    if (els.still) els.still.hidden = false;
    if (els.placeholder) els.placeholder.hidden = true;
  }

  function attachVideo(src) {
    els.video.addEventListener("loadeddata", revealHost, { once: true });
    els.video.addEventListener("error", keepPlaceholder, { once: true });
    els.video.src = src;
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

    const firstHit = (urls) =>
      Promise.all(urls.map((url) => probe(url).then((ok) => (ok ? url : "")))).then((hits) => hits.find(Boolean) || "");

    const clipIds = Object.keys(STEP_CLIPS);
    Promise.all([
      firstHit(FULL_VIDEOS),
      firstHit(INTRO_CLIPS),
      Promise.all(clipIds.map((id) => firstHit(STEP_CLIPS[id]).then((url) => (url ? [id, url] : null)))),
      firstHit(CUES_SRC)
    ]).then(([full, intro, clipHits, cues]) => {
      fullVideoSrc = full;
      clipMap = {};
      clipHits.forEach((pair) => {
        if (pair) clipMap[pair[0]] = pair[1];
      });
      if (intro) clipMap.intro = intro;

      if (fullVideoSrc) attachVideo(fullVideoSrc);
      else if (intro) attachVideo(intro);
      else if (clipHits.some(Boolean)) attachVideo(clipHits.find(Boolean)[1]);

      if (!cues) return null;
      return window.fetch(cues, { cache: "no-store" }).then((res) => (res.ok ? res.json() : null));
    }).then((data) => {
      if (data && typeof data === "object") hostCues = data;
    }).catch(() => {
      /* Clips are optional. Stills stay up until Video Desk drops files. */
    });
  }

  function preloadStills() {
    Object.values(STILLS).forEach((still) => {
      const img = new Image();
      img.src = still.src;
    });
  }

  els.start.addEventListener("click", start);
  els.next.addEventListener("click", next);
  els.reset.addEventListener("click", reset);
  renderIdle();
  preloadStills();
  loadHost();
})();
