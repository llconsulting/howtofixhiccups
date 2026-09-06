# Host walkthrough slot

Stills and Clips Desk owns the on-camera walkthrough.

**Look:** late-20s brunette, green eyes. UGC / creator-style. Tasteful, not NSFW. No real-person name or surname on the files or in metadata.

The home page probes these paths and plays whatever has landed:

| File | Role |
| --- | --- |
| `method-full.mp4` | Preferred single take, synced to Start |
| `walkthrough.mp4` | Alternate full take |
| `start.mp4` | Shared open |
| `breath-swallow-1.mp4` | Step 1 |
| `breath-swallow-2.mp4` | Step 2 |
| `hold-30.mp4` | Step 3 |
| `thin-straw-exhale.mp4` | Step 4 |
| `poster.jpg` | Still while a file loads. Not a generated face. |
| `cues.json` | Optional cue sheet for a full take (seconds from start) |

`cues.json` shape, if you add one:

```json
{
  "inhale1": 0,
  "inhale2": 8,
  "hold": 16,
  "exhale": 46,
  "extra": 56
}
```

Folders are empty until footage lands. The page shows a labeled placeholder. Do not invent a face or identity to fill the slot.
