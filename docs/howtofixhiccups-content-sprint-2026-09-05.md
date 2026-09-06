---
title: howtofixhiccups content sprint gaps
date: 2026-09-05
walked: 2026-09-06
status: overnight-gaps-only
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-content-sprint-2026-09-05.md
notes: >
  One file. Content gaps only. Do not merge. Do not publish. Do not spend.
  Do not implement the site. Do not rewrite full articles.
  No medical cure claims, studies, or named-person copy.
  Brand is faceless. Sequence name is the method.
live_preview: https://howtofixhiccups.netlify.app/
copy_lock: docs/howtofixhiccups-rebuild-copy-HUMAN-2026-09-05.md
brand: howtofixhiccups
voice: faceless
pages: 4
blog: kill
---

# Content sprint gaps 2026-09-05

Overnight checklist. Gaps only. Paste-ready strings already live in the HUMAN copy deck. This file does not replace that deck.

**Copy lock (use this):** `docs/howtofixhiccups-rebuild-copy-HUMAN-2026-09-05.md` (PR #2, this repo). Four-page IA. Method locked. AEO questions already folded onto home / why / when.

**Live preview (still old IA):** https://howtofixhiccups.netlify.app/ — named-person chrome, Notes/blog, `/about/`. Treat that as a rebuild gap, not new copy to write.

**Sibling drafts (not live):** Apple four-page HTML on `cursor/apple-quality-rebuild-9422` / PR #3 uses `/why/` and `/when/`. SEO spec on PR #4. Neither supersedes the HUMAN strings.

**Research / AEO from CoS:** no `research/` folder on this branch. The locks are in the HUMAN deck: four routes, method order, AEO ownership table, no extra pages, no mechanism, no cure rates.

**louislynn AEO drafts:** llconsulting/llco-test PRs 30, 33, 34. This token cannot read that private repo. Remaining gaps below use the known KEEP-WITH-FIXES note plus live URL checks on louislynnco.com.

Locks for anything written from this file:

- No personal name in recommended titles, headings, body, buttons, alt, VO, schema, or footer.
- No medical cure claims. No studies. No invented hour-count that replaces “sources vary.”
- louislynn items: say **your business**. Faceless. No cell.

---

## A. howtofixhiccups (four pages)

Status key: **Done** = HUMAN deck has the strings. **Gap** = still missing on live, or a later HTML draft drifted. **Blocked** = do not invent overnight.

### 1. Home `/`

| | |
| --- | --- |
| **Done** | HUMAN deck is paste-ready: title / meta / H1, hero, locked four steps + helpers, How to run it, nine Common questions, limits, Read this, closing links, timer state table, faceless HowTo JSON-LD, video desk pack (unnamed host). Owned AEO is covered: method, water, 30-second hold meaning, adults / not babies or pets, hold is step 3, after a meal or drink, how many passes, page limits. |
| **Gap** | **Live still ships the old site.** Title, subtitle, HowTo `name`, lede, and footer still use a personal-name label. Nav is Sequence / Notes / About. No Common questions. No `/why-hiccups-start/` or `/when-to-stop/` links. Walkthrough uses “12–15” (en dash). Empty “Reserved ad slot” sits on the conversion path. HowTo is still a named-person method. |
| **Gap** | **Apple preview (PR #3) is four pages but short on AEO.** Home FAQ is only four items (drink/spoon, lose first breath, dizzy, repeat). Missing vs HUMAN: Does this always work? Will they stop in 30 seconds? Is holding my breath enough? Can I use this for a baby or a pet? Can I try after a meal or a drink? Idle helper is still “30 second hold ahead” / “Press Start if you want the page to keep time.” HUMAN is “Step 3 is a 30 second hold.” plus per-state do-this-now timer lines. |
| **Gap** | **Slug / link map not locked across drafts.** HUMAN and this sprint use `/why-hiccups-start/` and `/when-to-stop/`. Apple + SEO spec use `/why/` and `/when/`. Do not ship both. Pick one set before HTML is pasted. |
| **Blocked** | Do not add a “why it works” FAQ. Do not add folk-remedy ranking. Do not add timed result claims (“stops in 30 seconds”). Do not add baby, pet, pregnancy, or evolution pages. Do not put a personal name back into chrome, VO, or schema. |

Actionable leftover (copy, not a rebuild):

1. If Apple HTML is the paste target, fold the five missing HUMAN home FAQs onto `/` — do not open posts.
2. Swap Apple idle / timer strings to the HUMAN table (`Start`, `Breathe in. Then swallow.`, `Second breath. Swallow all the way.`, `Hold. Wait for the count to finish.`, `Blow thin. Stay on the count.`, `Keep it thin to 12 to 15 if you can.`, `Done. Breathe normally.`, `Stop`).
3. Write “12 to 15” in live copy. No en dash.
4. Decide slug set. Update only the internal link map, not the method.

### 2. Why hiccups start `/why-hiccups-start/`

| | |
| --- | --- |
| **Done** | HUMAN deck has the full page: ordinary-language lead, usual-story triggers, they often leave, lasting/severe pointer, six Common questions, CTAs, URL-only public footnotes. Owned AEO is covered: random or sudden start, everyday triggers, the hic sound, what a short bout tells you, reflux mention (no diagnosis), frequent return. |
| **Gap** | **Live route 404.** https://howtofixhiccups.netlify.app/why-hiccups-start/ does not exist. The closest live page is `/blog/ordinary-hiccups/` (Notes post, named-person method, no rebuild FAQ set). `/notes/` is also 404. That is the rebuild IA gap. |
| **Gap** | **Apple `/why/` has no Common questions.** Missing all six HUMAN H3s. No sources footnote. Body is thinner (ordinary moments only). Lasting-spells line still lists “pain, vomiting, or trouble breathing” instead of pointing at the when-to-stop list. |
| **Blocked** | Do not write a reflex-arc lecture. Do not add clinic branding. Do not invent studies. Do not spin FAQs into posts. Do not add night / pregnancy / baby why-pages. |

Actionable leftover:

1. Paste HUMAN Common questions onto the why page (whichever slug wins). Soft coverage. No new routes.
2. Keep the four public URLs as a tiny footnote only. Do not quote or invent findings from them.
3. Kill the live Notes post from the rebuild sitemap / nav. Redirect later is a builder job, not this sprint.

### 3. When to stop `/when-to-stop/`

| | |
| --- | --- |
| **Done** | HUMAN deck has stop rules with “sources vary,” ~48 hours / two days / a few days, eating-sleeping-breathing block, urgent-flag list, do-not-loop, six Common questions (how long, two days or all day, emergency, no named-disease diagnosis, post-procedure or new medicine, when to stop home methods). |
| **Gap** | **Live route 404.** https://howtofixhiccups.netlify.app/when-to-stop/ does not exist. Live stand-in is `/blog/when-hiccups-linger/`: named-person method, and it **refuses any hour count**. That post is not the rebuild page. |
| **Gap** | **Apple `/when/` is stale vs HUMAN.** It still says “We will not pick a number of hours and call it a rule.” HUMAN already states the public-page range and that sources vary. Apple has **no Common questions**, so these AEO items are uncovered on that draft: how long / ~48 hours, two days or all day, urgent flags, no diagnosis of named diseases, post-procedure or new medicine, when to stop home methods. |
| **Gap** | **Warning-list drift (do not invent a merge overnight).** Live linger post + Apple list: trouble breathing, chest pain, vomiting, severe belly pain, confusion. HUMAN list: trouble breathing, chest pain, fainting, sudden weakness or numbness, confusion, trouble swallowing, headache, loss of balance, trouble walking / talking / seeing, plus “this page is not an emergency protocol.” Do not add or drop flags in this sprint. When HTML is pasted, use the HUMAN list as locked unless CoS reopens it against the same public footnotes. |
| **Blocked** | Do not invent one official cutoff. Do not diagnose heart attack, stroke, or cancer. Do not tell anyone to stop a prescribed medicine. Do not write scare theater. |

Actionable leftover:

1. Replace Apple “no hour count” with the HUMAN “about 48 hours, or two days / sources vary” block.
2. Paste the six HUMAN when-to-stop FAQs onto that page.
3. Leave the warning list as HUMAN unless CoS says otherwise. Do not invent extras.

### 4. Privacy `/privacy/`

| | |
| --- | --- |
| **Done** | HUMAN deck is the honesty pass: we do not sell personal information; timer stays on your device; we do not collect health information; visits may leave a normal record (IP, browser, page); we do not profile; we do not ask children for data; not medical advice; “If we show ads later, we will update this page.” Last updated 5 September 2026. No vendor names. |
| **Gap** | **Live privacy is the old theater.** Still talks about the “host that serves the files,” empty ad-slot placeholders, and future vendor cookies. Footer still uses a personal-name method label. Meta still leads on ad placeholders. |
| **Gap** | **Apple privacy is the same theater.** H2s are still “Hosting logs” and “Ads.” Meta still says “Ad slots are empty placeholders today.” Apple why / when / home HTML still include empty `ad-slot` asides. |
| **Gap** | **Honesty depends on chrome that ships.** HUMAN is accurate only if empty ad regions stay hidden. If Apple asides or live “Reserved ad slot” ship, HUMAN under-discloses what is on the page. Confirm slots are off before pasting HUMAN privacy. If a slot is visible, one plain line must say it is empty and not collecting — still no vendor names. |
| **Blocked** | Do not name hosts, CDNs, or ad networks. Do not apply for ads. Do not invent analytics products. |

Actionable leftover:

1. Paste HUMAN privacy (timer / visits / what we do not do). Drop “Hosting logs” and placeholder-ad copy unless a slot is actually visible.
2. Strip the personal-name line from the live footer when that page is rebuilt.
3. Keep “Last updated 5 September 2026” until a real collection change happens.

---

## B. louislynn AEO drafts

Source access this run: `gh` and raw GitHub return 404 for `llconsulting/llco-test`. Box path `/workspace/louislynn-os` is not mounted. Live HTML routes below were checked on https://www.louislynnco.com/ (6 September 2026). Do not rewrite the articles. Mark leftover gaps only. Skeptic KEEP WITH FIXES were already applied.

Voice lock for any leftover line: **your business**. Faceless. No cell. Do not add a personal name as the speaker, host, or author.

| PR | File (known) | Intended route | Live 2026-09-06 | Status |
| --- | --- | --- | --- | --- |
| [llco-test #30](https://github.com/llconsulting/llco-test/pull/30) | `_working/google-business-profile.md` | `/google-business-profile/` | 404 | **patched** (KEEP WITH FIXES in). **Blocked** on access model + screenshots. Live HTML not built. |
| [llco-test #33](https://github.com/llconsulting/llco-test/pull/33) | `_working/how-to-choose-a-local-seo-agency.md` | `/how-to-choose-a-local-seo-agency/` | 404 | **patched**. Remaining: screenshots, live HTML route. |
| [llco-test #34](https://github.com/llconsulting/llco-test/pull/34) | `_working/how-to-get-google-reviews.md` | `/how-to-get-google-reviews/` | 404 | **patched**. Remaining: screenshots, live HTML route. Named-person scripts / timing stay withheld. |

Existing louislynn blog (`/blog/`) has other posts (pricing, site ownership, local SEO, AI search). It does **not** publish these three AEO guides. Do not turn the drafts into blog posts overnight.

### Remaining gaps (all three)

1. **Screenshots still missing.** Need in-product captures for your business (GBP dashboard, review ask / QR / link, whatever the patched draft already calls for). No stock faces. No cell-phone hero. Do not spend on a shoot this sprint.
2. **GBP access model still open (PR 30).** Who logs in: your business, the agency as a manager, or both. Do not write a how-to that assumes one login story until CoS picks it. This blocks final GBP steps, not the rest of the patched prose.
3. **Live HTML routes not built.** `/google-business-profile/`, `/how-to-choose-a-local-seo-agency/`, and `/how-to-get-google-reviews/` 404 on louislynnco.com. Out of scope to implement tonight.
4. **Named-person scripts and timing stay withheld** (frontmatter lock). Do not draft a host VO, a filming schedule, or a speaker name for these pages. Faceless page copy only.
5. **Prefer “your business.”** If a leftover sentence still says “the client,” “homeowners,” or a shop type that is not the reader, swap to your business. Do not add a cell number.

Do not merge those PRs from this file. Do not publish. Do not spend.

---

## C. Priority order for overnight (P0 / P1 / P2)

Work is **gap notes and string alignment**, not a site build.

### P0

1. **Treat live Netlify as the old IA.** It still has named-person chrome and a blog. Do not write new named-person copy. Do not keep Notes. Rebuild paste = HUMAN four pages only.
2. **Lock one slug set** before anyone pastes HTML: HUMAN `/why-hiccups-start/` + `/when-to-stop/` **or** Apple `/why/` + `/when/`. Not both.
3. **Why + when AEO is in the HUMAN deck and missing from Apple HTML.** Paste the six + six Common questions onto those two pages. That is the overnight content hole.
4. **When-to-stop hour language:** use HUMAN (“about 48 hours, or two days”; sources vary). Drop Apple / live-post “we will not name a number.”
5. **louislynn:** leave GBP access model marked blocked; list screenshot slots; do not invent captures or a login story.

### P1

1. Fold the five missing HUMAN home FAQs onto any Apple/home paste target.
2. Replace Apple / live timer and idle microcopy with the HUMAN state table.
3. Privacy honesty: paste HUMAN only if empty ad chrome is off; otherwise one empty-slot line, no vendors.
4. louislynn live routes stay unbuilt. Next builder step, not this sprint.

### P2

1. Optional `FAQPage` JSON-LD on the three pages that already have Common questions. Not required by the copy lock. HowTo on home only. No `Medical*` types. No `Person`.
2. Video desk pack already exists in HUMAN §6 (faceless). Do not write a named-person script or a timing sheet. Shipping files is out of scope.
3. Apple why/when lack the URL-only footnotes. Add them when pasting HUMAN. Do not expand into a research section.

---

## D. Explicit out of scope

- Blog / Notes index / any `/blog/*` rewrite. Kill, do not refresh.
- Baby pages, pet pages, pregnancy pages, evolution pages.
- Spend (ads, domains, stock, production).
- Merge to `main`. Publish to `.com` or replace the live Netlify alias.
- Implement the site. Rewrite full articles.
- Medical cure claims, success rates, studies, clinician quotes, invented mechanisms.
- Named-person recommendations as copy (titles, H1s, VO, schema, footer).
- louislynn cell numbers, owner headshots, or a decided GBP login story.
- Fifth method step. Folk-remedy ranking. Timed result claims.

Done when this file exists on a draft PR. Nothing else ships from this sprint.
