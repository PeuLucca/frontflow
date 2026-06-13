import type { ReactNode } from "react";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout__content">{children}</div>
    </div>
  );
}
