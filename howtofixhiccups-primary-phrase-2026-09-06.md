---
title: howtofixhiccups primary phrase map
date: 2026-09-06
fetched: 2026-09-07
status: owner-facing-phrase-map
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-primary-phrase-2026-09-06.md
preview_judged: https://deploy-preview-3--howtofixhiccups.netlify.app/
repo: https://github.com/llconsulting/howtofixhiccups
pr3: https://github.com/llconsulting/howtofixhiccups/pull/3
canonical_host: https://howtofixhiccups.com/
notes: >
  One owner file. Research only. Do not merge. No AdSense. No domain buy.
  No invented monthly volumes. Ahrefs lean path failed; public SERP +
  Google Trends relative interest only.
---

# howtofixhiccups primary phrase (2026-09-06)

**Job:** Map the most-searched US hiccup how-to phrase to howtofixhiccups (PR3 / future `.com`).  
**Preview crawled:** https://deploy-preview-3--howtofixhiccups.netlify.app/  
**Canonical stays:** `https://howtofixhiccups.com/`  
**This file:** research note only. Not a production HTML change. Not a merge.

---

## Units / source note

### Ahrefs (preferred lean path) — failed

| Step | Result |
| --- | --- |
| `subscription-info-limits-and-usage` | **Not called.** Namespace `ahrefs` failed live tool discovery. Namespace `ahrefs-mcp` listed ready with an empty tool list. Direct call: `MCP server does not exist: ahrefs-mcp`. |
| Remaining units | **UNKNOWN** — could not read the free usage endpoint. |
| `doc` + `keywords-explorer-overview` (US, candidate list) | **Not called.** No spend. |
| Treg catalog keyword APIs | **Not called.** Lock is no spend beyond lean Ahrefs. |
| Ahrefs spend this job | **$0** |

### Fallback used (public only)

Volumes in the table are **UNKNOWN**. Do not treat the Trends column as monthly search volume.

| Source | What was pulled | When |
| --- | --- | --- |
| Google Autocomplete | US (`hl=en`, `gl=us`) suggestions + `suggestsubtypes` for each candidate | 2026-09-07 |
| Google Trends | US, last 12 months (`today 12-m`, 2025-09-07 to 2026-09-07). Relative interest 0–100 vs the peak in that comparison. Google’s own averages when a set was compared. | 2026-09-07 |
| Live SERP titles / on-page H2s | Web search result titles and quoted consumer-question headings | 2026-09-07 |
| PR3 preview HTML | `curl` of `/`, plus `/why/` and `/when/` for context | 2026-09-07 |

Trends is a **relative** series. Averages from two different comparison sets are not the same scale. They are ranking evidence only.

---

## Candidate table (US)

| Phrase | Volume | Intent | Notes |
| --- | --- | --- | --- |
| how to get rid of hiccups | **UNKNOWN** | Informational how-to | Autocomplete exact query carries subtype `433` (popular/entity) plus `512`. Trends 3-way US 12-mo average **37** (53/53 weeks; median 37; max 45). In a later 5-way set the how-to form averaged **34**, tied with “how to stop hiccups”. Related queries: “fast” (100), then a **heavy baby/newborn cluster** (newborns 43, babies 28, baby 26). SERP titles/H2s use this wording: GoodRx *How to Get Rid of Hiccups Fast*; Cleveland Clinic and MedlinePlus H2 *How can I get rid of hiccups?* |
| get rid of hiccups | **UNKNOWN** | Informational (same family) | Autocomplete `512` only (no `433` on the short form). Trends 5-way US 12-mo average **43** — **highest relative average in that set**. Treat as the short sibling of the get-rid family, not a different topic. |
| how to stop hiccups | **UNKNOWN** | Informational how-to | Autocomplete `433`+`512`. Trends 3-way average **37** (53/53 weeks; median 32; max **100** — spikier). 5-way how-to average **34** (tied with get-rid how-to). Related queries are cleaner for adults: “fast” (100), baby only 8, immediately 3, adults 2. Northwestern title: *How To Stop Hiccups…*. Close second. Collision risk with PR3 `/when/` (“When to stop”). |
| stop hiccups | **UNKNOWN** | Informational (same family) | Autocomplete `433`+`512`. Trends 5-way average **41** — second-highest short form, just under “get rid of hiccups”. Same stop family as the how-to form. |
| how to fix hiccups | **UNKNOWN** | Informational how-to | Autocomplete `512` only. Trends 3-way: average **0**; data in only **17/53** weeks; those weeks mean **1.24**, max **2**. Public SERP titles from major US health/how-to pages rarely use “fix” as the exact head. **Not the most-searched head.** Matches the domain and current PR3 title/H1. |
| how to cure hiccups | **UNKNOWN** | **Medical / treatment — flag** | Autocomplete `512` only. Trends 5-way average **1** (44/53 weeks; max 3). “Cure” + MedlinePlus/Mayo/NHS-style treatment SERP. Wrong intent for a faceless four-step home method. Do not use as primary. Do not claim a cure. |

**Trends ranking (relative only, not volume):**

1. `get rid of hiccups` (short) — 43 in the 5-way  
2. `stop hiccups` (short) — 41 in the 5-way  
3. `how to get rid of hiccups` / `how to stop hiccups` — tied ~34–37 depending on set  
4. `how to cure hiccups` — ~1  
5. `how to fix hiccups` — ~0 / insufficient data  

---

## ONE primary recommendation

**Primary phrase: `how to get rid of hiccups`**

**Why this one**

