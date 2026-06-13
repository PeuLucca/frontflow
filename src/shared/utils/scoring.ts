import type { Character, SeasonEvent } from "../../modules/game/game.types";
import {
  EVENT_SCORE_RANDOMNESS,
  EVENT_SPECIALTY_BONUS,
  TOP_PERFORMERS_PER_EVENT,
} from "../../modules/game/game.constants";
import { randomInRange } from "./random";

export function getAttributeAverage(character: Character): number {
  const { fame, elegance, engagement, networking, charisma, trend } =
    character.attributes;
  return (fame + elegance + engagement + networking + charisma + trend) / 6;
}

export function getCharacterEventScore(
  character: Character,
  event: SeasonEvent,
): number {
  const base = getAttributeAverage(character);
  const bonus = character.specialties.includes(event.type)
    ? EVENT_SPECIALTY_BONUS
    : 0;
  return base + bonus;
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
