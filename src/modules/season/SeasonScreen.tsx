import { useState } from "react";
import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { EventCard } from "./EventCard";
import { SeasonTimeline } from "./SeasonTimeline";
import { strings } from "../../shared/i18n/strings";
import "./SeasonScreen.css";

type SeasonScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function SeasonScreen({ state, onContinue }: SeasonScreenProps) {
  const [revealed, setRevealed] = useState(1);
  const total = state.events.length;
  const currentIndex = revealed - 1;
  const currentEvent = state.events[currentIndex];
  const currentResult = state.eventResults[currentIndex];
  const allRevealed = revealed >= total;

  return (
    <Layout>
      <div className="season">
        <h1 className="season__title">{strings.season.title}</h1>
        <p className="season__progress">{strings.season.progress(revealed, total)}</p>
        <SeasonTimeline
          events={state.events}
          results={state.eventResults}
          currentIndex={currentIndex}
        />
        <EventCard
          key={currentResult.eventId}
          event={currentEvent}
          result={currentResult}
          playerName={state.playerAgency.name}
          rivalName={state.rivalAgency.name}
          rivalOwner={state.rivalAgency.owner}
        />
        {allRevealed ? (
          <Button onClick={onContinue} fullWidth>
            {strings.season.finalResultButton}
          </Button>
        ) : (
          <Button onClick={() => setRevealed((value) => value + 1)} fullWidth>
            {strings.season.nextEventButton}
          </Button>
        )}
      </div>
    </Layout>
  );
}
