import { useState } from "react";
import type { GameState } from "../game/game.types";
import { getDraftProgress } from "../game/game.selectors";
import { Layout } from "../../shared/components/Layout";
import { DraftProgress } from "./DraftProgress";
import { DraftRoster } from "./DraftRoster";
import { DraftCard } from "./DraftCard";
import { MirandaTaunt } from "../../shared/components/MirandaTaunt";
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
  const [mirandaMessage, setMirandaMessage] = useState(() => strings.miranda.draftReaction());

  const handleChoose = (characterId: string) => {
    if (selectedId) return;
    setSelectedId(characterId);

    const chosen = state.currentOptions.find((character) => character.id === characterId);
    const hasStarOption = state.currentOptions.some((character) => character.isStar);

    setMirandaMessage(
      chosen?.isStar
        ? strings.miranda.starPickReaction()
        : hasStarOption
          ? strings.miranda.starAppearsReaction()
          : strings.miranda.draftReaction(),
    );

    window.setTimeout(() => {
      setSelectedId(null);
      onPick(characterId);
    }, SELECTION_DELAY_MS);
  };

  return (
    <Layout>
      <div className="draft">
        <DraftProgress current={current} total={total} />
        <DraftRoster roster={state.playerRoster} total={total} />
        <h2 className="draft__title">{strings.draft.title(state.playerAgency.name)}</h2>
        <MirandaTaunt message={mirandaMessage} />
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
