# Callie / howtofixhiccups — on-page SEO preview pass

**Date:** 5 September 2026  
**Preview (judged):** https://howtofixhiccups.netlify.app/  
**Intended production host:** https://howtofixhiccups.com/  
**Source cross-check only:** https://github.com/llconsulting/howtofixhiccups (`main` @ `9a978fe`)  
**Method:** live `curl -L` of the Netlify preview. Source used only to confirm the HTML on the wire matches the repo. Judgments are from the preview fetches.

> **Research-only / preview-only.** This is an owner judgment file, not a crawl dump and not a ship checklist. Do not treat the Netlify hostname as the SEO surface. Do not buy the domain from this note. Do not merge to production. Do not apply to AdSense. Do not invent medical claims, studies, doctor endorsements, cure rates, NAP, or publisher IDs.

---

## Page inventory (indexable URLs discovered from preview)

About, Privacy, Notes, and the three notes were taken from live nav / footer / `/sitemap.xml` / blog index. No URLs were invented.

| Path | Request → hops → final | Status | Title | H1 | Canonical | Meta description |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | `https://howtofixhiccups.netlify.app/` → 200, 0 hops, same URL | 200 | How to fix hiccups — Callie's method | How to fix hiccups | `https://howtofixhiccups.com/` | Callie's method for ordinary hiccups: deep breath in and swallow, a second breath on top and swallow, hold 30 full seconds, then blow as through the tiniest straw for 10 seconds. Not medical advice. |
| `/about/` | `/about/` → 200; `/about` → **301** `Location: /about/` → 200 `/about/` | 200 | About Callie's method — How to Fix Hiccups | About Callie's method | `https://howtofixhiccups.com/about/` | Why howtofixhiccups.com exists: one quiet page for Callie's personal hiccup sequence. Not a clinic. Not medical advice. |
| `/privacy/` | `/privacy/` → 200; `/privacy` → **301** `Location: /privacy/` → 200 | 200 | Privacy — How to Fix Hiccups | Privacy | `https://howtofixhiccups.com/privacy/` | Privacy practices for howtofixhiccups.com. A static site with no accounts. Ad slots are empty placeholders for now. |
| `/blog/` | `/blog/` → 200; `/blog` → **301** `Location: /blog/` → 200 | 200 | Notes — How to Fix Hiccups | Notes | `https://howtofixhiccups.com/blog/` | Short notes on Callie's hiccup sequence, ordinary hiccups, and when to stop and talk to a clinician. |
| `/blog/callies-sequence/` | slashless → **301** `Location: /blog/callies-sequence/` → 200 | 200 | Callie's sequence, written out — How to Fix Hiccups | Callie's sequence, written out | `https://howtofixhiccups.com/blog/callies-sequence/` | Callie's hiccup sequence in writing: breathe in and swallow, second breath on top and swallow, hold 30 seconds, blow through the tiniest straw. |
| `/blog/ordinary-hiccups/` | slashless → **301** `Location: /blog/ordinary-hiccups/` → 200 | 200 | Ordinary hiccups are usually brief — How to Fix Hiccups | Ordinary hiccups are usually brief | `https://howtofixhiccups.com/blog/ordinary-hiccups/` | A short note on ordinary hiccups: they are often brief, this site stays small, and Callie's method is one personal sequence — not a catalog of cures. |
| `/blog/when-hiccups-linger/` | slashless → **301** `Location: /blog/when-hiccups-linger/` → 200 | 200 | When hiccups linger — How to Fix Hiccups | When hiccups linger | `https://howtofixhiccups.com/blog/when-hiccups-linger/` | When to stop trying a home hiccup sequence and talk to a clinician. This site is not medical advice and does not treat lasting hiccups. |

**Also fetched (not indexable content URLs):**

- `/robots.txt` → 200, 0 hops. Body: `User-agent: *` / `Allow: /` / `Sitemap: https://howtofixhiccups.com/sitemap.xml`
- `/sitemap.xml` → 200, 0 hops. Seven `<loc>`s, all on `howtofixhiccups.com`, each with `<lastmod>2026-09-05</lastmod>`
- Robots-named sitemap `https://howtofixhiccups.com/sitemap.xml` → **DNS does not resolve** (`curl` exit 6). Expected until the custom domain is attached. Do not retarget this directive to the preview host.
- `http://howtofixhiccups.netlify.app/` → **301** `Location: https://howtofixhiccups.netlify.app/` → 200
- Unknown path `/this-page-does-not-exist-seo-probe/` → **404** (correct), body is the 404 template
- `/ads.txt` → **404** (correct for empty-slot / no-network state)

