import type {
  Character,
  EventNarrativeKey,
  EventOutcome,
  EventResult,
  FinalResult,
  GameState,
  SeasonEvent,
} from "./game.types";
import {
  DRAFT_OPTIONS_PER_ROUND,
  PLAYER_SCORE_BONUS,
  TOTAL_DRAFT_ROUNDS,
} from "./game.constants";
import { CHARACTERS } from "../../shared/data/characters";
import { EVENTS } from "../../shared/data/events";
import { FRONT_ROW, VELVET_HOUSE } from "../../shared/data/agencies";
import { pickRandomUnique, shuffle } from "../../shared/utils/random";
import { getTeamEventScore, getTopPerformer } from "../../shared/utils/scoring";
import { pickRivalCharacter } from "../rival/rival.ai";

export function createInitialState(): GameState {
  return {
    status: "home",
    round: 0,
    playerAgency: FRONT_ROW,
    rivalAgency: VELVET_HOUSE,
    availableCharacters: [],
    currentOptions: [],
    playerRoster: [],
    rivalRoster: [],
    events: EVENTS,
    eventResults: [],
    finalResult: undefined,
  };
}

export function startIntro(state: GameState): GameState {
  return { ...state, status: "intro" };
}

export function startDraft(state: GameState): GameState {
  const pool = shuffle(CHARACTERS);

  return {
    ...state,
    status: "draft",
    round: 1,
    availableCharacters: pool,
    currentOptions: pickRandomUnique(pool, DRAFT_OPTIONS_PER_ROUND),
    playerRoster: [],
    rivalRoster: [],
    eventResults: [],
    finalResult: undefined,
  };
}

export function pickCharacter(state: GameState, characterId: string): GameState {
  const chosen = state.currentOptions.find((c) => c.id === characterId);
  if (!chosen) return state;

  const remainingPool = state.availableCharacters.filter(
    (c) => c.id !== chosen.id,
  );
  const playerRoster = [...state.playerRoster, chosen];

  if (state.round >= TOTAL_DRAFT_ROUNDS) {
    const { rivalRoster, availableCharacters } = draftRivalRoster(
      remainingPool,
      playerRoster.length,
      state.events,
    );
    const eventResults = simulateSeason(
      playerRoster,
      rivalRoster,
      state.events,
    );
    const finalResult = computeFinalResult(eventResults);

    return {
      ...state,
      status: "rival_draft",
      round: state.round + 1,
      playerRoster,
      rivalRoster,
      availableCharacters,
      currentOptions: [],
      eventResults,
      finalResult,
    };
  }

  return {
    ...state,
    round: state.round + 1,
    playerRoster,
    availableCharacters: remainingPool,
    currentOptions: pickRandomUnique(remainingPool, DRAFT_OPTIONS_PER_ROUND),
  };
}

export function continueToSeason(state: GameState): GameState {
  return { ...state, status: "season" };
}

export function showResult(state: GameState): GameState {
  return { ...state, status: "result" };
}

export function restartGame(): GameState {
  return createInitialState();
}

function draftRivalRoster(
  pool: Character[],
  count: number,
  events: SeasonEvent[],
): { rivalRoster: Character[]; availableCharacters: Character[] } {
  let availableCharacters = [...pool];
  const rivalRoster: Character[] = [];

  for (let i = 0; i < count; i++) {
    if (availableCharacters.length === 0) break;
    const pick = pickRivalCharacter(availableCharacters, events);
    rivalRoster.push(pick);
    availableCharacters = availableCharacters.filter((c) => c.id !== pick.id);
  }

  return { rivalRoster, availableCharacters };
}

function simulateSeason(
  playerRoster: Character[],
  rivalRoster: Character[],
  events: SeasonEvent[],
): EventResult[] {
  return events.map((event) => {
    const playerScore = roundScore(
      getTeamEventScore(playerRoster, event) + PLAYER_SCORE_BONUS,
    );
    const rivalScore = roundScore(getTeamEventScore(rivalRoster, event));
    const winner = compareScores(playerScore, rivalScore);

    return {
      eventId: event.id,
      playerScore,
      rivalScore,
      winner,
      narrativeKey: getNarrativeKey(winner),
      playerCharacter: getTopPerformer(playerRoster, event),
      rivalCharacter: getTopPerformer(rivalRoster, event),
    };
  });
}

function computeFinalResult(eventResults: EventResult[]): FinalResult {
  let playerWins = 0;
  let rivalWins = 0;
  let draws = 0;

  for (const result of eventResults) {
    if (result.winner === "player") playerWins++;
    else if (result.winner === "rival") rivalWins++;
    else draws++;
  }

  return {
    winner: compareScores(playerWins, rivalWins),
    playerWins,
    rivalWins,
    draws,
  };
}

function compareScores(playerScore: number, rivalScore: number): EventOutcome {
  if (playerScore > rivalScore) return "player";
  if (rivalScore > playerScore) return "rival";
  return "draw";
}

function roundScore(score: number): number {
  return Math.round(score * 10) / 10;
}

function getNarrativeKey(winner: EventOutcome): EventNarrativeKey {
  switch (winner) {
    case "player":
      return "event_player_win";
    case "rival":
      return "event_rival_win";
    case "draw":
      return "event_draw";
  }
}
