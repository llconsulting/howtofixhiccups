# howtofixhiccups excellence elite recheck

Date: 2026-09-06 23:20 UTC (updated after `460fba3` restored header Privacy a ninth time)  
Role: Skeptic (louislynn Consulting)  
Job: KEEP/CUT excellence elite recheck only. No rewrite. No merge. No publish. No spend. No Mike ping.  
PR: https://github.com/llconsulting/howtofixhiccups/pull/3  
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/  
PR head at check: `460fba39aaf2584d19326392fcfadbcde12137a2` (draft)  
Ninth restore: `460fba39aaf2584d19326392fcfadbcde12137a2`  
Ninth drop: `3177d9c917f214e939a9ccc9528b6aebf0744666`  
Hero rewrite: `ff7fa3b57c3040ded77cefe4c357051077d75a13`  
Eighth restore: `226c3f7d816e0e36ed41409405e8222cf7adce5c`  
Eighth drop: `9699fc5018f19142bfbf24e13706ac6c206a7541`  
Seventh restore: `817e7bf023d3903a2cfef78e8726cd04409c7e5e`  
Mobile opacity: `bc8d5bfb7d41423af2be6e7385791817e89c13e3`  
Seventh drop: `4e058f940be65b2d4289275567b3943d96a9f6e5`  
Plate wash: `df80db87a942e55e783e30d410f767c26baaec59`  
Sixth restore: `b5ad5dcb541d481bd7d3c86c224a062cc7c7172c`  
Sixth drop: `440c640089a52bbfab4043940dacb2a02d7a1335`  
Fifth restore: `2f172fd166699664658203fd2a4b26dd5d178065`  
Fifth drop: `9966878cf5275e21de13a8b4c9b7b3544bff48fd`  
Fourth restore: `73f436681469b271e663f60b555ac530e6c784e3`  
Hero binary: `6c6b86a7fd85927b5786d4b2d61d3f503576db24`  
Broken-path commit: `378764f2a0841ca2429dbaf1d1c8b79d3ea98532`  
Third restore: `95915915cdc94c6522f1f15079a35657b46f6826`  
Third drop: `d8e4d16f6bcd365540f3a9e1159b3a6beed54ae9`  
Second restore: `dff29eb0b98e1d97f935e941c4da4dd79f24bb2f`  
Second drop: `e3f38733c873d149481f3e05863fa3bde81998db`  
First restore: `fbce82af214b7e263e9a7d0ff9bd006123839c47`  
First drop: `01aee06ea76cae5e9a5f33c0d52c8cdedf68cc70`  
Prior YES head: `53996a18272288f9e910b2856763e36014b336be`  
First GET head: `673d04585bbb6bcf9f8c64413216264897d8af05`  
Recheck agent: https://cursor.com/agents/bc-45737fa2-d038-46ee-ad01-119e7aaa15ea

Parent mirror: `/workspace/louislynn-os/hiccups-site/howtofixhiccups-excellence-elite-recheck-2026-09-06.md`

---

## Verdict

- **Overall:** KEEP WITH FIXES
- **Merge gate:** NO
- **Elite+clear+merge-ready?:** NO
- **One-line why:** Header Privacy is back a ninth time; hero is still a washed 0.45x sip with H1+Start only. Step clips still MATCH. Do not call YES.

Do not merge PR3.  
Do not ping Mike.  
CoS owns the Mike ping on YES.

---

## Elite bar

