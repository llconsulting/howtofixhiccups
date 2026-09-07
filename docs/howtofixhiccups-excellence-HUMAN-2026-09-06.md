---
title: howtofixhiccups excellence copy deck (HUMAN)
date: 2026-09-06
status: draft-for-web-builder
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-excellence-HUMAN-2026-09-06.md
supersedes: docs/howtofixhiccups-rebuild-copy-HUMAN-2026-09-05.md
notes: >
  CoS mirror path for louislynn-os. One file. Preview-ready paste strings.
  Do not merge. Do not publish. Do not spend. Do not implement HTML from this PR.
  Brand is faceless. Kill blog IA. No personal names, cure claims, studies,
  doctor endorsements, NAP, or credentials.
brand: howtofixhiccups
voice: faceless
pages: 4
blog: kill
---

# howtofixhiccups excellence copy

Paste-ready strings for Web Builder. One site. Four pages. No blog.

## Web notes (read first)

Owner asked for an excellence pass. Home and supporting pages were locked and correct. They were not elite. This file raises craft. It does not reopen the method, the IA, or the medical lines.

**This PR is the deck only. Do not merge. Do not publish. Do not spend.**

### What changed

- Hero talks to a person with hiccups. Four stacked fragments are gone.
- Walkthrough microcopy is clearer: inhale prompt, swallow confirm, hold, thin blow. Same length, sharper.
- Tutorial lost the water / spoon / anyone triad (FAQ already owns water).
- Limits is now who the page is for. The "what this page is not" listicle is gone.
- Why / when / privacy keep the same facts in a tighter rhythm.
- Privacy says what stays on the device. No host, stack, or ad theater.
- Video desk stays short. One VO line and one on-screen line per beat.
- Host alt is generic. No catalog face notes. No names.

### What stays locked

- Faceless brand: `howtofixhiccups` / `How to Fix Hiccups` / **the method**. No Callie. No personal names in titles, H1s, body, buttons, alt, VO, on-screen, schema, or footer.
- Exactly four method steps. Exact actions. Do not reorder. No fifth step.
- On-page body: `12 to 15` (no en dash).
- Not medical advice. No cure claims, success rates, studies, clinician quotes, invented mechanism.
- Four pages only. No blog. No Notes. No About.
- AEO ownership stays on the same pages. Same nine home questions, six why questions, six when questions.
- Warning list on When to stop is unchanged.
- Public-page range stays "about 48 hours, or two days" plus "sources vary." Do not invent one cutoff.
- HowTo on home only. No `Medical*` types. No `Person`.
- Host face KEEP. Do not generate new media. Do not spend.
- Production slugs: `/` `/why/` `/when/` `/privacy/` (trailing slashes). Older HUMAN long slugs `/why-hiccups-start/` and `/when-to-stop/` do not ship as a second pair. If they still 301 to the shorts, leave the redirects.

### Implement order

1. `js/method.js` walkthrough strings (idle, step prompts, swallow confirm, hold, blow, extra, done, stop). This is the quality lift people feel.
2. Home hero, written steps, step helpers.
3. Home tutorial, questions, limits, Read this, closing links.
4. `/why/` then `/when/` then `/privacy/`.
5. HowTo / WebSite schema, alt, host caption. Match paste strings.
6. Video desk only if a take is already being voiced. Do not open a generate job from this file.

Paste over PR #3 Apple HTML and the 2026-09-05 HUMAN deck. Live `https://howtofixhiccups.netlify.app/` is still the old named-person site. Treat that as the thing this copy replaces, not as source.

---

Brand on the page is **howtofixhiccups** or **How to Fix Hiccups**. Call the sequence **the method**. Do not put a personal name in a title, heading, body line, button, alt text, video VO, on-screen text, schema, or footer.

This is not medical advice. Do not add cure rates, studies, clinician quotes, or a "why it works" mechanism.

## Locked method

