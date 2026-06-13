import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { Card } from "../../shared/components/Card";
import { AgencyRoster } from "../agency/AgencyRoster";
import { strings } from "../../shared/i18n/strings";
import "./ResultScreen.css";

type ResultScreenProps = {
  state: GameState;
  onRestart: () => void;
};

export function ResultScreen({ state, onRestart }: ResultScreenProps) {
  const { finalResult, playerAgency, rivalAgency } = state;

  if (!finalResult) return null;

  const headline = strings.result.headline(
    finalResult.winner,
    playerAgency.name,
    rivalAgency.name,
  );

  const subline = strings.result.subline(
    finalResult.winner,
    rivalAgency.owner,
  );

  return (
    <Layout>
      <div className="result">
        <Card highlight className="result__champion">
          <p className="result__eyebrow">{strings.result.eyebrow}</p>
          <h1 className="result__headline">{headline}</h1>
          <p className="result__subline">{subline}</p>
          <p className="result__score">
            {strings.result.score(
              finalResult.playerWins,
              finalResult.rivalWins,
              finalResult.draws,
            )}
          </p>
        </Card>

        <AgencyRoster
          title={playerAgency.name}
          roster={state.playerRoster}
          accent="primary"
        />
        <AgencyRoster
          title={rivalAgency.name}
          roster={state.rivalRoster}
          accent="rival"
        />

        <Button onClick={onRestart} fullWidth>
          {strings.result.restartButton}
        </Button>
      </div>
    </Layout>
  );
}
