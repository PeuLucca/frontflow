import type {
  CharacterCategory,
  EventNarrativeKey,
  EventOutcome,
  EventType,
} from "../../modules/game/game.types";
import { ptBR } from "./pt-BR";

export type NarrativeParams = {
  playerName: string;
  rivalName: string;
  rivalOwner: string;
};

export type Strings = {
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    startButton: string;
  };
  intro: {
    title: string;
    story: (rivalName: string, rivalOwner: string, playerName: string) => string;
    continueButton: string;
  };
  agencyIntro: {
    eyebrow: string;
    debutLine: (playerName: string) => string;
  };
  rivalIntro: {
    eyebrow: string;
    role: (agencyName: string) => string;
    reputation: (rivalOwner: string, rivalName: string) => string;
  };
  draft: {
    title: (agencyName: string) => string;
    chooseButton: string;
    progress: (current: number, total: number) => string;
    categories: Record<CharacterCategory, string>;
  };
  rivalDraft: {
    title: string;
    subtitle: (rivalOwner: string) => string;
    pickCommentary: (characterName: string, variantIndex: number) => string;
    continueButton: string;
  };
  season: {
    title: string;
    nextEventButton: string;
    finalResultButton: string;
    vs: string;
    narrative: (
      key: EventNarrativeKey,
      eventType: EventType,
      params: NarrativeParams,
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
    narrative: (winner: EventOutcome, params: NarrativeParams) => string;
    score: (playerWins: number, rivalWins: number, draws: number) => string;
    restartButton: string;
    shareButton: string;
    shareTitle: string;
    shareText: (headline: string, score: string, narrative: string) => string;
    shareCopied: string;
  };
};

export const strings: Strings = ptBR;
