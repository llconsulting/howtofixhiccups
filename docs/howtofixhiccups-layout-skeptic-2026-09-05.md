# howtofixhiccups-layout-skeptic-2026-09-05

Overall: KEEP WITH FIXES
Merge gate: NO
One-line why: Paper/mist/wash bands and mid-hold Copy link are real on the live preview; true-motion is still a labeled Ken Burns stand-in; load-in enter is theater; do not merge, do not spend.

Crawl: https://deploy-preview-3--howtofixhiccups.netlify.app/  
Deploy id on all four pages: `6a9cba0ab5696600089e7bf2`  
Headers: `X-Robots-Tag: noindex, nofollow` + `noindex`  
Long slugs: `/why-hiccups-start/` 301 → `/why/`; `/when-to-stop/` 301 → `/when/`  
Evidence date: 2026-09-06. Live HTML/CSS/JS/assets + browser pass. No invented clips.

## Elite bar check (1–5 pass/fail + evidence)

### 1. Animations: FAIL

Quiet in the useful bits. Theater in the load-in. Reduced-motion hole on the host still.

Pass-shaped pieces:
- Timer ring is a thin blue stroke, 90ms dash step, count scale `1.03`. Browser hold shot at 13s is calm, not flashy.
- Beat rail fill `420ms`. Step still crossfade `220ms`. Video fade `320ms`.
- `/css/styles.css` gates `.band`, `h1`, and `.hero-lead span` enter behind `@media (prefers-reduced-motion: no-preference)`.
- `/js/method.js` `playClip()` returns and `hideClip()` when `prefers-reduced-motion: reduce` matches.
- Idle has no mp4 `src`. Host is a still. No looping Ken Burns before Start.

Fail evidence:
- Every `.band` gets `animation: enter 720ms` plus delays `50/90/110/130ms`. Hero lead is four staggered spans (`40/90/140/190ms`). That is page-load theater, not method motion.
- Reduced-motion kill list includes `.host-video` and `.timer-count`. It does not include `.host-still`. Step change still punches opacity to `0.35` for visitors who asked for reduce.
- After Start, JS still assigns `/assets/video/*.mp4` and fades the video on. Those files are Ken Burns of one still (see bar 3). That is slop motion standing in for UGC.

Not seizure-y. Not KEEP-clean.

### 2. Color-block breakers: PASS

Bands are layout breakers. Apple-clean. Not palette chaos.

Live tokens in `/css/styles.css`:
- `--bg: #f5f5f7`
- `--band-paper: #ffffff`
- `--band-mist: #e8e8ed`
- `--band-wash: #e8f1fb` (same as `--accent-soft`)
- `--accent: #0066cc`

Home stack: hero gray → studio paper → steps wash → guide paper → faq mist → limits gray. One blue wash. No gradient fills in the band rules.

Browser: pale periwinkle behind the written method card; white/mist elsewhere; hero to studio is a hard paper break. `/why/` is gray then paper. `/privacy/` is gray then paper. No rainbow, no AI wash stack.

### 3. True-motion UGC: FAIL

Higgsfield Plus is still the block. The preview pretends the slot is true-motion. It is not.

Do not invent that true-motion clips exist. These files exist and they are still-derived:

| URL | HTTP | bytes | duration | size |
|---|---|---|---|---|
| `/assets/video/breath-swallow-1.mp4` | 200 | 2238921 | 8.00s | 1080×1920 @30 |
| `/assets/video/breath-swallow-2.mp4` | 200 | 2205843 | 8.00s | 1080×1920 @30 |
| `/assets/video/hold-30.mp4` | 200 | 6816051 | 30.00s | 1080×1920 @30 |
| `/assets/video/thin-straw-exhale.mp4` | 200 | 3320074 | 14.00s | 1080×1920 @30 |

Frame pull t0 / tmid / tend: same brunette, same cream knit, same wall. Crop and zoom drift only. Exhale t0/tend is a pout still, not a blow. Hold t0/tend is a smile still, not a hold. PSNR t0→end: swallow-1 avg 18.34, hold avg 19.54, exhale avg 20.69. That is Ken Burns of one photo, not a swallow / hold / blow take.

Public HTML pretends anyway:
- `<div class="host-frame" data-slot="true-motion-ugc">`
- `<video … data-slot="true-motion-ugc">`
- `<figure … data-host="brunette-ugc">`

Idle is honest: still `/assets/ugc/host-idle.webp` (200, 35076 bytes, 800×450), video has no `src`, `hidden`. Caption is "Follow along." Browser after Start: still swap, no swallow, no blink, no true-motion player chrome. JS will still `play()` the Ken Burns files when reduce is off.

