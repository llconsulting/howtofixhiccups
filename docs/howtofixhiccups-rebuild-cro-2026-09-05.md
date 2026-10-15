---
title: howtofixhiccups rebuild CRO
date: 2026-09-05
walked: 2026-09-06
status: live-site-read-rebuild-not-live
live_url: https://howtofixhiccups.netlify.app/
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-rebuild-cro-2026-09-05.md
notes: >
  One file. Conversion read of the CURRENT live site.
  Rebuild is not the walked surface. Do not invent rates.
  Brand locks from CoS / copy deck PR #2.
brand: howtofixhiccups
voice: faceless
focus: CRO
---

# howtofixhiccups rebuild CRO

Conversion read for the Apple + UGC rebuild. Critique is of the **current live site**. The rebuild must fix the issues below. This file is not a growth deck and does not change live pages.

## Walk record

| Field | Value |
| --- | --- |
| Date | 6 September 2026 (filename date 2026-09-05) |
| Live URL walked | https://howtofixhiccups.netlify.app/ |
| Canonical claimed in HTML | `https://howtofixhiccups.com/` (DNS for `.com` did not resolve during this walk) |
| Rebuild status | Not live. Preview is not the conversion surface. The walked host still serves the old Callie + Notes IA. |
| Rebuild copy cross-check | Draft copy deck in sibling PR #2 (`docs/howtofixhiccups-rebuild-copy-2026-09-05.md`). Locked brand: howtofixhiccups / How to Fix Hiccups. Sequence name: **the method**. No personal names. No blog. |
| Method of walk | Fetched HTML/CSS/JS for `/`, `/about/`, `/privacy/`, `/blog/`, three Notes posts, `/notes/` (404), `robots.txt`, `sitemap.xml`. Inspected `#start-btn` flow in `/js/method.js`. No browser session. No analytics access. |
| Pages walked | `/` · `/about/` · `/privacy/` · `/blog/` · `/blog/callies-sequence/` · `/blog/ordinary-hiccups/` · `/blog/when-hiccups-linger/` · `/notes/` |

This repo on `main` is a README stub. Live HTML is the source of truth for what a hiccuping visitor sees today.

## Constraint cross-check

CoS / copy deck locks, checked against live HTML:

| Lock | Live today | Rebuild must |
| --- | --- | --- |
| Faceless brand: howtofixhiccups / How to Fix Hiccups | Wordmark is correct. Subtitle, title, schema, lede, footer all say **Callie's method**. | Strip every personal name from chrome, CTAs, video VO, on-screen text, schema, footer. |
| Call the sequence **the method** | Live says "Callie's method", "Sequence", "walkthrough", "four beats". | Use **the method**. Nav label on home: `The method`. |
| No Callie / no personal names | "Callie" appears throughout titles, OG, HowTo name, header subtitle, body, footer, BlogPosting `author.name`. | Zero names. HowTo author is Organization, not Person. |
| No blog. Kill `/blog/`, `/notes/`, `/about/` named-person pages | `/blog/` is live and in primary nav. `/about/` is a named-person page. `/notes/` 404s. Sitemap lists all three Notes URLs. | Four routes only. Copy deck: `/`, `/why-hiccups-start/`, `/when-to-stop/`, `/privacy/`. Do not rebuild a Notes index. |
| Apple-clean bar (calm, sparse chrome) | Sticky warm paper header, two-line wordmark, three nav items (Sequence / Notes / About), breadcrumbs on every page. | One-line wordmark. Sparse nav. No Notes. No About. No breadcrumb trail on home. |
| Not medical advice. No cure rates, studies, doctor endorsements, invent metrics | Live disclaimer is honest and does **not** invent rates. Good. Keep that. | Keep the fact. Do not add studies, % , clinician quotes, or a mechanism. |

## What converts here

The visitor is mid-hiccup. The conversion event is **Start the method** (or doing the four beats from the visible text). Not a signup. Not a scroll to Notes.

Fastest path: one thumb tap that begins the method, with the four beats readable even if video or the timer fails.

---

## P0 — blocks the hiccuping visitor

### P0-1. Start sits under a large idle timer, not in the first thumb zone

