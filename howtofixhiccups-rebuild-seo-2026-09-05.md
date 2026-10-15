---
title: howtofixhiccups Apple rebuild SEO spec
date: 2026-09-05
status: owner-facing-rebuild-spec
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-rebuild-seo-2026-09-05.md
notes: >
  One file. Four-page IA only. No blog. No Callie-name in recommended
  titles, H1s, or metas. Canonicals are .com only. No domain buy,
  AdSense apply, invented science, NAP, or production merge from this file.
preview: https://howtofixhiccups.netlify.app/
repo: https://github.com/llconsulting/howtofixhiccups
production_host: https://howtofixhiccups.com
---

# howtofixhiccups rebuild SEO spec

**Date:** 5 September 2026 (fetched 6 September 2026)  
**Preview judged:** https://howtofixhiccups.netlify.app/  
**Repo:** https://github.com/llconsulting/howtofixhiccups  
**Intended production host:** https://howtofixhiccups.com/  
**Rebuild source (not live):** `cursor/apple-quality-rebuild-9422` / [PR #3](https://github.com/llconsulting/howtofixhiccups/pull/3)  
**Copy lock (not live):** `cursor/rebuild-copy-deck-1835` / [PR #2](https://github.com/llconsulting/howtofixhiccups/pull/2)  
**Prior Callie-era SEO pass (superseded for IA):** [PR #1](https://github.com/llconsulting/howtofixhiccups/pull/1)

> Research-only. This file tells Web Builder what to ship on the **new** four-page IA. It is not a deploy, a domain buy, an AdSense apply, or a merge-to-production order.

---

## Mike locks (hard)

1. Home — method + UGC tutorial. No Callie branding.
2. Why hiccups start.
3. When to stop / see a clinician.
4. Privacy.

No blog index. No notes posts in the sitemap or IA. Faceless consumer how-to. Not medical advice.

**Recommended production slugs (lock these):** `/`, `/why/`, `/when/`, `/privacy/` — trailing slashes. These are the real paths in Apple rebuild source (`why/index.html`, `when/index.html`, `privacy/index.html`). Copy deck PR #2 used `/why-hiccups-start/` and `/when-to-stop/`. **Do not ship both.** If Mike wants the longer slugs, rename the Apple folders before `.com` is pointed. This spec’s canonicals follow Apple.

---

## Preview vs rebuild status

Live `curl -L` of the Netlify production alias on 6 September 2026 still serves the **old Callie + blog IA**. `main` matches that live HTML. The Apple rebuild is draft-only and has not replaced the published preview.

| Surface | Live preview (`howtofixhiccups.netlify.app`) | Apple rebuild (PR #3 source) | This spec |
| --- | --- | --- | --- |
| Home title | `How to fix hiccups — Callie's method` | `How to fix hiccups` | Faceless home title |
| Nav | Sequence / Notes / About | Sequence / Why they start / When to stop | Four-page IA, no Notes/About |
| Extra routes | `/about/`, `/blog/`, three notes | `/why/`, `/when/`, `/privacy/` | Those four + home |
| New IA paths | `/why/`, `/when/`, `/why-hiccups-start/`, `/when-to-stop/` → **404** | `/why/`, `/when/` → 200 in source | Use Apple paths |
| Callie in chrome | Yes (wordmark, title, HowTo name, footer) | None | None in title / H1 / meta / schema |
| `x-robots-tag` | `index, follow` (also `<meta name="robots" content="index, follow">`) | Deploy-preview + branch-deploy headers `noindex, nofollow`; edge function noindexes `*.netlify.app` | Keep preview noindex until `.com` answers |
| Sitemap locs | 7 URLs on `.com`, including `/blog/` and three notes | 4 URLs on `.com` | 4 URLs on `.com` only |
| HowTo name | `Callie's method for hiccups` | `How to fix hiccups` (four steps) | Faceless four-beat HowTo |
| Medical schema | None | None (`WebSite` / `HowTo` / `WebPage` / `BreadcrumbList`) | HowTo yes. **No `MedicalWebPage`.** |
| `.com` DNS | Does not resolve (`curl` exit 6) | Canonicals already `.com` | Canonicals stay `.com`. Do not retarget to Netlify. |

**Live pages still on the wire (do not put these in the rebuild sitemap):**

| Live path | Live title | Live H1 | Live canonical |
| --- | --- | --- | --- |
| `/` | How to fix hiccups — Callie's method | How to fix hiccups | `https://howtofixhiccups.com/` |
| `/about/` | About Callie's method — How to Fix Hiccups | About Callie's method | `https://howtofixhiccups.com/about/` |
| `/privacy/` | Privacy — How to Fix Hiccups | Privacy | `https://howtofixhiccups.com/privacy/` |
| `/blog/` | Notes — How to Fix Hiccups | Notes | `https://howtofixhiccups.com/blog/` |
| `/blog/callies-sequence/` | Callie's sequence, written out — How to Fix Hiccups | Callie's sequence, written out | `https://howtofixhiccups.com/blog/callies-sequence/` |
| `/blog/ordinary-hiccups/` | Ordinary hiccups are usually brief — How to Fix Hiccups | Ordinary hiccups are usually brief | `https://howtofixhiccups.com/blog/ordinary-hiccups/` |
| `/blog/when-hiccups-linger/` | When hiccups linger — How to Fix Hiccups | When hiccups linger | `https://howtofixhiccups.com/blog/when-hiccups-linger/` |

Live `/robots.txt`: `User-agent: *` / `Allow: /` / `Sitemap: https://howtofixhiccups.com/sitemap.xml`. Leave the Sitemap host on `.com`.

Apple already 301s dropped URLs in `netlify.toml`: `/about/` → `/`, `/blog/` and `/blog/ordinary-hiccups/` → `/why/`, `/blog/when-hiccups-linger/` → `/when/`, `/blog/callies-sequence/` → `/`. Keep those. Do not 301 old notes into a Notes index.

---

## Per-page SEO (rebuild)

All canonicals are HTTPS, trailing-slash, **`howtofixhiccups.com`**. Never the Netlify preview host. No Callie-name. No em dash (copy-deck lock). Titles are unique. H1s match the page job.

| Page | Path | Title | H1 | Meta description | Canonical |
| --- | --- | --- | --- | --- | --- |
| Home | `/` | How to fix hiccups | How to fix hiccups | Four steps you can do in place. Breathe and swallow, stack a second breath, hold 30 full seconds, then a thin blow. Not medical advice. Ordinary hiccups only. | `https://howtofixhiccups.com/` |
| Why hiccups start | `/why/` | Why hiccups start | Why hiccups start | Ordinary hiccups often follow a fast meal, a fizzy drink, a laugh mid-swallow, or a gulp of air. Short context written in plain language. Not medical advice. | `https://howtofixhiccups.com/why/` |
| When to stop | `/when/` | When to stop | When to stop | Stop the method if hiccups last, keep returning, or arrive with other symptoms. Talk to a clinician. Use this page for stop rules. Not medical advice. | `https://howtofixhiccups.com/when/` |
| Privacy | `/privacy/` | Privacy | Privacy | howtofixhiccups is a static site. No accounts. The timer stays in your browser. Ad slots are empty placeholders today. We do not sell personal information. | `https://howtofixhiccups.com/privacy/` |

**Vs Apple source today**

- Home title / H1 already match. Home meta in PR #3 is usable; prefer the table string (copy-deck, 158 characters, no Callie).
- Inner Apple titles append ` — How to Fix Hiccups` (em dash). Drop the suffix so titles stay short and match copy lock.
- **Do not ship** Apple’s why meta: `Ordinary hiccups are a brief spasm of the diaphragm…` or the why lede about a diaphragm squeeze and vocal-cord snap. That is invented-mechanism language. Use the table meta and copy-deck ordinary-moment copy.
- `og:url`, `og:title`, `og:description`, Twitter tags, and JSON-LD `url` must use the same `.com` canonicals and faceless titles. Do not set `og:url` to `*.netlify.app`.

On preview builds, HTML may still say `<meta name="robots" content="index, follow">` (that is the `.com` intent). Preview blocking is the **header / edge `X-Robots-Tag`**, not a rewrite of these canonicals.

---

## Schema

### Home: HowTo (required)

One `HowTo` on `/` only. Four `HowToStep` items. Same order as the locked method. Do not add a fifth step for the timer’s extra blow phase.

Fidelity beats (name + text):

1. **Deep breath and swallow** — Deep breath all the way in and swallow it.
2. **Second breath and swallow** — Another breath in on top of that and swallow completely.
3. **Hold 30 seconds** — Hold breath 30 full seconds.
4. **Thin blow** — Slowly blow out as through the tiniest straw for 10 full seconds. Go to 12 to 15 if you can.

Apple source currently names step 4 “thinnest straw”. Copy lock is **tiniest straw**. Use tiniest. Apple HowTo `name` is already faceless (`How to fix hiccups`) — keep that. Live preview HowTo `name` is still `Callie's method for hiccups` — kill that on rebuild.

Allowed extras on `/`:

- `author` / `publisher` as **`Organization`** `How to Fix Hiccups` or `howtofixhiccups`. No `Person`. No `reviewedBy`.
- Optional `WebSite` (`name`, `url` on `.com`).
- Optional `BreadcrumbList` (Home only).

Suggested `url` on the HowTo node: `https://howtofixhiccups.com/`.

Skip `totalTime`, `yield`, `step.image`, and HowTo `image` unless a real still exists. Do not invent a clinic photo.

### Other pages

`WebPage` + `BreadcrumbList` is enough on `/why/`, `/when/`, `/privacy/`. Optional sitewide `WebSite`. No `Blog`, `BlogPosting`, or `Person`.

### Never

`MedicalWebPage`, `MedicalCondition`, `MedicalTherapy`, `MedicalSignOrSymptom`, or any other `Medical*` type. No studies, cure rates, success percentages, or doctor endorsements in JSON-LD or visible copy.

---

## Internal link map (four pages only)

| From | To | Anchor |
| --- | --- | --- |
| Home (header) | `/why/` | Why they start |
| Home (header) | `/when/` | When to stop |
| Home (body) | `/why/` | Why hiccups start |
| Home (body) | `/when/` | When to stop |
| Home (footer) | `/privacy/` | Privacy |
| Why | `/` | start the sequence / Go to the method |
| Why | `/when/` | When to stop |
| When | `/` | home page / Go to the method |
| When | `/why/` | Why hiccups start |
| Privacy | `/` | Back to the method |
| Privacy (footer) | `/why/`, `/when/` | Why they start / When to stop |

No `href` to `/blog/`, `/blog/*`, `/about/`, or `/notes/`. Privacy may stay footer-primary; copy deck also puts it in the header — either is fine as long as it is not an orphan. Apple source already links all four pages (privacy footer-only). That is enough.

Old-URL 301s (Apple `netlify.toml`) are redirects, not internal links. Keep them. Do not list those old paths in the sitemap.

---

## Preview noindex + sitemap + robots

### Preview (`*.netlify.app`) — noindex until `.com` is live

Live production alias still sends `x-robots-tag: index, follow` because `main` `netlify.toml` sets it on `/*`. Do **not** leave that once the rebuild is what Netlify publishes.

Use **both** (Apple already drafted this — keep it):

1. **`X-Robots-Tag: noindex, nofollow`** on `[context.deploy-preview]` and `[context.branch-deploy]` in `netlify.toml`.
2. **Edge function** on `/*` that sets `X-Robots-Tag: noindex, nofollow` when `Host` ends with `.netlify.app` (covers `howtofixhiccups.netlify.app` after a main publish, while `.com` stays untouched).

Do **not** put `noindex` on the `.com` production context. Do **not** rewrite canonicals, `og:url`, JSON-LD `url`, or sitemap `<loc>` to the Netlify host.

HTML `<meta name="robots" content="index, follow">` can stay as the `.com` default. The preview block is the response header. If a static-file preview is ever shared without those headers, add a matching meta `noindex, nofollow` only for that host — never as a `.com` default.

### Production sitemap

`https://howtofixhiccups.com/sitemap.xml` lists **only**:

```
https://howtofixhiccups.com/
https://howtofixhiccups.com/why/
https://howtofixhiccups.com/when/
https://howtofixhiccups.com/privacy/
```

Strip `/about/`, `/blog/`, `/blog/callies-sequence/`, `/blog/ordinary-hiccups/`, `/blog/when-hiccups-linger/`. Apple `sitemap.xml` already has this four-URL list. Live preview sitemap does not — that is the mismatch.

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://howtofixhiccups.com/sitemap.xml
```

- Do not `Disallow` `/`, `/why/`, `/when/`, or `/privacy/`.
- Do not add a second `Sitemap:` line for `howtofixhiccups.netlify.app`.
- After `.com` is pointed and answers, fetch `https://howtofixhiccups.com/robots.txt` and `https://howtofixhiccups.com/sitemap.xml` and confirm they are these files.

---

## P0

1. **Noindex the Netlify host until `.com` is pointed and answering.** Live preview is `index, follow` on a Callie+blog site. Land Apple’s context headers + `*.netlify.app` edge noindex on whatever Netlify URL people can open. Keep `.com` indexable. Do not retarget canonicals to Netlify.
2. **Production sitemap = four `.com` URLs only.** Strip every blog/notes/`/about/` loc before `.com` is crawlable.
3. **Faceless title / H1 / meta / canonical on the four pages.** Use the table. Kill Callie in those fields. Canonicals stay `https://howtofixhiccups.com{path}/`.
4. **HowTo on home is four beats only. No `MedicalWebPage`.** Step names/text follow the locked method. No Person author. No invented science in schema.

## P1

1. **One slug set before DNS.** This spec locks Apple `/why/` and `/when/`. Copy deck’s longer slugs are the only allowed alternative. Rename folders *or* keep shorts. Do not publish both.
2. **Replace Apple why-page mechanism language.** Drop diaphragm / vocal-cord copy from meta, lede, and body. Use copy-deck ordinary-moment language.
3. **Align HowTo strings to the locked method** (`tiniest straw`, Organization author). Optional sitewide `WebSite` node.
4. **After `.com` answers:** re-fetch robots + sitemap on the production host; confirm 301s from old blog/about URLs; confirm `howtofixhiccups.netlify.app` is still `noindex`.

---

## Do not

- Do not buy `howtofixhiccups.com` or any other domain from this file.
- Do not apply to AdSense or invent a `ca-pub` / `ads.txt` publisher ID.
- Do not merge this spec, or the Apple rebuild, to production `.com` from this agent.
- Do not put Callie (or any personal name) in recommended titles, H1s, metas, schema `name` / `author`, or nav.
- Do not list blog, notes, or `/about/` URLs in the rebuild sitemap or IA.
- Do not invent science, studies, cure rates, mechanisms, doctor endorsements, or hour-count medical rules.
- Do not add `MedicalWebPage` or other `Medical*` schema.
- Do not point canonicals, `og:url`, JSON-LD `url`, or sitemap `<loc>` at `howtofixhiccups.netlify.app`.
- Do not invent NAP, a clinic, credentials, or a named reviewer.
- Do not add a fifth HowTo step.

---

## Mike / CoS decision

**Rebuild as four faceless `.com` pages (`/`, `/why/`, `/when/`, `/privacy/`); noindex `*.netlify.app` until `.com` is live; sitemap is those four URLs only — no blog, no Callie, no MedicalWebPage.**
