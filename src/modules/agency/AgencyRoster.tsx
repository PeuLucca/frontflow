import type { Character } from "../game/game.types";
import { Avatar } from "../../shared/components/Avatar";
import "./AgencyRoster.css";

type AgencyRosterProps = {
  title: string;
  roster: Character[];
  accent?: "primary" | "rival";
};

export function AgencyRoster({ title, roster, accent = "primary" }: AgencyRosterProps) {
  return (
    <div className="agency-roster">
      <h3 className={`agency-roster__title agency-roster__title--${accent}`}>
        {title}
      </h3>
      <div className="agency-roster__grid">
        {roster.map((character) => (
          <div key={character.id} className="agency-roster__item">
            <Avatar imageUrl={character.imageUrl} name={character.name} size="sm" />
            <span className="agency-roster__name">{character.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
