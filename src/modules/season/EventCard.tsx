import type { EventResult, SeasonEvent } from "../game/game.types";
import { Card } from "../../shared/components/Card";
import { MatchupResult } from "./MatchupResult";
import { strings } from "../../shared/i18n/strings";
import "./EventCard.css";

type EventCardProps = {
  event: SeasonEvent;
  result: EventResult;
  playerName: string;
  rivalName: string;
  rivalOwner: string;
};

export function EventCard({
  event,
  result,
  playerName,
  rivalName,
  rivalOwner,
}: EventCardProps) {
  return (
    <Card className="event-card">
      <h3 className="event-card__name">{event.name}</h3>
      <span className={`event-card__badge event-card__badge--${result.winner}`}>
        {strings.season.outcomeLabel[result.winner]}
      </span>
      <MatchupResult result={result} playerName={playerName} rivalName={rivalName} />
      <p className="event-card__narrative">
        {strings.season.narrative(result.narrativeKey, event.type, {
          playerName,
          rivalName,
          rivalOwner,
        })}
      </p>
    </Card>
  );
}
