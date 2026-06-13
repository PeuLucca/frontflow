import type { EventResult, SeasonEvent } from "../game/game.types";
import "./SeasonTimeline.css";

type SeasonTimelineProps = {
  events: SeasonEvent[];
  results: EventResult[];
  currentIndex: number;
};

export function SeasonTimeline({ events, results, currentIndex }: SeasonTimelineProps) {
  return (
    <ol className="season-timeline">
      {events.map((event, index) => {
        const result = results[index];
        const isCurrent = index === currentIndex;
        const isDone = index < currentIndex && Boolean(result);

        const stateClass = isCurrent ? "current" : isDone ? `done-${result!.winner}` : "upcoming";

        return (
          <li
            key={event.id}
            className={`season-timeline__item season-timeline__item--${stateClass}`}
            title={event.name}
          >
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}
