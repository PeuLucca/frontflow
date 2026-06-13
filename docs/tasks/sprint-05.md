# Sprint 05 - Storytelling & Rival Presence

## Goal

Deepen the Front Row vs. Velvet House rivalry so Miranda Voss feels
present throughout the whole season, matching the Devil Wears Prada-style
tone established in the product and UI specs. All narrative copy is
written in Brazilian Portuguese (pt-BR).

## Scope

- Expand intro narrative for both agencies and the rivalry setup.
- Add narrative copy for rival picks during the draft.
- Add per-event narrative variants for win/loss/draw outcomes.
- Add distinct champion and defeat narratives for the result screen.
- Keep all narrative logic and copy outside React components.
- Store all narrative copy in pt-BR inside the centralized `shared/i18n`
  string table, structured so future locales could add their own copy
  bank later.

## Tasks

- Write a pt-BR narrative copy bank (in `shared/i18n`) covering:
  intro/lore, rival draft picks, event win/loss/draw flavor text, and
  champion/defeat outcomes.
- Implement pure narrative-selection logic (e.g.
  `modules/rival/rival.ai.ts` and/or a new `modules/season` narrative
  helper) that picks a copy *key* based on game state, then resolves that
  key to pt-BR text via `shared/i18n` - no logic or inline copy in
  components.
- Wire `IntroScreen` / `AgencyIntro` / `RivalIntro` to the expanded lore
  copy.
- Wire `DraftScreen` to show rival-pick commentary as the rival drafts.
- Wire `SeasonScreen` / `EventCard` / `MatchupResult` to show
  outcome-specific narrative text per event.
- Wire `ResultScreen` to show champion vs. defeat narrative variants.

## Acceptance Criteria

- Every event result displays contextual narrative text rather than a
  generic message.
- Rival picks during the draft show flavor commentary in pt-BR (e.g.
  "Miranda Voss escolheu mais uma superestrela").
- The champion and defeat outcomes on `ResultScreen` have distinctly
  different tones.
- All narrative copy matches the tone shown in
  `docs/specs/ui-spec.md` (Devil Wears Prada-style rivalry) and is
  written entirely in pt-BR with no English text.
- Narrative selection logic is pure TypeScript, independent of UI
  components, and returns copy keys resolved via `shared/i18n`.
- Longer narrative strings remain readable and don't break card layouts
  at 360px-414px width.

## Definition of Done

- `npm run build` succeeds.
- A full season playthrough shows varied pt-BR narrative text across the
  draft, season, and result screens.
- Narrative copy reviewed against the product spec's "Core Feeling"
  goals and the UI spec's example narratives.

## Out of Scope

- Voiceover or audio.
- Additional languages beyond pt-BR (future i18n; the architecture
  should allow it, but no other locale's copy is written in this sprint).
- Any change to scoring or balance (locked in Sprint 04).
