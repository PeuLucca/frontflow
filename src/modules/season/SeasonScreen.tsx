import { useState } from "react";
import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Button } from "../../shared/components/Button";
import { EventCard } from "./EventCard";
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
        <h1 className="season__title">The Season</h1>
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
            See Final Result
          </Button>
        ) : (
          <Button onClick={() => setRevealed((value) => value + 1)} fullWidth>
            Next Event
          </Button>
        )}
      </div>
    </Layout>
  );
}
