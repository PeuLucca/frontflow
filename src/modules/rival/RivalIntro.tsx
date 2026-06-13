import type { Agency } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import "./RivalIntro.css";

type RivalIntroProps = {
  agency: Agency;
};

export function RivalIntro({ agency }: RivalIntroProps) {
  const traits = agency.tagline
    .split(".")
    .map((trait) => trait.trim())
    .filter(Boolean);

  return (
    <Card className="card rival-intro">
      <p className="rival-intro__eyebrow">Your Rival</p>
      <h2 className="rival-intro__owner">{agency.owner}</h2>
      <p className="rival-intro__role">CEO of {agency.name}</p>
      <div className="rival-intro__traits">
        {traits.map((trait) => (
          <span key={trait} className="rival-intro__trait">
            {trait}.
          </span>
        ))}
      </div>
      <p className="rival-intro__description">{agency.description}</p>
    </Card>
  );
}
