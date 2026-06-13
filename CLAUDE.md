# Front Row

Front Row is a browser game inspired by 7a0.

The player owns a new fashion agency called Front Row.

The rival agency is Velvet House.

The rivalry should feel similar to:

- The Devil Wears Prada
- Miranda Priestly vs a rising challenger

## Product Pillars

1. Mobile-first
2. Portuguese (Brazil) - pt-BR
3. Fast matches (3 minutes or less)
4. Strong rivalry
5. Fashion fantasy
6. High replayability

## Core Loop

1. Start season
2. Draft celebrities
3. Rival drafts celebrities
4. Compete in events
5. Win or lose season

## Technical Rules

- React
- TypeScript
- Vite
- GitHub Pages
- Static data
- No backend

## Architecture Rules

- Pure TypeScript game engine
- UI separated from game logic
- Data isolated
- Modular structure
- All UI strings centralized (no hardcoded user-facing text in components)
- Architecture allows future i18n, but MVP ships pt-BR only

## Product Rules

- Simple like 7a0
- Fast rounds (a season completes in 3 minutes or less)
- Replayable
- Mobile-first
- Strong rival presence

## Language Rules (pt-BR)

Front Row is a Brazilian product. The MVP supports pt-BR only.

- All user-facing content must be written in Brazilian Portuguese: buttons,
  narratives, event names, rival dialogue, tutorials, error messages,
  victory screens, and defeat screens.
- The interface must never mix English and Portuguese.
- Code, variables, types, interfaces, and file names may remain in English.
- All UI strings must be centralized (not hardcoded throughout components)
  so the architecture can support future i18n without rework.

Examples:

- "Começar Temporada" (not "Start Season")
- "Escolher" (not "Choose")
- "Próximo Evento" (not "Next Event")
- "Temporada Encerrada" (not "Season Over")

## Mobile-First Rules

Front Row is primarily a smartphone game. Desktop support is secondary.

- Every screen must work well from 360px to 430px width, with no
  horizontal scrolling.
- Supported widths: 360px, 390px, 414px, and desktop.
- All interactions must be touch-friendly with thumb-sized buttons.
- The draft screen must be comfortable to use with one hand.
- Text must remain readable and cards must adapt gracefully on small
  screens.
- Responsive behavior must be explicitly documented per screen.

## Visual Rules

- Luxury
- Feminine
- Editorial
- Fashion week atmosphere
- Dark elegance

## MVP Goal

A complete playable season with:

- Draft
- Rival
- Events
- Champion screen
- Full interface in pt-BR
- Mobile-first responsive layout (360px-430px, plus desktop)