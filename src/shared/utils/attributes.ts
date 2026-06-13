import type { CharacterAttributes } from "../../modules/game/game.types";

export type AttributeKey = keyof CharacterAttributes;

export const ATTRIBUTE_KEYS: AttributeKey[] = [
  "fame",
  "elegance",
  "engagement",
  "networking",
  "charisma",
  "trend",
];

export function getTopAttributes(
  attributes: CharacterAttributes,
  count: number,
): AttributeKey[] {
  return [...ATTRIBUTE_KEYS]
    .sort((a, b) => attributes[b] - attributes[a])
    .slice(0, count);
}

export function getLowestAttribute(attributes: CharacterAttributes): AttributeKey {
  return [...ATTRIBUTE_KEYS].sort((a, b) => attributes[a] - attributes[b])[0];
}
