# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **yarn** (yarn.lock is authoritative).

- `yarn dev` — start dev server
- `yarn build` — production build
- `yarn start` — run production build
- `yarn lint` — run `next lint`
- `yarn tsc --noEmit` — typecheck only (no `typecheck` script exists; run tsc directly)
- `yarn prettier --write <files>` — format specific files

There is no test runner configured in `package.json` (no unit/e2e test framework is set up). A stray `test.js` at the repo root is scratch code, not part of the app or a test suite.

### Pre-commit
`lint-staged.config.js` defines typecheck + `next lint --fix` + `prettier --write` for staged `.ts/.tsx` files (and prettier for `.md/.json`), and husky's `prepare` script installs the hook infra. However, `.husky/pre-commit` itself is not present — the hook is not currently wired to invoke lint-staged, so don't assume commits are auto-linted.

## Architecture

### Next.js 16, App Router, i18n-first routing
Every routed page lives under `app/[locale]/...`, with next-intl (`next-intl@4`) providing locale-aware routing. Key i18n files:
- `app/i18n/routing.ts` — defines locales (`en`, `fr`), default locale `en`.
- `app/i18n/navigation.ts` — re-exports locale-aware `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` from `createNavigation(routing)`. **Always import navigation primitives from `@/i18n/navigation`, not `next/navigation` or `next/link`**, so locale prefixes are handled correctly.
- `app/i18n/request.ts` — resolves the active locale and loads `app/i18n/messages/{locale}.json`.
- `proxy.ts` (repo root) — the locale-negotiation middleware. In Next.js 16 this file replaces the old `middleware.ts` convention; it wraps `next-intl`'s `createMiddleware(routing)`.
- `next.config.ts` wires everything together via `createNextIntlPlugin('./app/i18n/request.ts')`.

`app/[locale]/layout.tsx` renders `<NotFound />` if the locale param doesn't match `routing.locales` (via `hasLocale`), otherwise sets up `NextIntlClientProvider`, global `Providers`, `Header`/`Footer`, and the Google Tag Manager script.

Page routes live in `app/[locale]/(pages)/...` (a route group, so it doesn't add a URL segment): `about-me`, `blog`, `blog/[slug]`, `contact`, `projects`, `projects/[slug]`. Each route segment has file-based OG/Twitter image metadata (`opengraph-image.png` + `.alt.txt`, `twitter-image.png` + `.alt.txt`).

### Translation message structure
`app/i18n/messages/{en,fr}.json` are namespaced per page/component (`RootLayout`, `HomePage`, `AboutPage`, `ProjectsPage`, `LocaleSwitcher`, etc.). Detail pages additionally look up content dynamically by slug, e.g. `projects/[slug]/page.tsx` calls `useTranslations(\`projects.${slug}\`)` for per-project rich text (used with `t.raw()` / `t.rich()`), separate from the static `ProjectDetailsPage` namespace holding UI labels. When adding a new project/blog entry, both a `constants.tsx` entry **and** a matching translation sub-namespace are needed in both locale files.

### Static content vs. translations
Structured, non-text data (skills list, social links, the project catalog, blog post titles) lives in `app/utils/constants.tsx` as typed arrays (`SKILLS`, `SOCIAL_MEDIA`, `PROJECTS`, `BLOG_POSTS`), typed via `app/utils/types.ts`. Translatable copy for that same data lives in the message JSON files, keyed by the item's `slug`. Route paths are centralized in `app/config/routes.ts` (`PAGES` object; `app/config/index.ts` re-exports it) — use `PAGES.xxx` instead of hardcoding hrefs.

### Component organization (`app/components/`)
- `common/` — generic, reusable UI (buttons, form inputs, `PageHeader`, `NotFound`, `Photo`, `Separator`).
- `layout/` — site chrome: `Header`, `HeaderNav`, `Footer`, `LocaleSwitcher`, `Providers` (client-only wrapper combining `next-themes` `ThemeProvider`, `next-nprogress-bar`, and the AOS scroll-animation init hook).
- `pages/<page-name>/` — components scoped to a single page (e.g. `pages/about-me`, `pages/blog`, `pages/contact`, `pages/projects`).
- `robot/` — crawler/analytics-facing components (`GoogleTag`, gated on `NEXT_PUBLIC_VERCEL_ENV === 'production'`; see `app/utils/gtm.ts`).

### Styling: Tailwind v4 (CSS-first config)
There is no `tailwind.config.js` — Tailwind v4 config lives entirely in `app/globals.css` via `@theme` (custom colors like `--color-primary`, `--color-bg-light`/`--color-bg-dark`, custom breakpoint `xs`), `@plugin` (e.g. `tailwind-scrollbar`), and custom `@utility` blocks (`transit`, `text-size-inherit`). Dark mode uses a custom variant: `@custom-variant dark (&:where(.dark, .dark *))`, driven by `next-themes`' `attribute="class"`.

### Path aliases & import rules
- `@/*` maps to `app/*` (see `tsconfig.json`).
- ESLint (`no-restricted-imports`) **forbids relative parent imports** (`../*`) — always use the `@/` alias instead.

### Code style (enforced by ESLint/Prettier, not just convention)
- Tabs for indentation, single quotes, semicolons (Prettier).
- Blank line required before every `return`, after variable declaration blocks, after imports, and before exports (`padding-line-between-statements` in `.eslintrc.json`).
- `max-len` 100, `max-lines` 500 per file.
- `console.info/warn/error` allowed, plain `console.log` is not.

### Environment variables
See `.env.exemple` (sic — filename is misspelled in the repo, not a typo to "fix" without checking): `NEXT_PUBLIC_VERCEL_ENV` (gates GTM script to `production`) and `NEXT_PUBLIC_GTM` (GTM container ID).
