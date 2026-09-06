# howtofixhiccups.com

Static site for a four-step method for ordinary hiccups. Faceless brand. Not medical advice.

## The method

1. Deep breath all the way in and swallow it.
2. Another breath in on top of that and swallow completely.
3. Hold breath 30 full seconds.
4. Slowly blow out as through the tiniest straw for 10 full seconds (or 12 to 15 if you can).

The home page has Start, a countdown, and a host-video slot. HowTo schema lists those four steps only.

## Pages

- `/` the method + tutorial / countdown + host video
- `/why-hiccups-start/`
- `/when-to-stop/`
- `/privacy/`

Blog, notes, and about are dropped. Old URLs 301 to `/`.

## Host media

Stills and Clips Desk drops files in `media/video/`. Until then the home page shows a labeled placeholder. No generated face.

## Deploy

No build command. Publish directory is `.`.

Canonical host is always `https://howtofixhiccups.com/`. Deploy previews and `*.netlify.app` send `X-Robots-Tag: noindex`. Production `.com` is not noindexed.
