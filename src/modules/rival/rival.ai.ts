import type { Character, SeasonEvent } from "../game/game.types";
import { getOverallEventScore } from "../../shared/utils/scoring";
import { weightedRandomPick } from "../../shared/utils/random";

// Velvet House leans toward the strongest remaining talent, but the pick is
// weighted by potential rather than a guaranteed top-pick every round, so
// the rival is tough without being a fully predictable wall.
export function pickRivalCharacter(
  available: Character[],
  events: SeasonEvent[],
): Character {
  const scores = available.map((character) =>
    getOverallEventScore(character, events),
  );
  const minScore = Math.min(...scores);
  const weights = scores.map((score) => score - minScore + 1);

  return weightedRandomPick(available, weights);
}
