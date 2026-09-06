# howtofixhiccups excellence elite recheck

Date: 2026-09-06 22:21 UTC (updated after `fbce82a` restored header Privacy)  
Role: Skeptic (louislynn Consulting)  
Job: KEEP/CUT excellence elite recheck only. No rewrite. No merge. No publish. No spend. No Mike ping.  
PR: https://github.com/llconsulting/howtofixhiccups/pull/3  
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/  
PR head at check: `fbce82af214b7e263e9a7d0ff9bd006123839c47` (draft)  
Interim NO head: `01aee06ea76cae5e9a5f33c0d52c8cdedf68cc70`  
Prior YES head: `53996a18272288f9e910b2856763e36014b336be`  
First GET head: `673d04585bbb6bcf9f8c64413216264897d8af05`  
Recheck agent: https://cursor.com/agents/bc-45737fa2-d038-46ee-ad01-119e7aaa15ea

Parent mirror: `/workspace/louislynn-os/hiccups-site/howtofixhiccups-excellence-elite-recheck-2026-09-06.md`

---

## Verdict

- **Overall:** KEEP
- **Merge gate:** YES
- **Elite+clear+merge-ready?:** YES
- **One-line why:** Live header Privacy is restored; clips, 3s hero, HUMAN body, Exp1, and noindex still MATCH.

Do not merge PR3.  
Do not ping Mike.  
CoS owns the Mike ping on YES.

---

## Elite bar

| Bar | YES/NO | Evidence |
| --- | --- | --- |
| Hero | YES | CDP `heroSrc` is `/media/video/ugc-motion-v2-2026-09-06/hero-loop/thin-straw-loop-3s.mp4`. `duration=3`, `muted=true`, `loop=true`, `paused=false`. GET 200, ffprobe 3.000s, 72 frames, 1080x1920. `thin-straw-loop-4s.mp4` GET 404. Frames are uncaptioned thin-straw mid-cut, no eyelid/face warp in sampled frames. Hero copy and Start sit above the plate (`hero-copy` z-index 1). Screenshot: `/opt/cursor/artifacts/screenshots/preview_home_hero.webp`. |
| Copy | YES | Body strings match the 2026-09-06 HUMAN deck. Locked header chrome is live again after `fbce82a`: The method / Why they start / When to stop / Privacy on `/` `/why/` `/when/` `/privacy/` and 404. Footer matches. `/privacy/` 200 with `aria-current="page"`. No Callie. `12 to 15`. Cure and success-rate lines are denials. |
| Content | YES | Four live pages only: `/` `/why/` `/when/` `/privacy/` all 200. `/blog/` 301 `/why/`. `/about/` 301 `/`. `/blog/callies-sequence/` 301 `/`. HowTo four beats, adults, ordinary hiccups, no MedicalWebPage. `/docs/*` 404. Desk STATUS/MANIFEST 404. |
| Motion | YES | CDP file-per-step MATCH. 01 breath+swallow 9.041667s. 02 second breath+swallow 9.041667s. 03 hold 30.083333s against 30s UI, no loop. 04 thin-straw 8.041667s (official lean remint; loops under the 10s UI). Hero 3s clean, not the 4s morph. Sampled frames show swallow on 01/02, still hold on 03, pursed thin-straw on 04. |

---

## Claimed items

| Claim | PASS/FAIL | Evidence |
| --- | --- | --- |
| CLIPS 01/02/03 + clean 04 all 200 | PASS | GET 200. Sizes now: 01 6853515, 02 6961159, 03 18797271, 04 2016813. |
| Hero muted 3s only (4s 404) | PASS | 3s GET 200, ffprobe 3.000s. 4s GET 404. CDP hero duration 3, muted, looping. |
| HUMAN excellence copy | PASS | Body paste matches. Locked four-item header is live again on all four pages and 404. Footer matches. |
| Exp1 Copy link intact (writes howtofixhiccups.com; Share-on-hold only) | PASS | Button hidden idle / step 1 / step 2 / step 4. Visible on hold (`shareHidden:false`, label `Copy link`). `SHARE_URL = "https://howtofixhiccups.com/"`. `copyLink: true` only on hold. No hero Share. Headless CDP clipboard read blocked (`NotAllowedError` / document not focused), so the write was not proven in this headless session. Code path and hold-only UI are live. Screenshot: `/opt/cursor/artifacts/screenshots/preview_hold_copy_link.webp`. |
| no Callie | PASS | Grep of live `/` `/why/` `/when/` `/privacy/` HTML: 0 Callie. Visible chrome is `howtofixhiccups` / `the method`. `/blog/callies-sequence/` 301 home. `/README.md` 404. |
| step-faithful v2 (01-04 + 3s hero) | PASS | See motion table and CDP srcs below. |
| swallow on breath | PASS | 01 caption `Breathe in deeply, then swallow`. Frames show inhale then visible swallow. 02 caption `Another breath in — swallow completely`. CDP step 1 plays 01, step 2 plays 02. |
| hold duration matches 30s UI | PASS | 03 ffprobe 30.083333s. CDP `hostDur` 30.083333. UI starts at 30 and ticks (29, 28, 18, 8) then hands to step 4. Clip does not loop. Burn-in: `Hold for 30 seconds`. |
| exhale matches step 4 | PASS | Live 04 is the CoS QC lean 8s remint (`e74e554` / `53996a1`), not the prior 10.041667s file. Caption `Slow thin-straw exhale`. Frames are pursed thin-straw through late samples, no end lip morph in this pass. CDP step 4 `hostSrc` 04, `hostDur` 8.041667, UI count `10`, Copy link hidden. |
| hero is clean 3s not AI-morph 4s | PASS | 3s only. 4s 404. Uncaptioned. Sampled hero frames stay on thin-straw. No 4s morph file on the preview. |
| preview still noindex | PASS | `X-Robots-Tag: noindex, nofollow` plus `noindex` on `/` `/why/` `/when/` `/privacy/`. Served HTML robots meta rewritten to `noindex, nofollow`. |
| no fight-the-prove CRO | PASS | No second prove widget. Hero Start jumps to `#method` and focuses Start. It does not auto-run the sequence. Copy link is hold-only. |
| walkthrough still 404 | PASS | `/media/video/ugc-motion-v2-2026-09-06/method-walkthrough.mp4` 404. `/walkthrough/` 404. `/method-walkthrough/` 404. `03-hold-a.mp4` / `03-hold-b.mp4` / `raw/` 404. |
| file-per-step wiring | PASS | Live `js/method.js` SHA `37e1e11ec48ed694117ee72d805bcba8961896ffa2eeb0021e4bba74f0b3179c` matches the PR3 file. CDP currentSrc MATCH on 01, 02, 03, 04, and 3s hero. Idle/done stay on stills (`CLIPS.idle = []`). |

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
- Header and footer nav: The method / Why they start / When to stop / Privacy.
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

## Standing context

Prior wiring elite YES was overridden for step fidelity. The 22:10 pass called YES on live files. `01aee06` broke locked header chrome. `fbce82a` restored it. Live chrome matches the deck again.

CoS watch MATCH on 01-04 + 3s hero still holds on the files that are live now: swallows on 01/02, 30s hold on 03, thin-straw 04 remint, 3s hero. The 10s 04 is not live and must not come back.

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
