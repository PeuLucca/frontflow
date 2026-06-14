import type { TitleRecord } from "../../shared/utils/titles";
import { Card } from "../../shared/components/Card";
import { strings } from "../../shared/i18n/strings";
import "./TitlesBoard.css";

type TitlesBoardProps = {
  playerName: string;
  rivalName: string;
  titles: TitleRecord;
};

export function TitlesBoard({ playerName, rivalName, titles }: TitlesBoardProps) {
  return (
    <Card className="titles-board">
      <p className="titles-board__eyebrow">{strings.result.titles.eyebrow}</p>
      <div className="titles-board__row">
        <div className="titles-board__side">
          <span className="titles-board__name">{playerName}</span>
          <span className="titles-board__value">{strings.result.titles.count(titles.player)}</span>
        </div>
        <span className="titles-board__crown" aria-hidden="true">
          👑
        </span>
        <div className="titles-board__side titles-board__side--rival">
          <span className="titles-board__name">{rivalName}</span>
          <span className="titles-board__value">{strings.result.titles.count(titles.rival)}</span>
        </div>
      </div>
      <p className="titles-board__caption">{strings.result.titles.caption}</p>
    </Card>
  );
}
