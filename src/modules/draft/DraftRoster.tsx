import type { Character } from "../game/game.types";
import { Avatar } from "../../shared/components/Avatar";
import { strings } from "../../shared/i18n/strings";
import "./DraftRoster.css";

type DraftRosterProps = {
  roster: Character[];
  total: number;
};

export function DraftRoster({ roster, total }: DraftRosterProps) {
  return (
    <div className="draft-roster">
      <p className="draft-roster__label">
        {strings.draft.rosterLabel(roster.length, total)}
      </p>
      {roster.length > 0 && (
        <div className="draft-roster__chips">
          {roster.map((character) => (
            <div key={character.id} className="draft-roster__chip">
              <Avatar imageUrl={character.imageUrl} name={character.name} size="sm" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
