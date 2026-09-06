# howtofixhiccups PR3 UGC+layout skeptic

Date: 2026-09-06
Role: Skeptic. KEEP/CUT only. No rewrite. No merge. No spend.
Preview: https://deploy-preview-3--howtofixhiccups.netlify.app/
PR: https://github.com/llconsulting/howtofixhiccups/pull/3

## Verdict

Overall: KEEP clean
Merge gate: NO
Elite+clear+merge-ready?: NO
One-line why: ugc-motion pack is wired, plays, and is true motion; ugc-live fallback is weaker true-motion, not Ken Burns, and stayed off the live src. Unused 46MB walkthrough is still published, so this is not merge-ready.

## Crawl

Recorded NOW from the live preview, not from a stale local tree.

- Deploy id: `6a9db5d94ef8a300088f5993` (`data-netlify-deploy-id` on `/`)
- Live `js/method.js` sha256: `2eb9514e84d823753b64ec8ed5f891f4dc2a27f658055dfc2271d78752746fbd`
- Live `css/styles.css` sha256: `aad083a90d71fc02372991b0960cc666ec74437d02290138bc8f8ffad97d8e4d`
- Preview robots: `X-Robots-Tag: noindex, nofollow` plus HTML `noindex, nofollow`

`CLIPS` prefers `/media/video/ugc-motion-2026-09-06/` then falls back to `/media/video/ugc-live/host-*.mp4`:

```
idle:    start.mp4                 then host-idle.mp4
inhale1: breath-swallow-1.mp4      then host-breath-1.mp4
inhale2: breath-swallow-2.mp4      then host-breath-2.mp4
hold:    hold.mp4                  then host-hold.mp4
exhale:  thin-straw-exhale.mp4     then host-exhale.mp4
```

Preferred pack GET 200 `video/mp4` on this deploy:

| File | Bytes | Probe |
|---|---|---|
| start.mp4 | 5117158 | 1080x1920, 24fps, 121f, 5.042s, h264 |
| breath-swallow-1.mp4 | 5251929 | 1080x1920, 24fps, 121f, 5.042s, h264 |
| breath-swallow-2.mp4 | 5068366 | 1080x1920, 24fps, 121f, 5.042s, h264 |
| hold.mp4 | 9273778 | 1080x1920, 24fps, 241f, 10.042s, h264 |
| thin-straw-exhale.mp4 | 9317102 | 1080x1920, 24fps, 241f, 10.042s, h264 |

`/media/video/ugc-motion-2026-09-06/idle.mp4` is 404. Wired idle file is `start.mp4`.

## 1. True-motion UGC (ugc-motion pack)

PASS.

Chrome CDP on this deploy, `prefers-reduced-motion` off:

- Idle: `#host-video` `currentSrc` = `.../ugc-motion-2026-09-06/start.mp4`, class `host-video is-on`, `paused: false`, `currentTime` 3.59 then 5.04
- Start / step 1: `.../breath-swallow-1.mp4`, `paused: false`, `currentTime` 0.86
- Step 2: `.../breath-swallow-2.mp4`, `paused: false`, `currentTime` 0.95
- Hold: `.../hold.mp4`, `paused: false`, `currentTime` 0.95
- Fallback ugc-live paths were not used. Preferred pack played.

Frame-diff on the five preferred files (gray 270x480, samples 0% to 95%, plus ~0.9s mid window):

| Clip | first-last PSNR | first-last MAD | center MAD | best shift MAD | shift residual | best zoom MAD | mid pair MAD | mid pair PSNR |
|---|---|---|---|---|---|---|---|---|
| start | 17.27 | 23.46 | 22.25 | 12.21 | 0.521 | 23.46 | 4.733 | 29.22 |
| breath-swallow-1 | 14.52 | 32.90 | 32.54 | 31.85 | 0.968 | 32.90 | 6.512 | 27.47 |
| breath-swallow-2 | 15.11 | 29.11 | 27.41 | 26.49 | 0.910 | 29.11 | 4.863 | 30.58 |
| hold | 16.19 | 26.97 | 24.93 | 12.32 | 0.457 | 26.97 | 4.519 | 31.45 |
| thin-straw-exhale | 13.23 | 37.55 | 31.87 | 34.20 | 0.911 | 37.55 | 4.735 | 29.28 |

Ken Burns of one still would keep first-last PSNR high, and a global shift or zoom would eat most of the MAD. That is not what these numbers are.

- first-last PSNR is 13 to 17 dB. Large change.
- Zoom test does not beat the raw first-last MAD on any preferred clip (`best_zoom_mad` equals first-last MAD). Not a zoom of one still.
- breath-1, breath-2, exhale keep 91% to 97% of first-last MAD after the best small global shift. Local subject change, not a pan.
- start and hold have more head/camera travel (shift residual 0.52 / 0.46) and still mid-window pair MAD 4.5+. Consecutive frames are not near-identical.
- Center MAD is in the same band as edge MAD. Not an edge-only Ken Burns zoom.

