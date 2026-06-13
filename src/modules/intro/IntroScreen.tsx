import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { AgencyIntro } from "../agency/AgencyIntro";
import { RivalIntro } from "../rival/RivalIntro";
import "./IntroScreen.css";

type IntroScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function IntroScreen({ state, onContinue }: IntroScreenProps) {
  return (
    <Layout>
      <div className="intro">
        <h1 className="intro__title">The Season Begins</h1>
        <p className="intro__story">
          {`${state.rivalAgency.name} has ruled the runways for a decade. ${state.playerAgency.name} is ready to change that.`}
        </p>
        <AgencyIntro agency={state.playerAgency} />
        <RivalIntro agency={state.rivalAgency} />
        <Button onClick={onContinue} fullWidth>
          Begin Draft
        </Button>
      </div>
    </Layout>
  );
}
