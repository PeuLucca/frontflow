import { useEffect, useRef, useState } from "react";
import { GameCharacter } from "./GameCharacter";
import { strings } from "../i18n/strings";
import "./MirandaTaunt.css";

type MirandaTauntProps = {
  message: string;
};

export function MirandaTaunt({ message }: MirandaTauntProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [jump, setJump] = useState(false);
  const previousMessage = useRef(message);

  useEffect(() => {
    if (message === previousMessage.current) return;
    previousMessage.current = message;
    if (collapsed) {
      setJump(true);
    }
  }, [message, collapsed]);

  return (
    <div className="miranda-taunt">
      <div
        className={`miranda-taunt__bubble ${collapsed ? "miranda-taunt__bubble--collapsed" : ""}`}
        aria-hidden={collapsed}
      >
        <p className="miranda-taunt__text">{message}</p>
      </div>
      <button
        type="button"
        className={`miranda-taunt__avatar ${jump ? "miranda-taunt__avatar--jump" : ""}`}
        onClick={() => setCollapsed((value) => !value)}
        onAnimationEnd={() => setJump(false)}
        aria-label={strings.miranda.toggleBubble(collapsed)}
        aria-expanded={!collapsed}
      >
        <GameCharacter variant="rival" mood="happy" size="sm" />
      </button>
    </div>
  );
}
