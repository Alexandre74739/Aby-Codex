import { useState, useEffect } from 'react';
import './ShadowSection.scss';

const QUOTES = [
  "Nul ne devient illuminé en imaginant des figures de lumière,",
  "mais en rendant l'obscurité consciente.",
  "Ce que tu nies te soumet. Ce que tu acceptes te transforme.",
  "L'ombre est le siège de la créativité autant que celui du chaos."
];

export default function ShadowSection() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isScared, setIsScared] = useState(false);

  // Déclenchement du jumpscare
  useEffect(() => {
    if (revealedCount >= QUOTES.length) {
      const timer = setTimeout(() => {
        setIsScared(true);
        // On remet à zéro après 2 secondes
        setTimeout(() => setIsScared(false), 2000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [revealedCount]);

  return (
    <section className="shadow-section">
      <div className="instruction">Explorez les strates de l'inconscient ({revealedCount}/{QUOTES.length})</div>
      
      <div className="shadow-container">
        {QUOTES.map((quote, index) => (
          <div 
            key={index} 
            className={`quote-trigger ${revealedCount > index ? 'active' : ''}`}
            onClick={() => index === revealedCount && setRevealedCount(prev => prev + 1)}
          >
            <p className="quote-text">{quote}</p>
          </div>
        ))}
      </div>

      {/* LE JUMPSCARE ELEMENT */}
      {isScared && (
        <div className="jumpscare-overlay">
          <div className="glitch-face">NE REGARDE PAS DERRIÈRE TOI</div>
          <div className="static-noise"></div>
        </div>
      )}
    </section>
  );
}