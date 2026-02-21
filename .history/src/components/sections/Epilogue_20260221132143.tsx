import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Epilogue.scss';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#ΩΨΔΣΦ';

function useTextGlitch(target: string, trigger: boolean) {
  const [text, setText] = useState(target);

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const interval = setInterval(() => {
      setText(
        target.split('').map((char, i) =>
          char === ' ' ? ' ' : frame > i * 2
            ? char
            : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        ).join('')
      );
      frame++;
      if (frame > target.length * 2) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [trigger, target]);

  return text;
}

export default function Epilogue() {
  const [visible, setVisible] = useState(false);
  const [cracked, setCracked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const title = useTextGlitch("L'ÉVEIL DE L'AUTRE", visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); setTimeout(() => setCracked(true), 1200); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`epilogue ${visible ? 'epilogue--visible' : ''}`} ref={ref}>

      {/* Fond ambiance */}
      <div className="epilogue-bg">
        <div className="epilogue-bg-glow" />
        <div className="epilogue-bg-grid" />
        <div className="epilogue-bg-scanline" />
      </div>

      {/* Fissures décoratives */}
      <div className={`epilogue-crack epilogue-crack--left  ${cracked ? 'active' : ''}`} />
      <div className={`epilogue-crack epilogue-crack--right ${cracked ? 'active' : ''}`} />

      <div className="epilogue-container">

        {/* Label */}
        <span className="epilogue-label">
          <span className="epilogue-label-dot" />
          TRANSMISSION FINALE
        </span>

        {/* Titre glitch */}
        <h2 className="epilogue-title">{title}</h2>

        {/* Séparateur sang */}
        <div className="epilogue-sep" />

        {/* Paragraphe */}
        <p className="epilogue-text">
          Le Codex n'est pas une bibliothèque de faits — c'est un miroir.
          Chaque mot que vous lisez est une partie de votre propre ombre
          qui commence à respirer. La confrontation que vous redoutiez
          a déjà eu lieu dans le silence de vos clics.
        </p>

        {/* Citation */}
        <p className="epilogue-quote">
          « Ce que l'on ne ramène pas à la conscience revient sous forme de destin. »
          <em> — C.G. Jung</em>
        </p>

        {/* Boutons */}
        <div className="epilogue-actions">
          <Link to="/decryptage" className="epilogue-btn epilogue-btn--primary">
            <span>DÉCRYPTER LA PSYCHÉ</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <Link to="/codex" className="epilogue-btn epilogue-btn--acid">
            <span>S'ABANDONNER AU CODEX</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}