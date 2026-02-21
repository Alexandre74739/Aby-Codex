import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-line" />

      <div className="footer-inner container">
        <div className="footer-left-group">
          <div className="footer-brand">
            <Link to="/" className="header-logo footer-logo-override">
              <h1 className="logo-title">ABY<span>CODEX</span></h1>
              <span className="logo-tagline">TRANSMISSION : FIN DE SESSION</span>
            </Link>
            <p className="footer-tagline">
              Décrypter l'horreur.<br />
              <em>Comprendre l'humain.</em>
            </p>
          </div>

          <nav className="footer-nav">
            <span className="nav-title">Exploration</span>
            <div className="nav-links">
              <Link to="/">Nexus</Link>
              <Link to="/Decryptage">Decryptage</Link>
              <Link to="/codex">Codex</Link>
              <Link to="/diagnostic">Diagnostic</Link>
            </div>
          </nav>
        </div>

        <div className="footer-right-group">
          <div className="footer-signal">
            <span className="nav-title">Signal</span>
            <p className="signal-text">
              Recevoir les nouvelles transmissions
            </p>
            <div className="signal-input">
              <input type="email" placeholder="votre@email.com" />
              <button>→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="copyright">
          © 2026 ABY-CODEX — TOUS DROITS RÉSERVÉS
        </span>
        <span className="version">
          <span className="status-dot" />
          SYSTÈME EN LIGNE — v0.1.0
        </span>
      </div>
    </footer>
  );
}