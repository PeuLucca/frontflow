# Game Rules Spec

## Entities

### Character

A selectable person in the draft.

Attributes:

```ts
type Character = {
  id: string;
  name: string;
  category: CharacterCategory;
  imageUrl: string;
  imageCredit?: string;
  country?: string;
  tags: string[];

  attributes: {
    fame: number;
    elegance: number;
    engagement: number;
    networking: number;
    charisma: number;
    trend: number;
  };

  specialties: EventType[];
};

Character Categories
type CharacterCategory =
  | "wag"
  | "model"
  | "influencer"
  | "actress"
  | "rising_star"
  | "fashion_icon";

  Event Types
type EventType =
  | "paris_fashion_week"
  | "milan_fashion_week"
  | "met_gala"
  | "cannes"
  | "luxury_campaign"
  | "vogue_cover"
  | "social_media_moment"
  | "fashion_awards";

## Localization Notes

- `CharacterCategory` and `EventType` are internal English identifiers
  used by the engine, data, and types. They are never shown to the
  player directly.
- The engine's outputs (event winners, final results, rival picks) are
  expressed as neutral data (ids, `"player" | "rival" | "draw"`, scores) -
  not as display strings.
- All player-facing labels and narratives derived from these identifiers
  and outcomes are written in pt-BR and centralized in `shared/i18n`, per
  `docs/specs/architecture-spec.md`.

