# howtofixhiccups CRO sprint

Date walked: 2026-09-06  
URL walked: https://deploy-preview-3--howtofixhiccups.netlify.app/  
Sources: live homepage + `/js/method.js` + `/css/styles.css` (Netlify deploy `6a9cb77b7825d00008b74949`)  
Viewport: mobile 400×924 + desktop. No AdSense. No spend.

## Observed countdown + Share

| State | Countdown | Share |
| --- | --- | --- |
| Before Start | Hidden. Helper only: “Step 3 is a 30 second hold.” | Hidden. `#share-btn` is `hidden` and lives inside `#timer-wrap`, also hidden. |
| Step 1–2 swallow | No ring. Advance is tap: **I swallowed**. | Hidden. |
| Step 3 hold (30s) | Large ring + ticking number. `Stop` sits above the ring. | **Share** appears under the ring. Label `Share`. `aria-label`: “Share howtofixhiccups.com”. |
| Step 4 blow (10s) | Same ring. Extra line: “Keep it thin to 12 to 15 if you can.” | **Share** still under the ring. |
| Optional extra 5s | Ring continues. | `showShare(false)` — Share drops. |
| Done | Ring removed. Copy: “Done. Breathe normally.” CTA is **Stop**. | Hidden. `finish()` calls `showShare(false)`. |

JS gate: `STEPS.hold.share = true` and `STEPS.exhale.share = true`. Idle + finish force Share off.

Share tap (`shareLink`): `navigator.share({ title, url: "https://howtofixhiccups.com/" })`, else clipboard. Abort is silent. Clipboard fail is silent. Success writes only `localStorage.htfh-share-count`. RAF countdown does not pause.

Walk evidence (400×924):

- Idle: Start in card. No ring. No Share. Host still below the card (“Follow along.”).
- Hold at 28s and 17s: **Share** under the ring. Host face cut off below the fold.
- Share tapped at ~8s: ring kept ticking. No native share sheet. No **Copied**. Button looked pressed. Proof failed.
- Blow at 2s: Share still there.
- Done: Share gone. Only **Stop**.

## Countdown: assist vs friction

Assist

- Clock stays off for swallows. User is not rushed through breath 1–2.
- Hold is the honest 30s. Ring + number do the count so the user can stay still.

Friction

- Ring is `min(78vw, 17.5rem)` and `rise`-animates in at step 3. Card jumps. Host drops below the fold.
- Every second flashes (`.is-tick`).
- Mid-hold **Share** sits on the same card as the count. Eyes and thumb leave the hold.
- **Stop** is the largest control during the hold — same row family as Start, above the ring.
- Blow then a 5s extra is a second clock after the hard hold.

## Mid-hold Share

Does it interrupt the hold?

- Timer thread: no. Tap does not `invalidate()` or pause RAF.
- Method thread: yes. Share is a tap target under the count during “Stay still for all 30 seconds.” A real `navigator.share` sheet would cover the ring. This desktop walk never got a sheet or **Copied**, so the user spent a tap on nothing while still holding.

Placement: centered under the ring, inside `.timer-wrap`, above “Stop if you feel lightheaded.”  
Label: `Share` — no “copy link”, no “after you finish”.  
Timing: first shown at the start of the 30s hold. Hidden when the user can actually share without holding.

## Mike lock — prove share first

What would count as proof (without killing the method)

1. Share is reachable when the user is **not** mid-hold / mid-blow.
2. One tap produces a visible result: system share sheet completed, or on-page **Copied** / **Shared**.
3. The 30s hold still finishes with only Stop + count on that card. No sheet over the ring.
4. Fail is visible. Silent `catch` is not proof.

What is missing today

- Share cannot be reached without entering the hold.
- Done is the clean share moment and Share is off.
- This walk: tap → no sheet, no Copied. Clipboard / share failure is swallowed.
- `htfh-share-count` is invisible. Not a metric. Not proof.
- Share URL is hardcoded production, not the page in hand.
- No confirmation that a share finished vs the user cancelled (`AbortError` returns).

## Mobile thumb path during hold

Stack on the method card: rail → copy → **Stop** (full-width, `--tap`) → huge ring → **Share** (smaller, `min-height: 2.5rem`) → lightheaded line. Host still is the next card.

Thumb rest on 400px is the lower-middle of the card — that is **Share**, not Stop. Accidental share is the cheap tap. Stop is a reach up. Start-before-hold is clean (center card, no Share). Header + “Why / When” links stay in the way if the user has not scrolled the hero off.

## Faceless / no Callie / no AdSense

- Copy on this preview: no “Callie” in title, lede, or method card.
- Face: `#host-still` / UGC webp + video slots. Alt: “Young woman with brown hair and green eyes…”. Not faceless.
- Ads: `<aside class="ad-slot">` is `height: 0`. No AdSense script. Do not wire.

## P0 / P1

P0

1. Share under the hold (and blow) ring. Proves share by breaking the hold.
2. Share hidden at Done. No share-first proof after the method.
3. Share tap can no-op with zero feedback.
4. Host face on the method row. Faceless miss.

P1

1. Ring size + `rise` jump crowd the thumb path.
2. Done CTA is **Stop**, not Share / run again.
3. Share also on the 10s blow.
4. Hardcoded prod URL in `shareLink`.
5. Empty ad-slot still in the DOM.

## Must-fix for rebuild (share-first, hold intact)

1. Hold card = count + Stop only. No Share on any `kind: "count"` step.
2. Put Share on **Done** (and idle after a finished pass). Visible **Copied** / sheet. That is the proof.
3. If a pre-method share is needed, park it off the card (footer). Never under the ring.
4. Do not swallow share/clipboard errors.
5. Drop the host face / UGC slot for faceless.
6. Leave AdSense unmounted. No spend.

## Metrics

Not in the current record.
