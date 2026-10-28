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
src/app/            Routes: home, /projects, /projects/[slug], /resume, /blog, /blog/[slug],
                    sitemap, robots, feed.xml, layout, 404, manifest
src/components/     Site components (hero, experience, project cards, header, footer, ...)
src/components/ui/  shadcn/ui components
src/content/blog/   Blog posts (MDX)
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

Blog posts are MDX files in `src/content/blog/`; the filename is the URL slug. Each one starts with its metadata:

```mdx
export const metadata = {
  title: "Post title",
  date: "2026-11-01",
  summary: "One sentence for the list and link previews.",
  tags: ["nextjs"],
  draft: true, // optional: visible in `npm run dev`, left out of production builds
};

Markdown goes here. GFM tables, highlighted code blocks and the `<Callout>` and
`<ProjectEmbed>` components from `src/mdx-components.tsx` all work.
```

Posts show up on `/blog/`, in the home page's "Latest writing" (newest three), in `sitemap.xml` and in the RSS feed at `/feed.xml`.

Static files go in `public/`:

- Images: use WebP (`public/images/`). Everything in `public/` is published, so keep large originals out of it. The link-preview image (`og.jpg`) must stay JPEG or PNG, because link-preview crawlers don't reliably support WebP.
- Résumé PDF: `public/documents/`

## Branches and deployment

`main` is the only long-lived branch. Open pull requests into `main`; they are squash-merged, so each PR lands as a single commit.

Every PR needs exactly one version label: `patch` (fixes, chores, refactors), `minor` (new features) or `major` (breaking changes). Merging tags the squash commit with the next version, e.g. from `v1.2.3`: `patch` → `v1.2.4`, `minor` → `v1.3.0`, `major` → `v2.0.0`.

- **CI** (`.github/workflows/ci.yml`): lint, typecheck and build run as separate jobs on pull requests into `main`.
- **PR labels** (`.github/workflows/pr-labels.yml`): the "Version label" check fails unless the PR has exactly one version label.
- **Release** (`.github/workflows/release.yml`): tags each merged PR with the next version.
- **Deploy preview** (`.github/workflows/deploy-preview.yml`): every merge publishes `main` to <https://mgnajarian.com/preview/> (`noindex`). It can also be run by hand from the Actions tab, optionally for another branch, tag or commit.
- **Deploy production** (`.github/workflows/deploy-production.yml`): run by hand from the Actions tab with a version tag (or `latest`) to publish it to <https://mgnajarian.com/>. To roll back, run it with an older version.

GitHub Pages serves one site per repo and every deploy replaces it, so both deploy workflows go through `.github/workflows/deploy-pages.yml`, which rebuilds production and preview together. The `deployed/production` and `deployed/preview` tags record what is currently live, and each deploy keeps the half it isn't changing. Only one Pages deploy runs at a time; if a queued deploy shows as cancelled because another was queued behind it, run it again.

The preview build sets `BASE_PATH=/preview` (read in `next.config.ts`). `next/link` and built assets handle the prefix automatically, but anything in `public/` that is referenced by a plain path needs `withBasePath()` from `src/lib/base-path.ts`.

Repo settings this relies on:

- Settings → General: only squash merging is allowed (PR title and description as the commit message).
- Settings → Rules: `main` requires a PR and the Lint, Typecheck, Build and Version label checks; `v*` tags can't be moved or deleted.
- Settings → Pages: source is **GitHub Actions**, custom domain `mgnajarian.com`, HTTPS enforced.
- Settings → Environments → `github-pages`: deployment branches are limited to `main`.
- Settings → Actions: the default workflow token is read-only, and workflows from outside contributors need approval. Deploy workflows only run for the repo owner.
