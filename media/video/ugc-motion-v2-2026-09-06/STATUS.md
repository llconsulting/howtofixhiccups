# ugc-motion-v2 — STATUS (CoS QC thin-straw remint · lean 8s)

Date: 2026-09-06 (~5:45 PM ET)  
Owner: Stills & Clips Desk  
Trigger: CoS QC remint — **step-4 thin-straw ONLY** (01–03 untouched; lean 8s)

## Verdict (this pass)

| Asset | Verdict | Notes |
|-------|---------|-------|
| `hero-loop/thin-straw-loop-3s.mp4` | **KEEP (MATCH)** | Untouched — do not overwrite |
| Prior `04-thin-straw-exhale.mp4` (job `3b87f10e-…`, ~10s) | **CUT** | Lip morph 0:08–0:09 |
| `hero-loop/thin-straw-loop-4s.mp4` | **CUT** | Eye/eyelid warp — leave on disk; do not ship / do not refresh |
| New `04-thin-straw-exhale.mp4` | **SHIP** | Lean 8s remint; QC pass (no end morph) |

## Locked method (on camera)

1. Deep breath in **AND** visible throat swallow  
2. Second stacked breath in **AND** complete visible swallow  
3. Hold breath **30 full seconds** (two 15s Kling clips stitched)  
4. Thin-straw exhale — **lean 8s remint** (prior 10s CLEAN cut for late lip morph)

NO idle “Breathe easy”. Host: late-20s brunette green eyes cream sweater; unnamed; no Callie; not medical advice.

## Outputs (all 1080×1920, H.264, silent, burned white bottom captions)

| File | Dur | Caption | Notes |
|------|-----|---------|-------|
| `01-breath-swallow.mp4` | ~9.04s | Breathe in deeply, then swallow | **KEPT** |
| `02-breath-swallow.mp4` | ~9.04s | Another breath in — swallow completely | **KEPT** |
| `03-hold-a.mp4` | ~15.04s | Hold for 30 seconds | **KEPT** |
| `03-hold-b.mp4` | ~15.04s | Hold for 30 seconds | **KEPT** |
| `03-hold-30.mp4` | ~30.08s | (same caption on both halves) | **KEPT** |
| `04-thin-straw-exhale.mp4` | ~8.04s | Slow thin-straw exhale | **NEW remint** job `694caf26-…`; QC pass |
| `method-walkthrough.mp4` | ~56.2s | — | concat refreshed 01→02→03-hold-30→04 |

## Hero loops

- `hero-loop/thin-straw-loop-3s.mp4` — **KEEP (MATCH)** — not regenerated from this take  
- `hero-loop/thin-straw-loop-4s.mp4` — **CUT** (eyelid warp) — file left; ship notes exclude

## Credits (this 04-only lean remint)

| Item | Credits |
|------|---------|
| Balance before (API display) | 3000 Ultra pool |
| Kling 8s thin-straw (`kling3_0` std sound off) | **10** |
| QC retry | **0** (not needed) |
| **This step total** | **10** |
| Prior folder spend (01–03 + prior 04 CLEAN) | 83.75 |
| Cumulative folder spend | **93.75** |
| Ledger | txn `2026-09-06T21:41:09Z` Kling −10 |

## Job IDs

| Clip | job_id | media_id (start_image) |
|------|--------|------------------------|
| 01 used | `80ec0353-3c97-4f65-8a28-4a41f23dfb30` | `e3fc6b53-58b3-4313-819b-276110c1e1c3` |
| 02 | `3a05f368-1802-4055-a2ad-89ca31165a28` | `e84ffc1b-06f6-46ae-8de8-214dde9e9f9a` |
| 03-hold-a | `91664bce-b6c9-4e9e-a858-7046ed6cdf33` | `8f1fa896-2105-4716-a729-05683511fd96` |
| 03-hold-b | `e2f9bc1c-2f4f-40f6-bb2c-6460f1a9996b` | same |
| 04 prior CLEAN (**CUT**) | `3b87f10e-65f9-485f-8359-7aae34b4995b` | `c944515b-1afb-4fa6-8567-777268782334` |
| **04 NEW lean** | `694caf26-449c-4749-afad-d9d67264e278` | `bc095a1b-8eea-40b8-9fae-ffa9d91d74bd` |

## Params (04 lean remint)

- model: `kling3_0`  
- sound: `off`  
- aspect_ratio: `9:16`  
- mode: `std`  
- use_unlim: `false`  
- duration: **8** (lean; avoid long tail morph)  
- Raw Kling: **720×1280** → ffmpeg to **1080×1920** + drawtext  
- QC: `raw/qc04-remint/{early,mid,late,end}.jpg` + face crops — pursed lips held through last frame; no morph retry  

## Paths touched this step

Base: `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-v2-2026-09-06/`

- Overwritten: `04-thin-straw-exhale.mp4`, `method-walkthrough.mp4`, `raw/04-raw-kling.mp4`, `raw/04-uncaptioned-1080.mp4`, `raw/qc04-remint/*`
- Archived prior CUT: `raw/04-*-PRIOR-CUT.mp4`
- **NOT touched:** `01–03-*`, `hero-loop/thin-straw-loop-3s.mp4`

Prefer this folder over `ugc-motion-2026-09-06/` and Ken Burns parent set.  
Parent notifies CoS / Web (this desk did **not** message CoS / Web / user).
