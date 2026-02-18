import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const navLinks = [
  { path: "/", label: "NEXUS" },
  { path: "/decryptage", label: "DECRYPTAGE" },
  { path: "/codex", label: "CODEX" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-symbol">⬡</span>
          <span>ABY<span className="navbar__logo-sep">://</span>CODEX</span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`navbar__link ${location.pathname === path ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/qcm" className="navbar__cta">
          <span>JE M'INTERROGE</span>
          <svg >
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Link>

        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

      </div>
      <div className="navbar__scanline" />
    </nav>
  );
}