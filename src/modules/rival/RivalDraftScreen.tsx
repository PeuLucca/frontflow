import type { GameState } from "../game/game.types";
import { Layout } from "../../shared/components/Layout";
import { Card } from "../../shared/components/Card";
import { Avatar } from "../../shared/components/Avatar";
import { Button } from "../../shared/components/Button";
import { AgencyRoster } from "../agency/AgencyRoster";
import { getRivalDraftHighlights } from "./rival.ai";
import { strings } from "../../shared/i18n/strings";
import "./RivalDraftScreen.css";

type RivalDraftScreenProps = {
  state: GameState;
  onContinue: () => void;
};

export function RivalDraftScreen({ state, onContinue }: RivalDraftScreenProps) {
  const highlights = getRivalDraftHighlights(state.rivalRoster, state.events);
  const hiddenCount = Math.max(0, state.rivalRoster.length - highlights.length);

  return (
    <Layout>
      <div className="rival-draft">
        <h1 className="rival-draft__title">{strings.rivalDraft.title}</h1>
        <p className="rival-draft__subtitle">
          {strings.rivalDraft.subtitle(state.rivalAgency.owner)}
        </p>

        <Card className="rival-draft__section rival-draft__section--player">
          <h2 className="rival-draft__section-title rival-draft__section-title--player">
            {strings.rivalDraft.playerRosterTitle}
          </h2>
          <p className="rival-draft__section-subtitle">
            {strings.rivalDraft.playerRosterSubtitle(state.playerRoster.length)}
          </p>
          <AgencyRoster roster={state.playerRoster} accent="primary" />
        </Card>

        <Card className="rival-draft__section rival-draft__section--rival">
          <h2 className="rival-draft__section-title rival-draft__section-title--rival">
            {strings.rivalDraft.rivalRosterTitle}
          </h2>
          <p className="rival-draft__section-subtitle">
            {strings.rivalDraft.rivalRosterSubtitle}
          </p>
          <div className="rival-draft__picks">
            {highlights.map(({ character, variantIndex }) => (
              <div key={character.id} className="rival-draft__pick">
                <Avatar imageUrl={character.imageUrl} name={character.name} size="sm" />
                <div className="rival-draft__pick-text">
                  <h3 className="rival-draft__pick-name">{character.name}</h3>
                  <p className="rival-draft__pick-commentary">
                    {strings.rivalDraft.pickCommentary(character.name, variantIndex)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {hiddenCount > 0 && (
            <p className="rival-draft__hidden">{strings.rivalDraft.hiddenCount(hiddenCount)}</p>
          )}
        </Card>

        <Button onClick={onContinue} fullWidth>
          {strings.rivalDraft.continueButton}
        </Button>
      </div>
    </Layout>
  );
}