Do not reorder. Do not add a fifth step. Do not rewrite the action.

1. Deep breath all the way in and swallow it.
2. Another breath in on top of that and swallow completely.
3. Hold breath 30 full seconds.
4. Slowly blow out as through the tiniest straw for 10 full seconds (or 12 to 15 if you can).

On-page body uses "12 to 15". Do not use an en dash in live copy.

The timer may keep a thin stream going after 10 seconds. That is still step 4. It is not a fifth step.

---

## 1. Site IA

Keep these four routes. Trailing slashes.

| Page | Path | Nav label |
| --- | --- | --- |
| Home (method + tutorial) | `/` | The method |
| Why hiccups start | `/why/` | Why they start |
| When to stop / see a clinician | `/when/` | When to stop |
| Privacy | `/privacy/` | Privacy |

### Delete from the rebuild

Kill these live routes. Do not redirect them into a Notes index. Send old blog and about URLs to `/` or the page that now owns the question.

- `/blog/`
- `/blog/*` (including the three Notes posts)
- `/notes/`
- `/about/`
- Any "Callie's method" or named-person label in chrome, schema, or video

No `/blog/`. No Notes index. No posts.

If `/why-hiccups-start/` or `/when-to-stop/` already 301 to `/why/` and `/when/`, keep those redirects. Do not publish both slug pairs.

### Header chrome

- Wordmark: `howtofixhiccups`
- Wordmark links to `/`
- Nav (exactly three; 2026-09-07 lock): `The method` · `Why they start` · `When to stop`
- Legal page is footer-only. Do not add a fourth primary header link.

### Footer chrome

```
Not medical advice.
howtofixhiccups
The method · Why they start · When to stop · Privacy
```

### Skip link

```
Skip to content
```

### AEO ownership (no extra routes)

Soft FAQ coverage on the page that owns the question. Do not add blog posts, baby pages, pet pages, pregnancy pages, or evolution pages.

| Owns | Page |
| --- | --- |
| Method, water, 30-second hold meaning, adults, hold is step 3, after eating or alcohol, how many passes, page limits | `/` |
| Random or sudden start, everyday triggers, the hic sound, what a short bout tells you, reflux mention, frequent return | `/why/` |
| How long / ~48 hours, two days or all day, urgent flags, no diagnosis of named diseases, post-procedure or new medicine, when to stop home methods | `/when/` |

No folk-remedy ranking. No timed result claims. No mechanism for why the method works.

---

## 2. Home `/`

### Title

```
How to fix hiccups
```

### Meta description (156 characters)

```
Four steps you can do in place. Breathe and swallow, add a second breath, hold 30 full seconds, then a thin blow. Not medical advice. Ordinary hiccups only.
```

### OG title

```
How to fix hiccups
```

### OG / Twitter description

```
Four steps you can do in place. Not medical advice. Ordinary hiccups only.
```

### H1

```
How to fix hiccups
```

### Hero lead

```
You have hiccups. This method is four steps you can do sitting still.
```

### Hero supporting line

```
Stay where you are. Breath, swallow, hold, then a thin blow.
```

### Hero primary CTA

```
Start
```

### Hero helper (under the Start control)

```
Step 3 is a 30 second hold.
```

### Hero disclaimer

```
Not medical advice. For ordinary, short-lived hiccups.
```

### Hero secondary links

- `Why hiccups start` → `/why/`
- `When to stop` → `/when/`

### Host caption (if the still / clip stays)

```
Follow along.
```

### H2: The method

```
The method
```

### Method intro

```
Four steps. This order.
```

### Numbered steps (use as H3 or as a numbered list)

**1.**

```
Deep breath all the way in and swallow it.
```

Step helper:

```
Fill all the way. Swallow that breath. Wait until the swallow finishes.
```

**2.**

```
Another breath in on top of that and swallow completely.
```

Step helper:

```
Keep the first breath. Add the second on top. Swallow all the way.
```