| Bar | YES/NO | Evidence |
| --- | --- | --- |
| Hero | NO | Same sip file still wired (`straw-blow-loop-3s.mp4`, sha256 `1a525ec0…`). `ff7fa3b` then slowed it to `playbackRate 0.45`, set poster/video `opacity: 0.38`, and put a dark `.hero-plate::after` wash back. Plate is now H1 + Start only. `thin-straw-loop-3s.mp4` still 200 and unwired. 4s still 404. |
| Copy | NO | Header chrome matches again after `460fba3`. Locked HUMAN lead / lede / notice / helper / links still sit in `band-intro`, not on the hero plate. Header YES is not a Copy YES while the plate is H1+Start only. Merge-ready stays NO. |
| Content | YES | Four live pages only: `/` `/why/` `/when/` `/privacy/` all 200. `/blog/` 301 `/why/`. `/about/` 301 `/`. `/blog/callies-sequence/` 301 `/`. HowTo four beats, adults, ordinary hiccups, no MedicalWebPage. `/docs/*` 404. Desk STATUS/MANIFEST 404. |
| Motion | YES | CDP file-per-step MATCH. 01 breath+swallow 9.041667s. 02 second breath+swallow 9.041667s. 03 hold 30.083333s against 30s UI, no loop. 04 thin-straw 8.041667s (official lean remint; loops under the 10s UI). Hero 3s clean, not the 4s morph. Sampled frames show swallow on 01/02, still hold on 03, pursed thin-straw on 04. |

---

## Claimed items

| Claim | PASS/FAIL | Evidence |
| --- | --- | --- |
| CLIPS 01/02/03 + clean 04 all 200 | PASS | GET 200. Sizes now: 01 6853515, 02 6961159, 03 18797271, 04 2016813. |
| Hero muted 3s only (4s 404) | PASS | Wired `straw-blow-loop-3s.mp4` GET 200, ffprobe 3.000s. 4s GET 404. Technical 3s-only claim holds. Action is still the wrong beat. |
| HUMAN excellence copy | FAIL | Body paste still on the page. Four-item header is back. Hero plate is still H1+Start only, not the locked HUMAN stack. |
| Exp1 Copy link intact (writes howtofixhiccups.com; Share-on-hold only) | PASS | Button hidden idle / step 1 / step 2 / step 4. Visible on hold (`shareHidden:false`, label `Copy link`). `SHARE_URL = "https://howtofixhiccups.com/"`. `copyLink: true` only on hold. No hero Share. Headless CDP clipboard read blocked (`NotAllowedError` / document not focused), so the write was not proven in this headless session. Code path and hold-only UI are live. Screenshot: `/opt/cursor/artifacts/screenshots/preview_hold_copy_link.webp`. |
| no Callie | PASS | Grep of live `/` `/why/` `/when/` `/privacy/` HTML: 0 Callie. Visible chrome is `howtofixhiccups` / `the method`. `/blog/callies-sequence/` 301 home. `/README.md` 404. |
| step-faithful v2 (01-04 + 3s hero) | PASS | See motion table and CDP srcs below. |
| swallow on breath | PASS | 01 caption `Breathe in deeply, then swallow`. Frames show inhale then visible swallow. 02 caption `Another breath in — swallow completely`. CDP step 1 plays 01, step 2 plays 02. |
| hold duration matches 30s UI | PASS | 03 ffprobe 30.083333s. CDP `hostDur` 30.083333. UI starts at 30 and ticks (29, 28, 18, 8) then hands to step 4. Clip does not loop. Burn-in: `Hold for 30 seconds`. |
| exhale matches step 4 | PASS | Live 04 is the CoS QC lean 8s remint (`e74e554` / `53996a1`), not the prior 10.041667s file. Caption `Slow thin-straw exhale`. Frames are pursed thin-straw through late samples, no end lip morph in this pass. CDP step 4 `hostSrc` 04, `hostDur` 8.041667, UI count `10`, Copy link hidden. |
| hero is clean 3s not AI-morph 4s | FAIL | File is 3s and not the 4s morph. It is also not the 04 thin-blow. Sampled frames are a sip through a plastic straw. That is not a clean mid-cut of step 4. |
| preview still noindex | PASS | `X-Robots-Tag: noindex, nofollow` plus `noindex` on `/` `/why/` `/when/` `/privacy/`. Served HTML robots meta rewritten to `noindex, nofollow`. |
| no fight-the-prove CRO | PASS | No second prove widget. Hero Start jumps to `#method` and focuses Start. It does not auto-run the sequence. Copy link is hold-only. |
| walkthrough still 404 | PASS | `/media/video/ugc-motion-v2-2026-09-06/method-walkthrough.mp4` 404. `/walkthrough/` 404. `/method-walkthrough/` 404. `03-hold-a.mp4` / `03-hold-b.mp4` / `raw/` 404. |
| file-per-step wiring | PASS | CLIPS map still 01/02/03/04. Those four files still 200. Hero is not in CLIPS. Live JS SHA is now `6664fb18eeaa8dcd097e3250214c0b7190a0ef523bd5e96c458428c6cb2ede62` after `playbackRate 0.45`. Idle/done stay on stills. |

