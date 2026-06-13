import type { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  children: ReactNode;
  highlight?: boolean;
  className?: string;
};

export function Card({ children, highlight = false, className = "" }: CardProps) {
  const classNames = ["card", highlight ? "card--highlight" : "", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}