**3.**

```
Hold breath 30 full seconds.
```

Step helper:

```
Keep the air in. Stay still. Wait for the full 30.
```

**4.**

```
Slowly blow out as through the tiniest straw for 10 full seconds. Go to 12 to 15 if you can.
```

Step helper:

```
Thin stream. Like the tiniest straw. Stay on the count.
```

### H2: On this page

```
On this page
```

### Tutorial body

```
Sit or stand still.
Press Start when you are ready.

Swallow before the next breath.
Hold until the count finishes.
Blow thin for the full count.

If you feel lightheaded, stop. Breathe normally.

This page is for adults with ordinary hiccups.

One calm pass.
Once more the same evening is fine for a short spell.

If they last, keep coming back, or show up with other symptoms, stop.
Read When to stop.
```

Internal link on `When to stop` → `/when/`

### Tutorial CTA

```
Start the method
```

### H2: Common questions

```
Common questions
```

Keep this block on the home page. Soft AEO coverage. Do not turn it into posts.

#### H3: Does this always work?

```
No.
Ordinary hiccups often leave on their own.
The four steps are here if you want to try them.
```

#### H3: Do I need water, sugar, or someone to scare me?

```
No.
This method is breath and a swallow.
Water is optional.
```

#### H3: Will they stop in 30 seconds?

```
Thirty seconds is the hold on step 3.
We do not promise they stop at 30 seconds.
```

#### H3: Is holding my breath enough?

```
Hold is step 3.
Do the two swallows first.
This is one four-step method.
```

#### H3: Can I use this for a baby or a pet?

```
This page is for adults with ordinary hiccups, not babies or pets.
```

#### H3: Can I try after a meal or a drink?

```
Yes, if you feel safe to sit or stand still and breathe.
If you feel dizzy or unsafe, stop.
If the spell lasts, read When to stop.
```

Internal link on `When to stop` → `/when/`

#### H3: What if I lose the first breath on step 2?

```
Start over from step 1.
Keep the first breath. Add the second on top.
Swallow completely.
```

#### H3: What if I feel dizzy?

```
Stop.
Breathe normally.
Sit down if you need to.
```

#### H3: How many times can I run it?

```
One calm pass.
Once more the same evening is fine for a short spell.
If it has been going for days, stop and read When to stop.
```

Internal link on `When to stop` → `/when/`

### H2: Who this is for

```
Who this is for
```

### Limits body

```
Adults with ordinary hiccups.
A short spell.

If it has been days, stop.
Read When to stop.
```

Internal link on `When to stop` → `/when/`

### H2: Read this

```
Read this
```

### Disclaimer body

```
This site is not medical advice.
The method is a home sequence for ordinary adult hiccups.
We do not claim a cure.
We do not claim a success rate.
Short hiccups often leave on their own.

If you are unsure whether yours are ordinary, talk to a clinician.
```

### Home closing links

- `Why hiccups start` → `/why/`
- `When to stop` → `/when/`
- `Privacy` → `/privacy/`

Closing link helpers (if the card layout stays):

- Why: `What often starts a short spell.`
- When: `Stop rules if they last or arrive with other symptoms.`
- Privacy: `The timer stays on your device.`

### Home UI microcopy (timer)

Use if the Start control stays. Clearer prompts. Not a longer script.