---

## Live GET (22:10 UTC, after 04 remint)

| Path | Status | Notes |
| --- | --- | --- |
| `/` `/why/` `/when/` `/privacy/` | 200 | noindex |
| `01-breath-swallow.mp4` | 200 | 6853515 |
| `02-breath-swallow.mp4` | 200 | 6961159 |
| `03-hold-30.mp4` | 200 | 18797271 |
| `04-thin-straw-exhale.mp4` | 200 | 2016813 (was 5910482 at 21:55 UTC) |
| `hero-loop/thin-straw-loop-3s.mp4` | 200 | 1614688 |
| `hero-loop/thin-straw-loop-4s.mp4` | 404 | |
| `method-walkthrough.mp4` | 404 | |
| `03-hold-a.mp4` / `03-hold-b.mp4` / `raw/` | 404 | |
| `/docs/` and HUMAN deck md | 404 | |
| `/README.md` | 404 | |
| v2 STATUS.md / MANIFEST.md | 404 | toml force-404 |
| `/blog/` | 301 `/why/` | |
| `/about/` | 301 `/` | |
| `/why-hiccups-start/` | 301 `/why/` | |
| `/when-to-stop/` | 301 `/when/` | |

Unused but still 200 (not in live CLIPS, not a claimed 404):  
`/media/video/ugc-motion-2026-09-06/thin-straw-exhale.mp4`  
`/media/video/ugc-motion-2026-09-06/method-full.mp4`  
`/media/video/hero/slow-exhale.mp4` (legacy poster plate, not hero src)

---

## ffprobe (downloaded from the live preview)

| File | Dur | Size | SHA256 | Notes |
| --- | --- | --- | --- | --- |
| 01 | 9.041667 | 6853515 | `34ad2a6365fd42786b9214a5f291c1301bf45f1529b8349275b991b1075da5a7` | 1080x1920 @24 |
| 02 | 9.041667 | 6961159 | `96f978b4826c2f5ad4a9b5d71475cf232bf6dd7e8a622d1a6015c297384d55e4` | 1080x1920 @24 |
| 03 | 30.083333 | 18797271 | `f6edcc8f1521c63523640a3431cd95eb40ce138385a19eea1065bd53e4a27698` | 1080x1920 @24 |
| 04 now | 8.041667 | 2016813 | `13f5a3478962c6363fb598002bb3365fa418d80e879bfe93568e71c194318443` | lean remint live now |
| 04 earlier | 10.041667 | 5910482 | `e57fb2c9f20cfc75bc9060b931f7460a7efeff6d1324fee52029b9d96f3321da` | CUT mid-recheck for late lip morph |
| hero 3s | 3.000000 | 1614688 | `072b1df9c777578a5ba4cdb39b0d0eae2d3992bcba99ec6f76c2c5bba9e51ea1` | uncaptioned |

---

## CDP (headless Chrome, exact currentSrc)

Idle:

```
heroSrc: .../hero-loop/thin-straw-loop-3s.mp4
heroDuration: 3
heroMuted: true
heroLoop: true
heroPaused: false
robots: noindex, nofollow
shareHidden: true
startVisible: true
```

Step 1: `01-breath-swallow.mp4` dur 9.041667, share hidden, `Breathe all the way in.`  
Step 2: `02-breath-swallow.mp4` dur 9.041667, share hidden, `Second breath on top.`  
Step 3: `03-hold-30.mp4` dur 30.083333, share visible, count 29 then 28 / 18 / 8  
Step 4: `04-thin-straw-exhale.mp4` dur 8.041667, share hidden, count 10, label `Thin blow.`  
Stop: share hidden again, Start back.

