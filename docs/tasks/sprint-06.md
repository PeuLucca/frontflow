# Sprint 06 - Mobile, Animation & Sharing

## Goal

Deliver a polished mobile-first experience with lightweight motion and a
shareable result, supporting the product spec's replayability goals.

## Scope

- Responsive layout audit and fixes across all screens.
- Touch-friendly draft and event interactions.
- Lightweight animation for card selection and screen transitions.
- Shareable season result for the `ResultScreen`.
- Polished restart flow.

## Tasks

- Audit every screen at the supported mobile widths (360px, 390px,
  414px) plus desktop, and fix layout, spacing, and tap-target issues.
  Confirm no screen ever requires horizontal scrolling.
- Ensure draft card selection and event reveals work well with touch
  input, with comfortable one-handed reach on the draft screen.
- Add subtle animation for draft card selection and event/result reveals
  (CSS transitions first; `framer-motion` only if CSS proves
  insufficient, per the technical spec's "optional after MVP" allowance).
- Add screen-transition animation between Home -> Intro -> Draft ->
  Season -> Result.
- Implement a "share result" action on `ResultScreen` (Web Share API with
  a clipboard-copy fallback) summarizing the season outcome. The shared
  text is written in pt-BR and sourced from `shared/i18n`.
- Verify the restart flow fully resets game state with no stale data
  from the previous season.

## Acceptance Criteria

- All screens are usable and visually correct at 360px, 390px, and 414px
  widths (plus desktop) without horizontal scrolling or overlap.
- Draft and event interactions feel responsive, with animation feedback
  that does not slow down play.
- The share action produces a readable pt-BR summary of the result
  (winner, score/outcome, notable picks) or a documented graceful
  fallback if the Web Share API is unavailable.
- Restart reliably returns to the Home screen with a clean game state.

## Definition of Done

- `npm run build` succeeds.
- A full playthrough is manually verified at 360px, 390px, 414px, and
  desktop (browser devtools emulation), with no horizontal scrolling.
- Share feature verified on at least one platform, with fallback
  behavior documented, and shared text confirmed to be in pt-BR.

## Out of Scope

- Native app packaging (iOS/Android wrappers).
- Push notifications.
- Backend-based leaderboards or persistence.
