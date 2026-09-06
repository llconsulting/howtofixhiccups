# howtofixhiccups hero → timer CRO skeptic recheck (KEEP/CUT only)

Date: 2026-09-06
Role: Skeptic. KEEP/CUT recheck only. No rewrite. No implement. No merge. No publish. No spend. No Mike ping.
Claimed revised target: `louislynn-os/hiccups-site/howtofixhiccups-hero-timer-cro-2026-09-06.md` (also `docs/` or any open PR that touches it)
File actually read: Docs PR27 `howtofixhiccups-hero-timer-cro-2026-09-06.md` on `cursor/hero-timer-cro-8407` @ `7c8715b6aa3eeabf386e9ba582e61b6571af23fc` (2026-09-06 21:35:42Z). One commit. Not updated after the prior skeptic.
Prior skeptic: `docs/howtofixhiccups-hero-timer-cro-skeptic-2026-09-06.md` on Docs PR28 (`cursor/hero-timer-cro-skeptic-6a43`). Verdict was KEEP WITH FIXES. Implement NO. Merge NO.
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/ (deploy `6a9ddc8444e33d000826f16a`). Same deploy as the prior skeptic NOW crawl.

This file is keep/cut only. Do not implement it. Do not merge PR27 as ship. Do not merge PR3. Do not treat "claimed applied" as landed.

## Locks

- Implement gate NO.
- Merge gate NO.
- $0. No spend.
- No Mike ping.
- Fight-the-prove stand-down. Copy link stays. Share-on-hold stays. No competing mid-hold CTA.
- CUT any rec that ships the glitchy v2 AI-morph hero-loop.
- No Callie. No invented rates.

## Verdict

**Overall: KEEP WITH FIXES**
**Implement gate: NO**
**Merge gate: NO**
**Elite+clear+merge-ready after restart?: NO**

Claimed revision did not land. There is no revised CRO text. The only file is the original PR27 note. KEEP rows that were already true stay true. Claimed CUTs are not in the file. Do not upgrade to KEEP. Do not CUT the whole note. Do not implement.

This note is not a rebuild ticket. Do not implement. Do not merge PR27 as ship. Do not merge PR3. Do not spend. Do not ping Mike.

## What was readable (not rubber-stamped)

Searched this repo `docs/`, workspace root, and every open PR that names the CRO file. Also searched for `louislynn-os` on GitHub from this token. Result:

- `docs/howtofixhiccups-hero-timer-cro-2026-09-06.md`: absent on `main` and on PR27.
- `/workspace/louislynn-os/...`: path does not exist in this workspace. Repo not reachable from this token.
- PR27: still the original 88-line CRO. `updatedAt` 2026-09-06T21:36:08Z. Zero review comments. CRO agent `bc-3cd42d27-a42e-4fa0-84fd-02c62df48407` last activity 21:36:05Z, before the prior skeptic finished.
- PR28: prior skeptic only. Does not rewrite the CRO.
- No later PR touches the CRO filename.

Claimed applied items were checked against PR27 file text, then against the live preview. File text is the gate. Preview is only to confirm the stale rows are still stale.

## Live NOW (same deploy as prior skeptic)

Recorded 2026-09-06 21:43 UTC. GET plus `ffprobe`. Not a site rewrite. Not a rubber stamp of PR27.

