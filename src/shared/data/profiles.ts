export type ProfileVariant = "player" | "rival";

export type AgencyProfile = {
  initials: string;
  variant: ProfileVariant;
};

export const PLAYER_PROFILE: AgencyProfile = {
  initials: "FR",
  variant: "player",
};

export const RIVAL_PROFILE: AgencyProfile = {
  initials: "MV",
  variant: "rival",
};
