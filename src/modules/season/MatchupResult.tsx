import type { Character, EventResult } from "../game/game.types";
import { strings } from "../../shared/i18n/strings";
import { Avatar } from "../../shared/components/Avatar";
import "./MatchupResult.css";

type MatchupResultProps = {
  result: EventResult;
  playerName: string;
  rivalName: string;
};

function DuelSide({ character }: { character: Character }) {
  return (
    <div className="duel__side">
      <Avatar imageUrl={character.imageUrl} name={character.name} size="sm" />
      <span className="duel__name">
        {character.isStar && <span aria-hidden="true">⭐ </span>}
        {character.name}
      </span>
      <span className="duel__category">{strings.draft.categories[character.category]}</span>
    </div>
  );
}

export function MatchupResult({ result, playerName, rivalName }: MatchupResultProps) {
  const playerWins = result.winner === "player";
  const rivalWins = result.winner === "rival";

  const duelResultLabel =
    result.winner === "draw"
      ? strings.season.duel.drawLabel
      : strings.season.duel.winnerLabel(
          result.winner === "player" ? result.playerCharacter.name : result.rivalCharacter.name,
        );

  return (
    <div className="matchup-block">
      <div className="duel">
        <DuelSide character={result.playerCharacter} />
        <span className="duel__vs">{strings.season.duel.vs}</span>
        <DuelSide character={result.rivalCharacter} />
      </div>
      <p className="duel__result">{duelResultLabel}</p>
      <div className="matchup">
        <div className={`matchup__side ${playerWins ? "matchup__side--winner" : ""}`}>
          <span className="matchup__name">{playerName}</span>
          <span className="matchup__score">{result.playerScore}</span>
        </div>
        <span className="matchup__vs">{strings.season.vs}</span>
        <div
          className={`matchup__side matchup__side--rival ${rivalWins ? "matchup__side--rival-winner" : ""}`}
        >
          <span className="matchup__score">{result.rivalScore}</span>
          <span className="matchup__name">{rivalName}</span>
        </div>
      </div>
    </div>
  );
}
