import type { Character } from "../game/game.types";
import { getAttributeAverage } from "../../shared/utils/scoring";

// Velvet House always takes the biggest star left on the table.
export function pickRivalCharacter(available: Character[]): Character {
  return [...available].sort(
    (a, b) => getAttributeAverage(b) - getAttributeAverage(a),
  )[0];
}
