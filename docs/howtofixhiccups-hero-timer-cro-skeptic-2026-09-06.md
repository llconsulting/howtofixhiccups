# howtofixhiccups hero → timer CRO skeptic (KEEP/CUT only)

Date: 2026-09-06
Role: Skeptic. KEEP/CUT only. No rewrite. No implement. No merge. No publish. No spend. No Mike ping.
Target: `howtofixhiccups-hero-timer-cro-2026-09-06.md` (Docs PR27, `cursor/hero-timer-cro-8407`)
CRO claimed walk: https://deploy-preview-3--howtofixhiccups.netlify.app/
This file: keep/cut only. Do not treat PR27 as ship.

## Locks

- No implement without CoS.
- Skeptic veto on fight-the-prove CRO. Do not remove Share-on-hold / Copy link. No competing mid-hold CTA.
- No Callie. Faceless. No invented rates or traffic.
- Excellence restart: step-faithful v2 clips still in flight. Merge gate stays NO until CoS elite+merge-ready after restart.
- Hero-loop from v2 is glitchy (AI morph). Stills is reminting a clean exhale. Do not KEEP a ship-the-glitchy-loop item.
- Prefer evidence over theater. Activity vs progress.

## Verdict

**Overall: KEEP WITH FIXES**
**Implement gate: NO**
**Merge gate: NO**
**Elite+clear+merge-ready after restart?: NO**

Keep the real hero-Start-is-a-jump row. Keep the prove stand-down. Cut stale hold/idle P0/P1. Cut any rec that ships the glitchy v2 hero-loop or keeps the current looping exhale as a ship item.

This note is not a rebuild ticket. Do not implement it. Do not merge PR27 as ship. Do not merge PR3. Do not spend. Do not ping Mike.

## Explicit CUT: ship-glitchy-hero-loop

CUT any recommendation that ships the v2 hero-loop.

- Live `js/method.js` already says skip `hero-loop/thin-straw-loop-*` (AI morph) and skip v2 `04-thin-straw-exhale` (glitchy).
- Those paths 404 on this preview. Do not wire them.
- Stills is reminting a clean exhale. A new loop is not the remint.
- CRO rec "if a hero plate stays: idle / ready still" is KEEP as a do-not-loop rule. It is not KEEP of the current `#hero-video` `slow-exhale.mp4` loop, and it is not KEEP of a replacement AI-morph loop.
- CUT reading P0.2 as "ship a better hero loop." P0.2 is a do-not-ship-this-loop finding only.

Do not KEEP a ship-the-glitchy-loop item.

## NOW crawl (not the CRO walk)

Recorded 2026-09-06 against the live preview. GET plus file probe. Not a rubber stamp of PR27.

- URL: https://deploy-preview-3--howtofixhiccups.netlify.app/
- Deploy id: `6a9ddc8444e33d000826f16a`
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus HTML `noindex, nofollow`
- Home /why/ /when/ /privacy/: Callie count 0
- Hero Start: `<a class="btn" href="#method">Start</a>`. JS preventDefault, `scrollIntoView` `#method`, focus `#start-btn`. Does not call `beginStep(0)`.
- Hero plate: `#hero-video` `loop` + `data-src="/media/video/hero/slow-exhale.mp4"`. File GET 200, 10.04s, 960x540. HTML comment still says "Higgsfield slow-exhale KEEP". That KEEP is a ship-the-loop item. CUT it.
- Live `CLIPS`: idle `[]` (stills). inhale1/2 = v2 `01`/`02`. hold = v2 `03-hold-30.mp4` (30.08s). exhale KEEP = prior `thin-straw-exhale.mp4` (10.04s).
- `els.video.loop = id !== "hold"`. Hold does not loop. Old `ugc-motion-2026-09-06/hold.mp4` (10.04s) is not the live src.
- `#share-btn` still in `#timer-wrap`. Hold `copyLink: true`. Label "Copy link". Intact.
- v2 clips are wired. They are not elite+merge-ready. Restart still in flight.

CRO P0.3 and P1.2 describe a prior mapping (idle `start.mp4` loop, hold 10s loop). That mapping is not the live src now. Cut those as current tickets.

## Per-item KEEP/CUT

