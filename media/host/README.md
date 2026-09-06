# Host walkthrough slot

Stills & Clips Desk owns the on-camera walkthrough.

**Look:** late-20s brunette, green eyes. UGC / creator-style. Tasteful, not NSFW. No real-person name or surname on the files or in metadata.

Drop files here. The home page already points at these paths:

| File | Role |
| --- | --- |
| `walkthrough.mp4` | Primary host video, timed to Start + the four beats |
| `walkthrough.webm` | Optional alternate |
| `poster.jpg` | Still while the file loads. Not a generated face. |
| `cues.json` | Optional cue sheet (seconds from start) |

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

Until those files land, the page shows a labeled placeholder. Do not invent a face or identity to fill the slot.