- **URL:** https://howtofixhiccups.netlify.app/
- **Evidence:** DOM order in `index` is sticky header → eyebrow → `h1` → lede → notice pill → method card (kicker + label + copy) → `.timer` sized `min(72vw, 16.5rem)` → then `#start-btn` labeled `Start`. CSS has no sticky/fixed Start, no bottom bar, no `env(safe-area-inset-bottom)`. At `<800px` the method is a single column; the ring is the tallest object in the card.
- **Why it fails:** A visitor who is already hiccuping has to read a title, a four-beat lede, and a ~square countdown graphic before they can tap Start. The ring shows `30` / `second hold ahead` while idle, so the page looks like a timer that has not been armed.
- **Rebuild must:** Put the primary Start control in the first mobile viewport, above or beside a compact timer, not under a 72vw ring. Keep a second `Start the method` control after the written beats (copy deck tutorial CTA). Do not make the idle ring the hero.

### P0-2. No host video. Text-only method is slower to copy than a face-led take

- **URL:** https://howtofixhiccups.netlify.app/
- **Evidence:** Homepage HTML has no `<video>`, `<audio>`, `<iframe>`, or media source. `/video/`, `/watch/`, `/method/` return 404. The only "demo" is the timer card plus the `<ol>` walkthrough.
- **Why it fails:** A hiccuping visitor converts by *doing* the beats. Reading four sentences while trying to stack a second breath is slower than watching one take. Live offers only text + a clock.
- **Rebuild must:** Place the UGC host video as a **parallel demo**, not a gate. Copy deck: on-camera, unnamed, one take per step, VO + one-line on-screen. Start must work if the file is missing, muted, or blocked. Do **not** require a watch-through before Start. Do **not** name the host. Do **not** invent a face.

### P0-3. Personal-name chrome steals the first read and breaks the faceless rebuild

- **URL:** https://howtofixhiccups.netlify.app/ and every walked page
- **Evidence:** `<title>` is `How to fix hiccups — Callie's method`. Header subtitle is `Callie's method`. HowTo JSON-LD `name` is `Callie's method for hiccups`. Phase kicker idle state is `Callie's method`. Footer: `Callie's method is a personal sequence`. `/about/` H1 is `About Callie's method` and opens with `Callie is the person who showed this sequence`. `/blog/callies-sequence/` BlogPosting `author.name` is `Callie`.
- **Why it fails:** First paint sells a person, not the method. That is the opposite of the faceless brand lock. It also sends the visitor toward About / origin instead of Start.
- **Rebuild must:** Wordmark `howtofixhiccups` or `How to Fix Hiccups`. Sequence name **the method**. No personal name in title, H1, buttons, alt, VO, schema, or footer.

### P0-4. Primary nav routes a mid-spell visitor into Notes and About

- **URL:** https://howtofixhiccups.netlify.app/ · https://howtofixhiccups.netlify.app/blog/ · https://howtofixhiccups.netlify.app/about/
- **Evidence:** Header nav is `Sequence` · `Notes` · `About`. Footer repeats those plus Privacy. Home prose links to `/blog/ordinary-hiccups/`, `/blog/when-hiccups-linger/`, `/about/`. `/blog/` is a three-card index (`schema.org/Blog`). `/about/` is a named-person page with no Start button. Sitemap lists all seven URLs.
- **Why it fails:** The conversion surface is `/`. Notes and About are reading. A person with hiccups who taps Notes leaves the only Start control on the site.
- **Rebuild must:** Kill `/blog/`, `/blog/*`, `/notes/`, `/about/`. Sparse nav: `The method` · `Why they start` · `When to stop` · `Privacy` (Privacy may live in the footer only). Do not rebuild a Notes index.

---

## P1 — friction on Start, timer, trust, mobile

### P1-1. The 30s / 10s clocks are the method. Extra inhale clocks and a locked hold are not

- **URL:** https://howtofixhiccups.netlify.app/ (`/js/method.js`)
- **Evidence:** After Start, steps 1–2 run `inhaleMs: 5000` + `swallowMs: 2800` each, then auto-advance. `#next-btn` (`I swallowed`) is disabled for 280ms, then enabled, so the visitor *can* skip the inhale clock. Step 3 is `durationMs: 30000` with `#next-btn` **hidden** (cannot skip). Step 4 is `10000` with next hidden. An optional extra `5000` then shows `I'm done`. `#reset-btn` is visible for the whole run. The written `<ol>` walkthrough is **not** hidden. Home copy says "The on-page countdown keeps the hold honest. Do not cut it short."
- **Why it helps:** A 30-second hold and a 10-second thin blow *are* the product. A clock that keeps those honest is conversion, not a paywall.
- **Why it blocks:** Two ~8-second inhale animations (~15s) fire before the hold. That is not a locked method beat. The idle ring already shows `30`, which reads as a countdown that has not started. During hold, only Reset is tappable next to where Start was — easy to abort a 30-second hold by mistake. There is no pause.
- **Rebuild must:**
  - Keep 30s hold and 10s blow as timed beats. Do not skip them by default. Do not lock the **written** method behind them.
  - Do not add a pre-Start interstitial timer.
  - Let swallows be visitor-paced (`I swallowed` / copy-deck breathe-swallow line). Do not force 5s inhale animations.
  - Idle state: do not show a live-looking `30`. Show Start + helper `30 second hold ahead` (copy deck).
  - Reset / Stop: use copy-deck `Stop`. Keep it reachable but visually secondary so a thumb on Start cannot hit it during the hold.
  - Optional 12–15s extra blow stays optional. Copy deck: `Keep it thin to 12 or 15 if you can.`

