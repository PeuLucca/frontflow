# Sprint 04 - Game Balance & Tuning

## Goal

Tune the draft pool, rival AI, and event-scoring formulas so seasons feel
fair, replayable, and strategically interesting, per the product spec's
"hidden strategy" goal.

## Scope

- Review and adjust the event scoring formula in `shared/utils/scoring.ts`.
- Tune rival AI pick priorities in `modules/rival/rival.ai.ts`.
- Balance attribute distributions across the (now larger) character
  dataset.
- Introduce controlled randomness for replay variance.
- Playtest across multiple simulated seasons to validate outcomes.

## Tasks

- Define/refine the event scoring formula combining character attributes,
  event specialties, and a bounded random factor
  (`shared/utils/random.ts`).
- Tune `rival.ai.ts` so the rival's picks are competitive but not always
  optimal or always trivial.
- Review the character dataset for outlier attribute values and rebalance
  where one category/character dominates every event.
- Adjust per-event specialty weighting so no single `EventType` is trivially
  decided by attributes alone.
- Run repeated full-season simulations (manual or scripted) and record
  win/loss distributions across varied draft strategies.
- Document balancing decisions and resulting win-rate ranges.

## Acceptance Criteria

- Across varied but reasonable draft choices, player win rate sits
  roughly in a 40-60% band - neither guaranteed nor near-impossible.
- The rival agency provides a meaningful challenge without feeling
  unbeatable or trivial.
- Identical draft choices can produce different season outcomes due to
  controlled randomness, while remaining clearly influenced by player
  choices.
- No single character, category, or specialty is a dominant "always pick"
  strategy.
- If balancing work surfaces any new player-facing text, it is added to
  the centralized pt-BR string table (`shared/i18n`) - no new hardcoded
  or English strings.

## Definition of Done

- `npm run build` succeeds.
- A documented balance pass exists (e.g. `docs/decisions/` or
  `docs/tasks/` notes) with example season outcomes and win-rate data.
- Engine scoring logic is verified (manual checks or simple test scripts)
  to behave as designed for representative rosters.

## Out of Scope

- New characters, events, or images (Sprint 03 already complete).
- New screens or visual changes.
- Narrative/storytelling content (Sprint 05).
