# ADR-006

## Title

Game Balance Pass: Event Scoring, Rival AI, and Replay Variance

## Status

Accepted

## Context

The original implementation had three issues that made seasons feel
predetermined rather than "hidden strategy":

1. **Rival AI was a deterministic top-pick.** `pickRivalCharacter` always
   took the single highest flat-attribute-average character left in the
   pool, every round. Since the player drafts first and fully (per the
   Core Loop), the rival's 11-pick roster after the player's 11 picks was
   always the literal best 11 of the remaining 49 - an overwhelming
   structural advantage for the rival.
2. **Event scoring used a flat 6-attribute average.** Every `EventType`
   was decided by the same number (`fame+elegance+engagement+networking
   +charisma+trend) / 6`), so attributes had no per-event identity and a
   "flat-high" character (uniformly strong across all six attributes) was
   simply the best pick for every event with no tradeoffs.
3. **Replay variance was too small.** `EVENT_SCORE_RANDOMNESS = 5` meant a
   ±5 swing on scores in the ~75-100 range - rarely enough to flip a
   result, so identical drafts produced near-identical outcomes.

A baseline simulation (4000 seasons per strategy, see "Simulation
methodology" below) confirmed issue (1) as the dominant cause: player win
rates were 2-23% across all tested draft strategies, including
near-optimal ones.

## Decision

### 1. Per-event attribute weighting (`shared/utils/scoring.ts`)

`getCharacterEventScore` no longer uses a flat attribute average. Each
`EventType` now has two "key attributes" weighted by
`EVENT_ATTRIBUTE_WEIGHT` (2x); the remaining four attributes keep weight 1.
Every attribute is a key attribute for at least one event, and every
event's pair is unique:

| Event | Key attributes |
| --- | --- |
| `paris_fashion_week` | elegance, trend |
| `milan_fashion_week` | elegance, charisma |
| `met_gala` | fame, elegance |
| `cannes` | engagement, charisma |
| `vogue_cover` | fame, trend |
| `social_media_moment` | engagement, trend |
| `luxury_campaign` | networking, elegance |
| `fashion_awards` | fame, networking |

`EVENT_SPECIALTY_BONUS` (10) is unchanged: a character whose `specialties`
include the event's type still gets a flat +10 on top of the weighted
attribute score.

A new `getOverallEventScore(character, events)` returns the average
`getCharacterEventScore` across all events - a single "how strong is this
character overall, across the whole season" number, used by the rival AI
and available for future UI/score displays.

### 2. Weighted-random rival AI (`modules/rival/rival.ai.ts`)

`pickRivalCharacter(available, events)` now:

1. Computes `getOverallEventScore` for every remaining character.
2. Builds weights as `score - minScore + 1` (so the weakest remaining
   character still has a small chance, and the strongest has the largest
   share, proportional to how far ahead it is).
3. Picks one character via a new `weightedRandomPick(items, weights)`
   helper in `shared/utils/random.ts`.

This is run once per rival roster slot (same call site and sequential
draft order as before - `draftRivalRoster` in `game.engine.ts` now also
threads `state.events` through to the AI). The rival still gravitates
toward strong picks but is no longer a guaranteed top-11 wall.

### 3. Increased replay randomness (`modules/game/game.constants.ts`)

`EVENT_SCORE_RANDOMNESS` raised from `5` to `15` (applied as
`randomInRange(-15, 15)` per event, on top of the weighted lineup score).
Combined with the rival AI change, this is large enough to flip individual
event results and full-season outcomes for identical drafts, without
swamping the signal from the draft itself.

### New/changed constants (`modules/game/game.constants.ts`)

```ts
export const EVENT_SCORE_RANDOMNESS = 15; // was 5
export const EVENT_SPECIALTY_BONUS = 10; // unchanged
export const EVENT_ATTRIBUTE_WEIGHT = 2; // new
```

## Simulation Methodology

No test runner is available in this project (no vitest/ts-node/tsx). The
formula and AI logic were hand-ported into standalone Node scripts under a
temporary `_sim/` directory (deleted before this sprint's build), using the
real `characters.ts`/`events.ts` data extracted to plain JS. Each
configuration ran 11-round drafts (`TOTAL_DRAFT_ROUNDS = 11`,
`DRAFT_OPTIONS_PER_ROUND = 3`) against the full 60-character pool, followed
by the rival draft and an 8-event season, repeated 4000-8000 times per
player strategy.

Player strategies tested:

- `random` - picks a random option each round.
- `bestAvg` - always picks the option with the highest flat attribute
  average.
- `coverage` - greedy lookahead; picks whichever option maximizes the
  team's total projected score across all 8 events (no randomness).
- `focus_<category>` - picks a character from a target `CharacterCategory`
  whenever offered one, else falls back to `bestAvg` (tested:
  `fashion_icon`, `model`, `rising_star`, `wag`).
- `focus_<specialty>` - picks a character whose `specialties` include a
  target `EventType` whenever offered one, else falls back to `bestAvg`
  (tested: `met_gala`, `social_media_moment`, `milan_fashion_week`).

## Results (final configuration, n=8000 seasons per strategy)

`EVENT_SCORE_RANDOMNESS=15`, `EVENT_SPECIALTY_BONUS=10`,
`EVENT_ATTRIBUTE_WEIGHT=2`, rival AI as described above.

| Strategy | Player win % | Rival win % | Draw % |
| --- | --- | --- | --- |
| `bestAvg` | 52.8% | 22.6% | 24.6% |
| `coverage` (near-optimal) | 52.0% | 23.5% | 24.5% |
| `focus_fashion_icon` | 46.6% | 27.5% | 25.9% |
| `focus_model` | 49.5% | 24.7% | 25.9% |
| `focus_wag` | 41.3% | 32.4% | 26.4% |
| `focus_met_gala` | 46.8% | 27.6% | 25.6% |
| `focus_milan_fashion_week` | 47.0% | 28.0% | 25.0% |
| `focus_rising_star` | 39.6% | 33.5% | 26.9% |
| `random` | 29.5% | 45.3% | 25.2% |
| `focus_social_media_moment` | 29.6% | 45.1% | 25.3% |

## Acceptance Criteria Check

- **"Player win rate roughly 40-60% for varied but reasonable draft
  choices"**: `bestAvg`, `coverage`, and all category/specialty-focus
  strategies except `focus_rising_star` (39.6%, effectively at the
  boundary given simulation noise of ~±1pp at n=8000) land between 41%
  and 53%. A near-optimal lookahead strategy (`coverage`) tops out at 52%,
  well short of "guaranteed".
- **"Rival provides meaningful challenge without feeling unbeatable or
  trivial"**: rival win rate never drops below ~22.6% (even against
  near-optimal play) and never exceeds ~45.3% (even against the weakest
  strategies) - always a real factor, never a foregone conclusion either
  way.
- **"Identical draft choices can produce different outcomes via controlled
  randomness, while remaining influenced by player choices"**: with
  `EVENT_SCORE_RANDOMNESS=15` and a weighted-random rival draft, the same
  player roster can face different rival rosters and different per-event
  random swings across replays - draw rates of ~24-27% reflect this -
  while the ~23pp spread between `bestAvg` (52.8%) and
  `focus_rising_star` (39.6%) shows draft choices still matter most.
- **"No single character/category/specialty is a dominant always-pick"**:
  every category-focus and specialty-focus strategy tested sits at or
  below `bestAvg` (52.8%); none approaches the 60% ceiling. See "Dataset
  Review" below for the underlying attribute-distribution check.
- **`random` (29.5%) and `focus_social_media_moment` (29.6%) sit below the
  40% band.** This is treated as intentional, not a gap:
  - `random` represents a player who isn't engaging with the draft at all
    - it is the "floor", not a "reasonable" strategy in the sense the
    acceptance criteria describe.
  - `focus_social_media_moment` is a *naive* strategy, not a reasonable
    one: `social_media_moment` is the most common specialty (26/60
    characters), and it is disproportionately held by the
    lowest-attribute characters in the dataset (7 of the bottom 10 by
    attribute average list it as a specialty). A player who chases that
    specialty regardless of overall quality ends up with a weak roster
    *and* leaves the strongest characters for the rival - this is a real
    strategic trap, and the ~29.6% result is the intended consequence of
    falling into it. It demonstrates draft choices matter, which is the
    point of the acceptance criteria.
  - Both sit close to each other (29.5% / 29.6%) and well above 0%, so the
    rival remains beatable even from a weak position - it does not feel
    "unbeatable".
- **"New player-facing text → `shared/i18n`"**: no new player-facing
  strings were introduced. All changes are internal engine constants,
  types, and functions (English identifiers, per CLAUDE.md). `EventType`
  and `CharacterCategory` unions are unchanged.

## Dataset Review (no changes made)

Reviewed `shared/data/characters.ts` (60 characters) for outliers that
could create a dominant always-pick:

- Attribute averages range 71.5-94.3 (mean 84.1) - a ~23-point spread
  across 60 characters, no extreme outlier.
- Category means range from 79.3 (`rising_star`) to 88.7 (`model`), all
  within ~5 points of the overall mean - no category is dramatically
  stronger than the others, consistent with every `focus_<category>`
  strategy landing at or below `bestAvg` in the simulation.
- Per-attribute means range 81.3 (networking) to 85.2 (elegance/trend), a
  tight ~4-point spread - no single attribute is inflated relative to the
  others, so the new per-event attribute weighting does not create a
  hidden "best attribute" that dominates regardless of event type.
- 7/60 characters are "flat-high" (≤8 spread across all six attributes,
  e.g. Rihanna, Beyoncé, Zendaya). `bestAvg` (always picks the highest flat
  average) lands at 52.8% - strong but not dominant, given the rival AI and
  randomness changes above.

Given the simulation results already satisfy the acceptance criteria
without touching character data, **no attribute values were changed** in
this sprint.

## Consequences

- Event outcomes now depend on which two attributes are "key" for that
  event type, giving rosters built around different attribute profiles a
  reason to exist (per-event identity, supports "hidden strategy").
- The rival is noticeably less predictable round-to-round, but its overall
  strength (via `getOverallEventScore`-weighted sampling) still tracks the
  remaining talent pool, so it remains thematically a "tough but beatable"
  Velvet House.
- Season results vary more between replays of the same draft, supporting
  replayability (Product Pillar #6).
- `getAttributeAverage` (the old flat-average helper) was removed from
  `shared/utils/scoring.ts` as it became unused; `getOverallEventScore`
  replaces its one call site (rival AI) with an event-aware equivalent.
