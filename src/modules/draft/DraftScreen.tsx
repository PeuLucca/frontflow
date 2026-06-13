import { useState } from "react";
import type { GameState } from "../game/game.types";
import { getDraftProgress } from "../game/game.selectors";
import { Layout } from "../../shared/components/Layout";
import { DraftProgress } from "./DraftProgress";
import { DraftRoster } from "./DraftRoster";
import { DraftCard } from "./DraftCard";
import { strings } from "../../shared/i18n/strings";
import "./DraftScreen.css";

const SELECTION_DELAY_MS = 220;

type DraftScreenProps = {
  state: GameState;
  onPick: (characterId: string) => void;
};

export function DraftScreen({ state, onPick }: DraftScreenProps) {
  const { current, total } = getDraftProgress(state);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleChoose = (characterId: string) => {
    if (selectedId) return;
    setSelectedId(characterId);
    window.setTimeout(() => {
      setSelectedId(null);
      onPick(characterId);
    }, SELECTION_DELAY_MS);
  };

  return (
    <Layout>
      <div className="draft">
        <DraftProgress current={current} total={total} />
        <DraftRoster
          agencyName={state.playerAgency.name}
          roster={state.playerRoster}
          total={total}
        />
        <h2 className="draft__title">{strings.draft.title(state.playerAgency.name)}</h2>
        <div className="draft__options">
          {state.currentOptions.map((character) => (
            <DraftCard
              key={character.id}
              character={character}
              onChoose={() => handleChoose(character.id)}
              selected={selectedId === character.id}
              dimmed={selectedId !== null && selectedId !== character.id}
              disabled={selectedId !== null}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
