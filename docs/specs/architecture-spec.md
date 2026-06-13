# Architecture Spec

## Principles

- Game logic must be pure TypeScript.
- UI must only render state and dispatch actions.
- Character data must be isolated.
- No business logic inside React components.
- Every module must have a clear responsibility.
- All user-facing strings are centralized in `shared/i18n` and referenced
  by key - never hardcoded inside components, screens, or the game
  engine.
- CSS is mobile-first: base styles target 360px-430px; desktop styling is
  additive via `min-width` media queries.

## Folder Structure

```txt
src
  app
    App.tsx
    App.css

  modules
    game
      game.types.ts
      game.constants.ts
      game.engine.ts
      game.reducer.ts
      game.selectors.ts

    draft
      DraftScreen.tsx
      DraftCard.tsx
      DraftProgress.tsx

    season
      SeasonScreen.tsx
      EventCard.tsx
      MatchupResult.tsx

    agency
      AgencyIntro.tsx
      AgencyRoster.tsx

    rival
      RivalIntro.tsx
      rival.ai.ts

    characters
      character.types.ts

  shared
    components
      Button.tsx
      Card.tsx
      Avatar.tsx
      Layout.tsx

    data
      characters.ts
      events.ts
      agencies.ts

    i18n
      strings.ts
      pt-BR.ts

    utils
      random.ts
      scoring.ts
```

## Game State

```ts
type GameState = {
  status:
    | "home"
    | "intro"
    | "draft"
    | "season"
    | "result";

  round: number;

  playerAgency: Agency;
  rivalAgency: Agency;

  availableCharacters: Character[];
  currentOptions: Character[];

  playerRoster: Character[];
  rivalRoster: Character[];

  events: SeasonEvent[];
  eventResults: EventResult[];

  finalResult?: FinalResult;
};
```

## Screens

### HomeScreen

Starts new game.

### IntroScreen

Shows:

- player agency
- rival agency
- rivalry story

### DraftScreen

Shows:

- current round
- 3 character cards
- image
- name
- category
- choose button

### SeasonScreen

Shows:

- event name
- matchup
- winner
- narrative

### ResultScreen

Shows:

- champion
- trophy room
- player roster
- rival roster
- restart button

## Localization & UI Strings

- All player-facing text lives in `shared/i18n` (e.g. `strings.ts` for the
  string-table type, `pt-BR.ts` for the MVP's only locale).
- The MVP wires `shared/i18n` to pt-BR directly. Adding another locale
  later means adding another string table file and a locale selector -
  not changing components or game logic.
- The pure game engine (`modules/game/game.engine.ts`) and reducer never
  return hardcoded display text. Engine outputs describe **what
  happened** in neutral, code-friendly terms - e.g. an `EventResult` with
  `eventId`, `playerScore`, `rivalScore`, and `winner: "player" | "rival"
  | "draw"`.
- Narrative/flavor text (rival commentary, event outcome lines, victory
  and defeat copy) is resolved separately, by looking up the engine's
  semantic result (`winner`, `eventId`, etc.) against `shared/i18n`. This
  keeps the engine locale-agnostic and keeps every visible string in one
  place.
- `CharacterCategory` and `EventType` values (e.g. `"wag"`,
  `"met_gala"`) remain English identifiers in code and data. Their pt-BR
  display labels (e.g. "Patroa de Jogador", "Met Gala") are defined once
  in `shared/i18n` and looked up wherever a category or event name is
  rendered.

## Mobile-First Layout

- `Layout` and every screen are built for a 360px-430px viewport first;
  desktop styling is a constrained, centered enhancement on top of the
  same markup (see `docs/specs/ui-spec.md`).
- No screen may rely on horizontal scrolling, fixed widths wider than
  360px, or hover-only interactions.