import "./DraftProgress.css";

type DraftProgressProps = {
  current: number;
  total: number;
};

export function DraftProgress({ current, total }: DraftProgressProps) {
  const percent = Math.min(100, (current / total) * 100);

  return (
    <div className="draft-progress">
      <p className="draft-progress__label">
        Round {current} of {total}
      </p>
      <div className="draft-progress__track">
        <div
          className="draft-progress__fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
