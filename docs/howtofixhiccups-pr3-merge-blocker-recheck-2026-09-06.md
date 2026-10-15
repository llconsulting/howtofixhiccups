# howtofixhiccups PR3 merge-blocker recheck

Date: 2026-09-06
Role: Skeptic. KEEP/CUT only. No rewrite. No merge. No publish. No spend.
PR: https://github.com/llconsulting/howtofixhiccups/pull/3
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/
Prior: `docs/howtofixhiccups-ugc-layout-skeptic-2026-09-06.md` on `cursor/ugc-layout-skeptic-a25b`

## Verdict

Overall: KEEP
Merge gate: YES
Elite+clear+merge-ready?: YES
One-line why: Walkthrough is 404, CLIPS is ugc-motion only, that pack plays, Exp1 Copy link still writes `https://howtofixhiccups.com/`, elite bar 5/5.

Do not merge PR3 unless Elite+clear+merge-ready is YES. It is YES. Even then CoS owns the Mike ping. This note does not ping Mike. This note does not merge.

## Live crawl (NOW, not the local tree)

Recorded 2026-09-06 19:53–20:50 UTC against the live preview. GET plus Chrome CDP. Not a rubber stamp of the PR body.

- Deploy id: `6a9dbff0d157b5000809414e` (`data-netlify-deploy-id` on `/`; Netlify check `https://app.netlify.com/projects/howtofixhiccups/deploys/6a9dbff0d157b5000809414e`)
- Head commit: `475eacf7ef391e468f7ac02dc7325504d43e4aa2` (`Drop unused walkthrough and ugc-live clip fallbacks.`)
- Live `js/method.js` sha256: `86b956f1351384b959543aeda0436a97947c0f71c3a3366cc3fa965306309b7b`
- Live `js/method.js` etag: `W/"d2a5c0e0ecc461b1cf580327760e9200-ssl-df"`
- Live sha matches `git show 475eacf:js/method.js`
- Live `css/styles.css` sha256: `aad083a90d71fc02372991b0960cc666ec74437d02290138bc8f8ffad97d8e4d` (unchanged from prior)
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus a second `X-Robots-Tag: noindex`, plus HTML `<meta name="robots" content="noindex, nofollow">` on `/`, `/why/`, `/when/`, `/privacy/`
- Canonicals stay on `https://howtofixhiccups.com/`
- PR3 is still draft. Body still says preview-only / do not merge.

Prior crawl was deploy `6a9db5d94ef8a300088f5993` and `method.js` sha `2eb9514e84d823753b64ec8ed5f891f4dc2a27f658055dfc2271d78752746fbd`. This is a new deploy.

## Prior merge blockers

| Claimed fix | Result | Evidence |
|---|---|---|
| `method-walkthrough.mp4` → 404 | PASS | GET `https://deploy-preview-3--howtofixhiccups.netlify.app/media/video/ugc-live/method-walkthrough.mp4` → HTTP/2 404, `text/html`, `x-nf-request-id: 01M1W4HGE1W7WGTM6TGSAFNY3Y`. Gone from PR3 tree. |
| ugc-motion `start.mp4` → 200 | PASS | GET `/media/video/ugc-motion-2026-09-06/start.mp4` → HTTP/2 200, `video/mp4`, 5117158 bytes, etag `3a24c0d6c6340008a274be009120d270-ssl`. ffprobe: 1080x1920, 24fps, 121f, 5.042s, h264. Same bytes as prior. |
| CLIPS ugc-motion only (no ugc-live fallback) | PASS | Live `CLIPS` is only `/media/video/ugc-motion-2026-09-06/` (`start`, `breath-swallow-1`, `breath-swallow-2`, `hold`, `thin-straw-exhale`). `ugc-live` string count in live `method.js`: 0. `sourcesFor()` has no second path. |
| Exp1 Copy link intact | PASS | `#share-btn` inside `#timer-wrap`, after `#timer`. Idle/step1/step2: `hidden: true`. Hold: `hidden: false`, text `Copy link`, aria `Copy link to howtofixhiccups.com`. Click: text `Copied`, clipboard `https://howtofixhiccups.com/`, `htfh-hold-copy` `{"completed":[{"t":1788726885525,"phase":"hold","ok":true}],"forwarded":[],"proves":1,"helperForwards":0}`, `htfh-share-count` `1`. Hidden again off hold. |
| no fight-the-prove CRO | PASS | No scoreboard, streak, or shame copy. Prove store is private localStorage only. Mid-hold method-card CTAs are Stop (abort) and Copy link (Exp1). No competing mid-hold CTA. Share-on-hold not removed. |

