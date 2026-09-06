# howtofixhiccups — hero → timer CRO (light)

**Date:** 2026-09-06  
**Revised:** 2026-09-06 per Skeptic KEEP WITH FIXES. Do not merge PR27 as ship. No implement.  
**Walk (original):** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**Scope:** hero → Start → timer/hold only.  
**Locks:** No implement without CoS. No merge/deploy/spend. Skeptic veto on fight-the-prove. No Callie. Faceless naming. No invented rates or traffic.

Skeptic NOW crawl (2026-09-06): deploy `6a9ddc8444e33d000826f16a`. Live hold is v2 `03-hold-30.mp4` (~30.08s, loop off). Live `CLIPS.idle` is `[]` (stills). Do not treat prior idle `start.mp4` / 10s hold-loop mapping as current tickets.

## 1. Hero Start → method

**KEEP as finding (not implement-now).**

Hero Start is the first Start. It does not start the method.

- URL: `/` hero. Control: `<a class="btn" href="#method">Start</a>`.
- Evidence: tap scrolls to `#method` and focuses `#start-btn`. Card stays idle until `#start-btn` calls `beginStep(0)`.
- Two Starts on first paint: hero jump + card Start. Same finding, not a second rebuild.

## 2. Hero plate under the first Start

**KEEP as do-not-ship-this-loop. CUT as ship-a-new-loop.**

- `#hero-video` is `loop` + `data-src="/media/video/hero/slow-exhale.mp4"` (~10.04s) on the path into the timer.
- Defect: looping exhale / blow face under the first Start reads as already in the method.
- Do **not** ship this loop. Do **not** replace it with v2 `hero-loop/thin-straw-loop-*` (AI morph; skipped/glitchy). Do **not** treat HTML “slow-exhale KEEP” as a ship item.
- If a hero plate stays: idle / ready **still**. Not a looping exhale. Stills remint owns any clean exhale. A 3s clean loop may land separately from CoS — do not recommend morph takes from this file.

## 3. Timer / hold path (current)

**Stale hold-loop P0: CUT.**

- Live hold is a ~30s file with loop off. Old `ugc-motion` 10s hold loop is not the live src.
- KEEP as revert lock only: if someone reverts to a 10s hold under a 30s ring, the duration lie returns. Not a live P0.
- Timer wrap stays hidden until the hold beat. KEEP.
- Blow: prior `thin-straw-exhale.mp4` ~10s may still loop on non-hold / extra. KEEP as note only. Not P0. Do not spend. v2 04 stays skipped (glitchy).

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

## 6. P0 / P1 (revised)

### P0

1. **Hero Start does not start.** Finding only. Jump + focus. Not implement-now from this file.  
   URL: https://deploy-preview-3--howtofixhiccups.netlify.app/

2. **Hero loops exhale under the first Start.** Do-not-ship-this-loop only. CUT ship-a-new-loop / AI-morph hero-loop.  
   Same URL, `#hero-video` / `slow-exhale.mp4`.

### CUT (stale / activity)

- Hold clip loops under the 30s count as a live P0.
- Idle `start.mp4` loops beside the real Start as a current P1.
- Breath ~5s loop as a current P1 sprint.
- Any ship of glitchy AI-morph `hero-loop/*` or KEEP of current looping exhale as product.

### P1

1. **Two Starts on first paint.** Finding only. Same as P0.1. Not implement-now.

Out of scope / stand-down: Share-on-hold implement, host-face demotion, skip/back chrome, swallow-tap rewrite, rates, spend, PR3/PR27 merge-as-ship.

## 7. Metrics

Not in the current record.