| # | CRO item | Score | Why |
| --- | --- | --- | --- |
| F1 | Hero Start does not start the method. `href="#method"`. Only `#start-btn` calls `beginStep(0)`. | KEEP | True NOW. Jump + focus. Sequence does not start. Finding only. Not an implement ticket. |
| F2 | Hero plate loops exhale under the first Start (`slow-exhale.mp4` 10.04s). | KEEP as defect. CUT as ship-a-loop. | Loop is on the path NOW. End-state under Start. Do not KEEP shipping this loop. Do not replace it with v2 AI-morph `hero-loop/*`. Stills remints the clean exhale. |
| F3 | Studio idle is a second loop: `playClip("idle")` → `start.mp4` 5.04s `loop`. | CUT | Stale. Live `CLIPS.idle` is `[]`. Idle/done stay on stills. Old `start.mp4` is not a method step. |
| F4 | Two Starts on first paint. First Start is a jump. | KEEP | True NOW. Hero Start + card Start. Same finding as F1, not a second rebuild. |
| F5 | Hold `hold.mp4` 10.04s loops under a 30s ring. Duration lie. Felt match NO. | CUT as current P0. KEEP as revert lock. | Stale vs NOW. Live hold is v2 `03-hold-30.mp4` 30.08s, `loop` off. Old 10s file is not src. If someone reverts to the 10s loop, the lock returns. Not a live P0. |
| F6 | Blow length-matches 10s, still loops on the extra 5s. | KEEP as note. Not P0. | Live exhale KEEP is still prior `thin-straw-exhale.mp4` 10.04s. `loop` is on for non-hold. Extra reuses the same file. Do not spend on this. v2 04 stays skipped (glitchy). |
| F7 | Do not treat mid-hold Copy link as a rebuild item. Present. Fight-the-prove stand-down. | KEEP | Lock. Copy link stays. Share-on-hold stays. No competing mid-hold CTA. |
| R1 | One Start that starts the runner, or do not say Start. | KEEP as later CoS row. CUT as implement-now. | Real. Do not build it from this file. Restart and CoS first. |
| R2 | Timer hidden until the hold beat. Already true. | KEEP | True. Timer wrap stays hidden on idle and swallows. |
| R3 | File-per-step clips. Do not go back to one theater / `method-full`. | KEEP as principle. | Wiring class is file-per-step. v2 01-03 are in flight, not merge-ready. Do not treat "wiring OK" as elite. |
| R4 | Visitor-paced `I swallowed`. Not a rebuild ticket. | KEEP | True. Both swallows are `kind: "guided"`. Do not rewrite the tap. |
| R5 | Written steps if the picture fails. | KEEP | Real fallback. Not a sprint. |
| R6 | Faceless naming. No Callie. | KEEP | Live four pages Callie 0. Do not reintroduce Callie. Does not clear main. Does not flip merge. |
| R7 | Exp1 Copy link on hold. Do not implement against it. | KEEP | Veto lock. Prove control stays. |
| R8 | If a hero plate stays: idle / ready still. Not a looping exhale under the first Start. | KEEP as do-not-loop. CUT as keep-the-current-plate. | Matches CoS. Still, not a loop. CUT shipping v2 `hero-loop/*`. CUT HTML "slow-exhale KEEP" as a ship item. Stills remint owns the clean exhale. |
| R9 | If a hold clip stays: one motion that lasts the 30s count, or a still. Do not loop a 10s hold under a 30s ring. | KEEP as lock. CUT as current rebuild P0. | Principle is right. Live already moved to a 30s file. That file is still in-flight v2, not a merge authorize. |
| P0.1 | Hero Start does not start. | KEEP as finding. CUT as implement-now. | Same as F1. Record. Do not ship from PR27. |
| P0.2 | Hero loops exhale under the first Start. | KEEP as do-not-ship-this-loop. CUT as ship-a-new-loop. | Same as F2. Explicit CUT of glitchy v2 hero-loop. |
| P0.3 | Hold clip loops under the 30s count. | CUT | Stale vs NOW. See F5. Activity, not progress. |
| P1.1 | Two Starts. | KEEP as finding. CUT as implement-now. | Same as F4. |
| P1.2 | Idle `start.mp4` loops beside the real Start. | CUT | Stale vs NOW. See F3. |
| P1.3 | Breath clips ~5s loop vs visitor-paced swallow (filed, not re-mapped). | CUT as current P1. | Old pack mapping. Live v2 01 is 9.04s, still visitor-paced by tap. Restart still in flight. Do not open a breath-loop sprint from a filed, unrechecked row. |
| S1 | Out of scope: Share-on-hold implement, host-face demotion, skip/back chrome, swallow-tap rewrite, rates, spend. | KEEP | Correct stand-down. Do not add those tickets. |
| M1 | Metrics not in the current record. | KEEP | Honest. Do not invent rates or traffic. |
| X1 | Use this CRO as rebuild / implement / merge / spend authorize. | CUT / VETO | Implement gate NO. Merge NO. $0. No Mike ping. |
| X2 | Ship v2 `hero-loop/thin-straw-loop-*` or keep the current looping exhale as product. | CUT / VETO | Glitchy AI morph. Stills reminting a clean exhale. No ship-the-loop item survives. |

## Vs fight-the-prove

CRO does not fight the prove. Stand-down is real. Copy link is named and left alone.

KEEP that stand-down. VETO any later read that removes Share-on-hold, hides Copy link, or adds a competing mid-hold CTA.

Do not implement this CRO to "prepare" prove. Prove stays on the preview as it stands.

## Vs excellence restart / PR3 merge

PR25 merge YES is dead. Restart superseded it. v2 01-03 are on the preview. They are not CoS elite+merge-ready.

CRO "felt match NO" and "file-per-step wiring OK" are a mixed record. Wiring class is fine. Clip finish is not. Treating a mid-restart preview as a rebuild list is theater.

PR27 is one markdown file. Merging it does not ship a site fix and does not clear PR3. Merge gate stays NO.

Do not merge PR3. Do not merge PR27 as ship.

## Soft-sell / theater

No invented rates. Metrics line is honest. Scope header is honest.

The sell risk is the P0 list as a sprint. Two of three P0s are stale or are loop-ship bait. That is activity.

Hero Start as a jump is progress-grade evidence. Hold-loop-as-live-P0 is not.

## Spend

$0.

Do not implement the CRO.
Do not implement until CoS.
Do not merge PR27 as ship.
Do not merge PR3.
Do not publish.
Do not spend.
Do not ping Mike.
Do not ship the glitchy v2 hero-loop.
Do not KEEP the current looping exhale as a ship item.
