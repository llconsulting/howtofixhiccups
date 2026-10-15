# howtofixhiccups hero → timer CRO skeptic recheck 2 (KEEP/CUT only)

Date: 2026-09-06
Role: Skeptic. KEEP/CUT recheck 2 only. No rewrite. No implement. No merge. No publish. No spend. No Mike ping.
Claimed revised target: `howtofixhiccups-hero-timer-cro-2026-09-06.md` after Conversion Analyst said the revise NOW landed.
File actually read: Docs PR27 `howtofixhiccups-hero-timer-cro-2026-09-06.md` on `cursor/hero-timer-cro-8407` @ `36afdb7e7b1075a88a788ed7874d62dfad987bb5` (2026-09-06 21:46:17Z). Head confirmed. Not newer.
Prior recheck FAIL list: `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2026-09-06.md` on Docs PR29 (`cursor/hero-timer-cro-recheck-5412` @ `397911d`). Verdict was KEEP WITH FIXES. Implement NO. Merge NO. Score on `7c8715b`: 3 PASS / 4 FAIL.
Prior skeptic: `docs/howtofixhiccups-hero-timer-cro-skeptic-2026-09-06.md` on Docs PR28.
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/ (deploy `6a9dde8cb6a94d00081d1d85`). Newer than the prior recheck deploy `6a9ddc8444e33d000826f16a`.

This file is keep/cut only. Do not implement it. Do not merge PR27 as ship. Do not merge PR3. Do not treat "claimed applied" as enough without quotes.

## Locks

- Implement gate NO.
- Merge gate NO.
- $0. No spend.
- No Mike ping.
- Fight-the-prove stand-down. Copy link stays. Share-on-hold stays. No competing mid-hold CTA.
- CoS QC later PASS'd clean step-4 + 3s hero. Do not re-CUT those if the revised CRO already allows a clean 3s hero / clean step-4. Only CUT the glitchy AI-morph loop / ship-a-new-loop theater. Do-not-ship-this-loop on the old slow-exhale stays.
- No Callie. No invented rates.

## Verdict

**Overall: KEEP WITH FIXES**
**Implement gate: NO**
**Merge gate: NO**
**Elite+clear+merge-ready after restart?: NO**

The claimed revise landed in PR27 file text @ `36afdb7`. Prior FAIL rows (stale hold-loop P0.3, stale idle `start.mp4` P1.2, stale breath P1.3, P0.2 ship-a-new-loop) are cut as current tickets. Claimed KEEP rows still hold.

Do not upgrade to KEEP. The file's NOW crawl is one deploy behind. It still names live hero as `slow-exhale.mp4` ~10.04s. Live hero src is CoS-clean `hero-loop/thin-straw-loop-3s.mp4` (3.00s). It still says "v2 04 stays skipped (glitchy)". Live step 4 is CoS-clean `04-thin-straw-exhale.mp4`. Blanket CUT of `hero-loop/thin-straw-loop-*` re-CUTs the CoS-clean 3s. That is the remaining file-text fix.

This note is not a rebuild ticket. Do not implement. Do not merge PR27 as ship. Do not merge PR3. Do not spend. Do not ping Mike.

## What was readable (not rubber-stamped)

- `docs/howtofixhiccups-hero-timer-cro-2026-09-06.md`: absent on `main`.
- `/workspace/louislynn-os/hiccups-site/`: path does not exist in this workspace. Repo not reachable from this token.
- PR27 head: `36afdb7e7b1075a88a788ed7874d62dfad987bb5`. Two commits. First was `7c8715b` (the file the prior recheck scored). Second overwrites the note. Head is `36afdb7`. No newer commit.
- PR29: prior recheck only. Does not rewrite the CRO.
- Scored file path on PR27: repo root `howtofixhiccups-hero-timer-cro-2026-09-06.md`. Not `docs/`.

File text is the gate for the claimed revise. Preview is only to check stale-vs-NOW and the CoS 3s / step-4 lock.

## Live NOW (newer deploy than prior recheck)

Recorded 2026-09-06 21:48 UTC. GET plus `ffprobe`. Not a site rewrite. Not a rubber stamp of PR27.

