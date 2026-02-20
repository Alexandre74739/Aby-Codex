import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import ambiance from '../../assets/ambiance.mp3';

const navLinks = [
  { path: '/', label: 'NEXUS' },
  { path: '/decryptage', label: 'DECRYPTAGE' },
  { path: '/codex', label: 'CODEX' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    audioRef.current = new Audio(ambiance);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => { audioRef.current?.pause(); };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setPlaying(!playing);
  };

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
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/diagnostic" className="cta-interrogative desktop-only">
            <span className="cta-text">JE M'INTERROGE</span>
            <div className="cta-icon">?</div>
          </Link>

          <button
            className={`music-btn ${playing ? 'playing' : ''}`}
            onClick={toggleMusic}
            aria-label={playing ? 'Couper la musique' : 'Lancer la musique'}
          >
            <span className="music-btn__bars">
              <span /><span /><span /><span />
            </span>
          </button>

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
            </Link>
          ))}
          <Link to="/diagnostic" className="drawer-link diag-special">
            <span className="label">DIAGNOSTIC</span>
          </Link>
        </div>
      </div>

      <div className="header-border-bottom" />
    </header>
  );
}