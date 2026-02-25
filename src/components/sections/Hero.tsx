import "./Hero.scss";
import Button from "../utils/Button";

interface HeroProps {
  videoSrc: string;
  eyebrow: string;
  titleTop: string;
  titleSpan: string;
  description: string;
  buttonLink: string;
  buttonLabel: string;
}

export default function Hero({
  videoSrc,
  eyebrow,
  titleTop,
  titleSpan,
  description,
  buttonLink,
  buttonLabel,
}: HeroProps) {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-hero container">
        <p className="hero-eyebrow">{eyebrow}</p>

        <h1 className="hero-title">
          {titleTop} <br />
          <span>{titleSpan}</span>
        </h1>

        <p className="hero-desc">{description}</p>

        <Button to={buttonLink} label={buttonLabel} variant="primary" />
      </div>
    </section>
  );
}