- URL: https://deploy-preview-3--howtofixhiccups.netlify.app/
- Deploy id: `6a9ddc8444e33d000826f16a` (`data-netlify-deploy-id`)
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus a second `X-Robots-Tag: noindex`
- Hero Start: `<a class="btn" href="#method">Start</a>`. JS `preventDefault`, `scrollIntoView` `#method`, focus `#start-btn`. Does not call `beginStep(0)`. Only `#start-btn` starts the runner.
- Hero plate: `#hero-video` `loop` + `data-src="/media/video/hero/slow-exhale.mp4"`. GET 200, 521692 bytes, `ffprobe` 10.04s. HTML comment still says "Higgsfield slow-exhale KEEP".
- Live `CLIPS`: idle `[]`. inhale1/2 = v2 `01`/`02`. hold = `/media/video/ugc-motion-v2-2026-09-06/03-hold-30.mp4` GET 200, 6434576 bytes, `ffprobe` 30.08s. `els.video.loop = id !== "hold"`. Old `ugc-motion-2026-09-06/hold.mp4` (10.04s, 9273778 bytes) is still 200 and is not the live src.
- JS header: skip v2 `04-thin-straw-exhale` (glitchy) and `hero-loop/thin-straw-loop-*` (AI morph). Probed `hero-loop` paths 404.
- `#share-btn` still in `#timer-wrap`. Hold `copyLink: true`. Label "Copy link". Intact.
- `/` `/why/` `/when/` `/privacy/`: Callie count 0.
- v2 01-03 are wired. They are not elite+merge-ready. Restart still in flight.

## Claimed applied (verify in file text)

| Claimed | Result | File text | Live |
| --- | --- | --- | --- |
| KEEP: hero Start is a `#method` jump | PASS | §1 and P0.1 still say hero `Start` = `#method`. Only `#start-btn` calls `beginStep(0)`. | True NOW. Jump + focus. Sequence does not start. |
| KEEP: fight-the-prove stand-down / Copy link | PASS | §2 and stand-down block leave Copy link / Share-on-hold alone. "Do not treat mid-hold Copy link as a rebuild item." | True NOW. `#share-btn` present. `copyLink: true` on hold. |
| KEEP: no Callie | PASS | Locks + keep list: faceless, no Callie. | Four pages Callie 0. |
| KEEP: no invent rates | PASS | §5: "Not in the current record." | No rates invented in the file. |
| CUT: stale hold-loop P0 | FAIL | P0.3 is still a current P0: "Hold clip loops under the 30s count." Evidence still cites `hold.mp4` 10.04s + `loop`. | Stale vs NOW. Live hold is v2 `03-hold-30.mp4` 30.08s, loop off. |
| CUT: stale idle `start.mp4` P1 | FAIL | P1.2 is still a current P1: "Idle `start.mp4` loops beside the real Start." §1 still maps `playClip("idle")` → `start.mp4` 5.04s `loop`. | Stale vs NOW. Live `CLIPS.idle` is `[]`. |
| CUT: ship of glitchy AI-morph hero-loop; do-not-ship-this-loop only on current `slow-exhale` | FAIL | P0.2 is still a rebuild-style P0 with no "do-not-ship-this-loop" / "CUT as ship-a-loop" line. R8 still "If a hero plate stays: idle / ready still." No explicit CUT of v2 `hero-loop/*`. HTML "slow-exhale KEEP" is not named as a ship item to CUT. | Loop is on the path NOW. JS already skips `hero-loop/*`. Those paths 404. Do not KEEP a ship-the-loop item. |

Claimed KEEP rows were already in the original. They are not a revision. Claimed CUT rows were the prior must-fixes. They are not in the file.

## Prior must-fixes PASS/FAIL

From `docs/howtofixhiccups-hero-timer-cro-skeptic-2026-09-06.md`. Checked in the CRO file that exists, not in a missing revision.

