import { useState } from "react";
import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { EventCard } from "./EventCard";
import { strings } from "../../shared/i18n/strings";
import "./SeasonScreen.css";

type SeasonScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function SeasonScreen({ state, onContinue }: SeasonScreenProps) {
  const [revealed, setRevealed] = useState(1);
  const total = state.events.length;
  const allRevealed = revealed >= total;
  const visibleResults = state.eventResults.slice(0, revealed);

  return (
    <Layout>
      <div className="season">
        <h1 className="season__title">{strings.season.title}</h1>
        <div className="season__events">
          {visibleResults.map((result, index) => (
            <EventCard
              key={result.eventId}
              event={state.events[index]}
              result={result}
              playerName={state.playerAgency.name}
              rivalName={state.rivalAgency.name}
            />
          ))}
        </div>
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
