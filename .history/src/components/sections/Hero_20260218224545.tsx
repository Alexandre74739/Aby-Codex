import "./Hero.scss";
import bgHorreur from "../../assets/bg-horreur.mp4";
import Button from '../utils/Button';

export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={bgHorreur} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-hero container">
        <p className="hero-eyebrow">FRAGMENT PSYCHOLOGIQUE</p>
        <h1 className="hero-title">
          L'Horreur <br />
          <span>comme miroir</span>
        </h1>
        <p className="hero-desc">
          Bienvenue dans Aby Codex, un espace où la peur cesse d'être un frisson
          pour devenir une clef de lecture du monde intérieur. Explorez les
          abysses de l'inconscient à travers les récits qui hantent nos écrans.
        </p>
        <a href="/analyses" className="hero-btn">
          <span>Commencer l'exploration</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1 8h14M9 2l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
