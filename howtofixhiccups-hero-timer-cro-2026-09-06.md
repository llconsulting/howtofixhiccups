# howtofixhiccups — hero → timer CRO (light)

**Date:** 2026-09-06  
**Revised:** 2026-09-06 per Skeptic KEEP WITH FIXES + recheck-2 narrow patch. Do not merge PR27 as ship. No implement.  
**Walk (original):** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**Scope:** hero → Start → timer/hold only.  
**Locks:** No implement without CoS. No merge/deploy/spend. Skeptic veto on fight-the-prove. No Callie. Faceless naming. No invented rates or traffic.

Skeptic NOW (recheck-2, deploy `6a9dde8cb6a94d00081d1d85`): live hold is v2 `03-hold-30.mp4` (~30.08s, loop off). Live `CLIPS.idle` is `[]` (stills). Live hero `data-src` is CoS-clean `hero-loop/thin-straw-loop-3s.mp4` (~3.00s). Live step 4 is CoS-clean v2 `04-thin-straw-exhale.mp4`. Do not treat prior idle `start.mp4` / 10s hold-loop / old 10s `slow-exhale` hero as current live src.

## 1. Hero Start → method

**KEEP as finding (not implement-now).**

Hero Start is the first Start. It does not start the method.

- URL: `/` hero. Control: `<a class="btn" href="#method">Start</a>`.
- Evidence: tap scrolls to `#method` and focuses `#start-btn`. Card stays idle until `#start-btn` calls `beginStep(0)`.
- Two Starts on first paint: hero jump + card Start. Same finding, not a second rebuild.

## 2. Hero plate under the first Start

**KEEP as do-not-ship-this-loop on the old looping 10s `slow-exhale` path. CUT glitchy AI-morph / 4s ship-a-new-loop only.**

- Live hero plate (NOW): `#hero-video` `loop` + `data-src="/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-3s.mp4"` (~3.00s). CoS QC later PASS’d this clean 3s hero. **Do not re-CUT it.**
- Old `/media/video/hero/slow-exhale.mp4` is a revert lock only: do not put the old 10s looping exhale back under the first Start. Do not treat it as the live `data-src`.
- CUT / VETO: glitchy AI-morph hero-loop takes, and `thin-straw-loop-4s.mp4` (404 / do not ship).
- Do **not** treat HTML “slow-exhale KEEP” as a ship item for the old 10s loop.
- Do **not** recommend morph takes from this file. A clean 3s loop is already allowed separately from CoS.

## 3. Timer / hold path (current)

**Stale hold-loop P0: CUT.**

- Live hold is a ~30s file with loop off. Old `ugc-motion` 10s hold loop is not the live src.
- KEEP as revert lock only: if someone reverts to a 10s hold under a 30s ring, the duration lie returns. Not a live P0.
- Timer wrap stays hidden until the hold beat. KEEP.
- Blow / step 4 (NOW): CoS-clean v2 `04-thin-straw-exhale.mp4`. **Do not re-CUT clean step-4.** Do not open a step-4 sprint from this file. Old prior `thin-straw-exhale.mp4` ~10s loop is a note only if it returns as src.

## 4. Prove stand-down

**KEEP.**

- Mid-hold **Copy link** (`#share-btn`, hold `copyLink: true`) stays. Do not treat as a rebuild item.
- Fight-the-prove stand-down: no Share-on-hold implement, no competing mid-hold CTA, no host-face demotion from this file.

## 5. What to keep (principles, not implement tickets)

- One Start that starts the runner, or do not say Start. Later CoS row only.
- Timer hidden until hold. Already true.
- File-per-step clips. Do not go back to one theater / `method-full`. Wiring class ≠ elite+merge-ready.
- Visitor-paced `I swallowed`. Do not rewrite the tap.
- Written steps if the picture fails.
- Faceless naming. No Callie.
- Exp1 Copy link on hold. Do not implement against it.
- CoS-clean 3s hero and CoS-clean step-4: allowed. Not re-CUT.

## 6. P0 / P1 (revised)

### P0

1. **Hero Start does not start.** Finding only. Jump + focus. Not implement-now from this file.  
   URL: https://deploy-preview-3--howtofixhiccups.netlify.app/

2. **Do not ship the old looping 10s slow-exhale under the first Start.** Do-not-ship-this-loop on that old path only. CUT glitchy AI-morph / 4s ship-a-new-loop. Do **not** re-CUT CoS-clean `thin-straw-loop-3s.mp4`.

### CUT (stale / activity)

- Hold clip loops under the 30s count as a live P0.
- Idle `start.mp4` loops beside the real Start as a current P1.
- Breath ~5s loop as a current P1 sprint.
- Ship of glitchy AI-morph hero-loop takes or the 4s loop.
- Re-CUT of CoS-clean 3s hero or CoS-clean step-4.
- KEEP of old looping 10s `slow-exhale.mp4` as product.

### P1

1. **Two Starts on first paint.** Finding only. Same as P0.1. Not implement-now.

Out of scope / stand-down: Share-on-hold implement, host-face demotion, skip/back chrome, swallow-tap rewrite, rates, spend, PR3/PR27 merge-as-ship.

## 7. Metrics

Not in the current record.
