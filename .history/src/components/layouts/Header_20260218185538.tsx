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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* LOGO - Identité visuelle */}
        <Link to="/" className="header-logo">
          <h1 className="logo-title">ABY<span>CODEX</span></h1>
          <span className="logo-tagline">FRAGMENT : PSYCHOLOGIQUE</span>
        </Link>

        {/* NAVIGATION CENTRALE - Structure flottante */}
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

        {/* ACTION - Diagnostic */}
        <div className="header-actions">
          <Link to="/diagnostic" className="cta-interrogative">
            <span className="cta-text">JE M'INTERROGE</span>
            <div className="cta-icon">?</div>
          </Link>
        </div>

      </div>
      
      {/* Ligne de séparation technologique */}
      <div className="header-border-bottom" />
    </header>
  );
}