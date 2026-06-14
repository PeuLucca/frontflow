import type { EventOutcome } from "../../modules/game/game.types";

const STORAGE_KEY = "frontrow:titles";

export type TitleRecord = {
  player: number;
  rival: number;
};

const EMPTY_TITLES: TitleRecord = { player: 0, rival: 0 };

function readTitles(): TitleRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_TITLES };

    const parsed = JSON.parse(raw) as Partial<TitleRecord>;
    return {
      player: typeof parsed.player === "number" ? parsed.player : 0,
      rival: typeof parsed.rival === "number" ? parsed.rival : 0,
    };
  } catch {
    return { ...EMPTY_TITLES };
  }
}

export function getTitles(): TitleRecord {
  return readTitles();
}

export function recordSeasonResult(winner: EventOutcome): TitleRecord {
  const titles = readTitles();

  if (winner === "player") titles.player += 1;
  else if (winner === "rival") titles.rival += 1;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(titles));
  } catch {
    // localStorage unavailable - the in-memory tally is still returned
  }

  return titles;
}
