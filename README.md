# howtofixhiccups.com

Static site for a four-beat, in-place sequence for ordinary hiccups. Faceless brand. Not medical advice.

## Sequence

1. Deep breath in, then swallow.
2. Second breath on top, then swallow.
3. Hold 30 full seconds.
4. Thin-straw blow for 10 seconds (12–15 if you can).

The home page has Start, a countdown, and a host-video slot. HowTo schema lists those four steps only.

## Pages

- `/` method + tutorial / countdown + host video
- `/why/` why hiccups start
- `/when/` when to stop / see a clinician
- `/privacy/`

Blog index, note posts, and `/about/` are dropped. Old URLs 301 to the pages above.

## Host media

Stills & Clips Desk drops files in `media/host/`. Until then the home page shows a labeled placeholder — no generated face.

## Deploy

No build command. Publish directory is `.`.

Canonical host is always `https://howtofixhiccups.com/`. Deploy previews and `*.netlify.app` send `X-Robots-Tag: noindex`. Production `.com` is not noindexed.