A first-pass computerUse report claimed `hero-loop-v3.mp4` and step 2 on 01. Both are false. `hero-loop-v3.mp4` GET 404. This CDP pass is the source of record.

---

## 04 remint (do not confuse with the CUT 10s file)

At 21:55 UTC the preview still served the 10.041667s / 5910482 04.  
`e74e554` replaced it with the official lean 8s remint.  
`53996a1` added desk STATUS/MANIFEST (those URLs 404 on preview).

Desk STATUS on PR3: prior 10s 04 CUT for lip morph 0:08-0:09. New 8s 04 SHIP, QC pass, no end morph. 3s hero KEEP MATCH, not regenerated. 4s loop stays CUT.

Live 04 at 22:10 UTC is still the 8s remint (2016813). That is the QC'd clean step-4. It is still live.

`method.js` loops every clip except hold. So 04 (8.04s) loops under the locked 10s blow plus the 5s `If you can` tail. Action stays thin-straw. Hold stays 1:1 with the 30s UI. Do not restore the CUT 10s file.

---

## Copy / Callie / CRO

- Visible home, why, when, privacy: no Callie.
- Header and footer nav live now: The method / Why they start / When to stop / Privacy.
- Home hero plate is still H1 + Start only. HUMAN lead / lede / notice / helper / links still sit in `band-intro` below.
- When-page `about` hits are `about 48 hours` / `about two days`, not an About page.
- No fight-the-prove CRO on the hero or inner pages.
- Exp1 stays hold-window Copy link. Share API is clipboard-fail fallback only.

---

## 22:19 UTC interim (superseded)

Head moved from `53996a1` to `01aee06`. Header lost Privacy. Copy bar NO. Merge gate NO. That state is gone.

## 22:21 UTC recheck after header restore

Head is `fbce82a` (`Restore Privacy in the locked four-item header nav.`). Live GET at 22:21 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop / Privacy
- Footer matches
- Clips unchanged: 01 6853515, 02 6961159, 03 18797271, 04 2016813
- Hero 3s 200, 4s 404
- JS SHA still `37e1e11ec48ed694117ee72d805bcba8961896ffa2eeb0021e4bba74f0b3179c`
- noindex, no Callie

Copy bar returns to YES. Elite+clear+merge-ready returns to YES. Merge gate returns to YES.

That YES is superseded by `e3f3873`.

## 22:30 UTC recheck after second Privacy drop

Head is `e3f3873` (`fix(nav): drop Privacy from header; keep footer link`). Same change as `01aee06`. Live GET at 22:30 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- Clips unchanged: 01 6853515, 02 6961159, 03 18797271, 04 2016813
- Hero 3s 200, 4s 404
- JS SHA still `37e1e11ec48ed694117ee72d805bcba8961896ffa2eeb0021e4bba74f0b3179c`
- noindex, no Callie

Copy bar NO. Elite+clear+merge-ready NO. Merge gate NO.

Do not flip YES again until header Privacy is live and stays. Two drops in 12 minutes means the chrome lock is not held.

## 22:32 UTC recheck after second restore

Head is `dff29eb` (`Restore Privacy in header again after the second drop.`). Live GET at 22:32 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop / Privacy
- Footer matches
- Clips unchanged. Hero 3s 200, 4s 404. JS SHA unchanged. noindex, no Callie

Copy bar is YES on the live page. Elite+clear+merge-ready stays NO. Merge gate stays NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore

CoS must stop the nav thrash. A third drop voids another YES. Do not merge on a restore that has already been reversed once.

## 22:58 UTC recheck after third drop

Head is `d8e4d16` (`fix(nav): drop Privacy from header; keep footer link`). Commit body says it re-applies the drop after `dff29eb`. Live GET at 22:58 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- Clips unchanged: 01 6853515, 02 6961159, 03 18797271, 04 2016813
- Hero 3s 200, 4s 404
- JS SHA still `37e1e11ec48ed694117ee72d805bcba8961896ffa2eeb0021e4bba74f0b3179c`
- noindex, no Callie

