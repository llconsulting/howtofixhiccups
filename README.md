# howtofixhiccups.com

Static site for a four-step method for ordinary hiccups. Faceless brand. Not medical advice.

## The method

1. Deep breath all the way in and swallow it.
2. Another breath in on top of that and swallow completely.
3. Hold breath 30 full seconds.
4. Slowly blow out as through the tiniest straw for 10 full seconds (or 12 to 15 if you can).

The home page has Start, a countdown, and host stills. HowTo schema lists those four steps only.

## Pages

- `/` the method + tutorial / countdown + host video
- `/why/`
- `/when/`
- `/privacy/`

Blog, notes, and about are dropped. `/about` 301s to `/`. `/blog` and ordinary-hiccups 301 to `/why/`. Linger 301s to `/when/`. `callies-sequence` 301s to `/`. Long slugs `/why-hiccups-start/` and `/when-to-stop/` 301 to the short routes.

## Host media

Host stills are 800px WebP in `assets/ugc/`. Idle loads first. Later frames swap on step change. No video probe until binaries exist.

## Deploy

No build command. Publish directory is `.`.

Canonical host is always `https://howtofixhiccups.com/`. Deploy previews and `*.netlify.app` send `X-Robots-Tag: noindex`. Production `.com` is not noindexed.