### P1-2. Start label and hierarchy are weak for a one-job page

- **URL:** https://howtofixhiccups.netlify.app/
- **Evidence:** One primary button, label `Start`. Helper copy: `Start guides the sequence: …`. No `Start the method`. Header CTA is a text link `Sequence`, not Start. After the walkthrough there is no repeat CTA — only links out to Notes / About. Button style is a sage pill, `min-height: 3rem`, centered under the ring.
- **Why it fails:** `Start` is a generic verb. The page's job is to start **the method**. One instance, buried, with outbound reading links after the steps.
- **Rebuild must:** Hero control `Start` (copy deck). Repeat control after the written beats: `Start the method`. No header nav item that competes with Start. Do not add a second primary of equal weight (Watch, Read notes, Learn why).

### P1-3. Host video vs text: video should convert the first pass; text must still work alone

- **URL:** https://howtofixhiccups.netlify.app/ (no video) · copy deck §6 Video desk pack
- **Evidence:** Live converts only via reading + Start. Copy deck films a faceless UGC host, one take per step, optional 4-second open (`Hiccups. Four steps. Stay still.`).
- **Judgment:** For this intent, **video + Start in the same view** converts faster than text-then-timer. A visitor can match breath to a face. Text is the fallback when autoplay fails, data is tight, or they already know the beats.
- **Rebuild must:**
  - Video plays **with** Start, synced to the beats. It does not replace Start.
  - Default muted / `playsinline`. Sound is optional. Autoplay failure must not block the countdown (rebuild JS already plans this; keep it).
  - Do not stack a tall 4:5 host frame **and** a 78vw timer **and** Start in one mobile column. That recreates P0-1 and makes it worse. On a phone: Start in the thumb zone, timer compact, video secondary or in a shorter frame.
  - Written four beats stay visible without pressing Start and without playing video.
  - No origin-story B-roll. No named host. No "watch first" overlay.

### P1-4. Disclaimer is in the right place on live. Do not turn it into an interstitial

- **URL:** https://howtofixhiccups.netlify.app/ · `/privacy/` · `/blog/when-hiccups-linger/`
- **Evidence:** Home shows a small pill under the lede: `Not medical advice. For ordinary, short-lived hiccups only.` Footer repeats a longer disclaimer on every page. `/privacy/` states the Start/countdown stay in-browser and that the page is not medical advice. `/blog/when-hiccups-linger/` holds stop rules. There is **no** modal, age gate, or accept wall before Start. Live does not claim a cure rate, study, or doctor endorsement.
- **Why this is the pattern to keep:** Trust without a tap tax. An interstitial before Start would be a conversion bug on a mid-hiccup page.
- **Rebuild must:** Hero line from copy deck: `Not medical advice. For ordinary, short-lived hiccups.` Footer: `Not medical advice.` plus the short "Read this" body on home. Stop rules live on `/when-to-stop/`, linked, not as a blocking layer. Do not add a clickwrap. Do not add rates.

### P1-5. Mobile chrome and controls fight the thumb that needs Start

- **URL:** https://howtofixhiccups.netlify.app/ (`/css/styles.css`)
- **Evidence:** `.site-header` is `position: sticky; top: 0` with wordmark + three nav links that `flex-wrap`. Timer `min(72vw, 16.5rem)` sits above actions. Actions are `justify-content: center` with wrap. During the run, Reset (secondary) shares the same row as `I swallowed`. No bottom-safe Start. No larger target on small viewports (rebuild draft adds a `max-width: 420px` full-width button; live does not). Google fonts Fraunces + Outfit load on every page. Dashed `Reserved ad slot` sits between the method and the disclaimer.
- **Rebuild must:**
  - Apple-clean bar: one line, few links, no Notes/About, no two-line "Callie's method" subtitle.
  - Start (and later Stop) in easy thumb reach. Prefer a compact timer + full-width Start on small screens over a giant ring.
  - Video controls, if any, stay out of the Start hit target.
  - Hide empty ad regions. Live dashed slots are not trust and not conversion.
  - Keep tap height ≥ ~44px. Live 3rem is fine; do not shrink it to make room for the ring.

