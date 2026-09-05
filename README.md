# howtofixhiccups.com

Static site for [Callie's method](https://howtofixhiccups.com/) — a quiet, in-place sequence for ordinary hiccups.

## Sequence

1. Deep breath in, then swallow.
2. Second breath on top, then swallow.
3. Hold 30 full seconds.
4. Slowly blow out as through the tiniest straw for 10 seconds (12–15 if you can).

The home page has an interactive **Start** control and countdown. This is not medical advice and does not claim a cure.

## Pages

- `/` walkthrough
- `/about/`
- `/privacy/`
- `/blog/` and three notes

On-page SEO includes unique H1s, metas, breadcrumbs, HowTo and BlogPosting JSON-LD, `robots.txt`, and `sitemap.xml`. Ad slots are empty placeholders.

## Deploy

No build command. Publish directory is `.`.

```toml
[build]
  publish = "."
```

Canonical host: `https://howtofixhiccups.com`.
