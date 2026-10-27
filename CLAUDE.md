# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is **yarn** (v1, see `packageManager` in `package.json`).

- `yarn dev` — dev server (http://localhost:3000)
- `yarn build` — production build (also the best full type/route check)
- `yarn lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)
- `npx tsc --noEmit` — type check
- `npx prettier --write <files>` — format

There is no test suite.

The husky pre-commit hook runs `lint-staged`, which type-checks the whole project with `tsc --noEmit`, then runs `eslint --fix` and `prettier --write` on staged files. A type error anywhere blocks the commit.

## Stack

Next.js 16 (App Router, Turbopack) with React 19, Tailwind CSS v4, `next-intl` for i18n, `next-themes` for dark mode, `@bprogress/next` for the route progress bar. Personal portfolio site deployed on Vercel (`https://gtemgoua.vercel.app`).

`next.config.ts` enables `cacheComponents` and `partialPrefetching`; keep that in mind for dynamic APIs (e.g. `useSearchParams` in `GoogleTag` is wrapped in `<Suspense>` in the layout). Per AGENTS.md, check `node_modules/next/dist/docs/` before relying on remembered Next.js APIs — e.g. middleware lives in `proxy.ts` (not `middleware.ts`), and pages/layouts use the global `PageProps<'/route'>` / `LayoutProps<'/route'>` types.

## Architecture

### i18n routing (next-intl)

- Locales `en` (default) and `fr` are defined in `i18n/routing.ts`. All routes live under `app/[locale]/`.
- `proxy.ts` runs the next-intl middleware for locale detection/prefixing.
- `i18n/request.ts` loads `messages/<locale>.json`; the plugin in `next.config.ts` wires it up.
- Use `Link`, `useRouter`, `usePathname`, `redirect` from `@/i18n/navigation` (locale-aware), not from `next/link` / `next/navigation`.
- Every page/layout calls `setRequestLocale(locale)` and exports `generateStaticParams` so pages render statically. Translations come from `getTranslations` (server, incl. `generateMetadata`) or `useTranslations` (components). Messages are namespaced per page/component (`HomePage`, `ProjectsPage`, `TimelineItem`, …) — add keys to **both** `messages/en.json` and `messages/fr.json`.
- `app/[locale]/[...rest]/page.tsx` calls `notFound()` so unknown paths render `app/[locale]/not-found.tsx`.

### Routes & content

- Pages are in the `app/[locale]/(pages)/` route group: home, `about-me`, `projects`, `projects/[slug]`, `contact`. Path strings are centralized in `lib/routes.ts` (`PAGES`).
- Content is static data, not a CMS: `lib/constants.tsx` holds `TECH_STACK`, `SKILL_GROUPS`, `SOCIAL_MEDIA` and `PROJECTS` (drives `projects/[slug]` static params). Types are in `lib/types.ts`. Images are under `public/assets/`.
- Per-route OG/Twitter images are file-convention `opengraph-image.png` / `twitter-image.png` with `.alt.txt` siblings; project pages generate theirs with `next/og` (`projects/[slug]/opengraph-image.tsx`).
- SEO helpers live in `lib/seo.ts` (`pageMetadata` for canonical/hreflang/OG tags, `personJsonLd`). `app/sitemap.ts` and `app/robots.ts` are generated.
- LLM-friendly content: `/llms.txt` and `/llms-full.txt` are route handlers built by `lib/llms.ts` from the same messages and data as the pages (English). New projects, experience or education entries appear there automatically.
- Components: `components/layout/` (header, nav, theme/locale switchers, `Providers`), `components/common/` (shared UI), `components/pages/<page>/` (page-specific).

### Styling

- Tailwind v4 configured CSS-first in `app/globals.css` (no `tailwind.config`), processed via the `@tailwindcss/turbopack` loader.
- Dark mode is class-based (`next-themes` sets `.dark` on `<html>`, `@custom-variant dark`).
- Prefer the semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `bg-field`, `border-border`, `border-line`) which swap automatically under `.dark`, so no `dark:` variant is needed. Brand color is `primary`; header height is the `header` spacing token (`h-header`, `pt-header`).
- Images use `next/image` (the `@next/next/no-img-element` lint rule is on). Project screenshots use `fill` inside a sized container; other images pass explicit `width`/`height`.

### Analytics

`components/robot/GoogleTag.tsx` + `lib/gtm.ts` inject GTM only when `NEXT_PUBLIC_VERCEL_ENV === 'production'`. Env vars are listed in `.env.exemple` (`NEXT_PUBLIC_VERCEL_ENV`, `NEXT_PUBLIC_GTM`).

## Code style

Prettier: tabs, single quotes, semicolons, ES5 trailing commas, 100-char width, `prettier-plugin-tailwindcss` for class sorting. Components are arrow functions with a default export; imports use the `@/` alias.
