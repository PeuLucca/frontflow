# Sprint 07 - Game Feel, Mobile Flow and Draft Intelligence

## Goal

Improve the current playable version of Front Row so it feels more like a polished game and less like a static sequence of screens.

The application is already working, but the experience needs better pacing, stronger game identity, better mobile usability, visible player/rival identity, improved draft feedback, and smoother season navigation.

## Context

The current app works, but some parts feel too text-heavy and not gamified enough.

Main issues:

- The intro screen has too much text at once.
- The intro shows large agency cards stacked on mobile, creating too much scrolling before the draft starts.
- The player agency and rival agency feel too abstract.
- Miranda Voss needs a stronger visual presence.
- The player should also have an agency owner/avatar presence.
- After the draft, only a small subset of selected characters is shown.
- During season simulation, clicking "Próximo Evento" often requires scrolling down again to find the next button.
- The app needs a proper header similar in spirit to 7a0.
- Draft choices need more game-like information: strengths, weaknesses and attribute hints.

## Scope

Implement UX/gameplay improvements across:

- Header
- Intro
- Agency identity
- Rival identity
- Draft cards
- Draft roster feedback
- Season event navigation
- Mobile layout
- Character attribute visibility

## Requirements

### 1. Add a proper game header

Create a header inspired by the simplicity of 7a0.

Requirements:

- Show the Front Row logo/wordmark.
- Use the new FR + star identity if available.
- Header must work on desktop and mobile.
- Header should not feel like a corporate navbar.
- It should feel like a game header.
- It may scroll away naturally; it does not need to be sticky.
- Keep it compact on mobile.

Suggested content:

```txt
FR★ FRONT ROW
Monte · Desfile · Vença
```

Optional:

- Small season indicator.
- Small trophy/star detail.
- Restart button only where appropriate.

Acceptance:

- Header appears on the main game layout.
- Header improves brand presence.
- Header does not consume too much vertical space on mobile.

---

### 2. Rework the intro screen pacing

The current intro screen has too much information at once.

Rework it into a more gamified sequence.

Instead of showing all agency/rival details in large stacked cards, create a short dramatic game intro.

Suggested flow:

Step 1:

```txt
A temporada começou.
```

Step 2:

```txt
A Velvet House domina as passarelas há uma década.
```

Step 3:

```txt
Agora uma nova agência entrou no jogo.
```

Step 4:

```txt
Front Row
O novo nome da moda.
```

Then show one clear CTA:

```txt
Iniciar Draft
```

Rules:

- Reduce text density.
- Avoid two huge cards stacked on mobile.
- Make it feel like game storytelling.
- Use short dramatic sentences.
- Keep the user moving quickly into the draft.

Acceptance:

- Intro is readable without heavy scrolling on 360px width.
- "Iniciar Draft" is visible quickly.
- The screen feels more like a game opening than an information page.

---

### 3. Add visual identity for the player and rival

The player agency and rival agency need faces/avatars.

Add visual identity for:

- Player agency owner
- Miranda Voss, CEO of Velvet House

Do not use real celebrity photos for these fictional people.

Use one of these approaches:

Option A:
- Stylized placeholder avatars with initials.
- Player: "FR"
- Rival: "MV"

Option B:
- Abstract illustrated silhouettes.
- Player: elegant neutral profile.
- Rival: sharper, darker profile.

Option C:
- CSS-generated avatar cards.

Requirements:

- Miranda Voss should feel intimidating, elegant and competitive.
- The player should feel like the rising challenger.
- Do not overcomplicate with AI-generated assets unless already available.
- Must work without external images.
- Must look good on mobile.

Suggested labels:

Player:

```txt
Você
Direção da Front Row
A nova aposta da temporada.
```

Rival:

```txt
Miranda Voss
CEO da Velvet House
Fria, elegante e impossível de ignorar.
```

Acceptance:

- Intro or matchup screens show player vs rival identity.
- Miranda has a strong visual presence.
- The player has a clear avatar/owner representation.
- No dependency on external fictional-person images.

---

### 4. Improve draft cards with strengths and weaknesses

Currently draft choices show too little game information.

Each character card should show game-like hints.

Show:

- Character image
- Name
- Category label in pt-BR
- 2 strengths
- 1 weakness or lower attribute
- Optional overall profile label

Do not reveal everything in a boring spreadsheet way.

Example:

```txt
Gigi Hadid
Modelo

Fortes:
Elegância 94
Fama 91

Ponto fraco:
Engajamento 72
```

Alternative compact mobile format:

```txt
FORTES
Elegância · Fama

ATENÇÃO
Networking
```

Rules:

- Use existing hidden attributes.
- Determine top 2 attributes automatically.
- Determine lowest attribute automatically.
- Keep text short.
- Must be readable on mobile.
- Do not make the card too tall.

Acceptance:

