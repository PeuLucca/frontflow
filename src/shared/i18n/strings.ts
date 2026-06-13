import type {
  CharacterCategory,
  EventNarrativeKey,
  EventOutcome,
  EventType,
} from "../../modules/game/game.types";
import type { AttributeKey } from "../utils/attributes";
import { ptBR } from "./pt-BR";

export type NarrativeParams = {
  playerName: string;
  rivalName: string;
  rivalOwner: string;
};

export type Strings = {
  header: {
    wordmark: string;
    tagline: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    startButton: string;
  };
  intro: {
    step1: string;
    step2: (rivalName: string) => string;
    step3: string;
    nextButton: string;
    continueButton: string;
  };
  profiles: {
    player: {
      role: (agencyName: string) => string;
      tagline: string;
    };
    rival: {
      role: (agencyName: string) => string;
      tagline: string;
    };
    matchupLabel: (playerOwner: string, rivalOwner: string) => string;
  };
  draft: {
    title: (agencyName: string) => string;
    chooseButton: string;
    progress: (current: number, total: number) => string;
    categories: Record<CharacterCategory, string>;
    attributes: Record<AttributeKey, string>;
    strengthsLabel: string;
    weaknessLabel: string;
    rosterLabel: (agencyName: string, count: number, total: number) => string;
  };
  rivalDraft: {
    title: string;
    subtitle: (rivalOwner: string) => string;
    pickCommentary: (characterName: string, variantIndex: number) => string;
    continueButton: string;
    playerRosterTitle: string;
    playerRosterSubtitle: (count: number) => string;
    rivalRosterTitle: string;
    rivalRosterSubtitle: string;
    hiddenCount: (count: number) => string;
  };
  season: {
    title: string;
    progress: (current: number, total: number) => string;
    nextEventButton: string;
    finalResultButton: string;
    vs: string;
    outcomeLabel: Record<EventOutcome, string>;
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
