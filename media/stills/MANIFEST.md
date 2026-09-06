# UGC host stills

Canonical Video Edit Desk JPEGs were **not** readable on this cloud VM. No new faces were generated. No placeholder portraits were invented.

Site static files publish from the repo root (`netlify.toml` `publish = "."`). When the binaries land, they belong here as `/media/stills/<filename>`, not under `public/`.

## Required filenames

| File | Beat | Canonical copy (Video Edit Desk) |
| --- | --- | --- |
| `host-idle.jpg` | Start | `/workspace/louislynn-os/hiccups-site/media/stills/host-idle.jpg` |
| `host-breath-1.jpg` | First breath / swallow | `/workspace/louislynn-os/hiccups-site/media/stills/host-breath-1.jpg` |
| `host-breath-2.jpg` | Second breath / swallow | `/workspace/louislynn-os/hiccups-site/media/stills/host-breath-2.jpg` |
| `host-hold.jpg` | Hold | `/workspace/louislynn-os/hiccups-site/media/stills/host-hold.jpg` |
| `host-exhale.jpg` | Thin-straw exhale | `/workspace/louislynn-os/hiccups-site/media/stills/host-exhale.jpg` |

Copy those five JPEGs into this directory with the same names. Do not generate a different character.

## What this VM checked

- `/workspace/louislynn-os/hiccups-site/media/stills/` does not exist on this box.
- This run’s artifact store (`/opt/cursor/artifacts`) had no `host-*.jpg` binaries.
- A sibling draft (`cursor/ugc-host-stills-bf28`, PR #5) added a **different** fictional host as WebP files with different names. Those are not the canonical stills. Do not copy them here.
