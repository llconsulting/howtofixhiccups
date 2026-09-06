# ugc-motion-v2 MANIFEST — Mike Ultra + CoS QC lean 04 remint

Generated: 2026-09-06 ~5:45 PM ET  
Desk: Stills & Clips  
Model: `kling3_0` | sound: `off` | aspect_ratio: `9:16` | mode: `std` | use_unlim: `false`  
Preflight: ~1.25 cr/s → 8s=**10**, 9s=11.25, 10s=12.5, 15s=18.75  
Prior remint (01–03): **71.25** credits  
Prior 04 CLEAN 10s (now **CUT**): **12.5** credits  
This 04 lean 8s remint: **10** credits  
Cumulative: **93.75**

## CoS QC verdicts

| Asset | Verdict |
|-------|---------|
| `hero-loop/thin-straw-loop-3s.mp4` | **KEEP (MATCH)** — do not overwrite |
| Prior `04-thin-straw-exhale.mp4` (job `3b87f10e-…`) | **CUT** — lip morph 0:08–0:09 |
| `hero-loop/thin-straw-loop-4s.mp4` | **CUT** — eyelid warp; leave file; exclude from ship |
| New `04-thin-straw-exhale.mp4` (job `694caf26-…`) | **SHIP** |

## Uploaded start stills (media_confirm)

| Still | path | media_id |
|-------|------|----------|
| breath-1 | `media/stills/9x16/host-breath-1-9x16.jpg` | `e3fc6b53-58b3-4313-819b-276110c1e1c3` |
| breath-2 | `media/stills/9x16/host-breath-2-9x16.jpg` | `e84ffc1b-06f6-46ae-8de8-214dde9e9f9a` |
| hold | `media/stills/9x16/host-hold-9x16.jpg` | `8f1fa896-2105-4716-a729-05683511fd96` |
| exhale (prior) | `media/stills/9x16/host-exhale-9x16.jpg` | `c944515b-1afb-4fa6-8567-777268782334` |
| **exhale (this remint)** | same still re-upload | `bc095a1b-8eea-40b8-9fae-ffa9d91d74bd` |

All stills 1080×1920 JPEG.

## Generation jobs

### 01-breath-swallow.mp4 — KEPT

- still media_id: `e3fc6b53-58b3-4313-819b-276110c1e1c3`
- job_id **used**: `80ec0353-3c97-4f65-8a28-4a41f23dfb30` — 9s / 11.25 cr
- caption: `Breathe in deeply, then swallow`

### 02-breath-swallow.mp4 — KEPT

- still media_id: `e84ffc1b-06f6-46ae-8de8-214dde9e9f9a`
- job_id: `3a05f368-1802-4055-a2ad-89ca31165a28` — 9s / 11.25 cr
- caption: `Another breath in — swallow completely`

### 03-hold-a.mp4 — KEPT

- job_id: `91664bce-b6c9-4e9e-a858-7046ed6cdf33` — 15s / 18.75 cr
- caption: `Hold for 30 seconds`

### 03-hold-b.mp4 — KEPT

- job_id: `e2f9bc1c-2f4f-40f6-bb2c-6460f1a9996b` — 15s / 18.75 cr
- caption: `Hold for 30 seconds`

### 03-hold-30.mp4 — KEPT

- concat `03-hold-a` + `03-hold-b` (~30.08s)

### 04-thin-straw-exhale.mp4 — PRIOR CLEAN (**CUT**)

- job_id: `3b87f10e-65f9-485f-8359-7aae34b4995b` — 10s / 12.5 cr
- CoS CUT: lip morph 0:08–0:09
- archived: `raw/04-*-PRIOR-CUT.mp4`

### 04-thin-straw-exhale.mp4 — **NEW lean remint (SHIP)**

- still media_id: `bc095a1b-8eea-40b8-9fae-ffa9d91d74bd` (`host-exhale-9x16.jpg`)
- job_id: `694caf26-449c-4749-afad-d9d67264e278`
- duration req: **8s** | actual ~8.04s | credits: **10**
- raw: 720×1280 → `raw/04-raw-kling.mp4` → `raw/04-uncaptioned-1080.mp4` (1080×1920) → captioned deliverable
- caption: `Slow thin-straw exhale`
- path: `.../ugc-motion-v2-2026-09-06/04-thin-straw-exhale.mp4`
- prompt: Same woman as still (late-20s brunette green eyes cream sweater). Slow continuous thin-straw exhale, lips gently pursed ENTIRE clip. Face identity rock-stable through last frame — NO lip morph, smile morph, off-pose smile, melting, or identity drift especially near end. Minimal head motion; eyes natural (no eyelid warp). Tasteful. Not medical advice.
- QC: `raw/qc04-remint/{early,mid,late,end}.jpg` + face crops — pursed lips held end-to-end; **no retry**

### method-walkthrough.mp4 (refreshed)

- order: 01 → 02 → 03-hold-30 → 04 (`-c copy`)
- duration: ~56.2s

### hero-loop/

- `thin-straw-loop-3s.mp4` — **KEEP (MATCH)** — not regenerated from this take
- `thin-straw-loop-4s.mp4` — **CUT** (eyelid warp) — leave; do not refresh from this remint

## Credit ledger

| When (UTC) | Action | Credits |
|------------|--------|---------|
| 21:22:42 | Kling 15s hold-a | −18.75 |
| 21:22:42 | Kling 15s hold-b | −18.75 |
| 21:22:42 | Kling 9s breath-1 first | −11.25 |
| 21:22:42 | Kling 9s breath-2 | −11.25 |
| 21:26:34 | Kling 9s breath-1 retry | −11.25 |
| 21:34:06 | Kling 10s thin-straw 04 CLEAN (now CUT) | −12.5 |
| **21:41:09** | **Kling 8s thin-straw 04 lean remint** | **−10** |
| **Sum** | | **−93.75** |

## Guardrails

- No Callie / personal name in prompts or captions  
- No medical cure claims  
- Tasteful wellness UGC only  
- `use_unlim: false`  
- 01–03 kept; hero 3s KEEP; hero 4s CUT (notes only); new 04 lean 8s SHIP  
