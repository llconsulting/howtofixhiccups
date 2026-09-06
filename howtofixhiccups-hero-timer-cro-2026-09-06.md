# howtofixhiccups — hero → timer CRO (light)

**Date:** 2026-09-06  
**Walk:** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**Scope:** hero → Start → timer/hold only.  
**Locks:** No implement without CoS. No merge/deploy/spend. Skeptic veto on fight-the-prove. No Callie. Faceless naming. No invented rates or traffic.

Web mapping (filed, not re-audited): idle `start.mp4` autoplays with Start-here captions; hold `hold.mp4` ~10s loops under 30s UI; breath clips ~5s vs visitor-paced swallow. File-per-step wiring OK. Felt match NO.

## 1. Does idle/hero looping video delay or confuse Start?

**Yes.**

Hero Start is the first Start. It does not start the method.

- URL: `/` hero. Control: `<a class="btn" href="#method">Start</a>`.
- Walk: tap scrolled to `#method`. Card still idle (`The method` / `Start` / `#start-btn`). No Step 1. No timer.
- Only `#start-btn` calls `beginStep(0)`.

Hero plate loops the end of the method under that first Start.

- `#hero-video` is `loop` + `data-src="/media/video/hero/slow-exhale.mp4"` (10.04s). HTML: compressed from `ugc-live/host-exhale.mp4`.
- Walk: pursed-lip / O-mouth blow cycles behind H1 + hero Start while copy says four steps / Start.
- CoS: hero exhale-loop on the path into the timer.

Studio idle is a second loop next to the real Start.

- `playClip("idle")` → `/media/video/ugc-motion-2026-09-06/start.mp4` (5.04s, `loop = true`). Figcaption: `Follow along.`
- Filed: burned-in `Start here · Breathe easy`. This walk’s host-frame crop showed lower face only; lower-third not readable. Mapping not re-opened.

Two Starts on first paint. First Start is a jump. Looping exhale reads as already in the method.

## 2. Does hold/exhale loop under the countdown kill trust mid-method?

**Hold: yes (duration lie). Blow: closer, still a loop.**

- Hold URL: `/` after two `I swallowed` taps. Copy: `Stay still for all 30 seconds.` Ring counts 30.
- Clip: `hold.mp4` 10.04s, `loop = true`. Restarts ~3× while the honest count is still running.
- Filed: felt match NO. Pack STATUS: hold is Kling ~10s, not a padded 30.
- Walk: face stays in a hold pose; clip length ≠ the ring. Trust break is the seam / restart.

- Blow: `thin-straw-exhale.mp4` 10.04s under a 10s ring (length match). Same file loops again on the optional extra 5s. Walk: O-mouth blow at Step 4 with the count on.

Do not treat mid-hold Copy link as a rebuild item. Present (`copyLink: true`). Skeptic veto / fight-the-prove stand-down.

## 3. What the rebuild must keep for a clean hero → Start → timer path

Keep:

- One Start that starts the runner (`#start-btn` / `beginStep(0)`). Hero Start must be that action, or must not say Start.
- Timer hidden until the hold beat. Already true.
- File-per-step clips. Wiring OK. Do not go back to one theater / `method-full`.
- Visitor-paced `I swallowed`. Not a rebuild ticket.
- Written steps if the picture fails.
- Faceless naming. No Callie.
- Exp1 Copy link on hold. Do not implement against it.

If a hero plate stays: idle / ready still. Not a looping exhale under the first Start.

If a hold clip stays: one motion that lasts the 30s count, or a still. Do not loop a 10s hold under a 30s honest ring.

## 4. P0 / P1

### P0

1. **Hero Start does not start.**  
   URL: https://deploy-preview-3--howtofixhiccups.netlify.app/  
   Evidence: hero `Start` = `#method` jump. Walk: idle card still showing Start. Sequence starts only from `#start-btn`.

2. **Hero loops exhale under the first Start.**  
   Same URL, `#hero-video`.  
   Evidence: `slow-exhale.mp4` 10.04s loop from host-exhale. Walk: blow face behind Start. End-state on the entry.

3. **Hold clip loops under the 30s count.**  
   Same URL, Step 3.  
   Evidence: `hold.mp4` 10.04s + `loop`. UI 30s. Filed felt match NO.

### P1

1. **Two Starts.** Hero jump + card start on one first screen.
2. **Idle `start.mp4` loops beside the real Start** (filed Start-here captions; crop hid them on this walk).
3. **Breath clips ~5s loop vs visitor-paced swallow** (filed; not re-mapped).

Out of scope / stand-down: Share-on-hold implement, host-face demotion, skip/back chrome, swallow-tap rewrite, rates, spend.

## 5. Metrics

Not in the current record.