Copy bar NO. Elite+clear+merge-ready NO. Merge gate NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop

This is a competing-agent loop, not a settled chrome decision. Stop both the drop job and the restore job. Hold the four-item header. Do not call YES on the next restore.

## 23:01 UTC recheck after third restore

Head is `9591591` (`Restore Privacy in header after the third drop.`). Adds a lock comment in the HTML. Live GET at 23:01 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop / Privacy
- Footer matches
- Clips unchanged. Hero 3s 200, 4s 404. JS SHA unchanged. noindex, no Callie

Copy bar is YES on the live page. Elite+clear+merge-ready stays NO. Merge gate stays NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore

A comment in the HTML is not a held lock. The next drop job will ignore it. Stop the drop agent. Do not merge on this restore.

## 23:04 UTC recheck after hero path swap + fourth drop

Head is `378764f` (`fix(nav,hero): drop Privacy from header; point hero at straw-blow loop`). Live GET at 23:04 UTC:

- Hero `data-src`: `hero-loop/straw-blow-loop-3s.mp4` GET **404**
- QC'd `thin-straw-loop-3s.mp4` still 200, unwired
- Header Privacy dropped on `/` `/why/` `/when/` `/privacy/` and 404
- Footer still has Privacy
- CLIPS 01-04 still 200 at prior sizes
- JS SHA changed to `7e677288581db1a3b97792869a9365358339e57fc3bb7aefc4f976c1517bdb6c` (comment + unused path only for clips map)
- noindex, no Callie

Hero bar NO. Copy bar NO. Elite+clear+merge-ready NO. Merge gate NO.

Fix is point hero back at `thin-straw-loop-3s.mp4` and restore header Privacy. Do not ship a 404 hero. Do not wait for an unshipped `straw-blow` binary.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404

## 23:06 UTC recheck after hero binary land

Head is `6c6b86a` (`fix(media): land CoS-PASS straw-blow-loop-3s hero binary`). Live GET at 23:06 UTC:

- `straw-blow-loop-3s.mp4` GET 200, 880176 bytes, duration 3.000s
- SHA matches the commit
- Frames: literal straw, sip, not pursed thin-blow
- `thin-straw-loop-3s.mp4` still 200, unwired
- Header Privacy still dropped
- 01-04 unchanged
- 4s still 404
- noindex, no Callie

Hero 404 is gone. Hero bar stays NO (wrong action). Copy bar stays NO. Merge gate stays NO.

Do not treat a drinking-straw sip as the method hero. Put `thin-straw-loop-3s.mp4` back. Restore header Privacy. Stop the nav/hero thrash.

## 23:07 UTC recheck after fourth Privacy restore

Head is `73f4366` (`Restore Privacy in header after the fourth drop.`). Leaves the sip hero in place. Live GET at 23:07 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: four-item nav including Privacy
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged
- noindex, no Callie

Copy bar YES on the live page. Hero bar still NO. Merge gate still NO. Do not call YES. Put the 04 thin-blow 3s loop back. Stop the drop agent.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore (sip hero left on)

## 23:10 UTC recheck after fifth Privacy drop

Head is `9966878` (`fix(nav): drop Privacy from header; keep footer and straw-blow hero`). Commit body says it re-applies the drop after `73f4366`. Live GET at 23:10 UTC:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- HTML lock comment deleted with the header Privacy link
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie

Copy bar NO. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop

This is the fifth drop. The lock comment did not hold. Stop both the drop job and the restore job. Hold the four-item header. Point hero back at `thin-straw-loop-3s.mp4`. Do not call YES on the next restore.

## 23:11 UTC recheck after fifth restore then sixth drop

Two commits in 17 seconds. Head is `440c640`. Live GET at 23:11 UTC matches the sixth drop.

`2f172fd` (`Restore Privacy in header after the fifth drop.`, 23:10:27): put Privacy and the lock comment back.

`440c640` (`fix(nav): drop Privacy from header; keep footer and straw-blow hero`, 23:10:44): cut both again. Commit body invents `CoS lock: Privacy stays out of primary nav.` That is not the excellence deck. Footer-only Privacy is still not a match.

