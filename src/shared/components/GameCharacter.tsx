import { CHARACTER_AVATARS } from "../data/characterAvatars";
import type { GameCharacterMood, GameCharacterVariant } from "../data/characterAvatars";
import "./GameCharacter.css";

export type GameCharacterSize = "sm" | "md" | "lg" | "hero";

type GameCharacterProps = {
  variant: GameCharacterVariant;
  mood: GameCharacterMood;
  size?: GameCharacterSize;
  className?: string;
};

export function GameCharacter({
  variant,
  mood,
  size = "md",
  className = "",
}: GameCharacterProps) {
  const classes = [
    "game-character",
    `game-character--${size}`,
    `game-character--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={CHARACTER_AVATARS[variant][mood]}
      alt=""
      aria-hidden="true"
      className={classes}
    />
  );
}