## Elite bar

| Bar | Score | Evidence |
|---|---|---|
| 1. True-motion UGC (ugc-motion pack plays) | YES | CDP idle `currentSrc` `.../ugc-motion-2026-09-06/start.mp4`, class `host-video is-on`, `paused: false`, `currentTime` 1.26 → 3.26. Step 1 `breath-swallow-1.mp4` playing. Step 2 `breath-swallow-2.mp4` playing. Hold `hold.mp4` playing. ugc-live never became `src`. Same five files as prior true-motion probe (same byte sizes / etags). first-last PSNR 13–17 dB from prior still applies. Not Ken Burns. |
| 2. Layout animations | YES | No load-in theater. Home paints immediately. CSS sha unchanged: 320ms `rise` on `.timer-wrap`, short phase/still fades, beat-rail `--beat`, host-video opacity when `is-on`. CDP `prefers-reduced-motion: reduce` then reload: `reduced: true`, `#host-video` `hidden: true`, `currentSrc` empty, `paused: true`, still `/assets/ugc/host-idle.webp` stays up. |
| 3. Color-block breakers | YES | Computed backgrounds: `.band-hero` `rgb(245, 245, 247)`, `.band-studio` `rgb(255, 255, 255)`, `.band-steps` `rgb(232, 241, 251)`, `.band-guide` `rgb(255, 255, 255)`, `.band-faq` `rgb(232, 232, 237)`, `.band-limits` `rgb(245, 245, 247)`. Tokens `--bg #f5f5f7`, `--band-paper #ffffff`, `--band-mist #e8e8ed`, `--band-wash #e8f1fb`. Breakers are real. |
| 4. Human copy / no Callie / no blog / no slop / no cure | YES | Live counts: `/` Callie 0, blog 0, guaranteed 0, MedicalWebPage 0. Cure hits are anti-cure only: "A cure claim." and "We do not claim a cure." `/why/` `/when/` `/privacy/` Callie 0, blog 0, cure 0. `/blog` and `/blog/` 301 → `/why/`. `/blog/callies-sequence` 301 → `/`. `/about/` 301 → `/`. Copy is short and instructional. |
| 5. Exp1 mid-hold Copy link | YES | See prior-blocker row. Hold only. Canonical URL. Private prove. Intact. |

Layout/motion elite?: YES

## Residual (not a merge flip)

Unused binaries still GET 200 and are not in `CLIPS`:

- `/media/video/ugc-live/host-*.mp4` (five files, 46229720 bytes). Prior used these as fallback. This deploy unwired them. They are now orphaned on the publish tree.
- `/media/video/ugc-motion-2026-09-06/method-full.mp4` (7373191 bytes). Already unused on the prior crawl. Prior did not fail merge on it.

Same class as unused fat. Not the named blocker. Named blocker was the 46MB walkthrough. That file is 404. Do not move the goalpost to "delete every unused mp4" on this recheck. CoS can strip the orphaned ugc-live pack later. Not required to flip this gate.

## CRO fold

Stand down. No fight-the-prove work. Exp1 stays. Share-on-hold stays. No rewrite.

## Merge

YES on elite+clear+merge-ready.

Do not merge PR3 unless Elite+clear+merge-ready is YES. It is YES.

Even then CoS owns the Mike ping. This skeptic does not ping Mike. This skeptic does not merge. PR3 is still draft and still labeled preview-only by the authors.
