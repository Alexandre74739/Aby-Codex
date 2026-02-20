import { useState, useEffect, useRef } from 'react';
import './Censored.scss';
import scareSound from '../../assets/jump-scare.mp3';

const HIDDEN_WORDS = [
  { id: 1, text: "une bête tapie dans l'ombre" },
  { id: 2, text: "votre propre reflet déformé" },
  { id: 3, text: "la pourriture de l'âme" },
  { id: 4, text: "le silence des morts" },
  { id: 5, text: "ELLE EST DERRIÈRE TOI" }
];

export default function Censored() {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [isScared, setIsScared] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(scareSound);
    audioRef.current.volume = 1.0;
    audioRef.current.preload = "auto";
  }, []);

  const handleReveal = (id: number) => {
    if (!revealed.includes(id)) {
      const newRevealed = [...revealed, id];
      setRevealed(newRevealed);

      if (newRevealed.length === HIDDEN_WORDS.length) {
        audioRef.current?.play().catch(() => console.log("Audio blocké"));
        setIsScared(true);
        setTimeout(() => setIsScared(false), 2500);
      }
    }
  };

  return (
    <section className="censored-section">
      <div className="content-wrapper">
        <h2 className="section-title">LES ARCHIVES DU SOI</h2>
        
        <p className="intro-text">
          L'individu qui ne regarde pas son ombre est condamné à la subir. 
          Ce fragment de texte a été corrompu par une force psychique résiduelle. 
          Restaurez les segments manquants pour clore le dossier.
        </p>

        <div className="main-paragraph">
          Explorer l'inconscient, c'est accepter de rencontrer  
          <span className="censor-item" onClick={() => handleReveal(1)}>
            {revealed.includes(1) ? HIDDEN_WORDS[0].text : "████████████████████"}
          </span>. 
          Ce n'est pas un voyage vers la lumière, mais une descente vers  
          <span className="censor-item" onClick={() => handleReveal(2)}>
            {revealed.includes(2) ? HIDDEN_WORDS[1].text : "████████████████████"}
          </span>. 
          Si vous persistez à nier l'existence de cette noirceur, vous nourrissez involontairement  
          <span className="censor-item" onClick={() => handleReveal(3)}>
            {revealed.includes(3) ? HIDDEN_WORDS[2].text : "████████████████"}
          </span>. 
          <br /><br />
          Le prix de la connaissance est souvent  
          <span className="censor-item" onClick={() => handleReveal(4)}>
            {revealed.includes(4) ? HIDDEN_WORDS[4].text : "████████████████"}
          </span>. 
          Écoutez attentivement le bruit de votre propre souffle, car à cet instant précis : 
          <span className="censor-item critical" onClick={() => handleReveal(5)}>
            {revealed.includes(5) ? HIDDEN_WORDS[4].text : "██████████████████"}
          </span>.
        </div>
      </div>

      {isScared && (
        <div className="jumpscare-overlay">
          <div className="flash-screen"></div>
          <div className="scare-content">
            <h2 className="scare-text">TROUVÉ</h2>
          </div>
        </div>
      )}
    </section>
  );
}