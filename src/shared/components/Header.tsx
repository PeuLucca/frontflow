import { strings } from "../i18n/strings";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <svg
          className="header__mark"
          viewBox="0 0 100 100"
          aria-hidden="true"
          focusable="false"
        >
          <g fill="currentColor">
            <g transform="translate(0,22) scale(0.78)">
              <rect x="0" y="0" width="20" height="100" />
              <rect x="0" y="0" width="46" height="20" />
              <rect x="0" y="38" width="38" height="20" />
              <rect x="52" y="0" width="20" height="100" />
              <path fillRule="evenodd" d="M52,0 H100 V48 H94 V18 H52 Z" />
              <polygon points="76,48 96,48 100,100 80,100" />
            </g>
            <path d="M88,1 90.3,9.7 99,12 90.3,14.3 88,23 85.7,14.3 77,12 85.7,9.7 Z" />
          </g>
        </svg>
        <span className="header__wordmark">{strings.header.wordmark}</span>
      </div>
      <p className="header__tagline">{strings.header.tagline}</p>
    </header>
  );
}
