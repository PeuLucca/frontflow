export type CharacterCategory =
  | "wag"
  | "model"
  | "influencer"
  | "actress"
  | "rising_star"
  | "fashion_icon";

export type EventType =
  | "paris_fashion_week"
  | "milan_fashion_week"
  | "met_gala"
  | "cannes"
  | "luxury_campaign"
  | "vogue_cover"
  | "social_media_moment"
  | "fashion_awards";

export type CharacterAttributes = {
  fame: number;
  elegance: number;
  engagement: number;
  networking: number;
  charisma: number;
  trend: number;
};

export type Character = {
  id: string;
  name: string;
  category: CharacterCategory;
  imageUrl: string;
  imageCredit?: string;
  country?: string;
  tags: string[];
  attributes: CharacterAttributes;
  specialties: EventType[];
};

export type Agency = {
  id: string;
  name: string;
  owner: string;
  tagline: string;
  description: string;
};

export type SeasonEvent = {
  id: string;
  name: string;
  type: EventType;
  description: string;
};

export type EventOutcome = "player" | "rival" | "draw";

export type EventNarrativeKey =
  | "event_player_win"
  | "event_rival_win"
  | "event_draw";

export type EventResult = {
  eventId: string;
  playerScore: number;
  rivalScore: number;
  winner: EventOutcome;
  narrativeKey: EventNarrativeKey;
};

export type FinalResult = {
  winner: EventOutcome;
  playerWins: number;
  rivalWins: number;
  draws: number;
};

export type GameStatus =
  | "home"
  | "intro"
  | "draft"
  | "rival_draft"
  | "season"
  | "result";

export type GameState = {
  status: GameStatus;
  round: number;
  playerAgency: Agency;
  rivalAgency: Agency;

  availableCharacters: Character[];
  currentOptions: Character[];

  playerRoster: Character[];
  rivalRoster: Character[];

  events: SeasonEvent[];
  eventResults: EventResult[];

  finalResult?: FinalResult;
};

export type GameAction =
  | { type: "START_INTRO" }
  | { type: "START_DRAFT" }
  | { type: "PICK_CHARACTER"; characterId: string }
  | { type: "CONTINUE_TO_SEASON" }
  | { type: "SHOW_RESULT" }
  | { type: "RESTART" };
