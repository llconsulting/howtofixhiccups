# STATUS — site-ready true-motion UGC (2026-09-06)

True-motion Kling clips from `ugc-live/` cut/captioned/exported for howtofixhiccups. Prefer this set over Ken Burns still-pan files in the parent `media/video/` folder.

## Sources (untouched)

| Beat | Source |
|------|--------|
| start | `/workspace/louislynn-os/hiccups-site/media/video/ugc-live/host-idle.mp4` |
| breath-swallow-1 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-live/host-breath-1.mp4` |
| breath-swallow-2 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-live/host-breath-2.mp4` |
| hold | `/workspace/louislynn-os/hiccups-site/media/video/ugc-live/host-hold.mp4` |
| thin-straw-exhale | `/workspace/louislynn-os/hiccups-site/media/video/ugc-live/host-exhale.mp4` |

Sources are 1280×720 (Kling returned landscape despite 9:16 request). `ugc-live/` originals not overwritten.

## Encode

- 1080×1920, 24 fps, H.264 CRF 18, silent (`-an`)
- Center cover-crop from 16:9 → 9:16
- Burned-in captions: big few-words, lower third (ASS PlayRes 1080×1920)
- No Callie / personal name. Not medical advice.

## Captions

| Clip | Cues |
|------|------|
| start | Start here · Breathe easy |
| breath-swallow-1 | Deep breath · Then swallow |
| breath-swallow-2 | One more breath · Swallow again |
| hold | Hold · Stay calm |
| thin-straw-exhale | Thin straw · Slow exhale |

## Outputs

| File | Path | Duration | Size |
|------|------|----------|------|
| start.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/start.mp4` | ~5.04s | ~5.0M |
| breath-swallow-1.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/breath-swallow-1.mp4` | ~5.04s | ~5.1M |
| breath-swallow-2.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/breath-swallow-2.mp4` | ~5.04s | ~4.9M |
| hold.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/hold.mp4` | ~10.04s | ~9.1M |
| thin-straw-exhale.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/thin-straw-exhale.mp4` | ~10.04s | ~9.1M |
| method-full.mp4 | `/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/method-full.mp4` | ~35.2s | ~33M |

## Notes

- Hold is ~10s (Kling job length), not a padded 30s. Prefer true motion over stretching.
- Spot-checked caption burn-in at start / mid / hold: lower-third, readable.
- Ken Burns set in parent `media/video/` left in place as fallback; site should wire this `ugc-motion-2026-09-06` folder.

## GitHub draft note
`method-full.mp4` re-encoded to ~7MB (CRF 28) for GitHub web 25MB upload limit. HQ original kept as `method-full-hq.mp4` on the box only.
