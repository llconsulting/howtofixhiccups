# howtofixhiccups hero → timer CRO skeptic recheck 3 (KEEP/CUT only)

Date: 2026-09-06
Role: Skeptic. KEEP/CUT recheck 3 only. No rewrite. No implement. No merge. No publish. No spend. No Mike ping.
Claimed revised target: `howtofixhiccups-hero-timer-cro-2026-09-06.md` after Conversion Analyst said the recheck-2 narrow patch landed.
File actually read: Docs PR27 `howtofixhiccups-hero-timer-cro-2026-09-06.md` on `cursor/hero-timer-cro-8407` @ `037fe9222670939a76643ad0b3f65a1f398bbd7a` (2026-09-06 21:52:27Z). Head confirmed via `git ls-remote origin refs/pull/27/head`. Not newer.
Prior recheck-2: `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2-2026-09-06.md` on Docs PR30 (`cursor/hero-timer-cro-recheck-2-ee60`). Verdict was KEEP WITH FIXES. Implement NO. Merge NO. Scored PR27 @ `36afdb7`. Prior FAIL list closed (7 PASS / 0 FAIL). New must-fixes: refresh NOW crawl to CoS-clean 3s hero + clean step-4; narrow blanket `hero-loop/*` CUT so it does not re-CUT `thin-straw-loop-3s.mp4`.
Prior recheck-1: `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2026-09-06.md` on Docs PR29.
Prior skeptic: `docs/howtofixhiccups-hero-timer-cro-skeptic-2026-09-06.md` on Docs PR28.
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/ (deploy `6a9ddf9bf75b070008fd62e3`). Newer than the recheck-2 deploy `6a9dde8cb6a94d00081d1d85`. Src map is the same: CoS-clean 3s hero + clean step-4.

This file is keep/cut only. Do not implement it. Do not merge PR27 as ship. Do not merge PR3. Do not treat "claimed applied" as enough without quotes.

Parent mirror path `/workspace/louislynn-os/hiccups-site/howtofixhiccups-hero-timer-cro-skeptic-recheck-3-2026-09-06.md` does not exist in this workspace. Repo not reachable from this token. This file is the complete markdown for that mirror.

## Locks

- Implement gate NO.
- Merge gate NO.
- $0. No spend.
- No Mike ping.
- Fight-the-prove stand-down. Copy link stays. Share-on-hold stays. No competing mid-hold CTA.
- CoS QC later PASS'd clean step-4 + 3s hero. Do not re-CUT them. CUT glitchy AI-morph / 4s / ship-a-new-loop only. Do-not-ship-this-loop on the old 10s slow-exhale stays.
- No Callie. No invented rates.

## Verdict

**Overall: KEEP**
**Implement gate: NO**
**Merge gate: NO**
**Elite+clear+merge-ready after restart?: NO**

The recheck-2 narrow patch landed in PR27 file text @ `037fe92`. Head is that commit. Not newer.

Prior must-fixes PASS. Recheck-2 new must-fixes PASS. No new fail that keeps KEEP WITH FIXES.

Claimed KEEP rows still hold (hero Start→`#method`; prove/Copy link; no Callie; no invent rates). AI-morph CUT is morph / 4s only. Old slow-exhale is revert lock only. CoS-clean 3s hero and CoS-clean step-4 are allowed. Not re-CUT.

KEEP is the file-text score. It is not implement. It is not merge. PR27 is still one markdown file. Do not merge it as ship. Do not merge PR3. Do not spend. Do not ping Mike.

## What was readable (not rubber-stamped)

- `docs/howtofixhiccups-hero-timer-cro-2026-09-06.md`: absent on `main`.
- `/workspace/louislynn-os/hiccups-site/`: path does not exist in this workspace. Repo not reachable from this token.
- PR27 head: `037fe9222670939a76643ad0b3f65a1f398bbd7a`. Three commits. Recheck-2 scored `36afdb7`. Third commit `037fe92` is the claimed narrow patch. `git ls-remote origin refs/pull/27/head` = `037fe92`. No newer commit.
- PR30: prior recheck-2 only. Does not rewrite the CRO.
- Scored file path on PR27: repo root `howtofixhiccups-hero-timer-cro-2026-09-06.md`. Not `docs/`.

File text is the gate for the claimed patch. Preview is only to check stale-vs-NOW and the CoS 3s / step-4 lock.

## Live NOW (newer deploy than recheck-2)

Recorded 2026-09-06 21:54 UTC. GET plus `ffprobe`. Not a site rewrite. Not a rubber stamp of PR27.

