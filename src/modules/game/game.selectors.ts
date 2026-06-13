import type { GameState } from "./game.types";
import { TOTAL_DRAFT_ROUNDS } from "./game.constants";

export function getDraftProgress(state: GameState): {
  current: number;
  total: number;
} {
  return {
    current: Math.min(state.round, TOTAL_DRAFT_ROUNDS),
    total: TOTAL_DRAFT_ROUNDS,
  };
}

export function isDraftComplete(state: GameState): boolean {
  return state.playerRoster.length >= TOTAL_DRAFT_ROUNDS;
}

export function getEventName(state: GameState, eventId: string): string {
  return state.events.find((e) => e.id === eventId)?.name ?? eventId;
}
