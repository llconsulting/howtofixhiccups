# Video cut + wire sprint — 2026-09-05

Overnight planning file only. **No merge. No spend. No encode. No production deploy.**

Box-mirror twin (same body, when that tree is mounted): `/workspace/louislynn-os/hiccups-site/media/video-cut-wire-sprint-2026-09-05.md`

---

## 1. Goal

Ship **site-ready 9:16 (1080×1920)** Start + method clips for howtofixhiccups.

- Prefer **true motion** (Higgsfield / UGC) over Ken Burns still-push.
- Ken Burns is the **interim fallback** if motion is late — wire it rather than leaving the home Start control faceless.
- Live phone UGC (Mike) is later. Do not invent a second host or mint fake live takes tonight.
- Captions, filenames, commits, and alt: **no Callie, no personal names**.
- On-screen and footer line: **Not medical advice.**

---

## 2. Locked beats

| Beat | Working title | Suggested export | Suggested duration |
| --- | --- | --- | --- |
| 1 | Start | `start.mp4` | ~4s idle / tap-ready |
| 2 | Breath + swallow | `breath-swallow-1.mp4` | ~8s |
| 3 | Second breath + swallow | `breath-swallow-2.mp4` | ~8s |
| 4 | 30s hold | `hold-30.mp4` | 30s calm hold |
| 5 | Thin-straw exhale | `thin-straw-exhale.mp4` | ~10–14s thin stream |
| Optional | Method-full stitch | `method-full.mp4` | concat of 1–5 + few-word captions + one **Not medical advice.** line |

Do not add extra beats (water, paper bag, folk list). Do not skip swallow 2.

---

## 3. Inventory (this branch first)

Inventoried on `main` @ `9a978fe` (this PR’s base). `find` for `media/`, `assets/`, `video/`, `stills/`: **none of those directories exist on this branch.** No `.mp4` / `.webm` / `.mov` / host stills in the tree.

| Path on this branch | Status |
| --- | --- |
| `media/` | **missing** (this file creates the folder) |
| `media/video/` | **missing** |
| `media/video/ugc-live/` | **missing / empty** — preferred drop when Stills lands Higgsfield motion |
| `media/stills/` | **missing** |
| `assets/` | **missing** |
| `assets/video/` | **missing** |
| `assets/ugc/` | **missing** |

Home on this branch is still the Callie chrome site: `#start-btn` in `index.html` (~L130), timer in `js/method.js`. No `<video>` element. `netlify.toml` publish = `.`.

### 3.1 Preferred live motion — not present

`media/video/ugc-live/` does not exist on this branch or on any open sibling branch listed below. When Stills drops Higgsfield / true-motion takes, land them **here** and cut from those files. Do not overwrite the drop.

### 3.2 Fallback Ken Burns — **not on this branch**; real paths on PR #8

PR #8 — [Add 9:16 Ken Burns method videos from host stills](https://github.com/llconsulting/howtofixhiccups/pull/8) — branch `cursor/method-video-exports-9cdb` @ `d6a488f`. Open draft. **Not merged. Files are not in this checkout.**

From that branch’s `media/video/STATUS-2026-09-05.md` (1080×1920, H.264 + stereo AAC silent bed, 30 fps):

| Real path on PR #8 | Runtime | Pixels |
| --- | --- | --- |
| `media/video/start.mp4` | 4.00s | 1080×1920 |
| `media/video/breath-swallow-1.mp4` | 8.00s | 1080×1920 |
| `media/video/breath-swallow-2.mp4` | 8.00s | 1080×1920 |
| `media/video/hold-30.mp4` | 30.00s | 1080×1920 |
| `media/video/thin-straw-exhale.mp4` | 14.00s | 1080×1920 |
| `media/video/method-full.mp4` | 64.03s | 1080×1920 |

Plus `media/video/STATUS-2026-09-05.md`.

Stills used as Ken Burns sources on that same PR (soft zoom/pan only; AI stand-in; no personal names):

| Real path on PR #8 | Beat |
| --- | --- |
| `media/stills/host-idle.jpg` | Start |
| `media/stills/host-breath-1.jpg` | Breath + swallow 1 |
| `media/stills/host-breath-2.jpg` | Breath + swallow 2 |
| `media/stills/host-hold.jpg` | 30s hold |
| `media/stills/host-exhale.jpg` | Thin-straw exhale |
| `media/stills/MANIFEST.md` | map |

PR #8 notes: no lip-sync; **Not medical advice.** burned into `method-full.mp4` only; pages not wired.

