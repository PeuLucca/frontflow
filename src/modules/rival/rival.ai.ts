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

const RIVAL_DRAFT_HIGHLIGHT_COUNT = 3;

export type RivalDraftHighlight = {
  character: Character;
  variantIndex: number;
};

// The standout Velvet House picks worth calling out to the player, each
// paired with a distinct commentary variant so the reveal feels varied.
export function getRivalDraftHighlights(
  rivalRoster: Character[],
  events: SeasonEvent[],
): RivalDraftHighlight[] {
  const ranked = [...rivalRoster].sort(
    (a, b) =>
      getOverallEventScore(b, events) - getOverallEventScore(a, events),
  );

  return ranked
    .slice(0, Math.min(RIVAL_DRAFT_HIGHLIGHT_COUNT, ranked.length))
    .map((character, index) => ({ character, variantIndex: index }));
}