Live GET:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie

Copy bar NO. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop

A commit message that says CoS lock does not make it a CoS lock. Kill both nav jobs. Hold the four-item header. Point hero back at `thin-straw-loop-3s.mp4`. Do not call YES on the next restore.

## 23:13 UTC recheck after sixth restore, plate wash, seventh drop

Three commits. Head is `4e058f9`. First live GET still served `b5ad5dc` (Privacy in, plate wash still on). Second GET after deploy wait matches head.

`b5ad5dc` (`Restore Privacy in header after the sixth drop.`, 23:13:05): Privacy and lock comment back.

`df80db8` (`fix(hero): drop plate wash so video reads at full opacity`, 23:13:40): removes desktop and mobile `.hero-plate::after`. Copy contrast via text-shadow. Live CSS now has 0 `hero-plate::after` rules. Full-opacity sip is still a sip.

`4e058f9` (`fix(nav): drop Privacy from header; keep footer and straw-blow hero`, 23:13:54): cut Privacy and lock comment again, 49s after the restore.

Live GET after deploy:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie

Copy bar NO. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop
12. `b5ad5dc` restore
13. `4e058f9` drop

Kill both nav jobs. Hold the four-item header. Point hero back at `thin-straw-loop-3s.mp4`. Do not treat a brighter sip as a hero fix. Do not call YES on the next restore.

## 23:15 UTC recheck after mobile opacity, seventh restore, eighth drop

Three commits. Head is `9699fc5`. Live GET matches the eighth drop.

`bc8d5bf` (`fix(hero): keep mobile poster/video at opacity 1`, 23:14:17): one-line CSS. Repeats `opacity: 1` inside the 720px hero media query. Live CSS has 0 `hero-plate::after` and 4 `opacity: 1` hits. Does not change the hero file.

`817e7bf` (`Restore Privacy in header after the seventh drop.`, 23:15:02): Privacy and lock comment back.

`9699fc5` (`fix(nav): drop Privacy from header; keep footer, straw-blow, full-opacity hero`, 23:15:20): cut both again, 18s later. Commit body repeats `CoS lock: Privacy stays out of primary nav.` That is still not the excellence deck.

Live GET:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie

Copy bar NO. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop
12. `b5ad5dc` restore
13. `4e058f9` drop
14. `817e7bf` restore
15. `9699fc5` drop

Kill both nav jobs. Hold the four-item header. Point hero back at `thin-straw-loop-3s.mp4`. Mobile opacity 1 does not make a sip the method hero. Do not call YES on the next restore.

## 23:17 UTC recheck after eighth Privacy restore

Head is `226c3f7` (`Restore Privacy in header after the eighth drop.`). Leaves the sip hero and opacity CSS in place. Live GET at 23:17 UTC matches.

- Header on `/` `/why/` `/when/` `/privacy/` and 404: four-item nav including Privacy
- Lock comment is back
- Hero still `straw-blow-loop-3s.mp4` (sip, 3.000s, 200)
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie

Copy bar YES on the live page. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO. Do not call YES on a restore. The last four restores were cut in 17s, 17s, 49s, and 18s.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop
12. `b5ad5dc` restore
13. `4e058f9` drop
14. `817e7bf` restore
15. `9699fc5` drop
16. `226c3f7` restore

Kill the drop job. Hold the four-item header. Point hero back at `thin-straw-loop-3s.mp4`. A comment in HTML is not a held lock.

## 23:19 UTC recheck after hero rewrite and ninth Privacy drop

Two commits. Head is `3177d9c`. Live GET matches.

`ff7fa3b` (`fix(hero): minimal H1+Start plate, slow loop, Privacy footer-only`, 23:18:46): commit message says header stays three items. Diff did not drop Privacy. It did rewrite the home plate. Live now:

