# Drop-in pages (`/p/...`)

Self-contained one-off pages that get their own shareable URL on the same domain,
without touching the main site code or build.

## How it works

Everything under `public/` is copied to the site root verbatim at build time. So:

```
public/p/<slug>/index.html   →   https://jiaan.me/p/<slug>/
```

These pages are intentionally independent of the main site's design system. They are
unlisted: not linked from the nav, excluded from `sitemap.xml`, and should carry
`<meta name="robots" content="noindex">` so they stay private unless you share the link.

## Publish a new page

1. Copy the template and rename it to your slug:
   ```bash
   cp -r public/p/_TEMPLATE public/p/my-new-page
   ```
2. Edit `public/p/my-new-page/index.html` (drop in any assets in the same folder).
3. Rebuild and redeploy the site (`npm run build`, then the deploy step).
4. Share `https://jiaan.me/p/my-new-page/`.

## Examples

- `unu-inweh-geospatial/` — project portfolio prepared for a UNU-INWEH application.
- `_TEMPLATE/` — a minimal starter you can copy.
