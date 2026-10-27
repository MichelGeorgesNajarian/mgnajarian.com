# mgnajarian.com

Personal website of Michel Georges Najarian: <https://mgnajarian.com>

Built with [Next.js](https://nextjs.org) 16 (App Router, static export), React 19, TypeScript, [Tailwind CSS](https://tailwindcss.com) v4 and [shadcn/ui](https://ui.shadcn.com) (Base UI primitives, Hugeicons). Theming uses `next-themes`; scroll animations use `motion`. It is hosted on GitHub Pages.

## Getting started

Requires Node 24 (see `.nvmrc`).

```bash
nvm use
npm ci
npm run dev   # http://localhost:3000
```

| Script              | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the dev server                        |
| `npm run build`     | Static export to `out/`                     |
| `npm run lint`      | ESLint (and Prettier), fails on any warning |
| `npm run lint:fix`  | Auto-fix lint and formatting issues         |
| `npm run typecheck` | `tsc --noEmit`                              |

A Husky pre-push hook runs `lint` and `typecheck`.

## Project structure

```
src/app/            Routes: home, /projects, /projects/[slug], layout, 404, manifest
src/components/     Site components (hero, experience, project cards, header, footer, ...)
src/components/ui/  shadcn/ui components
src/data/           Site content as typed data (see below)
src/lib/            Helpers (base path, date formatting, page metadata, cn)
public/             Static files: images, résumé PDF, CNAME
plan/               The redesign plan this site is being built from
```

## Updating content

Content lives in `src/data/`, not in the components:

- `site.ts`: name, tagline, email, social links, nav, link-preview text and image
- `experience.ts`, `skills.ts`, `education.ts`: résumé content
- `projects.ts`: one entry per project. Each gets a card and a page at `/projects/<slug>/`. Set `featured: true` to show it on the home page, and `embedUrl` to embed a demo on its page.

Static files go in `public/`:

- Images: use WebP (`public/images/`). Everything in `public/` is published, so keep large originals out of it. The link-preview image (`og.jpg`) must stay JPEG or PNG, because link-preview crawlers don't reliably support WebP.
- Résumé PDF: `public/documents/`

## Branches and deployment

`develop` is the default branch. Open pull requests into `develop`; when it's ready, open a single PR from `develop` into `master`.

- **CI** (`.github/workflows/ci.yml`): lint, typecheck and build run as separate jobs on pull requests into `develop` or `master`, and on pushes to `develop`.
- **Deploy** (`.github/workflows/deploy-site.yml`): a push to `master` or `develop` builds both branches and publishes them together, because GitHub Pages serves one site per repo:
  - `master` is served at <https://mgnajarian.com/> (production)
  - `develop` is served at <https://mgnajarian.com/develop/> (preview, `noindex`)

The `develop` build sets `BASE_PATH=/develop` (read in `next.config.ts`). `next/link` and built assets handle the prefix automatically, but anything in `public/` that is referenced by a plain path needs `withBasePath()` from `src/lib/base-path.ts`.

Repo settings this relies on:

- Settings → Pages: source is **GitHub Actions**, custom domain `mgnajarian.com`, HTTPS enforced.
- Settings → Environments → `github-pages`: deployment branches include both `develop` and `master`.
