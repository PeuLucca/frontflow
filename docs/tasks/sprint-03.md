# Sprint 03 - Dataset Expansion & Imagery

## Goal

Grow the static dataset from MVP minimums to the recommended scale and
give every character a real image with a safe fallback, per the data and
image-strategy specs.

## Scope

- Expand the character roster from 30 toward the recommended 60.
- Expand season events from 6 toward the recommended 8.
- Add data for additional rival agencies, toward the recommended 3.
- Source and add real images for every character.
- Implement the image fallback behavior (placeholder/initials).

## Tasks

- Audit the current dataset (`shared/data/characters.ts`,
  `events.ts`, `agencies.ts`) against `docs/specs/data-spec.md`.
- Add new character entries with complete `attributes`, `tags`,
  `category`, and `specialties`, bringing the total toward 60.
- Add 2 additional event entries (total 8), each with a valid
  `EventType` and narrative-friendly name.
- Add 2 additional rival agency profiles as data (toward 3 total),
  following the existing Velvet House structure. All agency `tagline`
  and `description` copy must be written in pt-BR.
- Source/add character images into `public/images/characters` and set
  `imageUrl` (+ optional `imageCredit`) for every character.
- Implement the `Avatar` fallback path (initials or placeholder) when an
  `imageUrl` fails to load, per `docs/specs/image-strategy-spec.md`.
- Verify all `imageUrl` paths resolve correctly under the Vite `base`
  path.

## Acceptance Criteria

- At least 60 characters defined, each with complete attributes, tags,
  category, and specialties.
- At least 8 events defined with valid `EventType` values.
- At least 3 rival agency profiles exist in data.
- Every character has an `imageUrl`; a broken/missing image falls back to
  initials/placeholder without breaking the UI.
- All data type-checks against the `Character`, `SeasonEvent`, and
  `Agency` types.
- Any new `EventType` or `CharacterCategory` values introduced by the
  expanded dataset have pt-BR display labels added to `shared/i18n`.
- New rival agency `tagline`/`description` copy is written in pt-BR and
  matches the existing Velvet House tone.
- Larger draft cards and rosters (more characters/events) remain usable
  at 360px-414px without horizontal scrolling.

## Definition of Done

- `npm run build` succeeds.
- The draft pool reflects the expanded character set.
- A full season can run using the expanded event list.
- No broken images or console errors during a full playthrough in
  `npm run preview`.

## Out of Scope

- A rival-selection mechanic for the additional rival agencies (data only
  in this sprint; selection remains a future enhancement).
- Balance tuning of attributes/specialties (Sprint 04).
- New screens or visual changes beyond what's needed for images.
