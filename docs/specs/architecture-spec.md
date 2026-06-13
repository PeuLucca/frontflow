# Architecture Spec

## Principles

- Game logic must be pure TypeScript.
- UI must only render state and dispatch actions.
- Character data must be isolated.
- No business logic inside React components.
- Every module must have a clear responsibility.

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