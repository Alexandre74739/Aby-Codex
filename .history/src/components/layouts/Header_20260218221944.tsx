import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const navLinks = [
  { path: '/',           label: 'NEXUS'},
  { path: '/decryptage', label: 'DECRYPTAGE'},
  { path: '/codex',      label: 'CODEX'},
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        <Link to="/" className="header-logo">
          <h1 className="logo-title">ABY<span>CODEX</span></h1>
          <span className="logo-tagline">FRAGMENT : PSYCHOLOGIQUE</span>
        </Link>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span className="label">{link.label}</span>
              <span className="sub">{link.sub}</span>
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/diagnostic" className="cta-interrogative desktop-only">
            <span className="cta-text">JE M'INTERROGE</span>
            <div className="cta-icon">?</div>
          </Link>

          <button
            className={`header-burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="drawer-link">
              <span className="label">{link.label}</span>
              <span className="sub">{link.sub}</span>
            </Link>
          ))}
          <Link to="/diagnostic" className="drawer-link diag-special">
            <span className="label">DIAGNOSTIC</span>
            <span className="sub">S'interroger</span>
          </Link>
        </div>
      </div>

      <div className="header-border-bottom" />
    </header>
  );
}