Visual frames (same files):

- start f00 overlay "Start here"; f07 overlay "Breathe easy". Caption change plus face/hair change.
- breath-swallow-1 f00 overlay "Deep breath", closed mouth; f03 mouth open mid-breath; f07 overlay "Then swallow".
- hold f00 overlay "Hold"; f04 overlay "Stay calm".
- thin-straw-exhale f00 pursed lips, overlay "Thin straw"; f04 tighter O-mouth, overlay "Slow exhale".

This is baked-in true motion with on-clip captions. Not a still with a CSS or Ken Burns pan.

See CoS addendum for the ugc-live sibling pack. It was not the live `src` on this crawl.

No Higgsfield spend this crawl. Pack was already 200.

## 2. Layout animations

PASS.

- No page-load theater. Home paints immediately. No staggered section reveal. No hero fade-in keyframes.
- Only CSS motion: 320ms `rise` on `.timer-wrap` when the hold/blow timer appears; short phase and still fades; beat-rail width; host-video opacity 320ms when `is-on`.
- Idle UGC clip autoplays muted via `renderIdle()` -> `playClip("idle")`. That is the host slot, not layout theater.
- `@media (prefers-reduced-motion: reduce)` zeros those transitions/animations.
- CDP with `prefers-reduced-motion: reduce` then reload: `reduced: true`, `#host-video` `hidden: true`, `currentSrc` empty, `paused: true`, still `/assets/ugc/host-idle.webp` stays up. Clips do not play.

## 3. Color-block breakers

PASS.

Live CSS tokens: `--bg #f5f5f7`, `--band-paper #ffffff`, `--band-mist #e8e8ed`, `--band-wash #e8f1fb`.

Home bands on this HTML:

- `.band-hero` paper-gray `#f5f5f7`
- `.band-studio` paper `#ffffff`
- `.band-steps` wash `#e8f1fb`
- `.band-guide` paper `#ffffff`
- `.band-faq` mist `#e8e8ed`
- `.band-limits` `#f5f5f7`

Browser scroll matches: white studio, pale blue written steps, white how-to, gray FAQ/limits. Breakers are real, not one long wash.

## 4. Human copy (no Callie / no blog / no slop / no cure)

PASS.

Home, `/why/`, `/when/`, `/privacy/`: Callie 0, blog 0, MedicalWebPage 0, guaranteed 0.

Anti-cure on home, exact:

- "There is no 100% method on this site."
- "A cure claim." under "What this page is not"
- "We do not claim a cure."
- "We do not claim a success rate."
- "Does this always work? No."
- "We do not promise they stop at 30 seconds."

`/why/` is mechanism plus ordinary triggers. "It is not a guarantee."
`/when/` is stop rules (~48 hours / two days, warning signs, do not loop).
`/privacy/` is timer-on-device, no sell, no health collection.

Blog is not a live page. 301s:

- `/blog` and `/blog/` -> `/why/`
- `/blog/callies-sequence` and `/blog/callies-sequence/` -> `/`
- `/about/` -> `/`

No Callie string on the four live pages. Redirect slugs only.

## 5. Exp1 mid-hold Copy link

PASS. Intact.

- `#share-btn` sits inside `#timer-wrap`, after the ring. Label "Copy link". `aria-label` "Copy link to howtofixhiccups.com".
- Hidden on idle, step 1, step 2. `copyLink: true` only on hold.
- CDP hold: wrap shown, count "29" then "10", share hidden false, text "Copy link", next sibling after `#timer`.
- Click with clipboard permission: label "Copied". Clipboard `https://howtofixhiccups.com/`. `localStorage.htfh-hold-copy` `{completed:[{phase:"hold",ok:true}], proves:1}`.
- Share is hidden again after hold (blow). `inHoldWindow()` is hold-only.

## Prior merge blockers (note only)

Still true. Not a product CUT.

1. Unused fat: `/media/video/ugc-live/method-walkthrough.mp4` is HTTP 200, 46225581 bytes. Not in `CLIPS`. Ken Burns `/assets/video/*.mp4` 404. Desk READMEs / MANIFEST 404.
2. Production host `https://howtofixhiccups.netlify.app/` still sends `X-Robots-Tag: index, follow`. This PR already registers `noindex-netlify-host` on `/*` and does not set a production index header. That fix is not live until merge.

## Elite bar score

1. True-motion UGC (ugc-motion pack): YES
2. Layout animations (no load-in theater; reduced-motion): YES
3. Color-block breakers: YES
4. Human copy, no Callie / blog / slop / cure: YES
5. Exp1 mid-hold Copy link: YES

Layout/motion elite?: YES

## CoS addendum: prefer ugc-motion over ugc-live

Same deploy `6a9db5d94ef8a300088f5993`. Same live `CLIPS` fallback chain. No merge of PR3 or PR20.

