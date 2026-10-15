# Higgsfield wire plan (pointer) — 2026-09-05

Short pointer only. No binaries in this PR. No Higgsfield generate. No spend.

## HOLD

Do **not** call Higgsfield generate until the Plus trial is live. That is a CoS gate. This file is a path lock, not a generation ticket.

## Canonical full plan (unread on this VM)

The full plan lives on the shared box at:

`/workspace/louislynn-os/hiccups-site/media/higgsfield-wire-plan-2026-09-05.md`

This cloud VM **cannot read that box**. That path is not mounted here. Treat this repo file as the site-side summary; do not invent missing plan text, stills, or clips.

## Locked stills — `media/stills/`

Same fictional late-20s brunette, green eyes. Tasteful. **No Callie** in filenames, alt, captions, or commits.

| File | Beat |
| --- | --- |
| `media/stills/host-idle.jpg` | Start / idle |
| `media/stills/host-breath-1.jpg` | First breath + swallow |
| `media/stills/host-breath-2.jpg` | Second breath + swallow |
| `media/stills/host-hold.jpg` | Hold |
| `media/stills/host-exhale.jpg` | Thin-straw exhale |

Do not generate a different face. Official JPEG bytes are expected from the shared box (`…/hiccups-site/media/stills/`), not from this VM.

## Target motion — `media/video/ugc-live/`

Higgsfield true-motion outputs (after the HOLD lifts) land here:

| File | Source still |
| --- | --- |
| `media/video/ugc-live/host-idle.mp4` | `host-idle.jpg` |
| `media/video/ugc-live/host-breath-1.mp4` | `host-breath-1.jpg` |
| `media/video/ugc-live/host-breath-2.mp4` | `host-breath-2.jpg` |
| `media/video/ugc-live/host-hold.mp4` | `host-hold.jpg` |
| `media/video/ugc-live/host-exhale.mp4` | `host-exhale.jpg` |
| `media/video/ugc-live/method-walkthrough.mp4` | full sequence stitch |

Those files do **not** exist in this PR. Do not invent placeholders.

## PR #3 Start sequence swap

PR #3 (`cursor/apple-quality-rebuild-9422`) Start currently prefers Ken Burns / still-push clips under `media/video/*.mp4` (`start.mp4`, `breath-swallow-1.mp4`, `breath-swallow-2.mp4`, `hold-30.mp4`, `thin-straw-exhale.mp4`, `method-full.mp4` / `walkthrough.mp4`).

Once the `ugc-live/*` clips exist, swap those Ken Burns paths for the matching `media/video/ugc-live/` files above. Until then, leave PR #3 on Ken Burns / stills fallback. Do not probe missing `ugc-live` URLs.
