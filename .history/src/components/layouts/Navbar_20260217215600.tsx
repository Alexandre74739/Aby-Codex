import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'NEXUS', sub: 'Accueil' },
  { path: '/analyses', label: 'ANALYSES', sub: 'Décryptage' },
  { path: '/philosophie', label: 'PHILOSOPHIE', sub: 'Fondements' },
  { path: '/bibliotheque', label: 'BIBLIOTHÈQUE', sub: 'Archives' },
  { path: '/a-propos', label: 'CODEX', sub: 'À propos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-symbol">⬡</span>
            <span className="navbar__logo-text">
              ABY<span className="navbar__logo-separator">://</span>CODEX
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map(({ path, label, sub }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
                >
                  <span className="navbar__link-label">{label}</span>
                  <span className="navbar__link-sub">{sub}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/analyses" className="navbar__cta">
            <span>EXPLORER</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Burger */}
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Scanline effect */}
        <div className="navbar__scanline" />
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map(({ path, label, sub }, i) => (
            <li
              key={path}
              className="mobile-menu__item"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <Link
                to={path}
                className={`mobile-menu__link ${location.pathname === path ? 'mobile-menu__link--active' : ''}`}
              >
                <span className="mobile-menu__index">0{i + 1}</span>
                <span className="mobile-menu__label">{label}</span>
                <span className="mobile-menu__sub">{sub}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__footer">
          <span>ABY://CODEX — v0.1.0</span>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}