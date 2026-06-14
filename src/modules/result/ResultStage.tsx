import type { EventOutcome } from "../game/game.types";
import { GameCharacter } from "../../shared/components/GameCharacter";
import { Confetti } from "../../shared/components/Confetti";
import { resolveCharacterMoods, resolveFeaturedVariant } from "../../shared/utils/characterMood";
import "./ResultStage.css";

type ResultStageProps = {
  winner: EventOutcome;
};

export function ResultStage({ winner }: ResultStageProps) {
  const moods = resolveCharacterMoods(winner);
  const featured = resolveFeaturedVariant(winner);

  if (!featured) {
    return (
      <div className="result-stage result-stage--draw">
        <GameCharacter variant="player" mood={moods.player} size="lg" />
        <GameCharacter variant="rival" mood={moods.rival} size="lg" />
      </div>
    );
  }

  const runnerUp = featured === "player" ? "rival" : "player";

  return (
    <div className="result-stage">
      <Confetti />
      <GameCharacter
        variant={featured}
        mood={moods[featured]}
        size="hero"
        className="result-stage__hero"
      />
      <GameCharacter
        variant={runnerUp}
        mood={moods[runnerUp]}
        size="lg"
        className="result-stage__runner-up"
      />
    </div>
  );
}
