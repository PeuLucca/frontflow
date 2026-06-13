import type { GameState } from "../game/game.types";
import { getDraftProgress } from "../game/game.selectors";
import { Layout } from "../../shared/components/Layout";
import { DraftProgress } from "./DraftProgress";
import { DraftCard } from "./DraftCard";
import { strings } from "../../shared/i18n/strings";
import "./DraftScreen.css";

type DraftScreenProps = {
  state: GameState;
  onPick: (characterId: string) => void;
};

export function DraftScreen({ state, onPick }: DraftScreenProps) {
  const { current, total } = getDraftProgress(state);

  return (
    <Layout>
      <div className="draft">
        <DraftProgress current={current} total={total} />
        <h2 className="draft__title">{strings.draft.title(state.playerAgency.name)}</h2>
        <div className="draft__options">
          {state.currentOptions.map((character) => (
            <DraftCard
              key={character.id}
              character={character}
              onChoose={() => onPick(character.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
