import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ compact = false }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className={`site-header${compact ? " site-header--compact" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Alufurn catalogue library home">
          {logoFailed ? (
            <span className="brand__fallback">ALUFURN</span>
          ) : (
            <img src="/logo.png" alt="Alufurn" width="1353" height="134" onError={() => setLogoFailed(true)} />
          )}
        </Link>

        {!compact && (
          <nav className="site-nav" aria-label="Main navigation">
            <Link to="/" aria-current="page">Catalogues</Link>
            <a href="https://alufurn.com" target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a>
          </nav>
        )}
      </div>
    </header>
  );
}
