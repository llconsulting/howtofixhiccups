# UGC motion wire — 2026-09-06

Preview only. Do not merge.

One Start wire. Cherry-picked from Video Edit draft [PR #22](https://github.com/llconsulting/howtofixhiccups/pull/22) (`video/ugc-motion-2026-09-06`). PR #20 ugc-live Start wire is already on the rebuild; this preview does not play those clips.

## Source of truth

`media/video/ugc-motion-2026-09-06/` — 1080×1920, captions on.

Desk twin (same filenames):

```
/workspace/louislynn-os/hiccups-site/media/video/ugc-motion-2026-09-06/
```

| File | Start phase |
| --- | --- |
| `start.mp4` | Idle, Start, done |
| `breath-swallow-1.mp4` | Step 1 |
| `breath-swallow-2.mp4` | Step 2 |
| `hold.mp4` | Step 3. ~10s true motion. Site loops it under the 30s count. |
| `thin-straw-exhale.mp4` | Step 4 and the extra thin stream |
| `method-full.mp4` | In-folder. Not played on Start. |
| `STATUS.md` | Desk encode notes from PR #22. |

Site URLs (publish root is `.`):

```
/media/video/ugc-motion-2026-09-06/<file>
```

## Not product

- Ken Burns `/assets/video/*.mp4` — force 404
- `media/video/ugc-live/` — PR #19 archive. Not the Start source.

## Frame

Host frame is 9:16. Video uses `object-fit: contain` so burned captions stay in view. Stills stay the poster and the fallback if a clip is blocked.
