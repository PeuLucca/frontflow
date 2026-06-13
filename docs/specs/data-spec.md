# Data Spec

## Character Structure

```ts
type Character = {
  id: string;
  name: string;
  category: CharacterCategory;
  imageUrl: string;

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
```

## Data Location

```txt
src/shared/data/characters.ts
```

## Example

```ts
{
  id: "georgina-rodriguez",
  name: "Georgina Rodríguez",
  category: "wag",
  imageUrl: "/images/characters/georgina.jpg",

  tags: ["luxury", "social-media"],

  attributes: {
    fame: 98,
    elegance: 89,
    engagement: 95,
    networking: 91,
    charisma: 87,
    trend: 92
  },

  specialties: [
    "met_gala",
    "social_media_moment"
  ]
}
```

## MVP Dataset

Minimum:

- 30 characters
- 6 events
- 2 agencies
- 1 rival

Recommended:

- 60 characters
- 8 events
- 3 rivals

## Localization Notes

- `name`, `country`, and `tags` are data values (real names, places,
  free-form tags). They are not translated and may remain as written.
- `category` (`CharacterCategory`) and `specialties` (`EventType[]`) are
  internal English identifiers shared between data and engine code. Their
  pt-BR display labels (e.g. `"model"` -> "Modelo", `"met_gala"` -> "Met
  Gala") are defined once in `shared/i18n` and looked up wherever the UI
  shows a category or event name - never hardcoded per component.