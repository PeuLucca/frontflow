import type { ReactNode } from "react";
import { Header } from "./Header";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
};

export function Layout({ children, showHeader = true }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout__content">
        {showHeader && <Header />}
        {children}
      </div>
    </div>
  );
}
