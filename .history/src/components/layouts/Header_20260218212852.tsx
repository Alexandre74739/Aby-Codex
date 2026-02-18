import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const navLinks = [
  { path: '/', label: 'NEXUS', sub: 'Accueil' },
  { path: '/decryptage', label: 'DECRYPTAGE', sub: 'Fondement' },
  { path: '/codex', label: 'CODEX', sub: 'Archives' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lors d'un changement de page
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <div className="header-container">
        
        <Link to="/" className="header-logo">
          <h1 className="logo-title">ABY<span>CODEX</span></h1>
          <span className="logo-tagline">FRAGMENT : PSYCHOLOGIQUE</span>
        </Link>

        {/* Navigation Desktop */}
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

          {/* Bouton Burger */}
          <button 
            className={`header-burger ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Drawer) */}
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