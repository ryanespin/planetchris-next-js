# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for PlanetChris Consulting, built on the [Mantine Next.js template](https://mantine.dev/) (App Router + Mantine UI). Node version is pinned via `.nvmrc` (v22).

## Commands

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run analyze` – production build with bundle analyzer (`ANALYZE=true`)
- `npm run start` – serve a production build
- `npm run typecheck` – `tsc --noEmit`
- `npm run eslint` / `npm run eslint:fix` – lint/fix TS/TSX
- `npm run stylelint` – lint CSS modules (cached via `.stylelintcache`)
- `npm run lint` / `npm run lint:fix` – eslint + stylelint together
- `npm run prettier:check` / `npm run prettier:write` – formatting check/fix
- `npm run test` – run the Jest unit test suite
- `npm run test:watch` – Jest in watch mode
- `npm run validate` – full pre-ship check: `lint` + `typecheck` (does not run Jest)

To run a single test file: `npx jest path/to/Component/index.test.tsx`. To filter by test name: `npx jest -t "some test name"`.

## Architecture

**Routing**: Next.js App Router under `app/`. There are two page trees, `home/` and `village/`, each self-contained (own sections, styles, images). `app/page.tsx` (the `/` route) directly re-exports the `home/page.tsx` component, so the homepage content is served at both `/` and `/home`.

**Page composition pattern**: each route's `page.tsx` is a thin composition of page-specific "Section" components stacked in order (e.g. `app/home/page.tsx` renders `VillageBanner`, `HeroSection`, `OurCommitmentSection`, `ServicesSection`, `AboutSection`, `TestimonialsSection` in sequence). Each section lives in its own folder colocated with its `*.module.css` and any local images, following `ComponentName/index.tsx` + `ComponentName/ComponentName.module.css`. Sections that need sub-pieces nest a `_components/` folder the same way (e.g. `village/DetailsSection/PricingCard`).

**Shared layout via `Section`** (`app/_components/Section`): almost every page section wraps its content in this component, which handles the badge, title, optional background image, divider, and one of several visual variants (`default`, `denim`, `denim-light`, `image-background`, `orange-light`, `village`) via CSS module classes. When adding a new section, reach for `Section` rather than rebuilding this scaffolding.

**Root layout** (`app/layout.tsx`): wraps every page in Mantine's `AppShell` with a shared `Header` (in the `AppShellHeader`), and appends a global `ContactSection` + `Footer` after `{children}` in `AppShellMain` — so the contact form and footer appear on every route automatically and should not be added to individual pages. Also wires up Mantine/FontAwesome/font CSS imports, `ColorSchemeScript`, page `metadata`/`viewport` (SEO), and Google Analytics (`@next/third-parties`).

**Theming** (`app/_theme/`): `index.ts` builds the Mantine theme via `createTheme`, using `colors.ts` (custom color tuples `pc-denim`, `pc-orange`, `pc-shamrock`, added to Mantine's color type via module augmentation) and `components/` (per-component Mantine style overrides, e.g. `Card`). Global, non-component-scoped CSS lives in `_theme/styles.css`.

**Styling**: CSS Modules (`*.module.css`) colocated with each component, processed via `postcss-preset-mantine` + `postcss-simple-vars` (see `postcss.config.cjs`). Prefer Mantine theme tokens/CSS vars (e.g. `var(--mantine-color-pc-denim-4)`) over hardcoded values.

**Forms**: the contact form (`app/_components/ContactSection`) uses `@mantine/form` for client-side validation and `fetch`es `app/api/contact/route.ts`, a Next.js Route Handler that sends the email server-side via [Resend](https://resend.com). Requires `RESEND_API_KEY` in the environment (see `.env.example`) — without it, submissions fail. Currently sends from Resend's shared `onboarding@resend.dev` test domain with `replyTo` set to the visitor's email; switch to a verified `@planetchris.net` sender once that domain is verified with Resend.

**Icons**: FontAwesome Pro (duotone-light set) via `@awesome.me`/`@fortawesome` packages pulled from a private registry configured in `.npmrc`.

**Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/app/_components/Section`.

## Linting notes

- ESLint config (`eslint.config.mjs`) is built on `eslint-config-mantine` plus `@stylistic` and `eslint-plugin-perfectionist` (natural sort ordering — keep imports/props alphabetized as autofix expects).
- `console.log` is disallowed; `console.debug/error/info/warn` are allowed.
- `.mjs`/`.cjs`/`.js`/`.d.ts` files and `.next/` are excluded from ESLint.

## Testing

Jest + React Testing Library, set up via `next/jest` (`jest.config.ts`) per the [Next.js Jest guide](https://nextjs.org/docs/app/guides/testing/jest). Tests are colocated with the component they cover, following the same `ComponentName/` folder convention as styles (e.g. `app/_components/Section/index.test.tsx`), rather than a top-level `__tests__` directory.

- **Always import test utilities from `@/app/_test-utils`**, not directly from `@testing-library/react`. It re-exports everything from RTL plus a custom `render` that wraps components in `MantineProvider` (with this project's theme) and `<Notifications />`, mirroring the real `app/layout.tsx` tree (per [Mantine's Jest guide](https://mantine.dev/guides/jest/)) — Mantine components will throw without a provider in the tree, and `notifications.show()` calls render nothing without `<Notifications />` mounted. It also re-exports `userEvent`.
- `jest.setup.ts` mocks `window.matchMedia` and `ResizeObserver`, which Mantine's components rely on internally; it's registered via `setupFilesAfterEnv`.
- CSS Modules are auto-mocked by `next/jest` as an identity proxy — `classes.divider` resolves to the string `'divider'` in tests, so DOM queries like `container.querySelector('.divider')` work directly against class names from the source `*.module.css`.
- The `@/*` path alias is mapped in `jest.config.ts` via `moduleNameMapper` to match `tsconfig.json`.
- ESLint applies `eslint-plugin-jest`'s recommended rules to `**/*.test.{ts,tsx}` only (see `eslint.config.mjs`).

## Documentation references

Do not assume Mantine or Next.js APIs/behavior from training data — both move fast and this repo tracks recent major versions (Mantine 9, Next.js 16). Check the docs before answering questions or writing code that touches either:

- **Mantine** (components, hooks, theming, forms, etc.): https://mantine.dev/llms.txt
- **Next.js** (App Router, routing, config, conventions): https://nextjs.org/docs/llms-full.txt

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