Every indexable title, H1, and meta description is unique. None are missing. None are duplicates.

---

## P0

**None.** Live preview HTML is crawlable without JavaScript. Titles, H1s, and descriptions are unique. Canonicals are present, HTTPS, trailing-slash, and pointed at the intended `.com` host — not at `howtofixhiccups.netlify.app`. Internal `href`s already use trailing slashes, so they do not 301. No broken internal `href`s. No content locked behind the countdown. Do not invent a P0 medical or domain task to fill this section.

---

## P1

### 1. Preview host is indexable while `.com` is dark

- **Live URL:** https://howtofixhiccups.netlify.app/ (and every other HTML URL)
- **Observed:** response header `x-robots-tag: index, follow` plus `<meta name="robots" content="index, follow">`. Canonicals and sitemap `<loc>`s already say `https://howtofixhiccups.com/…`. `howtofixhiccups.com` does not resolve today.
- **Why it matters:** a public `*.netlify.app` URL with `index, follow` can be crawled and stored as a competing host. A canonical to a host that does not answer is a weak consolidating signal until DNS/TLS for `.com` exists.
- **Fix direction (preview mindset):** keep canonicals and sitemap locs on `howtofixhiccups.com`. Do **not** rewrite them to the Netlify hostname. When Mike/CoS is ready to attach the domain, add a host-specific `noindex` for `howtofixhiccups.netlify.app` only (Netlify header by context, or a robots rule that does not touch `.com`). Do not buy the domain from this pass.

### 2. `robots.txt` Sitemap line names a host that cannot be fetched yet

- **Live URL:** https://howtofixhiccups.netlify.app/robots.txt
- **Observed string:** `Sitemap: https://howtofixhiccups.com/sitemap.xml`
- **Preview sitemap (fetched):** https://howtofixhiccups.netlify.app/sitemap.xml — same seven URLs, `.com` locs, `lastmod` present (not missing).
- **Fix direction:** leave the Sitemap directive on `.com`. After the custom domain answers, fetch `https://howtofixhiccups.com/robots.txt` and `https://howtofixhiccups.com/sitemap.xml` and confirm they are the same files. Do not add a second Sitemap line that lists the Netlify host.

---

## P2

### Titles / H1s / descriptions — unique, one trim

- Home title `How to fix hiccups — Callie's method` (36 chars) and H1 `How to fix hiccups` are aligned and unique. Other titles add `— How to Fix Hiccups`. No duplicates.
- Home meta is **198 characters**. Live string (quoted above) will truncate in typical SERP display. Trim toward ~150–160 without adding cure language. Other descriptions are in a usable band (100–149).
- Nav label is **Notes** while the path is `/blog/` and the H1 is `Notes`. Fine. Do not rename the folder for aesthetics.

### Canonicals — correct production target; two soft duplicates on preview

- All seven indexable pages: `rel=canonical` → `https://howtofixhiccups.com{path}/` (HTTPS + trailing slash). **Not** the preview host. Slash/https are not wrong.
- Soft duplicates, not linked from nav: `/index.html` → **200** (no redirect), same canonical as `/`. `/about/index.html` → **200**. `/404.html` → **200** (the pretty 404 for unknown paths is a real **404**, which is correct).
- **Fix direction:** optional pretty-URL redirects for `*.html` after domain attach. Do not change canonicals to Netlify.

### Schema — valid JSON, types present, HowTo matches the four steps, rich-result fields thin

| URL | Types on the wire | Validity |
| --- | --- | --- |
| `/` | `HowTo`, `BreadcrumbList` | JSON parses. Four `HowToStep`s. |
| `/about/`, `/privacy/` | `BreadcrumbList` only | Valid. No `WebPage` / `WebSite`. |
| `/blog/` | `BreadcrumbList`, `Blog` | Valid. |
| Three notes | `BreadcrumbList`, `BlogPosting` | Valid JSON. `author.name` = `Callie`. `publisher` is `Organization` `How to Fix Hiccups` with `url`, **no `logo`**. No `image`. |

**HowTo fidelity (home):** live step names are `Deep breath in and swallow` / `Second breath on top and swallow` / `Hold for 30 full seconds` / `Blow out through the tiniest straw`. That is Callie’s four beats. Step 4 text already includes the optional 12–15 second thin stream. The JS countdown adds a short optional fifth *timer phase*; it is **not** a fifth `HowToStep`. Do not add a fifth schema step. Do not add `HowTo` medical claims, success rates, or a doctor as `author`.

