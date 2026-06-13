import type { Character } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { Avatar } from "../../shared/components/Avatar";
import { Button } from "../../shared/components/Button";
import { getLowestAttribute, getTopAttributes } from "../../shared/utils/attributes";
import { strings } from "../../shared/i18n/strings";
import "./DraftCard.css";

const STRENGTH_COUNT = 2;

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

  const strengths = getTopAttributes(character.attributes, STRENGTH_COUNT);
  const weakness = getLowestAttribute(character.attributes);

  return (
    <Card className={className}>
      <Avatar imageUrl={character.imageUrl} name={character.name} size="lg" />
      <h3 className="draft-card__name">{character.name}</h3>
      <p className="draft-card__category">{strings.draft.categories[character.category]}</p>
      <div className="draft-card__insights">
        <p className="draft-card__insight draft-card__insight--strong">
          <span className="draft-card__insight-label">{strings.draft.strengthsLabel}</span>
          <span className="draft-card__insight-value">
            {strengths.map((key) => strings.draft.attributes[key]).join(" · ")}
          </span>
        </p>
        <p className="draft-card__insight draft-card__insight--weak">
          <span className="draft-card__insight-label">{strings.draft.weaknessLabel}</span>
          <span className="draft-card__insight-value">
            {strings.draft.attributes[weakness]}
          </span>
        </p>
      </div>
      <Button onClick={onChoose} fullWidth disabled={disabled}>
        {strings.draft.chooseButton}
      </Button>
    </Card>
  );
}
