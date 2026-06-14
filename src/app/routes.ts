import type { GameStatus } from "../modules/game/game.types";

export const ROUTES: Record<GameStatus, string> = {
  home: "/",
  intro: "/introducao",
  draft: "/draft",
  rival_draft: "/rival",
  season: "/temporada",
  result: "/resultado",
};
