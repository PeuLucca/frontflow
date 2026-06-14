import type { EventOutcome } from "../../modules/game/game.types";
import type { GameCharacterMood, GameCharacterVariant } from "../data/characterAvatars";

export type CharacterMoods = {
  player: GameCharacterMood;
  rival: GameCharacterMood;
};

export function resolveCharacterMoods(outcome: EventOutcome): CharacterMoods {
  switch (outcome) {
    case "player":
      return { player: "happy", rival: "angry" };
    case "rival":
      return { player: "angry", rival: "happy" };
    default:
      return { player: "angry", rival: "angry" };
  }
}

export function resolveFeaturedVariant(outcome: EventOutcome): GameCharacterVariant | null {
  if (outcome === "draw") return null;
  return outcome;
}
