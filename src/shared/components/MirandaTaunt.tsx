import { GameCharacter } from "./GameCharacter";
import "./MirandaTaunt.css";

type MirandaTauntProps = {
  message: string;
};

export function MirandaTaunt({ message }: MirandaTauntProps) {
  return (
    <div className="miranda-taunt">
      <div className="miranda-taunt__bubble">
        <p className="miranda-taunt__text">{message}</p>
      </div>
      <div className="miranda-taunt__avatar">
        <GameCharacter variant="rival" mood="happy" size="sm" />
      </div>
    </div>
  );
}
