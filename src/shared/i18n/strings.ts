import type {
  CharacterCategory,
  EventNarrativeKey,
  EventOutcome,
} from "../../modules/game/game.types";
import { ptBR } from "./pt-BR";

export type Strings = {
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    startButton: string;
  };
  intro: {
    title: string;
    story: (rivalName: string, playerName: string) => string;
    continueButton: string;
  };
  agencyIntro: {
    eyebrow: string;
  };
  rivalIntro: {
    eyebrow: string;
    role: (agencyName: string) => string;
  };
  draft: {
    title: (agencyName: string) => string;
    chooseButton: string;
    progress: (current: number, total: number) => string;
    categories: Record<CharacterCategory, string>;
  };
  season: {
    title: string;
    nextEventButton: string;
    finalResultButton: string;
    vs: string;
    narrative: (
      key: EventNarrativeKey,
      params: { eventName: string; playerName: string; rivalName: string },
    ) => string;
  };
  result: {
    eyebrow: string;
    headline: (
      winner: EventOutcome,
      playerName: string,
      rivalName: string,
    ) => string;
    subline: (winner: EventOutcome, rivalOwner: string) => string;
    score: (playerWins: number, rivalWins: number, draws: number) => string;
    restartButton: string;
  };
};

export const strings: Strings = ptBR;
