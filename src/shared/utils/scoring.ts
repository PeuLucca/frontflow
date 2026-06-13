import type {
  Character,
  CharacterAttributes,
  EventType,
  SeasonEvent,
} from "../../modules/game/game.types";
import {
  EVENT_ATTRIBUTE_WEIGHT,
  EVENT_SCORE_RANDOMNESS,
  EVENT_SPECIALTY_BONUS,
  TOP_PERFORMERS_PER_EVENT,
} from "../../modules/game/game.constants";
import { randomInRange } from "./random";

type AttributeKey = keyof CharacterAttributes;

const ATTRIBUTE_KEYS: AttributeKey[] = [
  "fame",
  "elegance",
  "engagement",
  "networking",
  "charisma",
  "trend",
];

// The two attributes each event leans on most; every attribute is a key
// attribute for exactly one or two events so no single trait dominates.
const EVENT_KEY_ATTRIBUTES: Record<EventType, [AttributeKey, AttributeKey]> = {
  paris_fashion_week: ["elegance", "trend"],
  milan_fashion_week: ["elegance", "charisma"],
  met_gala: ["fame", "elegance"],
  cannes: ["engagement", "charisma"],
  vogue_cover: ["fame", "trend"],
  social_media_moment: ["engagement", "trend"],
  luxury_campaign: ["networking", "elegance"],
  fashion_awards: ["fame", "networking"],
};

function getEventAttributeScore(
  character: Character,
  event: SeasonEvent,
): number {
  const keyAttributes = EVENT_KEY_ATTRIBUTES[event.type];
  let weightedSum = 0;
  let totalWeight = 0;

  for (const attribute of ATTRIBUTE_KEYS) {
    const weight = keyAttributes.includes(attribute)
      ? EVENT_ATTRIBUTE_WEIGHT
      : 1;
    weightedSum += character.attributes[attribute] * weight;
    totalWeight += weight;
  }

  return weightedSum / totalWeight;
}

export function getCharacterEventScore(
  character: Character,
  event: SeasonEvent,
): number {
  const base = getEventAttributeScore(character, event);
  const bonus = character.specialties.includes(event.type)
    ? EVENT_SPECIALTY_BONUS
    : 0;
  return base + bonus;
}

export function getOverallEventScore(
  character: Character,
  events: SeasonEvent[],
): number {
  const total = events.reduce(
    (sum, event) => sum + getCharacterEventScore(character, event),
    0,
  );
  return total / events.length;
}

export function getTeamEventScore(
  roster: Character[],
  event: SeasonEvent,
): number {
  if (roster.length === 0) return 0;

  const sorted = [...roster].sort(
    (a, b) =>
      getCharacterEventScore(b, event) - getCharacterEventScore(a, event),
  );
  const lineup = sorted.slice(
    0,
    Math.min(TOP_PERFORMERS_PER_EVENT, sorted.length),
  );
  const base =
    lineup.reduce((sum, c) => sum + getCharacterEventScore(c, event), 0) /
    lineup.length;

  return base + randomInRange(-EVENT_SCORE_RANDOMNESS, EVENT_SCORE_RANDOMNESS);
}
