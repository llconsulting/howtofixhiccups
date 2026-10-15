# Conversion read — 2026-09-06

Read only. Walked live hosts. No metrics invented. Unknowns: **Not in the current record.**

**Hosts walked**

- louislynn: https://www.louislynnco.com/ (HTTP 200)
- hiccups: https://deploy-preview-3--howtofixhiccups.netlify.app/ (HTTP 200). Fallback not used. Production https://howtofixhiccups.netlify.app/ is up but still Callie-branded; that host was not the walk.

**Locks**

- Hiccups preview: **Callie absent** (wordmark `howtofixhiccups`, caption “Follow along.”). Faceless lock holds on this host.
- louislynn homepage: **PREMIKATI / +175% / Inc5000 not on page.** Do not invent those numbers. Living-claim flag: off for this homepage.

---

## 1. louislynn homepage

### Offer hierarchy

H1: “Small business marketing services that work.” Lede: get found on Google for local SMBs.

Primary next step on-page is the **free 30-minute call**, not a service buy.

That call is the strategy call: https://www.louislynnco.com/contact/ title is “Contact louislynn | Book a Free 30-Minute Strategy Call.” Homepage labels it “Free 30-minute call” / “Book the call →”, not “strategy call.”

Word **“audit”** is not on the homepage. Closest: process step “Look at your setup” (no CTA) and footer “Free Web & AI Presence Review.”

### Primary path vs competing CTAs

**Primary (same intent, two surfaces)**

| Label | Dest |
| --- | --- |
| Get in touch → (header, hero, anthem) | https://www.louislynnco.com/contact/ |
| Book the call → | https://www.louislynnco.com/contact/ |
| Home form Send → | POST https://www.louislynnco.com/thanks/ (`name=contact`, hidden `page=home`) |

Contact form is the same Netlify form plus optional Subject. Header on that page: “Start the conversation →”. No Calendly on these two URLs.

**Competing (steal the next step)**

| Label | Dest | Why it competes |
| --- | --- | --- |
| Call (header) | `tel:+18642146842` | Parallel convert, skips form |
| See a local SEO case study | https://www.louislynnco.com/work/outback-construction-inc-tn/ | Hero peer to Get in touch |
| 7× See [service] | /website-design/ /branding/ /content-creation/ /local-seo-services-near-me/ /google-ads-management/ /demand-generation-services/ /fractional-cmo/ | Mid-page browse before the form |
| See client work / See the work | https://www.louislynnco.com/work/ | Proof path vs call |
| Free Web & AI Presence Review | https://getfoundongoogle.co (new tab) | **Get Found** product, not the call |
| Free Chrome Extension | Chrome Web Store Get Found listing (new tab) | Same product family |
| 2026 SC Digital Presence Index | https://research.louislynnco.com (new tab) | Research exit |

### Form friction

Home form fields: First name, Last name, Email, Message — all `required`. Honeypot “Leave this empty” (`bot-field`). No captcha on the page. Alt: `mailto:hi@louislynnco.com`.

Submit rate / drop-off: **Not in the current record.**

### P0 / P1

- **P0.** Two convert products on one homepage: strategy call (`/contact/` + home form) vs Get Found footer (`https://getfoundongoogle.co` + Chrome extension). Call is first-screen; Get Found is footer-only but is a full outbound offer.
- **P1.** Hero pairs Get in touch with a case-study exit. Seven service “See …” links sit between hero and the form. Header Call is a third convert.
- **P1.** “Free audit” is not a labeled CTA. “Look at your setup” has no link. Do not treat footer Get Found as the homepage audit unless that is the intended offer.

---

## 2. howtofixhiccups preview

Walked: https://deploy-preview-3--howtofixhiccups.netlify.app/

Conversion on this site = **finish the method**, not a lead form. No form on the homepage.

### Clean Start path

Above the fold: H1 “How to fix hiccups” → method card `#method` → button **Start**.

Helper: “Step 3 is a 30 second hold.” “Stop if you feel lightheaded.”

Secondary **Start the method** at https://deploy-preview-3--howtofixhiccups.netlify.app/#method is an in-page jump. It does **not** press Start.

### Start → swallow → hold → blow (from live `/js/method.js`)

1. **Start** — `beginStep(0)`. Start hides. Stop shows.
2. **Swallow 1** — “Breathe in. Then swallow.” User must click **I swallowed**. No auto-advance.
3. **Swallow 2** — “Second breath. Swallow all the way.” **I swallowed** again. No auto-advance.
4. **Hold** — 30s timer auto-advances. **Copy link** (`#share-btn`, aria-label “Copy link to howtofixhiccups.com”) is shown only on this step (`copyLink: true` / `showShare`). Click writes `https://howtofixhiccups.com/` to clipboard (label → “Copied”) or falls back to `navigator.share`. Logs to `localStorage` `htfh-hold-copy` / `htfh-share-count`. Share is ignored unless `inHoldWindow()`.
5. **Blow** — 10s auto, then optional 5s “Keep it thin…” with **I'm done**.
6. **Done** — “Done. Breathe normally.” Share hidden. Reset still labeled **Stop**.

### What blocks mid-method

- Two **I swallowed** gates. Miss a click and the hold never starts.
- **Share-on-hold is present.** Copy link sits in the timer wrap during the 30s hold. That is a second action while the user is supposed to stay still.
- **Stop** is available from step 1 on (full abort to idle).
- **Why hiccups start** / **When to stop** sit in the hero (`/why/`, `/when/`) and leave the Start card before the method begins.

Header: `/` The method · `/why/` Why they start · `/when/` When to stop · `/privacy/` Privacy.

FAQ on the homepage: “There is no 100% method on this site.” “We do not claim a cure.” “We do not claim a success rate.” Completion / share counts: **Not in the current record.**

### P0 / P1

- **P0.** Share-on-hold is live on deploy-preview-3. Record only. **Skeptic veto / stand down** — do not implement fight-the-prove CRO on this control.
- **P1.** Start CTA itself is clean (one Start in the card; lower Start the method only scrolls). Mid-method drop risk is the two swallow confirms, then the 30s hold with Copy link, then Why/When exits before Start.

---

## Stand-down / out of scope

No merge, deploy, spend, AdSense, outbound, growth ideas, or copy decks.

No hiccups CRO implementation from this read.

This repo `main` still ships Callie copy. That is not the preview host walked above.