| State | Kicker | Label / prompt | Helper / confirm |
| --- | --- | --- | --- |
| Idle | `The method` | `Start` | `Step 3 is a 30 second hold.` |
| Idle button | | `Start` | |
| Step 1 inhale | `Step 1 of 4` | `Breathe all the way in.` | `Fill all the way. Then swallow.` |
| Step 1 swallow | `Step 1 of 4` | `Swallow that breath.` | `Wait until the swallow finishes. Then tap.` |
| Step 1 button | | `I swallowed` | |
| Step 2 inhale | `Step 2 of 4` | `Second breath on top.` | `Keep the first breath. Add another.` |
| Step 2 swallow | `Step 2 of 4` | `Swallow completely.` | `Swallow all the way. Then tap.` |
| Step 2 button | | `I swallowed` | |
| Hold | `Step 3 of 4` | `Hold.` | `Keep the air in. Stay still. Full 30.` |
| Hold timer unit | | `seconds` | |
| Blow | `Step 4 of 4` | `Thin blow.` | `Like the tiniest straw. Stay on the count.` |
| Blow timer unit | | `seconds` | |
| Extra blow | `If you can` | `Keep it thin.` | `Twelve to 15 if you can.` |
| Extra button | | `Done` | |
| Extra note (if a line sits under the timer) | | `Keep it thin to 12 to 15 if you can.` | |
| Done | `The method` | `Done. Breathe normally.` | `One more pass the same evening is fine for a short spell.` |
| Stop / reset | | `Stop` | |
| Lightheaded note | | `Stop if you feel lightheaded.` | |
| Live finish announce | | `That is the method.` | |
| Live reset announce | | `Stopped.` | |

If the walkthrough waits on the swallow tap (no auto-advance), use the inhale prompt first and switch to the swallow prompt when you ask for the tap. If it is one screen per step, pair the inhale label with the swallow helper and keep the `I swallowed` button.

Share control, if it stays: `Copy link` / `Copied`. Do not write a timed result on that button.

Builder note: never write timed result claims such as "stops in 30 seconds." The 30 is hold length only.

---

## 3. Why hiccups start `/why/`

Ordinary language only. Thin what-a-hiccup-is beat from public pages. No reflex-arc lecture. No clinic branding in the hero. No studies.

### Title

```
Why hiccups start
```

### Meta description (156 characters)

```
Hiccups are sudden squeezes of the breathing muscle and a hic sound. Ordinary spells often last a few minutes. A meal or fizz is common. Not medical advice.
```

### OG / Twitter description

```
Hiccups are sudden squeezes of the breathing muscle and a hic sound. Ordinary spells often last a few minutes.
```

### H1

```
Why hiccups start
```

### Breadcrumb

`The method` → `/` · `Why hiccups start`

### Lead

```
Hiccups are repeated squeezes of the breathing muscle under your ribs.
You do not choose them.
Your vocal cords close. That is the hic.

A specific reason is often missing.
Nerves that help control that muscle can get irritated.
```

### H2: What often starts them

```
What often starts them
```

### Body

```
People often notice a spell after ordinary moments.

A large meal, or a fast one.
A fizzy drink.
Alcohol.
Food or drink that is hot, spicy, or a sharp swing in temperature.
Swallowing extra air, like with gum or smoking.
Excitement or stress.

This site is for that kind of spell. Short. Ordinary.
```

### H2: They often pass

```
They often pass
```

### Body

```
Ordinary spells usually last a few minutes.
They often go away on their own.

The method is on the home page if you want one thing to try.
```

Internal link on `the home page` → `/`

### H2: Lasting or severe spells

```
Lasting or severe spells
```

### Body

```
Spells that last days or longer are less common.
Those belong with a clinician.

So do hiccups that keep returning.
So do hiccups that arrive with other warning signs.

Read When to stop.
```

Internal link on `When to stop` → `/when/`

### H2: Common questions

```
Common questions
```

Keep these on this page. Do not spin them into posts.

#### H3: Why do hiccups start out of nowhere?

```
A specific reason is often missing.
Everyday things can still start a short spell.
A large or fast meal.
A fizzy drink.
Alcohol.
Spice or a sharp swing in temperature.
Extra air.
Excitement or stress.
```

#### H3: Why after eating, spice, alcohol, stress, or a laugh?

```
A full or fast meal can start a short spell.
So can spicy food, alcohol, stress, excitement, or a laugh that hits while you swallow.
A specific reason is still often missing.
```

