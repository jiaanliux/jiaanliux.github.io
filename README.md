# jiaan.me

Personal portfolio of Jia An Liu, applied AI researcher and institutional technologist at the United Nations University Institute in Macau.

**Live:** [jiaan.me](https://jiaan.me) (primary, self-hosted) · [jiaanliux.github.io](https://jiaanliux.github.io) (mirror)

## Stack

- [Astro 5](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com)
- Self-hosted variable fonts (Newsreader, Geist, JetBrains Mono) via Fontsource
- Phosphor icons, rendered inline from `@iconify-json/ph`
- Images optimized to WebP/AVIF through `astro:assets`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to ./dist
npm run preview  # preview the build
```

Content lives in `src/data/*.ts` (profile, projects, publications, CV). Project
imagery is in `src/assets/`.

## Drop-in pages

Self-contained one-off pages can be published under a shareable path without
touching the main site. Drop a folder at `public/p/<slug>/index.html` and it is
served at `/p/<slug>/`. See [`public/p/README.md`](public/p/README.md).

## Deployment

Two targets, same `master` branch:

- **Self-hosted (primary, `jiaan.me`):** an `nginx:alpine` container built from
  the `Dockerfile` serves the static `dist/` behind the server's reverse-proxy edge.
- **GitHub Pages (mirror, `jiaanliux.github.io`):** built and published by
  `.github/workflows/deploy.yml` on every push to `master`.

The custom domain `jiaan.me` is served by the self-hosted deployment, so no
`CNAME` file is committed for Pages.
