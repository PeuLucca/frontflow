# Technical Spec

## Stack

- React
- TypeScript
- Vite
- CSS Modules or plain CSS
- GitHub Pages
- Static JSON/TS data

## Hosting

The app must work on GitHub Pages.

That means:

- No backend required.
- No server-side routing.
- Use hash routing if routing is needed.
- All assets must work with Vite base path.

## Localization

- The MVP ships **pt-BR only**. All user-facing strings live in a single
  centralized location (e.g. `src/shared/i18n`) and are imported by
  components instead of being written inline.
- No i18n library is required for the MVP - a plain typed TypeScript
  string table is sufficient. The structure should make it possible to
  add another locale later (e.g. a second string table + a locale
  switcher) without restructuring components or game logic.
- The pure game engine never returns hardcoded display text; it returns
  semantic results (winner, scores, ids) that the UI layer resolves to
  pt-BR copy via the centralized string table.

## Responsive / Mobile-First

- `index.html` must include a proper viewport meta tag
  (`width=device-width, initial-scale=1`) so mobile browsers render at
  the correct scale.
- CSS is written mobile-first: base styles target the 360px-430px range,
  and any desktop-specific adjustments are added via `min-width` media
  queries on top of the mobile base - never the other way around.
- Supported widths: 360px, 390px, 414px, and desktop. No layout may
  require horizontal scrolling at any of these widths.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Recommended Dependencies

MVP should avoid heavy dependencies.

Allowed:

- react
- react-dom
- vite
- typescript
- lucide-react (optional)
- framer-motion (optional after MVP)

Avoid:

- Redux in MVP
- Zustand unless needed
- backend services
- API calls for core gameplay
- i18n libraries (i18next, react-intl, etc.) in MVP - a centralized
  TypeScript string table is enough for pt-BR only