### 3.3 Other sibling trees (also not on this branch)

**PR #3** `cursor/apple-quality-rebuild-9422` — already wires four clips and stills (no `start.mp4`, no `method-full.mp4`):

- `assets/video/breath-swallow-1.mp4`
- `assets/video/breath-swallow-2.mp4`
- `assets/video/hold-30.mp4`
- `assets/video/thin-straw-exhale.mp4`
- `assets/ugc/host-{idle,breath-1,breath-2,hold,exhale}.{jpg,webp}`
- `media/stills/host-{idle,breath-1,breath-2,hold,exhale}.{jpg,webp}`

`js/method.js` on that PR maps:

```
inhale1 → /assets/video/breath-swallow-1.mp4
inhale2 → /assets/video/breath-swallow-2.mp4
hold    → /assets/video/hold-30.mp4
exhale  → /assets/video/thin-straw-exhale.mp4
extra   → /assets/video/thin-straw-exhale.mp4
```

Home already has `#start-btn` + `#host-video` (`playsinline`, `muted`, `loop`, `preload="none"`). Callie chrome is already stripped on that rebuild.

**PR #5** `cursor/ugc-host-stills-bf28` — superseded different-face WebPs. **Do not wire:**

- `media/ugc-host-01-start.webp`
- `media/ugc-host-02-breath-swallow.webp`
- `media/ugc-host-03-second-breath-swallow.webp`
- `media/ugc-host-04-hold-30s.webp`
- `media/ugc-host-05-thin-straw-exhale.webp`

**PR #7** `cursor/ugc-host-stills-paths-17f0` — `media/stills/MANIFEST.md` only (no binaries). Documents canonical Video Edit Desk names `host-idle.jpg` … `host-exhale.jpg`.

### 3.4 Later

Mike phone UGC. Replace interim Ken Burns / Higgsfield stand-in when those takes exist. Keep the same export filenames so Web Builder does not re-map.

---

## 4. Source priority (cut desk)

1. **Preferred:** `media/video/ugc-live/` Higgsfield / true-motion drops (empty tonight).
2. **Fallback now:** PR #8 Ken Burns under `media/video/*.mp4` (or PR #3 `assets/video/*.mp4` four-clip set if already on the rebuild worktree). Copy — **never overwrite** the source files.
3. **Later:** Mike phone UGC → recut into the same export names.

If both 1 and 2 are absent in the cut worktree, fetch PR #8 first. Do not generate new faces. Do not spend on Higgsfield in this planning window.

---

## 5. Cut steps (next run — not this one)

Work in a new exports folder. Example: `media/video/exports-cut/` → copy into `assets/video/` for publish. Never write over `media/video/ugc-live/` or PR #8 sources.

1. **ffprobe every source**
   - Confirm duration, 1080×1920 or crop plan, fps, audio presence.
   - Log a one-line table (path, duration, size, pix_fmt, astreams).
2. **Map takes → locked beats**
   - Start / breath+swallow / second breath+swallow / 30s hold / thin-straw exhale.
   - Reject off-beat or extra-folk takes.
3. **Normalize to 9:16 1080×1920**
   - Center-crop or letterbox-to-fill; no stretch. H.264 + AAC. 30 fps preferred to match PR #8.
4. **Few-word captions** (burned on `method-full` at least; optional on singles)
   - Start → `Start`
   - Beat 2 → `Breathe. Swallow.`
   - Beat 3 → `Second breath. Swallow.`
   - Beat 4 → `Hold 30.`
   - Beat 5 → `Thin straw.`
   - One line: `Not medical advice.`
   - **No Callie. No personal names. No surnames.**
