import { useState } from 'react';
import './LabZone.scss';

export default function InputZone() {
  // Déclaration du state : count est la valeur, setCount est la fonction pour la changer
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Logique pour le statut (Partie 3)
  const getStatus = () => {
    if (count === 0) return "Sujet au repos";
    if (count < 10) return "Activité détectée";
    if (count < 20) return "Surcharge neuronale";
    return "ALERTE : LIMITE ATTEINTE";
  };

  return (
    <section className="lab-zone">
      <div className="lab-container">
        
        {/* PARTIE 1 : ANALYSE */}
        <div className="lab-part">
          <h4 className="part-label">01. ANALYSE</h4>
          <p>Chaque interaction avec l'interface Codex génère un fragment de donnée résiduelle.</p>
        </div>

        {/* PARTIE 2 : COMPTEUR (L'interaction) */}
        <div className="lab-part central">
          <h4 className="part-label">02. PULSATION</h4>
          <div className="counter-display">{count.toString().padStart(2, '0')}</div>
          <button className="lab-btn" onClick={handleIncrement}>
            INJECTER DONNÉE
          </button>
        </div>

        {/* PARTIE 3 : STATUT (Le résultat dynamique) */}
        <div className="lab-part">
          <h4 className="part-label">03. STATUT SYSTÈME</h4>
          <p className={`status-text ${count >= 20 ? 'danger' : ''}`}>
            {getStatus()}
          </p>
          <div className="status-bar">
            <div className="progress" style={{ width: `${Math.min(count * 5, 100)}%` }}></div>
          </div>
        </div>

      </div>
    </section>
  );
}