Sibling PR20 (`https://github.com/llconsulting/howtofixhiccups/pull/20`) is context only. Title: "Wire Start to ugc-live true-motion (preview only)". State on this crawl: merged draft, stacked on PR3. Body reserved `ugc-motion-2026-09-06/` as "not the product" and pointed Start at `/media/video/ugc-live/host-*.mp4`. Current PR3 preview inverted that: ugc-motion is first, ugc-live is second. Do not merge either.

### Product path (what played)

KEEP ugc-motion as the product path.

CDP `currentSrc` used only `/media/video/ugc-motion-2026-09-06/` (`start.mp4`, `breath-swallow-1.mp4`, `breath-swallow-2.mp4`, `hold.mp4`). ugc-live never became `src`. Primary pack is real true-motion (section 1).

### Is ugc-live Ken Burns / still-zoom theater?

NO. Do not CUT it as Ken Burns. It is weaker true-motion.

All five fallback files GET 200, 1280x720, 24fps, h264:

| Clip | first-last PSNR | first-last MAD | center MAD | best shift MAD | shift residual | best zoom MAD | mid pair MAD | mid pair PSNR |
|---|---|---|---|---|---|---|---|---|
| host-idle | 17.78 | 20.71 | 24.33 | 10.08 | 0.486 | 18.88 | 2.065 | 34.77 |
| host-breath-1 | 16.69 | 22.49 | 30.98 | 18.16 | 0.808 | 22.49 | 2.966 | 33.09 |
| host-breath-2 | 18.47 | 16.96 | 22.12 | 14.23 | 0.839 | 16.96 | 2.122 | 36.62 |
| host-hold | 16.52 | 24.39 | 30.48 | 10.86 | 0.446 | 22.29 | 1.815 | 37.76 |
| host-exhale | 13.93 | 34.44 | 35.26 | 30.52 | 0.886 | 34.44 | 2.138 | 34.62 |

- first-last PSNR 13.93 to 18.47. Not a frozen still.
- Zoom does not eat the MAD. breath-1, breath-2, exhale: `best_zoom_mad` equals first-last MAD. idle / hold: zoom only shaves ~2 MAD points. Not still-zoom theater.
- breath-1, breath-2, exhale keep 81% to 89% of first-last MAD after the best small global shift. Local subject change.
- idle / hold have more head/camera travel (shift residual 0.49 / 0.45) and still mid-window pair MAD 1.8 to 2.1. Consecutive frames are not near-identical.
- Center MAD is at or above edge MAD on every clip. Opposite of an edge-only Ken Burns zoom.

Visual (same files): same brunette host, landscape indoor set (door, wood shelf, plants). No baked captions. breath-1 f00 closed mouth, f03 mouth open mid-breath. exhale f00 slight pout, f04 tighter O-mouth blow. That is subject motion, not a pan of one still.

Weaker than ugc-motion on the product path: mid pair MAD 1.8 to 3.0 vs 4.5 to 6.5; landscape 16:9 vs portrait 9:16; no on-clip step captions.

### Fallback KEEP/CUT

- ugc-motion primary: KEEP on the product path.
- ugc-live as Ken Burns theater: CUT that claim. It is not Ken Burns.
- ugc-live on the live product src: KEEP it off. Primary pack is 200 and already playing. Fallback did not fire.
- Dual chain + unused `method-walkthrough.mp4` (46MB, not in `CLIPS`): still unused fat. Note only. Not a product CUT.

## CRO fold

Source: CoS conversion note `louislynn-hiccups-conversion-2026-09-06.md`. Walked preview only. Record. Do not implement.

Conversion on this site is finish the method. Not a lead form. Confirmed: no form, no email capture, Start begins the four steps.

KEEP Exp1 Copy link. It is live on hold only. Clipboard writes `https://howtofixhiccups.com/` or `navigator.share`. Prove store `htfh-hold-copy`. This crawl already scored that PASS.

VETO any CRO that removes Share-on-hold, hides Copy link, fights the prove, or adds a competing mid-hold CTA. Skeptic stand down. Do not implement fight-the-prove CRO.

CRO P0: Share-on-hold present. Record only.
CRO P1 note only: mid-method drop risk is two "I swallowed" confirms plus the 30s hold with Copy link, plus Why / When exits in the hero before Start. Secondary "Start the method" is `href="#method"` only. Start path is clean.

Production `https://howtofixhiccups.netlify.app/` is still Callie (title includes "Callie's method", Callie count 10). That is not the walked host. Preview has no Callie. FAQ anti-cure language holds ("There is no 100% method on this site.").

## Merge

NO.

Product is KEEP clean. Merge is not. Unused 46MB walkthrough is still on the publish tree. PR3 is still draft / do-not-merge from the authors. Do not merge PR3. Do not merge PR20. CoS: do not ping Mike for merge.
