# Angel Rodriguez — Portfolio

Personal portfolio of Angel Rodriguez, front-end and mobile developer. It includes the home page (about, skills, experience, projects and contact) and the **Project Explosive** case study, in English and Spanish, with dark and light themes.

Built with [Astro 7](https://astro.build) as a static site with no UI framework. Interactivity (project modal, tabs, theme, language and mobile menu) is vanilla JavaScript inside the `.astro` components.

## Requirements

- Node `>= 22.22.0`
- Yarn

## Commands

| Command                                   | Action                                          |
| :---------------------------------------- | :---------------------------------------------- |
| `yarn install`                            | Install dependencies                            |
| `yarn astro dev --background`             | Start the dev server at `localhost:4321`        |
| `yarn astro dev status` / `stop` / `logs` | Check, stop or show logs for the dev server     |
| `yarn build`                              | Build the production site to `./dist/`          |
| `yarn preview`                            | Serve the build locally                         |

## Routes

| English (default)              | Spanish                              |
| :----------------------------- | :----------------------------------- |
| `/`                            | `/es/`                               |
| `/projects/project-explosive`  | `/es/proyectos/project-explosive`    |

## Structure

```text
src/
├── pages/        # Routes; thin wrappers that pass `lang` to the views
├── views/        # Home.astro and ProjectExplosiveCase.astro
├── components/   # Home sections, case study (case/) and device frames (devices/)
├── layouts/      # BaseLayout.astro
├── i18n/         # Copy in es.ts (source of truth) and en.ts; cross-language routes in utils.ts
├── data/         # Contact (site.ts), tech stack (tech.ts) and Project Explosive data (explosive.ts)
├── styles/       # tokens.css (design tokens per theme) and global.css (shared classes)
├── scripts/      # Scroll reveal animations
└── assets/       # Project Explosive screenshots
docs/design/      # Reference design
```

## Notes

- **Copy**: all content lives in `src/i18n/`. `es.ts` defines the `Dictionary` type, so `en.ts` must have the same keys.
- **Styles**: plain CSS. Dark is the designed theme and light is derived from it. Project Explosive uses its own warm palette (`--w-*` tokens).
- **Fonts**: Bricolage Grotesque, Instrument Sans and JetBrains Mono, loaded with the Astro Fonts API (configured in `astro.config.mjs`).
- **Design**: `docs/design/Portafolio Angel Rodriguez.html` is a bundle that unpacks itself in the browser, so open it there to view it.

## Contact

- [LinkedIn](https://www.linkedin.com/in/angel-david-rodriguez-botello-b68967258/)
- [GitHub](https://github.com/AngelRodriguez2003)
- angeldrb09@hotmail.com
