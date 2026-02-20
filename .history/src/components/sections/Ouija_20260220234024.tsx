import { useState, useEffect } from 'react';
import Button from '../utils/Button';
import './FinalChoice.scss';

const WHISPERS = [
  "L'abîme vous regarde aussi.",
  "Il n'y a pas de retour en arrière.",
  "L'ombre est votre seule vérité.",
  "Êtes-vous certain d'être seul ?"
];

export default function FinalChoice() {
  const [whisper, setWhisper] = useState(WHISPERS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhisper(WHISPERS[Math.floor(Math.random() * WHISPERS.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="final-choice">
      <div className="inner">
        <span className="label">CONSTATS FINAUX</span>
        
        <h2 className="title">LA FIN DE L'IGNORANCE</h2>
        
        <p className="description">
          Vous avez traversé les couches superficielles de votre psyché. 
          Ce que vous avez vu dans le Codex n'est pas une fiction, mais le reflet de ce que vous dissimulez. 
          Jung disait que nul ne devient illuminé en imaginant des figures de lumière, 
          mais en rendant l'obscurité consciente.
        </p>

        <div className="whisper-box">
          <p className="whisper-text">{whisper}</p>
        </div>

        <div className="actions">
          <Button to="/decryptage" label="AFFRONTER L'OMBRE" variant="primary" />
          <Button to="/codex" label="RETOUR AU SYSTÈME" variant="acid" />
        </div>
      </div>
    </section>
  );
}