# howtofixhiccups-layout-skeptic-recheck-2026-09-05

Overall: KEEP clean
Merge gate: NO
Layout elite aside from UGC?: YES
Claimed must-fixes landed on deploy `6a9cbdde89420e00081a693c`. Stills are the product. Load-in theater is gone. Ken Burns is not played. Bands and hold Copy link stay. True-motion UGC remains a Higgsfield hold.

Crawl: https://deploy-preview-3--howtofixhiccups.netlify.app/
Also: `/why/` `/when/` `/privacy/` `/css/styles.css` `/js/method.js` `/assets/ugc/*` `/assets/video/*`
HTML deploy id: `6a9cbdde89420e00081a693c`
Site id: `98bc9309-9e89-4c43-b111-91c1df0c4768`
Latest preview commit named on the Netlify comment: `73fdb932f327770f3ba3002eef99d9a3f04e7743`
Date of this crawl: 2026-09-06. Filename kept as specified.

## Prior must-fixes check (landed / not)

1. Strip load-in theater: LANDED.
   Live `/css/styles.css` has no `@keyframes enter` and no `.band` / `h1` / `.hero-lead span` enter animation. Live `/` HTML has no splash, curtain, overlay, or Enter gate. First paint is header + hero + studio. Waited past 3s. No theater after paint.

2. Stills primary: LANDED.
   Idle media is `<img id="host-still" src="/assets/ugc/host-idle.webp">`. Preload is that WebP only. Live JS `STILLS` maps idle / inhale1 / inhale2 / hold / exhale to matching WebPs. All five return 200. Start swaps stills. Video has no `src` on idle.

3. No Ken Burns as product: LANDED.
   Live JS: `const CLIPS = {}`. `playClip()` hits empty map and `hideClip()`. During Start → swallow → swallow → hold, no `.mp4` request. Host frame stays a still. Not a Ken Burns product play.

4. Bands keep: LANDED.
   Home: `band-hero` (gray) → `band-studio` (paper) → `band-steps` (accent wash `#e8f1fb`) → `band-guide` (paper) → `band-faq` (mist `#e8e8ed`) → `band-limits` (gray). `/why/` and `/when/` keep hero / guide / faq / limits. `/privacy/` keeps hero / guide. Visible band break on scroll.

5. Exp1 Copy link keep: LANDED.
   `#share-btn` text `Copy link` sits inside `#timer-wrap`. `copyLink: true` only on hold. Idle / step 1 / step 2: button absent. Hold: `#method` has `is-running is-timing`, `#timer-wrap` `display:grid`, `#share-btn` `hidden=false` `display:flex` text `Copy link` under the 30s ring. Copies `https://howtofixhiccups.com/`.

## Elite bar 1–5 pass/fail + evidence

1. Motion / load-in theater: PASS.
   No enter keyframes. No delayed band choreography. Remaining motion is local: phase fade, beat-rail fill, timer `rise`, still opacity swap. First paint is the page. Desktop and 375 mobile: no curtain.

2. Host media honesty (stills vs Ken Burns product): PASS with hold.
   Product is stills. Caption is `Follow along.` No "watch the video", no "true motion", no Callie. Empty `<video id="host-video">` stays `hidden` with no `src`. `CLIPS` is empty. True-motion UGC is not on the page. Higgsfield free / Plus still blocks real motion. That is a hold, not a layout fail.

3. Color bands / scroll rhythm: PASS.
   Paper / mist / one accent wash. Home and inner pages. Studio white against hero gray. Steps wash against studio paper. FAQ mist against guide paper. Not one flat gray column.

4. No Callie: PASS.
   `/` `/why/` `/when/` `/privacy/` HTML: zero `Callie` / `callie`. `/blog/callies-sequence` 301s to `/`. `/assets/ugc/README.md` 404. Wordmark is `howtofixhiccups`.

5. Exp1 Copy link: PASS.
   Hold-only. Under the ring. Not on idle. Not on swallows. Not after Done. First browser pass missed the hold window. Second pass on the live hold recorded the button at 264×54 under the countdown.

## Fail rows

None for the claimed must-fixes. None that drop elite aside from the known UGC hold.

Residual, not a product fail: four Ken Burns files still 200 at
`/assets/video/breath-swallow-1.mp4` (2.2MB),
`/assets/video/breath-swallow-2.mp4` (2.2MB),
`/assets/video/hold-30.mp4` (6.8MB),
`/assets/video/thin-straw-exhale.mp4` (3.3MB).
Not referenced by live `CLIPS`. Not requested after Start. Dead files on the CDN. Slot code (`playClip` / `#host-video`) remains but cannot play without a clip map.

## Blocked

True-motion UGC on the same brunette. Higgsfield free / Plus. Do not spend.
PASS-with-hold: stills-only, slots empty, no true-motion copy, no Ken Burns product play.
FAIL later if a clip map is wired back to those mp4s, or if copy claims live motion before a real clip exists.

Merge: NO.
Domain: NO.
Spend: NO.
AdSense: NO.
