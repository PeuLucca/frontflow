import type { Character, CharacterCategory } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { Avatar } from "../../shared/components/Avatar";
import { Button } from "../../shared/components/Button";
import "./DraftCard.css";

const CATEGORY_LABELS: Record<CharacterCategory, string> = {
  wag: "WAG",
  model: "Model",
  influencer: "Influencer",
  actress: "Actress",
  rising_star: "Rising Star",
  fashion_icon: "Fashion Icon",
};

type DraftCardProps = {
  character: Character;
  onChoose: () => void;
};

export function DraftCard({ character, onChoose }: DraftCardProps) {
  return (
    <Card className="draft-card">
      <Avatar imageUrl={character.imageUrl} name={character.name} size="lg" />
      <h3 className="draft-card__name">{character.name}</h3>
      <p className="draft-card__category">{CATEGORY_LABELS[character.category]}</p>
      <Button onClick={onChoose} fullWidth>
        Choose
      </Button>
    </Card>
  );
}
