# Sprint 02 - Visual Polish & Luxury UI

## Goal

Transform the playable MVP from Sprint 01 into a visually distinct
experience: feminine, luxury, editorial, fashion-week, dark elegance -
while keeping the simple, centered, fast-round structure inspired by 7a0.

## Scope

- Apply the UI spec color palette and typography across every screen.
- Build the shared component library (`Button`, `Card`, `Avatar`, `Layout`).
- Restyle all MVP screens (Home, Intro, Draft, Season, Result) with the
  luxury/editorial visual language.
- Style the character card and rival card per the UI spec.
- Establish reusable theme primitives (CSS variables, spacing scale).

## Tasks

- Define global theme: CSS variables for the palette
  (`--bg`, `--card`, `--border`, `--primary`, `--secondary`, `--rival`,
  `--text`, `--muted`) and typography (Playfair Display for titles, Inter
  for body).
- Build `shared/components/Button.tsx`, `Card.tsx`, `Avatar.tsx`,
  `Layout.tsx` per the architecture spec folder structure.
- Restyle `DraftCard` to show photo, name, category, and a choose button
  labeled "Escolher" only - no stats exposed. Category labels are shown
  in pt-BR (e.g. "Modelo", "Influenciadora").
- Move all on-screen copy (buttons, headings, narratives, labels) into a
  centralized pt-BR string table (`shared/i18n`) instead of hardcoding
  strings in components.
- Restyle `EventCard` / `MatchupResult` with editorial narrative styling
  (centered, magazine-like blocks).
- Restyle `AgencyIntro` / `RivalIntro` with the Velvet House / Miranda Voss
  rival card treatment from the UI spec.
- Restyle `ResultScreen` (champion banner, trophy room, rosters, restart).
- Add fashion-week atmosphere details (dividers, gold borders, dark
  background treatments) without adding new dependencies.

## Acceptance Criteria

- Every screen uses the defined palette and typography consistently.
- Character cards contain only photo, name, category, and a choose
  button - no hidden stats are rendered.
- The rival's presence is visually distinct via the rival accent color.
- Layout remains centered and simple, matching the 7a0-inspired flow.
- The Sprint 01 playable loop (draft -> season -> result -> restart)
  still works without regressions.
- All visible text is in pt-BR, sourced from `shared/i18n` - no
  hardcoded English strings and no English/Portuguese mixing.
- Base layouts do not introduce horizontal scrolling at 360px-414px
  (full mobile tuning happens in Sprint 06).

## Definition of Done

- `npm run build` succeeds.
- A full season can be completed end-to-end using the restyled screens.
- Visuals reviewed against `docs/specs/ui-spec.md` (palette, typography,
  card rules).
- UI copy reviewed for pt-BR consistency across every screen.

## Out of Scope

- New game mechanics or scoring changes.
- New character data or images (Sprint 03).
- Screen-transition and selection animations (Sprint 06).
- Deep mobile-specific layout tuning and breakpoint audits (Sprint 06) -
  base styles must still avoid horizontal scrolling per the mobile-first
  rules.
