import { useState } from 'react';
import './InputZone.scss';

const DATA_FRAGMENTS = [
  {
    title: "FRAGMENT_01: ORIGINES",
    text: "Le projet AbyCodex n'était à l'origine qu'une simple interface de stockage. Mais lors de la première synchronisation neuronale, les données ont commencé à s'auto-organiser. Ce que vous voyez n'est pas du code, c'est une empreinte psychologique figée dans le silicium."
  },
  {
    title: "FRAGMENT_02: STRUCTURE COGNITIVE",
    text: "Les couches de l'interface reflètent les strates de l'inconscient. Le 'Header' représente la conscience immédiate, tandis que le 'Footer' s'enfonce dans les profondeurs de l'oubli. Entre les deux, le contenu circule comme des flux synaptiques instables."
  },
  {
    title: "FRAGMENT_03: AVERTISSEMENT",
    text: "L'augmentation du niveau d'accès peut provoquer des distorsions visuelles. Si les caractères commencent à vibrer, ne fermez pas la fenêtre. C'est le signe que la connexion entre votre esprit et le Codex est établie. L'extraction peut commencer."
  }
];

export default function InputZone() {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    if (level < DATA_FRAGMENTS.length - 1) {
      setLevel(level + 1);
    }
  };

  const prevLevel = () => {
    if (level > 0) {
      setLevel(level - 1);
    }
  };

  return (
    <section className="input-zone">
      <div className="zone-grid">
        
        {/* PARTIE 1 : NAVIGATION TECHNIQUE */}
        <div className="zone-col meta">
          <div className="meta-item">
            <span className="label">OPÉRATEUR</span>
            <span className="value">GUEST_USER_01</span>
          </div>
          <div className="meta-item">
            <span className="label">STATUT</span>
            <span className="value neon">DÉCRYPTAGE EN COURS</span>
          </div>
          <div className="meta-item">
            <span className="label">NIVEAU D'ACCÈS</span>
            <span className="value large">{level + 1}</span>
          </div>
        </div>

        {/* PARTIE 2 : TEXTE DYNAMIQUE (L'utilité du compteur) */}
        <div className="zone-col content">
          <h2 className="content-title">{DATA_FRAGMENTS[level].title}</h2>
          <div className="content-body">
            <p>{DATA_FRAGMENTS[level].text}</p>
          </div>
          <div className="content-nav">
            <button onClick={prevLevel} disabled={level === 0}>PRÉCÉDENT</button>
            <div className="progress-dots">
              {DATA_FRAGMENTS.map((_, i) => (
                <div key={i} className={`dot ${i === level ? 'active' : ''}`} />
              ))}
            </div>
            <button onClick={nextLevel} disabled={level === DATA_FRAGMENTS.length - 1}>SUIVANT</button>
          </div>
        </div>

        {/* PARTIE 3 : ANALYSE DES DONNÉES */}
        <div className="zone-col sidebar">
          <h4 className="sidebar-title">LOGS DE TRANSMISSION</h4>
          <ul className="log-list">
            <li>> Requête de synchronisation... OK</li>
            <li>> Analyse du fragment {level + 1}...</li>
            {level > 0 && <li>> Données du niveau 1 sécurisées.</li>}
            {level > 1 && <li>> Accès aux archives restreintes accordé.</li>}
          </ul>
          <div className="access-warning">
             {level === 2 ? "ATTENTION : CONTENU INSTABLE" : "SYSTÈME STABLE"}
          </div>
        </div>

      </div>
    </section>
  );
}