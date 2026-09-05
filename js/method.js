(() => {
  const CIRCUMFERENCE = 339.292;

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
      nextLabel: "I swallowed",
    },
    {
      id: "inhale2",
      kicker: "Step 2 of 4",
      label: "Second breath on top",
      copy: "Take another breath in on top of the first. Then swallow.",
      kind: "guided",
      inhaleMs: 5000,
      swallowMs: 2800,
      swallowCopy: "Swallow now.",
      nextLabel: "I swallowed",
    },
    {
      id: "hold",
      kicker: "Step 3 of 4",
      label: "Hold",
      copy: "Hold for 30 full seconds. Stay as still as you can.",
      kind: "count",
      durationMs: 30000,
      unit: "seconds",
    },
    {
      id: "exhale",
      kicker: "Step 4 of 4",
      label: "Thin straw blow",
      copy: "Slowly blow out as through the tiniest straw.",
      kind: "count",
      durationMs: 10000,
      unit: "seconds",
    },
    {
      id: "extra",
      kicker: "If you can",
      label: "Keep the thin stream going",
      copy: "Twelve to fifteen seconds if you still have a gentle stream of air.",
      kind: "count",
      durationMs: 5000,
      unit: "seconds",
      optional: true,
    },
  ];

  const els = {
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
  };

  if (!els.start || !els.timer) return;

  let raf = 0;
  let stepIndex = -1;
  let startedAt = 0;
  let durationMs = 0;
  let swallowAt = 0;
  let running = false;

  function announce(text) {
    els.live.textContent = "";
    window.requestAnimationFrame(() => {
      els.live.textContent = text;
    });
  }

  function setProgress(fraction, tone) {
    const clamped = Math.min(1, Math.max(0, fraction));
    els.progress.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - clamped));
    els.timer.classList.toggle("is-hold", tone === "hold");
    els.timer.classList.toggle("is-exhale", tone === "exhale" || tone === "extra");
  }

  function renderIdle() {
    running = false;
    stepIndex = -1;
    els.kicker.textContent = "Callie's method";
    els.label.textContent = "Ready when a hiccup shows up";
    els.copy.textContent =
      "Start guides the sequence: deep breath in and swallow, second breath on top and swallow, a 30-second hold, then a thin 10-second blow.";
    els.count.textContent = "30";
    els.unit.textContent = "second hold ahead";
    setProgress(0, "");
    els.start.hidden = false;
    els.next.hidden = true;
    els.reset.hidden = true;
    els.extraNote.hidden = true;
  }

  function finish() {
    running = false;
    window.cancelAnimationFrame(raf);
    els.kicker.textContent = "That's the sequence";
    els.label.textContent = "You can rest";
    els.copy.textContent =
      "If hiccups are still there, you may try the sequence once more. If they linger, keep coming back, or arrive with other symptoms, talk to a clinician.";
    els.count.textContent = "✓";
    els.unit.textContent = "done";
    setProgress(1, "exhale");
    els.start.hidden = true;
    els.next.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Start over";
    els.extraNote.hidden = true;
    announce("Sequence finished.");
  }

  function beginStep(index) {
    stepIndex = index;
    const step = STEPS[index];
    if (!step) {
      finish();
      return;
    }

    running = true;
    startedAt = performance.now();
    els.kicker.textContent = step.kicker;
    els.label.textContent = step.label;
    els.copy.textContent = step.copy;
    els.start.hidden = true;
    els.reset.hidden = false;
    els.reset.textContent = "Reset";
    els.extraNote.hidden = !(step.id === "exhale" || step.optional);

    if (step.kind === "guided") {
      durationMs = step.inhaleMs + step.swallowMs;
      swallowAt = step.inhaleMs;
      els.count.textContent = "in";
      els.unit.textContent = "breathe";
      els.next.hidden = false;
      els.next.textContent = step.nextLabel;
      setProgress(0, "");
      announce(`${step.label}. ${step.copy}`);
    } else {
      durationMs = step.durationMs;
      swallowAt = 0;
      els.next.hidden = Boolean(step.optional) === false;
      if (step.optional) {
        els.next.hidden = false;
        els.next.textContent = "I'm done";
      } else {
        els.next.hidden = true;
      }
      const seconds = Math.ceil(step.durationMs / 1000);
      els.count.textContent = String(seconds);
      els.unit.textContent = step.unit;
      setProgress(0, step.id);
      announce(`${step.label}. ${step.copy} ${seconds} seconds.`);
    }

    window.cancelAnimationFrame(raf);
    raf = window.requestAnimationFrame(tick);
  }

  function tick(now) {
    const step = STEPS[stepIndex];
    if (!step || !running) return;

    const elapsed = now - startedAt;
    const fraction = elapsed / durationMs;
    setProgress(fraction, step.id);

    if (step.kind === "guided") {
      if (elapsed >= swallowAt) {
        els.copy.textContent = step.swallowCopy;
        els.count.textContent = "now";
        els.unit.textContent = "swallow";
      } else {
        els.count.textContent = "in";
        els.unit.textContent = "breathe";
      }
      if (elapsed >= durationMs) {
        beginStep(stepIndex + 1);
        return;
      }
    } else {
      const remaining = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      els.count.textContent = String(remaining);
      if (elapsed >= durationMs) {
        beginStep(stepIndex + 1);
        return;
      }
    }

    raf = window.requestAnimationFrame(tick);
  }

  function start() {
    beginStep(0);
  }

  function next() {
    const step = STEPS[stepIndex];
    if (!step) return;
    if (step.optional) {
      finish();
      return;
    }
    beginStep(stepIndex + 1);
  }

  function reset() {
    window.cancelAnimationFrame(raf);
    renderIdle();
    announce("Sequence reset.");
  }

  els.start.addEventListener("click", start);
  els.next.addEventListener("click", next);
  els.reset.addEventListener("click", reset);
  renderIdle();
})();
