import { useState, useEffect } from 'react';
import './Censored.scss';
import scareSound from '../../assets/jump-scare.mp3'; // Assure-toi que le nom correspond

const CENSOR_DATA = [
  { id: 1, text: "L'ombre est ce que nous ne voulons pas être." },
  { id: 2, text: "Elle contient nos instincts les plus vils," },
  { id: 3, text: "nos désirs les plus inavouables." },
  { id: 4, text: "Mais plus vous essayez de la cacher," },
  { id: 5, text: "plus elle prend le contrôle de vos actes." },
  { id: 6, text: "Regardez derrière vous. Elle est là." }
];

export default function Censored() {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [isScared, setIsScared] = useState(false);

  const toggleReveal = (id: number) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
    }
  };

  useEffect(() => {
    if (revealed.length === CENSOR_DATA.length) {
      const timer = setTimeout(() => {
        // Déclenchement du jumpscare
        const audio = new Audio(scareSound);
        audio.volume = 0.8;
        audio.play().catch(e => console.log("Audio bloqué"));
        
        setIsScared(true);

        // Reset après 3 secondes
        setTimeout(() => setIsScared(false), 3000);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [revealed]);

  return (
    <section className="censor-section">
      <div className="censor-header">
        <span className="status">DÉCRYPTAGE REQUIS : {revealed.length} / {CENSOR_DATA.length}</span>
      </div>

      <div className="text-container">
        {CENSOR_DATA.map((item) => (
          <div 
            key={item.id} 
            className={`censor-block ${revealed.includes(item.id) ? 'revealed' : ''}`}
            onClick={() => toggleReveal(item.id)}
          >
            <p className="actual-text">{item.text}</p>
            <div className="censor-overlay">
               <span className="glitch-text">CONFIDENTIEL</span>
            </div>
          </div>
        ))}
      </div>

      {isScared && (
        <div className="scare-overlay">
          <div className="scare-content">
             <h2 className="scare-msg">JE TE VOIS</h2>
             <div className="static-noise"></div>
          </div>
        </div>
      )}
    </section>
  );
}