### P1-6. Empty ad slots sit on the conversion path

- **URL:** https://howtofixhiccups.netlify.app/ · `/blog/` · `/blog/callies-sequence/` · `/blog/ordinary-hiccups/` · `/blog/when-hiccups-linger/`
- **Evidence:** `<aside class="ad-slot">Reserved ad slot</aside>` on home between the method and "What this is". Same dashed slot on the Notes index (above the cards) and under each post. `/privacy/` says slots are empty placeholders and no live ad script is present. No `ca-pub` in walked HTML.
- **Why it fails:** A dashed "Reserved ad slot" on a hiccup page looks unfinished and pushes the disclaimer down. It is not a Start.
- **Rebuild must:** No visible empty ad chrome on `/`. If a slot exists in markup, hide it until a real unit ships. Privacy may mention placeholders. Do not add a live network in this rebuild.

---

## P2 — cleanup that still leaks conversion

### P2-1. `/notes/` 404s while the site talks about notes

- **URL:** https://howtofixhiccups.netlify.app/notes/
- **Evidence:** HTTP 404. Nav label is `Notes` but href is `/blog/`. Sitemap has `/blog/`, not `/notes/`.
- **Rebuild must:** Do not create `/notes/`. Kill the word Notes in chrome.

### P2-2. Secondary pages have no Start

- **URL:** https://howtofixhiccups.netlify.app/about/ · https://howtofixhiccups.netlify.app/blog/ · all three posts
- **Evidence:** About ends with `Start the walkthrough on the home page, or read the notes.` Notes cards go deeper into reading. No `#start-btn` off home.
- **Rebuild must:** `/why-hiccups-start/` and `/when-to-stop/` end with a single path back to Start on `/` (copy deck page CTAs). Do not put a second timer on those pages.

### P2-3. Warm editorial chrome is not an Apple-clean bar

- **URL:** all walked pages (`/css/styles.css`)
- **Evidence:** Paper `#f4efe6`, clay eyebrow, sage/clay timer tones, Fraunces display, gradient washes, breadcrumbs, two-line wordmark, sticky header with three destinations.
- **Rebuild must:** Calm, sparse chrome. One wordmark. Few links. Home has no breadcrumb row. Timer can stay; it should not look like a lifestyle magazine cover.

### P2-4. Schema and social still sell a person

- **URL:** https://howtofixhiccups.netlify.app/ · https://howtofixhiccups.netlify.app/blog/callies-sequence/
- **Evidence:** HowTo `name`: `Callie's method for hiccups`. BlogPosting author Person `Callie`. OG/Twitter titles include Callie. `x-robots-tag: index, follow` on the Netlify host.
- **Rebuild must:** HowTo four steps only, Organization author, no `Medical*` types, no Person. Titles without a name. Preview hosts stay noindex until `.com` is the live surface. (SEO detail lives in the sibling SEO spec; listed here only because named schema is a trust/conversion leak.)

---

## Rebuild must-fix list

Mapped to the five CRO focuses plus Apple-clean chrome.

### 1. Start CTA

- Label in the hero: `Start`.
- Repeat after the written method: `Start the method`.
- First mobile viewport. Full-width on small screens. Not under a giant idle `30`.
- Header does not compete with Start. Nav item for home is `The method`, not `Sequence`.
- Start begins the method immediately. No watch-first, no disclaimer modal, no 30s marketing timer.

### 2. Host video vs text

- Ship the faceless UGC host take (copy deck §6). Unnamed. No founder.
- Video is a demo that syncs to Start. Text method stays visible without play.
- If video is not ready, show nothing loud — no "Reserved host slot" theater. A quiet placeholder is fine; a second hero that delays Start is not.
- On mobile, do not stack a tall portrait video above a large ring above Start. Start wins the fold.
- Muted / playsinline default. Countdown runs even if `play()` fails.

### 3. Countdown friction

- 30s hold and 10s blow: keep. They are the method. They help.
- Do not lock the written beats or the video poster behind those clocks.
- Do not add a third clock before Start.
- Swallows are visitor-paced. Drop the forced 5s + 2.8s inhale animations as a gate.
- Idle: helper text `30 second hold ahead`, not a pre-lit `30` that looks running.
- Stop control uses `Stop`. Secondary to Start. Do not hide Stop so well that a dizzy visitor cannot leave (copy deck: `Stop if you feel lightheaded.`).