**Not present:** `WebSite`, `WebPage`, `HowTo` `image` / `totalTime`, `BlogPosting` `image`, `publisher.logo`. Missing recommended fields, not broken JSON.

**Fix direction:** after `.com` is live, add a small `WebSite` node on home (`name`, `url` on `.com`). Add `publisher.logo` only if a real square mark exists (the live `/favicon.svg` can be reused — do not invent a clinic logo). Skip HowTo image hunting unless a real still of the timer card exists. Do not add `MedicalWebPage`, `MedicalCondition`, or invented credentials.

### Internal links

- **Primary nav (all pages):** `/` Sequence, `/blog/` Notes, `/about/` About. Privacy is **footer-only**, which is correct.
- **Footer (all pages):** Sequence, Notes, About, Privacy. No orphans among the seven sitemap URLs.
- **In-body:** home links ordinary + linger + about, **not** `/blog/callies-sequence/`. The sequence note is linked from the Notes index card and from nav. Ordinary links linger. Linger and the sequence note only point home in-body.
- **301s:** only slashless aliases (`/about` → `/about/`, etc.). Internal `href`s already include the slash, so clicks/crawls from the site do not 301.
- **Broken `href`s:** none in nav, footer, crumbs, or in-body.
- **Fix direction:** optional one in-body link from home “What this is” to `/blog/callies-sequence/` so the written method is not nav-only. Do not add a sitemap of unused URLs.

### Mobile / countdown — not an index blocker

- Walkthrough lives in static HTML (`<ol>` of four steps, H1, lede, notice). `/js/method.js` only drives the timer card. Empty-HTML / JS-gated content: **no**.
- Timer markup is in the first HTML: `#timer-count` is `30`, `#start-btn` is a real button, `#live` is an `aria-live` region. CSS reserves the circle (`aspect-ratio: 1`, `width: min(72vw, 16.5rem)`), phase copy `min-height: 3.2em`, buttons `min-height: 3rem`. Not a CLS trap that hides copy from Googlebot.
- Viewport meta is present. Nav wraps. Skip link present.
- **Not in scope:** CRO restyle of the timer. Do not rebuild the countdown for SEO.

### robots / sitemap

- Allow-all. No `Disallow` of `/`, `/blog/`, or assets.
- Sitemap host is `.com` (intended). Preview sitemap is complete vs nav. `lastmod` is present — not a gap.
- `x-robots-tag: index, follow` is global in `netlify.toml` `/*`, including the 404 body. The 404 HTML also has `<meta name="robots" content="noindex">`. Google usually keeps the more restrictive rule; still sloppy. After domain attach, do not send `index` on 404s.

### AdSense slot readiness (empty slots only)

- Live slots: one dashed `aside.ad-slot` whose visible text is `Reserved ad slot` on home, Notes index, and each of the three notes. **About and Privacy have no slot** (keep it that way).
- No `adsbygoogle` script. No `ca-pub-…`. `/ads.txt` is 404. Privacy copy on the wire: `Ad slots on the site are empty placeholders. There is no live ad network script today.`
- **Readiness:** reserved boxes exist and have height. That is enough for a later insert. Visible “Reserved ad slot” copy will look unfinished if the preview or `.com` is indexed. When ads are actually considered, replace the placeholder text, add `ads.txt` on `.com` only, and update Privacy. **No AdSense apply. No invented publisher IDs.**

---

## Do not

- Do not invent medical cure claims, studies, doctor endorsements, mechanisms, or success rates — on-page or in schema.
- Do not buy `howtofixhiccups.com` or any other domain from this pass.
- Do not apply to AdSense or mint a publisher ID.
- Do not merge this preview to a “production” custom domain as part of SEO cleanup.
- Do not point canonicals, `og:url`, JSON-LD `url`, or sitemap `<loc>` at `howtofixhiccups.netlify.app`.
- Do not invent NAP, a clinic name, an address, or a last name for Callie. This stays a faceless consumer how-to.
- Do not invent URLs, extra blog posts, or a HowTo fifth step.
- Do not add `MedicalWebPage` / condition schema.
- Do not treat this file as a deploy or a CRO brief.

---

## Mike / CoS decision

**Hold the preview as-is for content SEO.** Unique titles, H1s, descriptions, four-step HowTo, and `.com` canonicals are already in the right shape. The only decision before anyone shares the Netlify URL widely: **noindex the `howtofixhiccups.netlify.app` host until `howtofixhiccups.com` answers**, then attach the domain and re-fetch robots + sitemap on `.com`. No domain buy, no AdSense apply, no production merge from this pass.