- URL: https://deploy-preview-3--howtofixhiccups.netlify.app/
- Deploy id: `6a9ddf9bf75b070008fd62e3` (`data-netlify-deploy-id`). File header still names recheck-2 deploy `6a9dde8cb6a94d00081d1d85`. Src map matches this deploy. Deploy-id lag is a note, not a fail.
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus a second `X-Robots-Tag: noindex`
- Hero Start: `<a class="btn" href="#method">Start</a>`. JS `preventDefault`, `scrollIntoView` on the card, focus `#start-btn`. Does not call `beginStep(0)`. Only `#start-btn` → `start()` → `beginStep(0)`.
- Hero plate: `#hero-video` `loop` + `data-src="/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-3s.mp4"`. GET 200, 1614688 bytes, `ffprobe` 3.00s. HTML comment: "Hero plate is hero-loop/thin-straw-loop-3s.mp4 (official v2, uncaptioned mid-cut of clean 04). Do not ship the 4s loop. Step 4 plays captioned 04-thin-straw-exhale.mp4."
- Old path `/media/video/hero/slow-exhale.mp4` still GET 200, `ffprobe` 3.00s / 195852 bytes. Not the live `data-src`. Poster still `slow-exhale.jpg`.
- 4s loop `/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-4s.mp4` GET 404. Do not ship it.
- Live `CLIPS`: idle `[]`. inhale1/2 = v2 `01`/`02`. hold = v2 `03-hold-30.mp4` GET 200, 18797271 bytes, `ffprobe` 30.08s. `els.video.loop = id !== "hold"`. exhale/extra = v2 `04-thin-straw-exhale.mp4` GET 200, 5910482 bytes, `ffprobe` 10.04s. JS header: "Exhale is clean 04. Skip hero-loop/thin-straw-loop-4s. Hero muted: hero-loop/thin-straw-loop-3s.mp4 only."
- Old `ugc-motion-2026-09-06/hold.mp4` (10.04s) and `start.mp4` (5.04s) still 200. Not live src.
- `#share-btn` still in `#timer-wrap`. Hold `copyLink: true`. Label "Copy link". Intact.
- `/` `/why/` `/when/` `/privacy/`: Callie count 0.
- CoS QC later PASS'd this clean 3s hero and clean step-4. This recheck does not re-CUT them. Wiring is not elite+merge-ready. Restart still in flight. Merge gate stays NO.

## Claimed applied (verify in file text @ 037fe92)

| Claimed | Result | File text | Live |
| --- | --- | --- | --- |
| NOW crawl refreshed: live hero CoS-clean `thin-straw-loop-3s` (3s); clean step-4 `04` | PASS | Header: `Live hero data-src is CoS-clean hero-loop/thin-straw-loop-3s.mp4 (~3.00s). Live step 4 is CoS-clean v2 04-thin-straw-exhale.mp4.` §2: `Live hero plate (NOW): #hero-video loop + data-src="/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-3s.mp4" (~3.00s).` §3: `Blow / step 4 (NOW): CoS-clean v2 04-thin-straw-exhale.mp4.` | True NOW on deploy `6a9ddf9bf75b070008fd62e3`. Hero `data-src` is that 3.00s file. `CLIPS.exhale` is v2 `04`. |
| AI-morph CUT = morph/4s only. Does not re-CUT the CoS-clean 3s | PASS | §2: `CUT glitchy AI-morph / 4s ship-a-new-loop only.` `CUT / VETO: glitchy AI-morph hero-loop takes, and thin-straw-loop-4s.mp4 (404 / do not ship).` `Do not re-CUT it.` P0.2: `CUT glitchy AI-morph / 4s ship-a-new-loop. Do not re-CUT CoS-clean thin-straw-loop-3s.mp4.` No `hero-loop/thin-straw-loop-*` wildcard. No `hero-loop/*` wildcard. | 3s GET 200 / 3.00s. 4s GET 404. File does not re-CUT the 3s. |
| Old slow-exhale = revert lock only | PASS | §2: `Old /media/video/hero/slow-exhale.mp4 is a revert lock only: do not put the old 10s looping exhale back under the first Start. Do not treat it as the live data-src.` P0.2: `Do not ship the old looping 10s slow-exhale under the first Start. Do-not-ship-this-loop on that old path only.` | Path still 200, now 3.00s bytes, not live `data-src`. Lock is on the old 10s product, not a live src claim. |
| KEEP: hero Start is a `#method` jump | PASS | §1: `Control: <a class="btn" href="#method">Start</a>.` `tap scrolls to #method and focuses #start-btn.` P0.1: `Finding only. Jump + focus. Not implement-now from this file.` | True NOW. Jump + focus. Sequence does not start. |
| KEEP: fight-the-prove stand-down / Copy link | PASS | §4: `Mid-hold Copy link (#share-btn, hold copyLink: true) stays.` `no Share-on-hold implement, no competing mid-hold CTA` | True NOW. `#share-btn` present. `copyLink: true` on hold. |
| KEEP: no Callie | PASS | Locks + §5: `No Callie. Faceless naming.` | Four pages Callie 0. |
| KEEP: no invent rates | PASS | Locks: `No invented rates or traffic.` §7: `Not in the current record.` | No rates invented in the file. |