- URL: https://deploy-preview-3--howtofixhiccups.netlify.app/
- Deploy id: `6a9dde8cb6a94d00081d1d85` (`data-netlify-deploy-id`)
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus a second `X-Robots-Tag: noindex`
- Hero Start: `<a class="btn" href="#method">Start</a>`. JS `preventDefault`, `scrollIntoView` `#method`, focus `#start-btn`. Does not call `beginStep(0)`. Only `#start-btn` starts the runner.
- Hero plate: `#hero-video` `loop` + `data-src="/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-3s.mp4"`. GET 200, 1614688 bytes, `ffprobe` 3.00s. HTML comment: "Hero plate is hero-loop/thin-straw-loop-3s.mp4 (official v2, uncaptioned mid-cut of clean 04). Do not ship the 4s loop."
- Old path `/media/video/hero/slow-exhale.mp4` still GET 200, now `ffprobe` 3.00s / 195852 bytes. Not the live `data-src`. Poster still `slow-exhale.jpg`.
- 4s loop `/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-4s.mp4` GET 404. Do not ship it.
- Live `CLIPS`: idle `[]`. inhale1/2 = v2 `01`/`02`. hold = v2 `03-hold-30.mp4` GET 200, 18797271 bytes, `ffprobe` 30.08s. `els.video.loop = id !== "hold"`. exhale/extra = v2 `04-thin-straw-exhale.mp4` GET 200, 5910482 bytes, `ffprobe` 10.04s. JS header: "Exhale is clean 04. Skip hero-loop/thin-straw-loop-4s."
- Old `ugc-motion-2026-09-06/hold.mp4` and `start.mp4` still 200. Not live src.
- `#share-btn` still in `#timer-wrap`. Hold `copyLink: true`. Label "Copy link". Intact.
- `/` `/why/` `/when/` `/privacy/`: Callie count 0.
- CoS QC later PASS'd this clean 3s hero and clean step-4. This recheck does not re-CUT them. Wiring is not elite+merge-ready. Restart still in flight. Merge gate stays NO.

## Claimed applied (verify in file text @ 36afdb7)

| Claimed | Result | File text | Live |
| --- | --- | --- | --- |
| KEEP: hero Start is a `#method` jump | PASS | §1: `Control: <a class="btn" href="#method">Start</a>.` `tap scrolls to #method and focuses #start-btn.` P0.1: `Finding only. Jump + focus. Not implement-now from this file.` | True NOW. Jump + focus. Sequence does not start. |
| KEEP: fight-the-prove stand-down / Copy link | PASS | §4: `Mid-hold Copy link (#share-btn, hold copyLink: true) stays.` `no Share-on-hold implement, no competing mid-hold CTA` | True NOW. `#share-btn` present. `copyLink: true` on hold. |
| KEEP: no Callie | PASS | Locks + §5: `No Callie. Faceless naming.` | Four pages Callie 0. |
| KEEP: no invent rates | PASS | Locks: `No invented rates or traffic.` §7: `Not in the current record.` | No rates invented in the file. |
| CUT: stale hold-loop P0 as current ticket | PASS | §3: `Stale hold-loop P0: CUT.` `KEEP as revert lock only... Not a live P0.` CUT list: `Hold clip loops under the 30s count as a live P0.` No P0.3 in the P0 list. | Still true. Live hold is v2 `03-hold-30.mp4` 30.08s, loop off. |
| CUT: stale idle `start.mp4` as current P1 | PASS | Header: `Live CLIPS.idle is [] (stills). Do not treat prior idle start.mp4 ... as current tickets.` CUT list: `Idle start.mp4 loops beside the real Start as a current P1.` No P1.2. | Still true. Live `CLIPS.idle` is `[]`. |
| CUT: P1.3 breath ~5s loop as current P1 | PASS | CUT list: `Breath ~5s loop as a current P1 sprint.` No P1.3. | Do not re-CUT clean step-4. Live step 4 is CoS-clean v2 04. This CUT is the stale breath ticket only. |
| P0.2 narrowed to do-not-ship-this-loop only; CUT ship-a-new-loop / glitchy AI-morph | PASS as the prior must-fix. Too wide now. | §2: `KEEP as do-not-ship-this-loop. CUT as ship-a-new-loop.` `Do not ship this loop. Do not replace it with v2 hero-loop/thin-straw-loop-* (AI morph; skipped/glitchy). Do not treat HTML "slow-exhale KEEP" as a ship item.` Also: `A 3s clean loop may land separately from CoS.` P0.2: `Do-not-ship-this-loop only. CUT ship-a-new-loop / AI-morph hero-loop.` | Old 10s slow-exhale is not the live src. Live hero is CoS-clean 3s `thin-straw-loop-3s.mp4`. Blanket `hero-loop/thin-straw-loop-*` CUT hits that file. 4s loop 404. Do not ship 4s. Do not re-CUT the 3s. |

Claimed KEEP rows stay. Claimed CUT of the prior FAIL tickets landed in the file. The leftover is width plus stale NOW, not a missing revise.

## Prior FAIL → PASS/FAIL

From `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2026-09-06.md`. Checked in PR27 @ `36afdb7`, not `7c8715b`.

