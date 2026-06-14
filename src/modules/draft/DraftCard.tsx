import { useState } from "react";
import type { Character } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { Avatar } from "../../shared/components/Avatar";
import { Button } from "../../shared/components/Button";
import { ATTRIBUTE_KEYS, getLowestAttribute, getTopAttributes } from "../../shared/utils/attributes";
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

  const [scoresOpen, setScoresOpen] = useState(false);

  const strongAttributes = getTopAttributes(character.attributes, STRENGTH_COUNT);
  const weakAttribute = getLowestAttribute(character.attributes);

  return (
    <Card className={className}>
      <Avatar imageUrl={character.imageUrl} name={character.name} size="lg" />
      <h3 className="draft-card__name">{character.name}</h3>
      <p className="draft-card__category">{strings.draft.categories[character.category]}</p>
      <button
        type="button"
        className="draft-card__toggle"
        onClick={() => setScoresOpen((open) => !open)}
        aria-expanded={scoresOpen}
      >
        <span>{strings.draft.toggleScores(character.name, scoresOpen)}</span>
        <span className={`draft-card__toggle-icon ${scoresOpen ? "draft-card__toggle-icon--open" : ""}`}>
          ▾
        </span>
      </button>
      {scoresOpen && (
        <div className="draft-card__attributes">
          {ATTRIBUTE_KEYS.map((key) => {
            const value = character.attributes[key];
            const rowClass = [
              "draft-card__attr",
              strongAttributes.includes(key) ? "draft-card__attr--strong" : "",
              key === weakAttribute ? "draft-card__attr--weak" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={key} className={rowClass}>
                <span className="draft-card__attr-label">{strings.draft.attributes[key]}</span>
                <span className="draft-card__attr-bar">
                  <span className="draft-card__attr-bar-fill" style={{ width: `${value}%` }} />
                </span>
                <span className="draft-card__attr-value">{(value / 10).toFixed(1)}</span>
              </div>
            );
          })}
        </div>
      )}
      <Button onClick={onChoose} fullWidth disabled={disabled}>
        {strings.draft.chooseButton}
      </Button>
    </Card>
  );
}
