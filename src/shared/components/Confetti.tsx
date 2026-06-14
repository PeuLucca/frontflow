import "./Confetti.css";

const PIECE_COUNT = 16;
const PIECES = Array.from({ length: PIECE_COUNT }, (_, index) => index);

export function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {PIECES.map((index) => (
        <span key={index} className="confetti__piece" />
      ))}
    </div>
  );
}
