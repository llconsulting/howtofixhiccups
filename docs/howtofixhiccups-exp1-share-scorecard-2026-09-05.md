---
title: howtofixhiccups Experiment 1 — private share scorecard
date: 2026-09-05
walked: 2026-09-06
status: overnight-only-mike-fills
preview_url: https://deploy-preview-3--howtofixhiccups.netlify.app/
intended_box_mirror: /workspace/louislynn-os/hiccups-site/howtofixhiccups-exp1-share-scorecard-2026-09-05.md
notes: >
  One file. Scorecard only. Mike fills the five rows.
  No live-site edit. No AdSense. No spend. No invented rates.
brand: howtofixhiccups
focus: prove-share
---

# Experiment 1 — mid-hold Share / Copy scorecard

Private overnight only. Five people who are **still hiccuping** when they open the page.

**Preview:** https://deploy-preview-3--howtofixhiccups.netlify.app/

Do not use live `howtofixhiccups.netlify.app` or `.com`. Do not merge. Do not spend. No AdSense.

## Pass / fail (Mike lock)

- **PASS:** ≥2 of 5 testers tap Share or Copy **during the hold** (before blow ends).
- **FAIL:** &lt;2, **or** taps only after **Stop** / after the method ends.

That 2/5 threshold is the only metric in this file. No traffic, cure rate, or revenue.

| Rollup | Count |
| --- | --- |
| Mid-hold Share / Copy (counts) | ___ / 5 |
| After Stop / after method only (does not count) | ___ / 5 |
| Result | PASS / FAIL |

## Scorecard (Mike fills)

| Tester | Started hiccuping? | Start tapped? | Share / Copy during hold? | Share / Copy after Stop only? | Notes |
| --- | --- | --- | --- | --- | --- |
| T1 | Y / N | Y / N | Y / N | Y / N | |
| T2 | Y / N | Y / N | Y / N | Y / N | |
| T3 | Y / N | Y / N | Y / N | Y / N | |
| T4 | Y / N | Y / N | Y / N | Y / N | |
| T5 | Y / N | Y / N | Y / N | Y / N | |

A tester who was **not** hiccuping at open is out. Do not replace the row with a later non-hiccup open. Find another still-hiccuping person or leave the row blank and fail the night.

## How Mike runs the five (overnight)

1. Send only the preview URL above. No ads. No paid boost. No extra landing page.
2. Instruct: open it **while you still have hiccups**. Sit still. Tap **Start**. Do the method (two swallows, then the 30s hold, then the thin blow).
3. Watch or ask immediately after: did they tap **Copy link** / Share **while the 30s hold was running**, before the blow finished?
4. Mark the row. One pass per tester. Stop if they feel lightheaded.
5. Tally mid-hold taps. ≥2 = PASS. &lt;2, or every tap only after Stop / Done = FAIL. Then stop.

Do not coach “please share.” The test is whether they tap the control that appears on the hold.

## What counts (from live preview HTML / JS)

Walked 2026-09-06 on `https://deploy-preview-3--howtofixhiccups.netlify.app/js/method.js` and `/` markup.

The control is `#share-btn` (class `share-btn`), sitting under the timer in `#timer-wrap`. Idle markup: `hidden`, label **Copy link**, `aria-label="Copy link to howtofixhiccups.com"`. It copies or shares `https://howtofixhiccups.com/`.

`beginStep` calls `showShare(Boolean(step.copyLink))`. On this preview, `copyLink: true` is **only** on step `id: "hold"` (Step 3 of 4, `durationMs: 30000`, label “Hold. Wait for the count to finish.”). Swallows, blow (`id: "exhale"`), optional extra blow, idle, and finish do **not** set `copyLink`.

Tap handler is `shareLink()`:

1. Clipboard write of that URL. Button text becomes **Copied** for 1.6s, then **Copy link** again if still visible. That is a Copy tap.
2. If clipboard is blocked, fallback is `navigator.share({ title: "How to fix hiccups", url })`. Completing the sheet is a Share tap. Cancel / abort is **not** a tap.

`#reset-btn` is labeled **Stop**. It calls `reset()` → `renderIdle()` → `showShare(false)`. When the sequence ends, `finish()` paints “Done. Breathe normally.” and also `showShare(false)`. The on-page button is gone.

| Event | Counts as mid-hold? |
| --- | --- |
| Tap **Copy link** / native Share while Step 3 hold is on (30s ring visible; kicker “Step 3 of 4”) | **Yes.** This is during the hold, before blow ends. |
| Button reads **Copied** after that tap | Same tap. Do not double-count. |
| Native share sheet opened then cancelled | **No.** |
| Tap after **Stop** (idle again; button hidden) | **No.** After-stop only. |
| Tap / OS share after “Done. Breathe normally.” | **No.** After the method ends. |
| Copy the address bar, or share after blow has started | **No.** On-page `#share-btn` is already hidden on `exhale`. Browser-chrome share is not the hold control. |
| Tap during swallow 1 or 2 (`I swallowed`) | **No.** Button is hidden. Not the hold. |

Mark **Share / Copy during hold?** = Y only for the first yes-row in that table. Mark **Share / Copy after Stop only?** = Y when the only share/copy happened after Stop or after Done.

## CRO alignment (brief)

Existing notes, not a rewrite:

- **Process CRO** (`docs/howtofixhiccups-process-cro-2026-09-05.md`, PR 9): timer assists the 30s/10s beats; it must not own or kill the hold. Stop resets to idle. This experiment needs the hold to stay running so Copy link can appear.
- **Rebuild CRO** (`docs/howtofixhiccups-rebuild-cro-2026-09-05.md`, PR 6): Start begins the method; 30s hold / 10s blow stay honest; no invent metrics; no live ad network.
- **Sprint / prove lock** (process-CRO skeptic, `docs/howtofixhiccups-cro-skeptic-2026-09-05.md`, PR 14): share-first. Five private mid-hold Share / Copy taps at $0. Timer alone is enough for prove. Host is optional. No sprint CRO file in-repo; that lock *is* the overnight sprint.

Share-first means: the prove is a mid-hold tap, not a post-Done share and not a rebuild. The timer must not kill the hold (no auto-Stop, no extra hold chrome that ends the 30s early). Do not implement those CRO lists tonight.

## Out of scope

- No AdSense. No `ca-pub`. No ad slots.
- No spend. No boost. No outbound / growth deck.
- No live-site edit. No merge of PR 3. Preview only.
- No invented traffic, cure rates, CTR, or revenue.
- One file. Mike marks the sheet after the five.