#### H3: What is the "hic"?

```
The breathing muscle squeezes and the voice box closes. That is the hic.
```

#### H3: What do hiccups tell you?

```
A short bout usually tells you little.
If they last or come with other symptoms, read When to stop.
```

Internal link on `When to stop` → `/when/`

#### H3: Could this be heartburn or reflux?

```
People sometimes notice hiccups with reflux discomfort.
This page cannot diagnose that.
If hiccups last and you also have heartburn, talk to a clinician.
```

#### H3: What if I get them all day or they keep coming back?

```
Look at the everyday triggers on this page.
If they return often and affect your life, read When to stop.
```

Internal link on `When to stop` → `/when/`

### Page CTAs

- Primary: `Go to the method` → `/`
- Secondary: `When to stop` → `/when/`

### Sources footnote (tiny, URLs only)

```
Public references:
https://www.mayoclinic.org/diseases-conditions/hiccups/symptoms-causes/syc-20352613
https://my.clevelandclinic.org/health/diseases/17672-hiccups
https://medlineplus.gov/ency/article/003068.htm
https://www.nhs.uk/symptoms/hiccups/
```

---

## 4. When to stop `/when/`

Clear stop rules. No scare theater. State repeated public thresholds. Sources vary. Do not invent one official cutoff.

### Title

```
When to stop
```

### Meta description (150 characters)

```
Talk to a clinician if hiccups last about 48 hours or two days. Sources vary. Also stop if they block eating, sleep, or breathing. Not medical advice.
```

### OG / Twitter description

```
Talk to a clinician if hiccups last about 48 hours or two days. Sources vary.
```

### H1

```
When to stop
```

### Breadcrumb

`The method` → `/` · `When to stop`

### Lead

```
This method is for a short, ordinary spell.

If hiccups last about two days, keep coming back, or come with other warning signs, talk to a clinician.

Public pages do not all use the same cutoff.
```

### H2: When the spell lasts

```
When the spell lasts
```

### Body

```
Many major health pages say see a clinician if hiccups last more than about 48 hours, or two days.

Some pages say more than two or three days when there are no other warning signs.
Some pages say more than a few days.

Sources vary on the exact number.

Also stop and see a clinician if hiccups are so severe they get in the way of eating, sleeping, or breathing.

Stop if they keep coming back often and affect your life.
```

### H2: Get help if you also have

```
Get help if you also have
```

### List

```
- Trouble breathing
- Chest pain
- Fainting
- Sudden weakness or numbness
- Confusion
- Trouble swallowing
- Headache
- Loss of balance
- Trouble walking, talking, or seeing
```

### After the list

```
Warning signs like these belong with a doctor right away.

Ordinary hiccups alone are usually not treated as an emergency.

If hiccups arrive with a suspected stroke or a suspected clot in the lung, seek emergency care.

This page is not an emergency protocol.
Tell someone what is going on.
```

### H2: Do not loop the method

```
Do not loop the method
```

### Body

```
After one calm pass, you can try once more the same evening on a short ordinary bout.
Stop sooner if the clock or your body says this is not ordinary.

Repeating the sequence will not make a lasting problem safer.
The method does not treat disease.
```

### H2: If the spell is short

```
If the spell is short
```

### Body

```
The walkthrough is on the home page.
```

Internal link on `home page` → `/`

### H2: Common questions

```
Common questions
```

Keep these on this page. Do not spin them into posts.

#### H3: When should I worry, and how long is too long?

```
Ordinary spells often last a few minutes.
Many public pages say see a clinician after about 48 hours, or two days.
Sources vary.
Also get help if eating, sleeping, or breathing is getting blocked.
```

#### H3: They have lasted two days, or all day, and will not stop.

```
Stop looping the home method.
Talk to a clinician.
```

#### H3: Do I need emergency care?

