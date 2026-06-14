import { strings } from "../i18n/strings";
import "./StarBadge.css";

export function StarBadge() {
  return (
    <span className="star-badge" role="img" aria-label={strings.draft.starBadge}>
      ⭐
    </span>
  );
}
