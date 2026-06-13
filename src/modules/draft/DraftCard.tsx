import type { Character } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { Avatar } from "../../shared/components/Avatar";
import { Button } from "../../shared/components/Button";
import { strings } from "../../shared/i18n/strings";
import "./DraftCard.css";

type DraftCardProps = {
  character: Character;
  onChoose: () => void;
  selected?: boolean;
  dimmed?: boolean;
  disabled?: boolean;
};

export function DraftCard({
  character,
  onChoose,
  selected = false,
  dimmed = false,
  disabled = false,
}: DraftCardProps) {
  const className = [
    "draft-card",
    selected ? "draft-card--selected" : "",
    dimmed ? "draft-card--dimmed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Card className={className}>
      <Avatar imageUrl={character.imageUrl} name={character.name} size="lg" />
      <h3 className="draft-card__name">{character.name}</h3>
      <p className="draft-card__category">{strings.draft.categories[character.category]}</p>
      <Button onClick={onChoose} fullWidth disabled={disabled}>
        {strings.draft.chooseButton}
      </Button>
    </Card>
  );
}
