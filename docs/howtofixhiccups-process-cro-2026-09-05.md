# howtofixhiccups — process CRO (pass only)

**Date:** 2026-09-05 (walked 2026-09-06)  
**Preview walked:** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**Surfaces:** `/` method card + timer + host clip. `/why/` and `/when/` have no runner.

This is a process pass only. No growth, outbound, or copy deck. No invented rates.

## What works

- One primary **Start** in the method card. Label is short. On a 390-wide phone the card sits above the host still, so the first method tap is not buried under the face.
- Once Start is tapped, the runner is sequential: swallow 1 → swallow 2 → 30s hold → 10s thin blow → optional extra 5s. Written list under the studio matches that order and forbids extras (no water, no spoon).
- Timer stays hidden on swallows. On hold/blow it is a large seconds ring. That is an assist for the long beats.
- Host clip is parallel (`playsinline`, muted, `preload="none"`). Caption: “A parallel demo. The written steps below work if the picture does not load.” It does not sit on the tap targets.
- Faceless naming holds on this preview: no “Callie” in page copy, titles, or schema. The sequence is **the method** / four steps.

## What still blocks it (P0 / P1)

### P0 — Start does not start the four beats

**URL:** `/` (idle method card)

**Evidence:** Card copy is “Press Start if you want the page to keep time.” Helper under the button: “30 second hold ahead.” The four beats are not on that card. They begin in “The method” list *below* the studio (and below the host still on mobile). Hero links **Why hiccups start** and **When to stop** sit between the headline and Start. First tap is framed as optional timekeeping for a hold, not as swallow → hold → blow.

A hiccuping visitor can tap Start expecting a 30s clock, or skip Start and try to run the list without a pace.

### P0 — Swallow → hold is gated by a mid-breath tap

**URL:** `/` after Start (`#start-btn` → `#next-btn`)

**Evidence:** Both swallow beats are `kind: "guided"` with no countdown. The only advance is **I swallowed** (disabled ~280ms, then required). Step 2 copy is “Another breath on top” / “Swallow completely.” The 30s ring stays `hidden` until that second tap. Hold and blow then auto-advance; the only other control is **Stop**, which resets to idle.

While stacking the second breath, the visitor must find and tap a button to start the hold clock. Miss it and they are not in the hold. Stop throws away the pass. That is a gate, not an assist.

### P1 — Host face is the first studio visual on desktop

**URL:** `/` ≥860px (`.studio` grid: host | method)

**Evidence:** Idle still is a named-looking young woman (`host-idle.webp`, alt: “Young woman with brown hair and green eyes smiling…”). On desktop the face is the left column. On mobile the still is under the card (secondary). Clip files exist and swap on step change; they do not block taps. They still compete with Start on first paint at desktop width.

### P1 — Hold/blow clock cannot continue after a miss

**URL:** `/` hold and blow states

**Evidence:** Count steps hide **I swallowed**. No skip, no back-one-beat, no “now blow.” **Stop** is the only control and it calls `renderIdle()`. Finish still labels that control **Stop** (not a restart). Extra optional 5s is the only beat with **I'm done**.

The ring assists a clean hold. It gates recovery. A blown swallow or a lightheaded pause cannot continue to blow without a full restart.

## Rebuild must-fix (clean process pass)

1. **First tap = start the method.** Put Start above Why/When. Label it as starting the sequence, not “keep time.” Drop “30 second hold ahead” from idle.
2. **Show swallow → stack-swallow → hold 30 → blow 10 on the Start card.** The list below the fold cannot be the first time the four beats appear.
3. **Do not require a confirmation tap on a stacked breath to start the hold clock.** Voice the two swallows; start the 30s ring when the hold beat begins. One Start tap should be enough to enter the sequence.
4. **Timer assists, it does not own the pass.** Keep the 30s/10s rings on hold/blow. Stop must not be the only way off a beat, and must not be the finish label. Preview the next beat on the card.
5. **Video stays secondary.** Method card and Start first; host clip beside or below, never the first visual that delays the tap. Written steps remain usable if the picture fails.
6. **Keep faceless naming.** “The method.” No Callie.

## Metrics

Not in the current record.
