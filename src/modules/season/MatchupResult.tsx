import type { EventResult } from "../game/game.types";
import "./MatchupResult.css";

type MatchupResultProps = {
  result: EventResult;
  playerName: string;
  rivalName: string;
};

export function MatchupResult({ result, playerName, rivalName }: MatchupResultProps) {
  const playerWins = result.winner === "player";
  const rivalWins = result.winner === "rival";

  return (
    <div className="matchup">
      <div className={`matchup__side ${playerWins ? "matchup__side--winner" : ""}`}>
        <span className="matchup__name">{playerName}</span>
        <span className="matchup__score">{result.playerScore}</span>
      </div>
      <span className="matchup__vs">vs</span>
      <div
        className={`matchup__side matchup__side--rival ${rivalWins ? "matchup__side--rival-winner" : ""}`}
      >
        <span className="matchup__score">{result.rivalScore}</span>
        <span className="matchup__name">{rivalName}</span>
      </div>
    </div>
  );
}
