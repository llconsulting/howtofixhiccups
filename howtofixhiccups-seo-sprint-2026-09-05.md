---
title: howtofixhiccups SEO sprint (PR3 preview + .com cutover + louislynn queue)
date: 2026-09-05
fetched: 2026-09-06
status: research-only
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-seo-sprint-2026-09-05.md
notes: >
  One file. Research only. No merge. No spend. No domain buy.
  No AdSense apply. No invented medical science. Do not merge
  PR #3 or any louislynn PR from this file.
preview_used: https://deploy-preview-3--howtofixhiccups.netlify.app/
repo: https://github.com/llconsulting/howtofixhiccups
pr3: https://github.com/llconsulting/howtofixhiccups/pull/3
rebuild_seo_spec: https://github.com/llconsulting/howtofixhiccups/pull/4
production_host: https://howtofixhiccups.com
p0_count: 0
---

# howtofixhiccups SEO sprint — 5 September 2026

**Sprint date:** 5 September 2026 (crawled 6 September 2026 UTC)  
**Mode:** Research only. No merge. No spend. No domain buy. No AdSense apply.  
**Preview used:** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**PR #3:** https://github.com/llconsulting/howtofixhiccups/pull/3 (draft, Apple rebuild, no blog, no Callie-name)  
**Locks compared:** rebuild SEO spec [PR #4](https://github.com/llconsulting/howtofixhiccups/pull/4) (`howtofixhiccups-rebuild-seo-2026-09-05.md`)  
**P0 count (PR3 preview vs those locks):** 0

Netlify’s PR comment and the `netlify/howtofixhiccups/deploy-preview` check both point at this host. `curl -L` returned 200 on `/`, `/why/`, `/when/`, `/privacy/`, `/robots.txt`, and `/sitemap.xml`. No other deploy-preview URL was needed.

---

## 1. Header

This file is an overnight SEO pass. It does not buy `howtofixhiccups.com`, point DNS, merge PR #3, merge louislynn PRs, apply to AdSense, or invent medical science.

`.com` still does not resolve (`curl` exit 6). Live `https://howtofixhiccups.netlify.app/` is still the old Callie + blog `main` (`x-robots-tag: index, follow`). That live alias is not this preview.

---

## 2. PR3 preview inventory + P0 / P1

Crawled with `curl -sS -L` on 6 September 2026. Headers below are the first hop unless noted.

### 2.1 Inventory

| Surface | HTTP | Title | H1 | Meta description | Canonical | Robots | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | How to fix hiccups | How to fix hiccups | Four steps you can do in place. Breathe and swallow, stack a second breath, hold 30 full seconds, then a thin blow. Not medical advice. Ordinary hiccups only. | `https://howtofixhiccups.com/` | Header `X-Robots-Tag: noindex, nofollow` + `noindex`. Meta `noindex, nofollow`. | `WebSite` + `HowTo` (4 steps) + `BreadcrumbList`. No `MedicalWebPage`. |
| `/why/` | 200 | Why hiccups start | Why hiccups start | Hiccups are sudden squeezes of the breathing muscle and a hic sound. Ordinary spells often last a few minutes. A meal or fizz is common. Not medical advice. | `https://howtofixhiccups.com/why/` | Same noindex pair | `WebSite` + `WebPage` + `BreadcrumbList`. No `MedicalWebPage`. |
| `/when/` | 200 | When to stop | When to stop | Talk to a clinician if hiccups last about 48 hours or two days. Sources vary. Also stop if they block eating, sleep, or breathing. Not medical advice. | `https://howtofixhiccups.com/when/` | Same noindex pair | `WebSite` + `WebPage` + `BreadcrumbList`. No `MedicalWebPage`. |
| `/privacy/` | 200 | Privacy | Privacy | The timer stays on your device. We do not collect health information. We do not sell personal information. Visits may leave a normal record. Not medical advice. | `https://howtofixhiccups.com/privacy/` | Same noindex pair | `WebSite` + `WebPage` + `BreadcrumbList`. No `MedicalWebPage`. |
| `/robots.txt` | 200 | — | — | — | — | Header noindex | Body: `User-agent: *` / `Allow: /` / `Sitemap: https://howtofixhiccups.com/sitemap.xml` |
| `/sitemap.xml` | 200 | — | — | — | — | Header noindex | Four `<loc>` only, all on `.com` (see below) |

**Sitemap locs (preview file, `.com` hosts):**

```
https://howtofixhiccups.com/
https://howtofixhiccups.com/why/
https://howtofixhiccups.com/when/
https://howtofixhiccups.com/privacy/
```

**HowTo on `/` (fidelity vs lock):**

1. Deep breath and swallow — Deep breath all the way in and swallow it.
2. Second breath and swallow — Another breath in on top of that and swallow completely.
3. Hold 30 seconds — Hold breath 30 full seconds.
4. Thin blow — Slowly blow out as through the tiniest straw for 10 full seconds. Go to 12 to 15 if you can.

Author / publisher are `Organization` (`How to Fix Hiccups` / `howtofixhiccups`). No `Person`. No `reviewedBy`. Step 4 uses **tiniest** (copy lock), not thinnest.

**IA / redirects (follow, not inventory pages):**

| Request | Result |
| --- | --- |
| `/why-hiccups-start/` | 301 → `/why/` |
| `/when-to-stop/` | 301 → `/when/` |
| `/blog/` | 301 → `/why/` |
| `/blog/ordinary-hiccups/` | 301 → `/why/` |
| `/blog/when-hiccups-linger/` | 301 → `/when/` |
| `/blog/callies-sequence/` | 301 → `/` |
| `/about/` | 301 → `/` |

Nav on the four live pages: The method · Why they start · When to stop · Privacy. No `/blog/` href. No Callie in title, H1, meta, or schema `name`.

`og:url` / JSON-LD `url` stay on `https://howtofixhiccups.com/...`. Preview `og.png` is 200 on the Netlify host. `.com/og.png` cannot be fetched until DNS exists.

### 2.2 Vs rebuild locks

| Lock | PR3 preview | Grade |
| --- | --- | --- |
| IA is `/`, `/why/`, `/when/`, `/privacy/` only | Yes. Long slugs 301 to shorts. Blog / about 301 off the IA. | Pass |
| No blog in sitemap or chrome | Sitemap is four `.com` URLs. No Notes nav. | Pass |
| No Callie in titles / H1s / metas | None on those fields. | Pass |
| Canonicals → `https://howtofixhiccups.com/...` | All four pages. | Pass |
| HowTo four beats; no `MedicalWebPage` | Four beats, tiniest straw, Organization only. | Pass |
| Preview noindex until `.com` | Header + HTML meta noindex on this host. | Pass (preview) |
| Faceless plain language | Titles / H1s yes. Why body still names diaphragm / vocal cords / nerves. | P1 only |

### 2.3 P0

**None on this preview vs the rebuild P0 locks.**

The four hard locks from PR #4 are met on the crawled preview: four-page IA, faceless title/H1/meta/canonical on `.com`, four-beat HowTo and no `MedicalWebPage`, sitemap is those four `.com` URLs, preview is noindex.

Live `howtofixhiccups.netlify.app` (`main`) is still Callie + blog + `index, follow`. That is not PR #3. Do not treat the production alias as this rebuild until Mike replaces `main`.

### 2.4 P1

1. **Why page still has mechanism language.** Spec P1 said drop diaphragm / vocal-cord copy. Preview `/why/` still has “breathing muscle under your ribs,” “Your vocal cords close all at once,” “Nerves that help control that muscle can get irritated,” and “The diaphragm squeezes and the voice box closes.” Meta uses the later HUMAN “breathing muscle and a hic sound” line, not the spec-table ordinary-moment meta. Cite-the-clinic links (Mayo, Cleveland Clinic, MedlinePlus, NHS) are on the page. This file does not invent a replacement mechanism. If Mike wants the spec lock, strip the diaphragm / vocal-cord / nerve sentences and keep ordinary-moment + “sources vary” only.

2. **Inner metas drifted from the PR #4 table.** Home title / H1 / meta match the lock. Why / when / privacy titles and H1s match. Descriptions follow later HUMAN / PR3 commits (48-hour “sources vary” on `/when/`; timer-only privacy; no static-site or ad-slot talk). Privacy drift is the better of the two (spec table still mentioned static site and empty ad slots). When’s 48-hour line is attributed to public pages and says sources vary — do not tighten it into a single invented cutoff.

3. **HTML `<meta name="robots" content="noindex, nofollow">` is baked into all four pages.** Correct for this preview. Wrong if this HTML is what `.com` serves. Spec wanted preview block on **headers / `*.netlify.app` edge**, and `.com` HTML `index, follow` (or omitted). Flip the meta at cutover. Headers also send both `X-Robots-Tag: noindex, nofollow` and a second `X-Robots-Tag: noindex` (context header + edge). Harmless duplicate; one header is enough.

P2 and below are out of scope (og image on a host that does not resolve yet; Twitter card gaps; live `main` README still saying Callie / blog).

---

## 3. Production cutover checklist (once `.com` exists)

Do not buy the domain from this file. Do not spend. Decision-ready only.

1. **DNS / HTTPS.** Confirm `https://howtofixhiccups.com/` resolves and answers. `curl` today is exit 6.
2. **Serve the rebuild on that host.** PR #3 (or the same four-page tree) must be what `.com` returns. Today only the deploy-preview has the rebuild.
3. **Remove Netlify noindex from `.com`.** Production `[[headers]]` already omit `X-Robots-Tag`. Flip HTML `<meta name="robots">` from `noindex, nofollow` to `index, follow` (or drop the tag). Keep the edge function that noindexes `*.netlify.app`.
4. **Confirm `howtofixhiccups.netlify.app` stays noindex** after `.com` is pointed (edge on `Host` ending in `.netlify.app`).
5. **Sitemap on `.com`.** Fetch `https://howtofixhiccups.com/sitemap.xml`. Must be the four URLs above. No `/blog/`, `/about/`, or Callie paths.
6. **robots on `.com`.** Fetch `https://howtofixhiccups.com/robots.txt`. Must `Allow: /` and list `Sitemap: https://howtofixhiccups.com/sitemap.xml` only. No second Sitemap line for Netlify.
7. **Canonicals match the served host.** Canonical, `og:url`, and JSON-LD `url` stay `https://howtofixhiccups.com{path}/`. Do not retarget them to Netlify. After cutover, `curl -L` the four paths and confirm those strings.
8. **301 Netlify → `.com` if needed.** If the Netlify alias still answers and people or Google can use it, 301 that host to the matching `.com` path *or* leave it noindex. Do not leave a second indexable host.
9. **Old URL 301s on `.com`.** Recheck `/about/`, `/blog/`, `/blog/ordinary-hiccups/`, `/blog/when-hiccups-linger/`, `/blog/callies-sequence/`, `/why-hiccups-start/`, `/when-to-stop/`.
10. **Google Search Console.** Add a property for `https://howtofixhiccups.com/` (URL-prefix or domain). Submit `https://howtofixhiccups.com/sitemap.xml`. Do this after the host answers and noindex is off. This file does not create the property.
11. **Do not** apply to AdSense, add `ads.txt`, invent a `ca-pub`, or merge from this checklist.

---

## 4. louislynn open SEO / AEO PR queue (waiting Mike merge)

**Do not merge.** This run’s `gh` token (`cursor` on `llconsulting/howtofixhiccups`) cannot see the louislynn repos.

| Requested repo | Command | Result |
| --- | --- | --- |
| `llconsulting/llco-test` | `gh pr list`, `gh pr view 37`, `gh api .../pulls/37` | GraphQL / REST: repository could not be resolved (404) |
| `llconsulting/venerable-paletas-ed02df` | `gh pr list`, `gh api .../pulls` | Same 404 |
| Public `https://github.com/llconsulting/llco-test` and `/pull/37` | `curl -I` | 404 (private or not visible to this token) |
| User `louislynn` | `gh repo list louislynn` | User exists; no public repos visible |

**PR 37 (explicit):** requested as an open SEO PR on `llconsulting/llco-test` waiting Mike merge. **Not readable this run.** Number known only from the ask. Title, draft flag, and one-line job are unknown. Do not invent them.

**AEO PRs on `llco-test`:** none listed. `gh search prs AEO --owner llconsulting` returned only howtofixhiccups PRs (none titled AEO). HUMAN copy deck [PR #2](https://github.com/llconsulting/howtofixhiccups/pull/2) has an on-page AEO ownership table (method / why / when FAQs, no extra routes). That is a hiccups copy lock, not a louislynn AEO PR.

**`venerable-paletas-ed02df`:** no open SEO / AEO docs PRs visible. Treat as not material to this token.

**Copy note:** no “shop” vs “your business” strings were readable. Prefer **your business** if a later readable PR uses shop language.

### Visible from this token (not louislynn; adjacent only)

Open drafts on `llconsulting/howtofixhiccups`. None merged. SEO-related first.

| # | Title | URL | One line | Status |
| --- | --- | --- | --- | --- |
| 1 | On-page SEO preview pass (2026-09-05) | https://github.com/llconsulting/howtofixhiccups/pull/1 | Callie-era SEO pass on the old blog IA. Superseded for IA by PR #4 / PR #3. | open / draft |
| 4 | Draft: howtofixhiccups Apple rebuild SEO spec (4 pages, no blog) | https://github.com/llconsulting/howtofixhiccups/pull/4 | The rebuild SEO locks this sprint crawled against. | open / draft |
| 2 | Draft: howtofixhiccups rebuild copy deck (4 pages, faceless) | https://github.com/llconsulting/howtofixhiccups/pull/2 | Faceless copy + on-page AEO FAQ ownership. Long slugs in the deck; live PR3 uses shorts. | open / draft |
| 3 | Apple-quality rebuild: four pages, no Callie, preview-only noindex | https://github.com/llconsulting/howtofixhiccups/pull/3 | The preview this file crawled. | open / draft |

Other open howtofixhiccups drafts (5–10) are stills, video, CRO, or Higgsfield. Not SEO merge candidates.

**Louislynn PR numbers found:** none readable. **Explicitly requested and unread:** 37.

Mike needs a token (or a run with `repositoryDependencies` on `llco-test` and `venerable-paletas-ed02df`) to list that queue for real.

---

## 5. Do-not list

- Do not merge this file, PR #3, PR #4, PR #1, or any louislynn PR.
- Do not buy `howtofixhiccups.com` or any other domain from this file.
- Do not spend.
- Do not apply to AdSense or invent `ca-pub` / `ads.txt`.
- Do not invent medical science, cure rates, studies, a single hour-count rule, or a “why the method works” mechanism.
- Do not add `MedicalWebPage` or other `Medical*` schema.
- Do not put Callie (or any personal name) in titles, H1s, metas, or schema `name` / `author`.
- Do not put blog, notes, or `/about/` back in the sitemap or IA.
- Do not point canonicals, `og:url`, JSON-LD `url`, or sitemap `<loc>` at `*.netlify.app`.
- Do not leave `.com` on the baked-in HTML `noindex` after cutover.
- Do not index `howtofixhiccups.netlify.app` once `.com` answers.

---

## 6. One-line Mike decision

**PR3 preview matches the four-page faceless `.com` SEO locks (P0 = 0); do not merge it from here — when `.com` exists, flip HTML noindex, keep Netlify noindex, submit the four-URL sitemap in GSC; louislynn PR 37 / AEO queue was not readable with this token.**
