import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { AgencyIntro } from "../agency/AgencyIntro";
import { RivalIntro } from "../rival/RivalIntro";
import { strings } from "../../shared/i18n/strings";
import "./IntroScreen.css";

type IntroScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function IntroScreen({ state, onContinue }: IntroScreenProps) {
  return (
    <Layout>
      <div className="intro">
        <h1 className="intro__title">{strings.intro.title}</h1>
        <p className="intro__story">
          {strings.intro.story(
            state.rivalAgency.name,
            state.rivalAgency.owner,
            state.playerAgency.name,
          )}
        </p>
        <AgencyIntro agency={state.playerAgency} />
        <RivalIntro agency={state.rivalAgency} />
        <Button onClick={onContinue} fullWidth>
          {strings.intro.continueButton}
        </Button>
      </div>
    </Layout>
  );
}