- It is the how-to form of the **winning family**. The short sibling `get rid of hiccups` posted the highest Trends average in the five-phrase set. Title/H1 “How to get rid of hiccups” covers both.
- Intent is informational “make this spell go away,” which fits a faceless four-step walkthrough (breath, swallow, hold, thin blow). Not a clinic page. Not a cure claim.
- US consumer SERP already phrases the job this way (GoodRx title; Cleveland Clinic / MedlinePlus question).
- `how to fix hiccups` is the domain and the current PR3 H1, but Trends did not have enough US interest to plot it most weeks. Mapping the home URL to “fix” leaves the larger get-rid / stop demand unmatched.
- `how to stop hiccups` is a close second on relative interest and has **less baby/newborn leakage** in related queries. It is not the pick because (a) the get-rid family leads on the short form, and (b) PR3 already uses “When to stop” as the safety URL — home H1 “How to stop hiccups” would collide with that nav label.

**Baby/newborn leakage (copy lock, not a phrase change):** get-rid related queries are infant-heavy. Keep the live FAQ: this page is for **adults** with ordinary hiccups, not babies or pets. Do not write baby-method copy to chase that cluster.

**Close second if Ahrefs later disagrees:** `how to stop hiccups`. Re-run one `keywords-explorer-overview` on the same six phrases in `us` when units work. If Ahrefs volume clearly ranks stop above get-rid, switch the primary. Do not invent that number here.

---

## PR3 gap

Crawled 2026-09-07. Confirmed: live title and H1 center **“How to fix hiccups”**.

### Home `/` — quoted live

| Field | Live PR3 |
| --- | --- |
| Title | `How to fix hiccups` |
| H1 | `How to fix hiccups` |
| Meta description | `Four steps you can do in place. Breathe and swallow, add a second breath, hold 30 full seconds, then a thin blow. Not medical advice. Ordinary hiccups only.` |
| Canonical | `https://howtofixhiccups.com/` |
| `og:title` / Twitter title | `How to fix hiccups` |
| HowTo `name` | `How to fix hiccups` |
| HowTo `description` | `A four-step breath and swallow sequence for ordinary hiccups. Not medical advice.` |
| HowTo steps | 1. name `Deep breath and swallow` — `Deep breath all the way in and swallow it.` 2. name `Second breath and swallow` — `Another breath in on top of that and swallow completely.` 3. name `Hold 30 seconds` — `Hold breath 30 full seconds.` 4. name `Thin blow` — `Slowly blow out as through the tiniest straw for 10 full seconds. Go to 12 to 15 if you can.` |
| Robots (preview HTML) | `noindex, nofollow` (preview-only; leave that until `.com` answers) |

### Context only (do not retarget these to the primary)

| Path | Title | H1 | Meta (quoted) | Canonical |
| --- | --- | --- | --- | --- |
| `/why/` | Why hiccups start | Why hiccups start | `Hiccups are sudden squeezes of the breathing muscle and a hic sound. Ordinary spells often last a few minutes. A meal or fizz is common. Not medical advice.` | `https://howtofixhiccups.com/why/` |
| `/when/` | When to stop | When to stop | `Talk to a clinician if hiccups last about 48 hours or two days. Sources vary. Also stop if they block eating, sleep, or breathing. Not medical advice.` | `https://howtofixhiccups.com/when/` |

**Gap:** primary ≠ current. Home title / H1 / `og:title` / Twitter title / HowTo `name` still say **fix**. That is the weaker US how-to head.

**Already mapped:** four-step order, faceless chrome, no Callie, not-medical-advice language, `.com` canonical. Step wording can stay.

### Paste-ready home fixes (Web)

Use on PR3 / future `.com` home only. Canonical unchanged.

```
Title:
How to get rid of hiccups

H1:
How to get rid of hiccups

Meta description:
How to get rid of hiccups in four steps you can do in place. Breathe and swallow, add a second breath, hold 30 full seconds, then a thin blow. Not medical advice. Ordinary hiccups only.

og:title / twitter:title:
How to get rid of hiccups

HowTo name:
How to get rid of hiccups

HowTo description (optional; only if you touch the node):
A four-step breath and swallow sequence for ordinary hiccups. Not medical advice.

Canonical (do not change):
https://howtofixhiccups.com/
```

**HowTo steps:** keep the four live steps (breath, swallow, hold, thin blow). Do not rewrite step text for this phrase map.

**og:description / Twitter description:** current strings are fine. They do not need the phrase if title/H1/HowTo `name` carry it.

This note does **not** implement those strings. A separate Web PR would.

---

## Do-not

- Do not merge this file or treat it as a production deploy.
- Do not invent monthly volumes, KD, or Ahrefs units.
- Do not spend Treg / paid keyword APIs on this job.
- Do not use `how to cure hiccups` as primary. Flag: medical/treatment intent.
- Do not add Callie. Faceless only.
- Do not claim a cure, a success rate, or doctor-endorsed results.
- Do not write baby or pet method copy.
- Do not buy a domain. Do not apply AdSense.
- Do not change the canonical off `https://howtofixhiccups.com/`.
- Do not retarget `/why/` or `/when/` to the home primary.
- Do not add a fifth HowTo step.

---

## Mike decision

**Approve** remapping PR3 / future `.com` home **title, H1, og/twitter title, and HowTo `name`** to **How to get rid of hiccups**. Keep the four live steps and `https://howtofixhiccups.com/` canonical. Do not merge this research PR. When Ahrefs units work, run one US `keywords-explorer-overview` on the six candidates; switch to `how to stop hiccups` only if volume clearly outranks the get-rid family.
