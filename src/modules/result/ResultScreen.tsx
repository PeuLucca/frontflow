import { useEffect, useRef, useState } from "react";
import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { Card } from "../../shared/components/Card";
import { AgencyRoster } from "../agency/AgencyRoster";
import { ResultStage } from "./ResultStage";
import { TitlesBoard } from "./TitlesBoard";
import { getTitles, recordSeasonResult } from "../../shared/utils/titles";
import { strings } from "../../shared/i18n/strings";
import "./ResultScreen.css";

const SHARE_FEEDBACK_DURATION_MS = 2000;

type ResultScreenProps = {
  state: GameState;
  onRestart: () => void;
};

export function ResultScreen({ state, onRestart }: ResultScreenProps) {
  const { finalResult, playerAgency, rivalAgency } = state;
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);
  const [titles, setTitles] = useState(getTitles);
  const hasRecordedRef = useRef(false);

  useEffect(() => {
    if (!finalResult || hasRecordedRef.current) return;
    hasRecordedRef.current = true;
    setTitles(recordSeasonResult(finalResult.winner));
  }, [finalResult]);

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

  const narrative = strings.result.narrative(finalResult.winner, {
    playerName: playerAgency.name,
    rivalName: rivalAgency.name,
    rivalOwner: rivalAgency.owner,
  });

  const scoreText = strings.result.score(
    finalResult.playerWins,
    finalResult.rivalWins,
    finalResult.draws,
  );

  const titlesLine = strings.result.titlesShareLine(
    playerAgency.name,
    titles.player,
    rivalAgency.name,
    titles.rival,
  );

  const handleShare = async () => {
    const shareText = strings.result.shareText(headline, scoreText, narrative, titlesLine);
    const url = window.location.href;
    const fullMessage = `${shareText}\n\n${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: strings.result.shareTitle, text: fullMessage });
      } catch {
        // user cancelled the share sheet - no action needed
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(fullMessage);
      setShowCopiedFeedback(true);
      window.setTimeout(() => setShowCopiedFeedback(false), SHARE_FEEDBACK_DURATION_MS);
    } catch {
      // clipboard unavailable - no fallback UI possible
    }
  };

  return (
    <Layout>
      <div className="result">
        <ResultStage winner={finalResult.winner} />
        <Card highlight className="result__champion">
          <p className="result__eyebrow">{strings.result.eyebrow}</p>
          <h1 className="result__headline">{headline}</h1>
          <p className="result__subline">{subline}</p>
          <p className="result__score">{scoreText}</p>
          <p className="result__narrative">{narrative}</p>
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

        <TitlesBoard
          playerName={playerAgency.name}
          rivalName={rivalAgency.name}
          titles={titles}
        />

        <div className="result__share">
          <Button onClick={handleShare} variant="secondary" fullWidth>
            {strings.result.shareButton}
          </Button>
          {showCopiedFeedback && (
            <p className="result__share-feedback">{strings.result.shareCopied}</p>
          )}
        </div>

        <Button onClick={onRestart} fullWidth>
          {strings.result.restartButton}
        </Button>

        <p className="result__credits">{strings.common.credits}</p>
      </div>
    </Layout>
  );
}