```
Ordinary hiccups alone are usually not treated as an emergency.
Get urgent help if they come with trouble breathing, chest pain, fainting, sudden weakness, or confusion.
This page is not an emergency protocol.
```

#### H3: Could this be a heart attack, a stroke, or cancer?

```
This page does not diagnose heart attack, stroke, or cancer.
Other worrying symptoms belong with clinical care.
```

#### H3: What if they started after surgery, anesthesia, chemo, steroids, or a new medicine?

```
That is outside this home method.
Contact your care team or the clinician who prescribed the medicine.
Do not stop a medicine because of this page.
```

#### H3: When should I stop trying this at home?

```
After one calm pass on an ordinary short bout.
Once more the same evening is fine.
Stop sooner if the clock or your body says this is not ordinary.
```

### Page CTAs

- Primary: `Go to the method` → `/`
- Secondary: `Why hiccups start` → `/why/`

### Sources footnote (tiny, URLs only)

```
Public references:
https://www.mayoclinic.org/diseases-conditions/hiccups/symptoms-causes/syc-20352613
https://my.clevelandclinic.org/health/diseases/17672-hiccups
https://medlineplus.gov/ency/article/003068.htm
https://www.nhs.uk/symptoms/hiccups/
```

---

## 5. Privacy `/privacy/`

Plain language. What stays on the device. What a visit may leave. No vendor names. No ad theater. No stack boasts.

### Title

```
Privacy
```

### Meta description (160 characters)

```
The timer stays on your device. We do not collect health information. We do not sell personal information. Visits may leave a normal record. Not medical advice.
```

### OG / Twitter description

```
The timer stays on your device. We do not collect health information. We do not sell personal information.
```

### H1

```
Privacy
```

### Breadcrumb

`The method` → `/` · `Privacy`

### Lead

```
We do not sell personal information.
The timer stays on your device.
We do not collect health information.
```

### H2: The timer

```
The timer
```

### Body

```
The countdown runs on your device.
We do not see that you pressed Start.
We do not see how long you held.
We do not receive a record that you had hiccups.
```

### H2: Visits

```
Visits
```

### Body

```
When you open a page, a normal visit record may be kept.
That can include your IP address, browser type, and which page you asked for.
We do not use that to build a profile of you.
```

### H2: Your information

```
Your information
```

### Body

```
We do not sell personal information.
We do not ask children for data.
This page is not medical advice.

If ads ever appear here, this page will say so first.
```

### Updated line

```
Last updated 6 September 2026.
```

### Page CTA

- `Back to the method` → `/`

---

## 6. Video desk pack

UGC host is on camera. Do not name the host. Do not name a founder. Brand is the method.

Film one take per step. Face + upper chest. Quiet room. No extra B-roll. No origin story.

On-screen text stays short. One line. Large. High contrast.

Do not generate new clips from this file.

### Shared open (optional, 1 take, under 4 seconds)

**VO**

```
Hiccups. Four steps. Stay still.
```

**On-screen**

```
The method
```

### Step 1

**VO**

```
Deep breath. All the way in.
Swallow it.
```

**On-screen**

```
Breathe in. Swallow.
```

### Step 2

**VO**

```
Another breath on top.
Swallow completely.
```

**On-screen**

```
Second breath. Swallow.
```

### Step 3

**VO**

```
Hold.
Thirty full seconds.
```

**On-screen**

```
Hold 30 seconds.
```

### Step 4

**VO**

```
Slow blow. Like the tiniest straw.
Ten full seconds. Twelve to fifteen if you can.
```

**On-screen**

```
Thin blow. 10 seconds.
```

### Shared close (optional, 1 take, under 4 seconds)

**VO**

```
That is the method.
Stop if you feel lightheaded.
```

**On-screen**

```
howtofixhiccups
```

### Alt text (if a still or poster is used)

No names. No hair, eye, or wardrobe catalog.

