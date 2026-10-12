# UGC live true-motion clips

Kling 3.0 UGC host binaries for the Start sequence (PR3 wire). These supersede Ken Burns stills with true-motion.

## Generation

| Setting | Value |
|---------|-------|
| Model | `kling3_0` |
| Sound | off |
| Mode | `std` |
| Date | 2026-09-06 (CoS GO) |
| Credits | ~43.75 |

9:16 was requested. Kling matched the landscape start stills, so all outputs are **1280×720** (16:9), not portrait. Web Builder should treat them as landscape, not 9:16.

## Source clips

Order for the Start sequence and for `method-walkthrough.mp4` concat: idle → breath-1 → breath-2 → hold → exhale.

| File | Job ID | Duration | Resolution |
|------|--------|----------|------------|
| `host-idle.mp4` | `dc23f320-27e8-4213-a888-006c7846c850` | 5.04s | 1280×720 |
| `host-breath-1.mp4` | `74c6c067-c545-4413-817a-64b7dfabc8f8` | 5.04s | 1280×720 |
| `host-breath-2.mp4` | `d8974e38-ce26-4eef-9a32-358d865b99e5` | 5.04s | 1280×720 |
| `host-hold.mp4` | `27f8df6b-331f-4d9d-b2e1-22136a02c1d2` | 10.04s | 1280×720 |
| `host-exhale.mp4` | `585f1284-3610-4af3-b3b9-c9c35deebeb1` | 10.04s | 1280×720 |

Source HTTPS (CloudFront):

- idle: `hf_20260906_182038_dc23f320-27e8-4213-a888-006c7846c850.mp4`
- breath-1: `hf_20260906_182038_74c6c067-c545-4413-817a-64b7dfabc8f8.mp4`
- breath-2: `hf_20260906_182038_d8974e38-ce26-4eef-9a32-358d865b99e5.mp4`
- hold: `hf_20260906_182038_27f8df6b-331f-4d9d-b2e1-22136a02c1d2.mp4`
- exhale: `hf_20260906_182038_585f1284-3610-4af3-b3b9-c9c35deebeb1.mp4`

## Concat

`method-walkthrough.mp4` is an ffmpeg concat **stream copy** (hard cuts, no re-encode) of the five clips above.

- Codec: H.264, 24 fps, yuv420p, no audio
- Duration: ~35.21s
- Resolution: 1280×720

```text
ffmpeg -f concat -safe 0 -i concat-list.txt -c copy method-walkthrough.mp4
```

## Storage

Each file is under 50 MB (largest `method-walkthrough.mp4` ≈ 45 MB). Total under this directory is ~89 MB. Tracked with normal git (no LFS required; GitHub hard limit is 100 MB per file).