| # | Prior must-fix | Result | Why |
| --- | --- | --- | --- |
| M1 | Keep hero-Start-is-a-jump as a finding. Do not implement it from this file. | PASS as finding. CUT as implement-now still required. | File still records the jump. File still reads like a rebuild list (P0.1). Finding stays. Implement gate stays NO. |
| M2 | Keep fight-the-prove stand-down. Copy link / Share-on-hold stay. | PASS | File does not fight the prove. Live button intact. |
| M3 | Cut stale hold-loop as a current P0. Keep only as a revert lock. | FAIL | P0.3 and §2 still sell a 10s `hold.mp4` loop as live. That mapping is not the live src. |
| M4 | Cut stale idle `start.mp4` loop as a current P1. | FAIL | P1.2 and §1 still sell `start.mp4` as the studio idle. Live idle is stills. |
| M5 | Cut P1.3 breath-clip ~5s loop as a current P1 (filed, not re-mapped). | FAIL | P1.3 is still listed as P1. |
| M6 | P0.2 / R8: KEEP as do-not-ship-this-loop only. CUT as ship-a-new-loop. Explicit CUT of glitchy v2 AI-morph `hero-loop/*`. CUT HTML "slow-exhale KEEP" as a ship item. | FAIL | No do-not-ship-this-loop language. No v2 hero-loop CUT. P0.2 still sits in the P0 sprint list. That is loop-ship bait. |
| M7 | Implement gate NO. Merge gate NO. $0. No Mike. | PASS in this recheck. Not a CRO revision. | Prior skeptic already said it. PR27 still must not ship. PR3 still must not merge. |

Score: 3 PASS / 4 FAIL. The FAILs are the cuts that were supposed to be the revision. They were not applied.

## New must-fixes

None that change the product. The missing work is still file-text:

1. Remove P0.3 as a current ticket. If a hold sentence stays, it is a revert lock only: do not put the old 10s `hold.mp4` loop back under the 30s ring.
2. Remove P1.2 as a current ticket. Live idle is stills. Old `start.mp4` is not a method step.
3. Remove P1.3 as a current ticket. Do not open a breath-loop sprint from a filed, unrechecked row.
4. Rewrite P0.2 / R8 so the only surviving read is do-not-ship-this-loop on the current `slow-exhale.mp4`. Explicit CUT of any ship of v2 `hero-loop/thin-straw-loop-*`. Explicit CUT of HTML "Higgsfield slow-exhale KEEP" as a ship item. Still remint owns a clean exhale. A new loop is not the remint.

Until those four land in the CRO file, this stays KEEP WITH FIXES. A verbal "claimed applied" is not a revision.

## What stays KEEP (unchanged)

- F1 / P0.1: hero Start does not start the method. True NOW. Finding only.
- F4 / P1.1: two Starts on first paint. Same finding as F1, not a second rebuild.
- F7 / R7 / S1: prove stand-down. Copy link stays.
- R2: timer hidden until hold. Already true.
- R3: file-per-step as a principle. Not "wiring OK" as elite.
- R4: visitor-paced `I swallowed`. Not a rebuild ticket.
- R6: no Callie.
- M1: metrics not in the current record.

## What stays CUT / VETO

- Use this CRO (or this recheck) as implement / merge / spend authorize.
- Ship v2 `hero-loop/thin-straw-loop-*`.
- Keep the current looping `slow-exhale.mp4` as product.
- Treat stale hold-loop or stale idle `start.mp4` as live P0/P1.
- Fight the prove. Remove Copy link. Add a competing mid-hold CTA.
- Merge PR27 as ship. Merge PR3. Publish. Spend. Ping Mike.

## Vs fight-the-prove

CRO still does not fight the prove. That KEEP stands.

VETO any later read that removes Share-on-hold, hides Copy link, or adds a competing mid-hold CTA.

Do not implement this CRO to "prepare" prove. Prove stays on the preview as it stands.

## Vs excellence restart / PR3 merge

Same as prior skeptic. v2 01-03 are on the preview. They are not CoS elite+merge-ready. Restart still in flight.

PR27 is one markdown file and it was not revised. Merging it does not ship a site fix and does not clear PR3. Merge gate stays NO.

Do not merge PR3. Do not merge PR27 as ship.

## Soft-sell / theater

"Claimed applied" without a changed file is theater. The P0 list is still a sprint of two stale rows plus one loop-ship bait. Activity, not progress.

Hero Start as a jump is still progress-grade evidence. Hold-loop-as-live-P0 is still not.

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
Do not ship the glitchy v2 hero-loop.
Do not KEEP the current looping exhale as a ship item.