| # | Prior must-fix | Prior | Now | Why |
| --- | --- | --- | --- | --- |
| M1 | Keep hero-Start-is-a-jump as a finding. Do not implement it from this file. | PASS as finding | PASS | File still records the jump. P0.1: `Finding only... Not implement-now from this file.` Implement gate stays NO. |
| M2 | Keep fight-the-prove stand-down. Copy link / Share-on-hold stay. | PASS | PASS | §4 leaves Copy link / Share-on-hold alone. Live button intact. |
| M3 | Cut stale hold-loop as a current P0. Keep only as a revert lock. | FAIL | PASS | §3: `Stale hold-loop P0: CUT.` `KEEP as revert lock only.` `Not a live P0.` P0.3 gone from the P0 list. |
| M4 | Cut stale idle `start.mp4` loop as a current P1. | FAIL | PASS | Header plus CUT list remove it as a current P1. Live idle is stills. |
| M5 | Cut P1.3 breath-clip ~5s loop as a current P1 (filed, not re-mapped). | FAIL | PASS | CUT list: `Breath ~5s loop as a current P1 sprint.` Not in P1. This is not a CUT of CoS-clean step-4. |
| M6 | P0.2 / R8: KEEP as do-not-ship-this-loop only. CUT as ship-a-new-loop. Explicit CUT of glitchy v2 AI-morph `hero-loop/*`. CUT HTML "slow-exhale KEEP" as a ship item. | FAIL | PASS as written. Narrow now. | Do-not-ship-this-loop language is in §2 and P0.2. HTML "slow-exhale KEEP" is named as not a ship item. Glitchy AI-morph CUT is in the file. The file also allows `A 3s clean loop may land separately from CoS.` Do not read M6 as a CUT of that CoS 3s. |
| M7 | Implement gate NO. Merge gate NO. $0. No Mike. | PASS | PASS | File header: `Do not merge PR27 as ship. No implement.` Locks: `No merge/deploy/spend.` This recheck same. |

Score: 7 PASS / 0 FAIL on the prior list. That is not a KEEP upgrade. New must-fixes below.

## New must-fixes

File-text only. Not implement. Not merge.

1. Stop listing live hero as `/media/video/hero/slow-exhale.mp4` ~10.04s. That mapping is not the live `data-src`. Keep do-not-ship-this-loop only on the old slow-exhale loop. If a sentence stays, it is a revert lock: do not put the old 10s looping exhale back under the first Start.
2. Narrow the `hero-loop/thin-straw-loop-*` CUT. CUT the glitchy AI-morph / 4s / ship-a-new-loop theater. Do not re-CUT CoS-clean `thin-straw-loop-3s.mp4`. The file already allows `A 3s clean loop may land separately from CoS.` Keep that allow. Do not recommend morph takes from this file.
3. Remove `v2 04 stays skipped (glitchy)` as a current line. CoS QC later PASS'd clean step-4. Live `CLIPS.exhale` is v2 `04-thin-straw-exhale.mp4`. Do not open a step-4 sprint from this file. Do not re-CUT clean step-4. Old prior `thin-straw-exhale.mp4` ~10s loop stays a note only if it returns as src.

Until those three land, this stays KEEP WITH FIXES. The prior FAIL list is closed. This is new stale-vs-NOW plus over-CUT width.

## What stays KEEP (unchanged)

- F1 / P0.1: hero Start does not start the method. True NOW. Finding only.
- F4 / P1.1: two Starts on first paint. Same finding as F1, not a second rebuild.
- F7 / R7 / S1: prove stand-down. Copy link stays.
- R2: timer hidden until hold. Already true.
- R3: file-per-step as a principle. Not "wiring OK" as elite.
- R4: visitor-paced `I swallowed`. Not a rebuild ticket.
- R6: no Callie.
- Metrics: not in the current record.
- CoS-clean 3s hero and CoS-clean step-4. Allowed. Not re-CUT.
- Do-not-ship-this-loop on the old slow-exhale.

## What stays CUT / VETO

- Use this CRO (or this recheck) as implement / merge / spend authorize.
- Ship the glitchy v2 AI-morph hero-loop. Ship the 4s loop.
- Keep the old looping 10s `slow-exhale.mp4` as product.
- Treat stale hold-loop or stale idle `start.mp4` as live P0/P1.
- Re-CUT CoS-clean 3s hero or CoS-clean step-4.
- Fight the prove. Remove Copy link. Add a competing mid-hold CTA.
- Merge PR27 as ship. Merge PR3. Publish. Spend. Ping Mike.

## Vs fight-the-prove

CRO still does not fight the prove. That KEEP stands.

VETO any later read that removes Share-on-hold, hides Copy link, or adds a competing mid-hold CTA.

Do not implement this CRO to "prepare" prove. Prove stays on the preview as it stands.

## Vs excellence restart / PR3 merge

v2 01-04 and the 3s hero are on the preview. CoS QC later PASS'd clean step-4 + 3s hero. That is clip QC. It is not CoS elite+merge-ready. Restart still in flight.

PR27 is one markdown file. Merging it does not ship a site fix and does not clear PR3. Merge gate stays NO.

Do not merge PR3. Do not merge PR27 as ship.

## Soft-sell / theater

The claimed revise is real this time. File text changed. That is progress on the prior FAIL list.

The leftover theater is treating PR27 @ `36afdb7` as current NOW. It still sells a 10s slow-exhale hero and a skipped glitchy 04. Live is the CoS 3s + clean 04. Activity if someone ships a new loop from that stale map. Progress if they only keep do-not-ship-this-loop on the old file.

No invented rates. That KEEP stands.

## Spend

$0.

Do not implement the CRO.
Do not implement this recheck.
Do not implement until CoS.
Do not merge PR27 as ship.
Do not merge PR3.
Do not publish.
Do not spend.
Do not ping Mike.
Do not ship the glitchy AI-morph hero-loop or the 4s loop.
Do not KEEP the old looping 10s slow-exhale as a ship item.
Do not re-CUT the CoS-clean 3s hero.
Do not re-CUT CoS-clean step-4.
