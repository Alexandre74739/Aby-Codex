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
        <Button to="/analyses" label="Commencer l'exploration" />
      </div>
    </section>
  );
}