- Each draft card shows useful strategic information.
- Player can compare options better.
- Attribute labels are in Portuguese.
- No English visible in UI.

---

### 5. Show selected roster progress during draft

As the user selects characters, show a compact roster/progress area.

The player should feel they are building a team.

Requirements:

- Show selected count, for example:

```txt
Elenco Front Row: 6/11
```

- Show compact selected avatars or names.
- Must not take too much screen space.
- On mobile, use horizontal scroll chips if needed.
- Do not show a huge list that pushes draft cards too far down.

Acceptance:

- Player can see their selected lineup grow.
- Draft still remains easy to use on mobile.
- No horizontal page scroll; internal chip scroll is acceptable.

---

### 6. Improve post-draft roster reveal

After the player finishes the draft, the app currently shows only a few selected characters.

Improve this screen.

Requirements:

- Show the full Front Row lineup or a clear expandable/full view.
- Show that Miranda also completed her lineup.
- Rival lineup may be partially hidden for drama, but not confusing.

Suggested copy:

```txt
Enquanto isso, na Velvet House...
Miranda Voss também fechou sua escalação.
E ela não foi gentil.
```

Player roster:

```txt
Sua escalação
11 estrelas prontas para a temporada.
```

Rival roster:

```txt
Escalação da Velvet House
Algumas escolhas ainda estão sob sigilo.
```

Acceptance:

- User understands that both sides drafted full rosters.
- Player can view all selected characters.
- Rival reveal feels intentional, not like missing data.

---

### 7. Fix season event navigation on mobile

Currently, after clicking "Próximo Evento", the user may need to scroll down again to find the next button.

Improve event progression.

Requirements:

- The current event result should appear immediately after clicking next.
- The next action button must remain easy to access.
- Avoid requiring the user to scroll down repeatedly.
- On mobile, keep the primary CTA near the visible area.
- Consider using a fixed bottom action bar only during season simulation.

Possible solutions:

Option A:
- Scroll the current event card into view automatically after advancing.

Option B:
- Keep a fixed bottom CTA:

```txt
Próximo Evento
```

Option C:
- Render only one event at a time instead of a growing vertical list.

Preferred solution:

- Render one event at a time.
- Show previous event results in a compact timeline above or below.

Acceptance:

- User can progress through all events without repetitive manual scrolling.
- The "Próximo Evento" button is always easy to reach.
- Season simulation feels faster and more game-like.

---

### 8. Improve season simulation feel

Season events should feel like matchups, not just text blocks.

For each event, show:

- Event name
- Player side
- Rival side
- Result
- Winner
- Short narrative

Example:

```txt
Semana de Moda de Paris

Front Row 2 x 1 Velvet House

Sua agência roubou os flashes da noite.
Miranda Voss não parece satisfeita.
```

Requirements:

- Use pt-BR only.
- Keep event screen compact.
- Add visual distinction between win/loss/draw.
- Keep game tone dramatic and short.

Acceptance:

- Each event feels like a game round.
- User clearly knows who won.
- Result is readable at 360px width.

---

### 9. Keep the implementation aligned with architecture

Rules:

- Do not put game calculations inside React components.
- Attribute ranking helpers should live in shared utils or game selectors.
- UI strings must remain centralized in shared/i18n.
- No English visible in UI.
- Mobile-first remains mandatory.
- No new heavy dependency unless justified.

If adding avatar/profile data, place it in a proper data file, for example:

```txt
src/shared/data/agencies.ts
```

or

```txt
src/shared/data/profiles.ts
```

If adding helper logic for strengths/weaknesses, use:

```txt
src/shared/utils/attributes.ts
```

or equivalent.

---

## Acceptance Criteria

Sprint 07 is complete when:

- App has a compact game-style header.
- Intro screen is shorter, more dramatic and more gamified.
- Player and Miranda Voss have visual avatar/identity.
- Draft cards show strategic strengths and weakness hints.
- Draft progress shows selected roster count and compact selected characters.
- Post-draft reveal shows full player lineup or clear full roster access.
- Season event navigation no longer requires repetitive manual scrolling.
- Event simulation feels like a matchup.
- All visible text is in Brazilian Portuguese.
- Layout works well at 360px, 390px, 414px and desktop.
- No horizontal page scroll.
- `npm run build` passes.

## Definition of Done

- Implemented all Sprint 07 requirements.
- Updated docs/specs if any behavior changed.
- Ran `npm run build`.
- Manually reviewed mobile layout at:
  - 360px
  - 390px
  - 414px
  - desktop
- Reported:
  - Files changed
  - What was improved
  - Any tradeoffs
  - Remaining UX issues

## Out of Scope

Do not implement in this sprint:

- Backend
- Login
- Multiplayer
- Daily challenge
- Real user profile
- Real AI-generated avatar pipeline
- Downloading character images
- New character dataset expansion
- Sound effects
- Complex animations
- Internationalization beyond pt-BR