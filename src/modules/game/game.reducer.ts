import type { GameAction, GameState } from "./game.types";
import {
  createInitialState,
  pickCharacter,
  restartGame,
  showResult,
  startDraft,
  startIntro,
} from "./game.engine";

export function createInitialGameState(): GameState {
  return createInitialState();
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START_INTRO":
      return startIntro(state);
    case "START_DRAFT":
      return startDraft(state);
    case "PICK_CHARACTER":
      return pickCharacter(state, action.characterId);
    case "SHOW_RESULT":
      return showResult(state);
    case "RESTART":
      return restartGame();
    default:
      return state;
  }
}