5. **-14 LUFS**
   - If the bed is silent (PR #8 is a silent stereo AAC bed), keep it silent; do not invent music.
   - If voice/UGC audio exists, loudnorm to **−14 LUFS**, true peak ≤ −1 dBTP. Recheck with ffmpeg loudnorm print.
6. **Delivery check**
   - `ffprobe` each export: 1080×1920, playable H.264, durations match the table.
   - Play Start → four beats → optional stitch once.
   - Confirm sources unchanged (`git status` on source paths is clean).
7. **Hard rules**
   - Never overwrite sources.
   - No Callie / personal names in filenames, captions, commits, or alt.
   - **Not medical advice.** stays on the stitch and on the page notice.

Do **not** encode in the run that only lands this plan.

---

## 6. Wire table (Web Builder)

Publish root is `.` (`netlify.toml`). Suggested public filenames **match the exports**:

| Beat | Export (cut desk) | Site URL to wire | Home hook |
| --- | --- | --- | --- |
| Start | `start.mp4` | `/assets/video/start.mp4` | Idle / first paint of `#host-video` **or** play on `#start-btn` tap before inhale1 |
| Breath + swallow | `breath-swallow-1.mp4` | `/assets/video/breath-swallow-1.mp4` | `STEPS` id `inhale1` |
| Second breath + swallow | `breath-swallow-2.mp4` | `/assets/video/breath-swallow-2.mp4` | `STEPS` id `inhale2` |
| 30s hold | `hold-30.mp4` | `/assets/video/hold-30.mp4` | `STEPS` id `hold` |
| Thin-straw exhale | `thin-straw-exhale.mp4` | `/assets/video/thin-straw-exhale.mp4` | `STEPS` ids `exhale` + `extra` |
| Optional stitch | `method-full.mp4` | `/assets/video/method-full.mp4` | Optional “watch the method” — **not** required for Start |

**Home Start control (this branch):**

- Button: `#start-btn` in `index.html` (label `Start`).
- Handler: `js/method.js` `start()` → `beginStep(0)` (no video today).
- Wire: on Start, play `/assets/video/start.mp4` if using a dedicated start clip, then swap to beat clips as steps advance. Muted + `playsinline` so autoplay after tap is allowed.
- Rebuild PR #3 already has `#host-video` and the four beat paths; it does **not** map `start.mp4`. Add that mapping when the Start export exists.

**Kill Callie chrome** (this branch still has it; rebuild PR #3 already removed most):

- Wordmark subtitle `Callie's method` (`index.html` ~L87).
- `<title>`, og/twitter titles, HowTo JSON-LD `name`.
- `#phase-kicker` idle string in `js/method.js` (`Callie's method`).
- Lede, about, blog titles/bylines, footer disclaimer `Callie's method`, 404 “Start Callie's method”.
- Captions and video filenames must stay name-free even if page copy lags.

**Tonight:** do **not** merge this plan, PR #8, or PR #3. Do not production-deploy. Wire is a later desk.

---

## 7. Done tests

Cut desk

- [ ] `ffprobe` every export: **1080×1920**, H.264, expected duration ±0.1s
- [ ] Five locked beats present; `method-full.mp4` optional but if present is a stitch of those beats
- [ ] Few-word captions only; grep exports/docs for `Callie` / personal names → zero
- [ ] Audio: silent bed **or** −14 LUFS / true peak ≤ −1 dBTP
- [ ] One **Not medical advice.** line on the stitch (and page notice already on home)
- [ ] Source paths unchanged (PR #8 `media/video/*`, `ugc-live/*` not overwritten)

Wire desk (later; not this PR)

- [ ] Files exist at `/assets/video/{start,breath-swallow-1,breath-swallow-2,hold-30,thin-straw-exhale}.mp4`
- [ ] `#start-btn` starts the sequence and a clip actually plays after tap
- [ ] Beat clips swap with inhale1 / inhale2 / hold / exhale
- [ ] Callie chrome gone from header kicker + home title line
- [ ] Preview only — no production Netlify deploy from the cut/wire night

---

## 8. Blockers

| Blocker | Effect |
| --- | --- |
| `media/video/ugc-live/` empty / missing on this branch | No Higgsfield true motion to cut |
| PR #8 Ken Burns not merged | Fallback clips exist only on `cursor/method-video-exports-9cdb` |
| This branch has no `media/video/` or `assets/video/` binaries | Nothing to encode or wire without fetching a sibling |
| Mike phone UGC not shot | Final live host is later |
| No spend / no encode tonight | This file is planning only |
| Live `main` still says Callie | Wire pass must strip chrome; do not bake the name into video |

---

## 9. Recommendation

**If Higgsfield / true motion is late, wire the interim Ken Burns.**

1. Bring PR #8’s six `media/video/*.mp4` (or PR #3’s four `assets/video/*.mp4` plus a Start clip) onto the Web Builder branch by copy, not overwrite.
2. Publish them as `/assets/video/*.mp4` with the filenames in §6.
3. Hook `#start-btn` + `#host-video` so Start is not a timer-only card.
4. Swap files in place when `media/video/ugc-live/` or Mike UGC lands — **same filenames**.

Do not wait on empty `ugc-live/`. Do not merge tonight. Do not production-deploy. Do not encode in the run that only added this plan.