- Idle: `Person on camera, ready to start the four-step hiccup method.`
- Step 1: `Person on camera taking a deep breath, then swallowing.`
- Step 2: `Person on camera adding a second breath, then swallowing.`
- Step 3: `Person on camera holding their breath.`
- Step 4: `Person on camera blowing out slowly through pursed lips.`
- Poster: `Person on camera running the four-step hiccup method.`

---

## 7. HowTo schema note

Use `HowTo` plus an `Organization`. Four `HowToStep` items. Same order as the locked method.

Do **not** use `MedicalWebPage`, `MedicalCondition`, `MedicalTherapy`, `MedicalSignOrSymptom`, or any other `Medical*` type.

Do **not** set a `Person` as `author`, `creator`, or `reviewedBy`.

Organization / brand name: `howtofixhiccups` or `How to Fix Hiccups`. No personal name.

Suggested JSON-LD for `/` only:

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to fix hiccups",
  "description": "A four-step breath and swallow sequence for ordinary hiccups. Not medical advice.",
  "author": {
    "@type": "Organization",
    "name": "How to Fix Hiccups"
  },
  "publisher": {
    "@type": "Organization",
    "name": "howtofixhiccups"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Deep breath and swallow",
      "text": "Deep breath all the way in and swallow it."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Second breath and swallow",
      "text": "Another breath in on top of that and swallow completely."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Hold 30 seconds",
      "text": "Hold breath 30 full seconds."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Thin blow",
      "text": "Slowly blow out as through the tiniest straw for 10 full seconds. Go to 12 to 15 if you can."
    }
  ]
}
```

Optional `WebSite` on every page, still faceless:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "How to Fix Hiccups",
  "url": "https://howtofixhiccups.com/",
  "publisher": {
    "@type": "Organization",
    "name": "howtofixhiccups"
  }
}
```

---

## 8. Internal link map

| From | To | Anchor |
| --- | --- | --- |
| Home hero | `/why/` | Why hiccups start |
| Home hero | `/when/` | When to stop |
| Home tutorial | `/when/` | When to stop |
| Home FAQ / limits | `/when/` | When to stop |
| Home close | `/why/` | Why hiccups start |
| Home close | `/when/` | When to stop |
| Home close | `/privacy/` | Privacy |
| Why they start | `/` | the home page / Go to the method |
| Why they start | `/when/` | When to stop |
| Why FAQ (what they tell you, frequent return) | `/when/` | When to stop |
| When to stop | `/` | home page / Go to the method |
| When to stop | `/why/` | Why hiccups start |
| Privacy | `/` | Back to the method |

No links to `/blog/` or `/about/`.

---

## 9. Anti-slop checklist

Pass run on this file before handoff.

| Check | Result |
| --- | --- |
| Personal names (Callie, or any person) | None in titles, body, VO, alt, schema |
| Blog / Notes IA | Killed. Four routes only |
| Em dashes | None |
| En dashes | None in live copy. Locked method written as "12 to 15" |
| Semicolons | None |
| "just" / "actually" | None |
| Not-X-just-Y / "it's not X, it's Y" | Cut. Required disclaimer stays as a standalone fact: "Not medical advice." |
| Corporate verbs (leverage, seamless, empower, unlock, elevate, transform) | None |
| Opener theater ("we've all been there", "in today's world") | None |
| Stack / host / framework boasts | None |
| Fake depth / invented mechanism | None. Why page says "breathing muscle" and "voice box," not a reflex-arc lecture |
| Cure rates, studies, doctor endorsements | None |
| NAP / credentials / named author | None |
| Method order | Locked four steps, unchanged |
| Scare timelines | No invented single cutoff. Public pages vary (about 48 hours / two days / a few days) |
| Ads honesty | No ad inventory claimed. Update this page if ads appear later. |
| Walkthrough | Inhale, swallow confirm, hold, thin blow. Clearer, not longer |

Builder note: keep sentences short on the page. One idea per line is fine. Do not enrich this copy with a science graph or a founder story.
