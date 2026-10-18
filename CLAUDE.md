# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Angel Rodriguez, built with Astro 7 (static output, no adapter, no UI framework). Interactivity (project modal, tabs, theme, language, mobile menu) is vanilla `<script>` in `.astro` components.

- **Pages** are thin wrappers: `src/pages/index.astro` and `src/pages/en/index.astro` render `src/views/Home.astro`; `src/pages/proyectos/project-explosive.astro` and `src/pages/en/projects/project-explosive.astro` render `src/views/ProjectExplosiveCase.astro`. Each passes `lang`.
- **i18n**: Astro i18n with `es` as the default locale (no prefix) and `en` under `/en/`. All copy lives in `src/i18n/es.ts` (the source of truth, which defines the `Dictionary` type) and `src/i18n/en.ts`. Cross-language URLs come from `routes` in `src/i18n/utils.ts`.
- **Styling**: plain CSS. Design tokens are in `src/styles/tokens.css` as `:root[data-theme=dark|light]`; dark is the designed theme and light is derived from it. The `--w-*` tokens are the warm palette for Project Explosive, and the case study remaps the base tokens onto it with `.case`. Shared classes (`.container`, `.btn`, `.chip`, `.section-label`, …) are in `src/styles/global.css`, and component styles are scoped.
- **Fonts**: the Astro Fonts API (Google provider) is configured in `astro.config.mjs`, which exposes `--font-display`, `--font-body` and `--font-mono`.
- **Data**: project links and screenshot lists are in `src/data/explosive.ts`, and contact info in `src/data/site.ts`. Screenshots in `src/assets/projects/project-explosive/` were extracted from the design bundle.

The target design is `docs/design/Portafolio Angel Rodriguez.html`. It's a ~2.5 MB self-unpacking bundle (the real markup and assets are compressed and get unpacked by JS at runtime), so reading the raw file shows almost nothing useful. Open it in a browser to see the design.

## Commands

The package manager is Yarn (`yarn.lock`), and Node must be >= 22.22.0.

- `yarn install`: install dependencies
- `astro dev --background` (or `yarn astro dev --background`): start the dev server at `localhost:4321`. Per `AGENTS.md`, always run it in background mode, and manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.
- `yarn build`: production build to `./dist/`
- `yarn preview`: serve the built site

There's no test runner, linter, or formatter configured. TypeScript uses `astro/tsconfigs/strict`. `astro check` would need `@astrojs/check` added first.

## Conventions

- Routes come from files in `src/pages/` (file-based routing). Put static assets in `public/`, and put components in `src/components/` once they exist.
- Before working on routing, components, framework integrations, content collections, styling/Tailwind, or i18n, read the matching Astro guide linked in `AGENTS.md` (https://docs.astro.build). Astro 7 is newer than a lot of training data, so check the APIs against the docs.
