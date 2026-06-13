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
};

export function EventCard({ event, result, playerName, rivalName }: EventCardProps) {
  return (
    <Card className="event-card">
      <h3 className="event-card__name">{event.name}</h3>
      <MatchupResult result={result} playerName={playerName} rivalName={rivalName} />
      <p className="event-card__narrative">
        {strings.season.narrative(result.narrativeKey, {
          eventName: event.name,
          playerName,
          rivalName,
        })}
      </p>
    </Card>
  );
}
