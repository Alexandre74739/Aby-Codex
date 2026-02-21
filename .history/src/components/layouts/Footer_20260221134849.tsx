import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid-line" />

      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">ABY<span>://</span>CODEX</span>
          <p className="footer__tagline">
            Décrypter l'horreur.<br />
            <em>Comprendre l'humain.</em>
          </p>
        </div>

        <div className="footer__nav">
          <span className="footer__nav-title">Navigation</span>
          <Link to="/analyses">Analyses</Link>
          <Link to="/philosophie">Philosophie</Link>
          <Link to="/bibliotheque">Bibliothèque</Link>
          <Link to="/a-propos">À propos</Link>
        </div>

        <div className="footer__nav">
          <span className="footer__nav-title">Thèmes</span>
          <Link to="/analyses?tag=psychologie">Psychologie</Link>
          <Link to="/analyses?tag=jeux-video">Jeux Vidéo</Link>
          <Link to="/analyses?tag=animes">Animés</Link>
          <Link to="/analyses?tag=philosophie">Philosophie</Link>
        </div>

        <div className="footer__signal">
          <span className="footer__nav-title">Signal</span>
          <p className="footer__signal-text">
            Recevoir les nouvelles transmissions
          </p>
          <div className="footer__signal-input">
            <input type="email" placeholder="votre@email.com" />
            <button>→</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span className="footer__copyright">
          © 2026 Aby-Codex — Tous droits réservés
        </span>
        <span className="footer__version">
          <span className="footer__status" />
          SYSTÈME EN LIGNE — v0.1.0
        </span>
      </div>
    </footer>
  )
}