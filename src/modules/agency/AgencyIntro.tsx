import type { Agency } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { strings } from "../../shared/i18n/strings";
import "./AgencyIntro.css";

type AgencyIntroProps = {
  agency: Agency;
};

export function AgencyIntro({ agency }: AgencyIntroProps) {
  return (
    <Card className="agency-intro">
      <p className="agency-intro__eyebrow">{strings.agencyIntro.eyebrow}</p>
      <h2 className="agency-intro__name">{agency.name}</h2>
      <p className="agency-intro__tagline">{agency.tagline}</p>
      <p className="agency-intro__description">{agency.description}</p>
      <p className="agency-intro__debut">
        {strings.agencyIntro.debutLine(agency.name)}
      </p>
    </Card>
  );
}
