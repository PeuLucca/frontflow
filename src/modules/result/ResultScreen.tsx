import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { Card } from "../../shared/components/Card";
import { AgencyRoster } from "../agency/AgencyRoster";
import "./ResultScreen.css";

type ResultScreenProps = {
  state: GameState;
  onRestart: () => void;
};

export function ResultScreen({ state, onRestart }: ResultScreenProps) {
  const { finalResult, playerAgency, rivalAgency } = state;

  if (!finalResult) return null;

  const headline =
    finalResult.winner === "player"
      ? `${playerAgency.name} Wins the Season`
      : finalResult.winner === "rival"
        ? `${rivalAgency.name} Wins the Season`
        : "The Season Ends in a Tie";

  const subline =
    finalResult.winner === "player"
      ? "The cameras are on you now."
      : finalResult.winner === "rival"
        ? `${rivalAgency.owner} smiles. For now.`
        : "Neither agency could claim the crown.";

  return (
    <Layout>
      <div className="result">
        <Card highlight className="result__champion">
          <p className="result__eyebrow">Final Result</p>
          <h1 className="result__headline">{headline}</h1>
          <p className="result__subline">{subline}</p>
          <p className="result__score">
            {finalResult.playerWins} - {finalResult.rivalWins}
            {finalResult.draws > 0 ? ` (${finalResult.draws} draws)` : ""}
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
          Play Again
        </Button>
      </div>
    </Layout>
  );
}