`/assets/video/method-full.mp4` and `/start.mp4` 404. Fine. The four phase files are the lie.

### 4. No Callie: PASS

No Callie / callies-sequence / named-person string in live `/`, `/why/`, `/when/`, `/privacy/`, 404 body, `/css/styles.css`, `/js/method.js`, `/robots.txt`, `/sitemap.xml`.

- `/callies-sequence/` 404
- `/callie` 404
- `/README.md` 404
- Schema is `WebSite` / `Organization` / `HowTo` / `WebPage` / `BreadcrumbList`. No `Person`. No `MedicalWebPage`.
- Host alt is "Young woman with brown hair and green eyes…" No name.
- Visible chrome: howtofixhiccups only.

### 5. Exp1 copy-link: PASS

Mid-hold Copy link is present and has a real copy/share path.

Live home markup (idle hidden):
`<button class="share-btn" id="share-btn" type="button" hidden aria-label="Copy link to howtofixhiccups.com">Copy link</button>`

`/js/method.js`:
- `STEPS.hold.copyLink: true` only. Blow does not set it.
- `showShare(Boolean(step.copyLink))` on step enter. Hidden on idle, finish, reset.
- `shareLink()` no-ops unless `inHoldWindow()` (running + step id `hold`).
- First path: `navigator.clipboard.writeText("https://howtofixhiccups.com/")`, label → "Copied" for 1600ms.
- Fallback: `navigator.share({ title, url })`.
- Private prove: `localStorage.htfh-hold-copy` completed only after a successful copy/share inside the hold.

Browser: hold card "STEP 3 OF 4", ring at 13 seconds, pill "Copy link" under the ring. Not a Share-tap with no path.

Live click "Copied" flash was not captured in the browser session. That does not make the path theater. The path is in the shipped JS.

## Fail rows

| Row | Severity | Evidence |
|---|---|---|
| True-motion slot is a lie | Elite fail | `data-slot="true-motion-ugc"` twice. Four Ken Burns mp4s 200. Frames are crop/zoom of one still. Browser showed stills. |
| Page-load enter theater | Elite fail | All `.band` + staggered hero spans animate in when reduce is off. |
| Reduced-motion hole | Fix | `.host-still` fade not killed. |
| Ad slot leftover | Kill | Empty `<aside class="ad-slot">` on `/`, `/why/`, `/when/`. CSS height 0. No AdSense script. Slot is a landmine. |
| Ads tease | Kill | `/privacy/`: "If we show ads later, we will update this page." |
| Dead JPGs still public | Weight | `/media/stills/host-*.jpg` 200, ~278–294KB each, ~1.39MB total. Not referenced by live HTML/JS. Idle LCP is the 35KB webp. |
| Ken Burns payload after Start | Weight | 13.9MB of mp4 wired in `CLIPS`. `preload="none"` so not idle LCP. After Start the page will pull megabytes of fake motion. |

## Must fix before Mike layout yes

1. Strip `data-slot="true-motion-ugc"` and `data-host="brunette-ugc"` from public HTML. Keep the still. Do not play the Ken Burns mp4s as the product. True-motion stays empty until Higgsfield Plus.
2. Kill page-load `enter` on `.band` / `h1` / `.hero-lead span`. Keep timer ring, rail fill, and reduce-gated still swap if they stay quiet.
3. Add `.host-still` (and the opacity punch) to the `prefers-reduced-motion: reduce` kill list.
4. Delete the `.ad-slot` nodes and the privacy "ads later" line. No AdSense.
5. 404 the leftover `/media/stills/*.jpg` pack. They are not the LCP path and they should not stay public.

## Blocked (no merge no spend)

- True-motion UGC. Higgsfield Plus. Stills are the host. Ken Burns is not a substitute. Do not generate. Do not buy a plan from this pass.
- Merge. Draft PR. Preview noindex. Two elite fails. Prior merge blockers are not gone.
- Domain buy language: none on the four pages. Still do not buy the domain from this pass.
- AdSense: none loaded. Do not add it.
- Cure claims: none. Home says "A cure claim." under "What this page is not" and "We do not claim a cure." / "We do not claim a success rate." Keep that. Do not add a rate.
- Soft-sell: none except the ads-later line. Kill that line. Do not add a list, a funnel, or a merch beat.
- Fat LCP: idle still is 35KB webp, preloaded, `fetchpriority="high"`. Not a fat LCP regression. Inter from Google Fonts is an extra request, not a 2MB face. Do not "fix" LCP by generating new hero video.

Judge: layout bands KEEP. Motion KEEP WITH FIXES (cut the load-in). True-motion CUT until Plus. Copy-link KEEP. Merge NO.