### 4. Trust / disclaimer

- Hero pill + footer. Not an interstitial.
- Copy deck hero: `Not medical advice. For ordinary, short-lived hiccups.`
- Home "Read this" block for the longer fact. `/when-to-stop/` for linger / red-flag copy.
- No cure %, no studies, no doctor quotes, no invented mechanism.
- Keep privacy's honest line: Start and countdown run on-device.

### 5. Mobile thumb reach

- Start in the thumb zone on load.
- Timer compact on small viewports.
- Video controls do not cover Start / Stop.
- Sticky header stays thin. No wrap of three extra destinations onto a second bar.
- During hold, Stop is reachable and hard to fat-finger.

### 6. Apple-clean chrome

- One-line `howtofixhiccups` or `How to Fix Hiccups`.
- Nav: `The method` · `Why they start` · `When to stop` (Privacy in footer).
- No Notes, no About, no breadcrumbs on `/`.
- No dashed ad placeholders on the method page.
- Calm surface. Sparse. The method is the product.

---

## What not to add

- **No Callie.** No Mike. No host name. No Person in schema.
- **No blog.** No `/blog/`. No `/notes/`. No Notes index. No posts. FAQ stays on `/` (copy deck "Common questions").
- **No `/about/` named-person page.**
- **No invent metrics.** No cure rate, no "works for most people", no study count, no traffic, no CTR, no conversion %.
- **No doctor endorsements.** No clinician review badge. No `Medical*` schema.
- **No disclaimer interstitial** and no "accept to start".
- **No watch-first gate.**
- **No fifth method step.** Order is locked.
- **No live ad network** in this rebuild. No visible empty slot on `/`.
- **No growth / outbound / marketing copy deck** in this file. Strings live in the copy deck.

---

## Metrics

If a rate or volume is not in an analytics export or an owner brief in this repo, it is unknown.

| Metric | Value |
| --- | --- |
| Sessions / users | Not in the current record. |
| Start tap rate | Not in the current record. |
| Start → hold complete | Not in the current record. |
| Start → sequence complete | Not in the current record. |
| Reset / Stop rate during hold | Not in the current record. |
| Home → `/blog/` or `/about/` leak rate | Not in the current record. |
| Video play rate | Not in the current record. (No video on live.) |
| Mobile vs desktop split | Not in the current record. |
| Search CTR | Not in the current record. |
| Cure / success rate | Not in the current record. Do not invent one. |

Instrument later, on preview, without putting numbers on the page: Start click, hold started, hold finished, blow finished, Stop, video `play` / `error`. Do not display those numbers to visitors.

---

## Live IA snapshot (walked)

| Path | HTTP | What a visitor gets | CRO note |
| --- | --- | --- | --- |
| `/` | 200 | Method card + Start + 4-beat list. No video. | Only Start on the site. Buried under the ring. |
| `/about/` | 200 | Named-person origin. No Start. | Kill. |
| `/privacy/` | 200 | Static-site privacy. Ads are placeholders. Last updated 5 September 2026. | Keep as a route. Faceless. |
| `/blog/` | 200 | Notes index, `schema.org/Blog`. | Kill. |
| `/blog/callies-sequence/` | 200 | Written method + Person author Callie. | Kill. Beats belong on `/`. |
| `/blog/ordinary-hiccups/` | 200 | Ordinary-spell note. | Kill as a post. Rebuild as `/why-hiccups-start/`. |
| `/blog/when-hiccups-linger/` | 200 | Stop rules. Honest. No hour-count. | Kill as a post. Rebuild as `/when-to-stop/`. |
| `/notes/` | 404 | Netlify 404. | Do not create. |

Sitemap (`https://howtofixhiccups.netlify.app/sitemap.xml`) lists the seven `.com` URLs above except `/notes/`. Lastmod 2026-09-05.

---

## Bottom line

Live is a calm personal page with an honest disclaimer and a real 30s/10s clock. That clock is not the problem. The problem is everything around it: a giant idle ring above Start, no host video, Callie on every chrome surface, and a blog/about nav that walks a hiccuping visitor off the only button that matters.

The rebuild converts if Start is immediate, the method is named the method, a faceless host take runs *with* the text (not in front of it), the 30s/10s clocks stay honest without extra gates, and the medical line stays a footer/hero fact instead of a wall.
