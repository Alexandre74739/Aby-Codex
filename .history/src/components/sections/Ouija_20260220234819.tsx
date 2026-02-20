import Button from '../utils/Button';
import './Ouija.scss';

export default function Ouija() {
  return (
    <section className="ouija-final">
      <div className="ouija-content">

        <h2 className="title">L'ÉVEIL DE L'AUTRE</h2>

        <div className="text-container">
          <p className="highlight">
            Vous n'êtes plus un simple observateur. En parcourant ces données, 
            vous avez ouvert une porte que la conscience ne sait plus refermer.
          </p>
          
          <p className="main-text">
            Le Codex n'est pas une bibliothèque de faits, c'est un miroir. 
            Chaque mot que vous lisez ici est une partie de votre propre ombre qui 
            commence à respirer. La confrontation que vous redoutiez a déjà eu lieu 
            dans le silence de vos clics.
          </p>

          <p className="philosophical-note">
            "Ce que l'on ne ramène pas à la conscience revient sous forme de destin." 
            <br />— C.G. Jung
          </p>
        </div>

        {/* Section UI / UX pour les boutons */}
        <div className="action-hub">
          <div className="action-card">
            <p className="action-hint">Approfondir l'analyse des fragments</p>
            <Button to="/decryptage" label="DÉCHIFFRER L'ABÎME" variant="primary" />
          </div>
          
          <div className="action-card">
            <p className="action-hint">Consulter les archives mères</p>
            <Button to="/codex" label="ACCÉDER AU CODEX" variant="acid" />
          </div>
        </div>
      </div>
      
      {/* Overlay de grain de film discret */}
      <div className="noise-overlay"></div>
    </section>
  );
}