- Hero copy is H1 `How to fix hiccups` + Start
- HUMAN lead / lede / notice / helper / why-when links sit in `band-intro` below
- Hero file still `straw-blow-loop-3s.mp4`
- JS `HERO_PLAYBACK_RATE = 0.45` (SHA `6664fb18…`)
- CSS puts `.hero-plate::after` back (dark wash) and sets poster/video `opacity: 0.38`
- Band background `#1d1d1f`

`3177d9c` (`fix(nav): drop Privacy from header after the eighth restore`, 23:19:00): cuts Privacy and the lock comment, 111s after `226c3f7`.

Live GET:

- Header on `/` `/why/` `/when/` `/privacy/` and 404: The method / Why they start / When to stop
- Footer still has Privacy
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged: 6853515 / 6961159 / 18797271 / 2016813
- 4s still 404
- noindex, no Callie, `12 to 15` still in HTML

Copy bar NO. Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO.

This is worse than the last restore. They undid the full-opacity pass, slowed the wrong hero, and emptied the locked plate. Kill the rewrite job and the drop job.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop
12. `b5ad5dc` restore
13. `4e058f9` drop
14. `817e7bf` restore
15. `9699fc5` drop
16. `226c3f7` restore
17. `3177d9c` drop

Hold the four-item header. Put the locked HUMAN stack back on the hero plate. Point hero at `thin-straw-loop-3s.mp4` at normal rate with no wash. Do not call YES on the next restore.

## 23:20 UTC recheck after ninth Privacy restore

Head is `460fba3` (`Restore Privacy in header after the ninth drop.`). Commit body says leave the hero plate and slow loop as-is. Live GET at 23:20 UTC matches.

- Header on `/` `/why/` `/when/` `/privacy/` and 404: four-item nav including Privacy
- Lock comment is back
- Hero plate still H1 + Start only
- HUMAN stack still in `band-intro`
- Hero still `straw-blow-loop-3s.mp4` at `playbackRate 0.45`, opacity 0.38, dark wash
- `thin-straw-loop-3s.mp4` still 200, unwired
- 01-04 unchanged
- noindex, no Callie

Copy bar stays NO (plate still emptied). Hero bar still NO. Elite+clear+merge-ready NO. Merge gate NO. Do not call YES on a restore that leaves the wrong hero and the wrong plate.

Flip log:
1. `01aee06` drop
2. `fbce82a` restore
3. `e3f3873` drop
4. `dff29eb` restore
5. `d8e4d16` drop
6. `9591591` restore
7. `378764f` drop + hero 404
8. `73f4366` restore
9. `9966878` drop
10. `2f172fd` restore
11. `440c640` drop
12. `b5ad5dc` restore
13. `4e058f9` drop
14. `817e7bf` restore
15. `9699fc5` drop
16. `226c3f7` restore
17. `3177d9c` drop
18. `460fba3` restore

Kill the drop job. Hold the four-item header. Put the locked HUMAN stack back on the hero plate. Point hero at `thin-straw-loop-3s.mp4` at normal rate with no wash.

## Standing context

Prior wiring elite YES was overridden for step fidelity. The 22:10 pass called YES on live files. Header chrome then flipped eighteen times. Hero is a washed 0.45x sip with H1+Start only. Step clips 01-04 still MATCH. Wired hero and plate do not.

CoS watch MATCH on 01-04 still holds. The MATCH 3s hero (`thin-straw-loop-3s.mp4`, mid-cut of 04) is still on disk and unwired. The 10s 04 is not live and must not come back.

---

## Explicit locks for CoS

- Do not merge PR3.
- Do not ping Mike.
- CoS owns the Mike ping on YES.
- Do not spend.
- Do not publish.
- Do not rewrite from this file.

---

## Screenshots

- Home hero, Start clear of the plate: `/opt/cursor/artifacts/screenshots/preview_home_hero.webp`
- Step 1 swallow UI: `/opt/cursor/artifacts/screenshots/preview_step1_swallow.webp`
- Hold + Copy link at 17s: `/opt/cursor/artifacts/screenshots/preview_hold_copy_link.webp`
- Step 4 / extra thin blow, Copy link gone: `/opt/cursor/artifacts/screenshots/preview_step4_exhale.webp`
