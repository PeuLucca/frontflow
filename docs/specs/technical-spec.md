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