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

