import boazinhaFeliz from "../../assets/characters/boazinha_feliz.png";
import boazinhaBrava from "../../assets/characters/boazinha_brava.png";
import malvadaFeliz from "../../assets/characters/malvada_feliz.png";
import malvadaBrava from "../../assets/characters/malvada_brava.png";

export type GameCharacterVariant = "player" | "rival";
export type GameCharacterMood = "happy" | "angry";

export const CHARACTER_AVATARS: Record<
  GameCharacterVariant,
  Record<GameCharacterMood, string>
> = {
  player: {
    happy: boazinhaFeliz,
    angry: boazinhaBrava,
  },
  rival: {
    happy: malvadaFeliz,
    angry: malvadaBrava,
  },
};