Claimed KEEP rows stay. Claimed NOW refresh and CUT-narrow landed in the file. Quotes match live srcs.

## Recheck-2 new must-fixes → PASS/FAIL

From `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2-2026-09-06.md`. Checked in PR27 @ `037fe92`, not `36afdb7`.

| # | Recheck-2 must-fix | Prior | Now | Why |
| --- | --- | --- | --- | --- |
| N1 | Stop listing live hero as `/media/video/hero/slow-exhale.mp4` ~10.04s. Keep do-not-ship-this-loop only on the old slow-exhale loop. If a sentence stays, it is a revert lock. | FAIL | PASS | Live-hero line is now `hero-loop/thin-straw-loop-3s.mp4` (~3.00s). Old path is named revert lock only. No `~10.04s` live-hero claim. |
| N2 | Narrow the `hero-loop/thin-straw-loop-*` CUT. CUT the glitchy AI-morph / 4s / ship-a-new-loop theater. Do not re-CUT CoS-clean `thin-straw-loop-3s.mp4`. | FAIL | PASS | Wildcard gone. CUT names morph takes + `thin-straw-loop-4s.mp4`. Explicit `Do not re-CUT` on the 3s in §2, §5, P0.2, and the CUT list. |
| N3 | Remove `v2 04 stays skipped (glitchy)` as a current line. Live `CLIPS.exhale` is v2 `04-thin-straw-exhale.mp4`. Do not open a step-4 sprint. Do not re-CUT clean step-4. | FAIL | PASS | That line is gone. §3: `Blow / step 4 (NOW): CoS-clean v2 04-thin-straw-exhale.mp4. Do not re-CUT clean step-4. Do not open a step-4 sprint from this file.` |

## Prior FAIL list (recheck-1 M1-M7) still PASS

From `docs/howtofixhiccups-hero-timer-cro-skeptic-recheck-2026-09-06.md`. Recheck-2 already closed this list @ `36afdb7`. Rechecked @ `037fe92`. Still closed.

| # | Prior must-fix | Recheck-2 | Now | Why |
| --- | --- | --- | --- | --- |
| M1 | Keep hero-Start-is-a-jump as a finding. Do not implement it from this file. | PASS | PASS | P0.1: `Finding only... Not implement-now from this file.` Implement gate stays NO. |
| M2 | Keep fight-the-prove stand-down. Copy link / Share-on-hold stay. | PASS | PASS | §4 leaves Copy link / Share-on-hold alone. Live button intact. |
| M3 | Cut stale hold-loop as a current P0. Keep only as a revert lock. | PASS | PASS | §3: `Stale hold-loop P0: CUT.` `KEEP as revert lock only.` `Not a live P0.` |
| M4 | Cut stale idle `start.mp4` loop as a current P1. | PASS | PASS | CUT list still removes it as a current P1. Live idle is stills. |
| M5 | Cut P1.3 breath-clip ~5s loop as a current P1 (filed, not re-mapped). | PASS | PASS | CUT list: `Breath ~5s loop as a current P1 sprint.` Not a CUT of CoS-clean step-4. |
| M6 | P0.2 / R8: KEEP as do-not-ship-this-loop only. CUT as ship-a-new-loop. Explicit CUT of glitchy AI-morph. Do not re-CUT CoS-clean 3s. | PASS as written. Narrow then. | PASS | P0.2 is do-not-ship-this-loop on the old 10s path only. Morph / 4s CUT. Explicit do-not-re-CUT on the 3s. |
| M7 | Implement gate NO. Merge gate NO. $0. No Mike. | PASS | PASS | File header: `Do not merge PR27 as ship. No implement.` Locks: `No merge/deploy/spend.` This recheck same. |

Score: 3/3 PASS on recheck-2 new must-fixes. 7/7 PASS on the prior list. No new must-fixes.

## New must-fixes

None.

File header still cites recheck-2 deploy `6a9dde8cb6a94d00081d1d85`. Live is `6a9ddf9bf75b070008fd62e3`. Src map is the same. That is a note. It is not a fail. Recheck-2 failed a wrong src map, not a deploy-id string.

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
- Do-not-ship-this-loop on the old 10s slow-exhale.

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

PR27 is one markdown file. KEEP of that file is not a site fix and does not clear PR3. Merge gate stays NO.

Do not merge PR3. Do not merge PR27 as ship.

## Soft-sell / theater

The claimed narrow patch is real. File text changed from `36afdb7` to `037fe92`. NOW srcs match live. CUT width no longer hits the CoS-clean 3s.

KEEP of the note is not KEEP of a ship. Treating KEEP as merge-ready is theater.

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
