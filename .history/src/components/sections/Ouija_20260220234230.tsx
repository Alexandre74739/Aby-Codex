import { useState, useEffect } from 'react';
import Button from '../utils/Button';
import './Ouija.scss';

const ECHOES = [
  "L'OMBRE N'EST PAS UN CHOIX",
  "VOTRE SYSTÈME EST CORROMPU",
  "REGARDEZ DERRIÈRE L'ÉCRAN",
  "NUL NE SORT D'ICI INDEMNE"
];

export default function Ouija() {
  const [glitchText, setGlitchText] = useState("INITIALISATION...");
  const [isCritical, setIsCritical] = useState(false);

  useEffect(() => {
    // Cycle de murmures système
    const timer = setInterval(() => {
      const randomEcho = ECHOES[Math.floor(Math.random() * ECHOES.length)];
      setGlitchText(randomEcho);
      setIsCritical(prev => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ouija-final">
      <div className="vignette" />
      
      <div className="terminal-wrapper">
        <header className="terminal-header">
          <span className="pulse-dot" />
          <span className="session-id">SESSION_ID: OUIJA_PROTO_4.4</span>
        </header>

        <div className="terminal-body">
          <h2 className="main-warning">CONFRONTATION FINALE</h2>
          
          <p className="philosophical-bridge">
            Vous cherchez une planchette pour guider vos mains, mais l'outil 
            n'a jamais été extérieur. La table est votre écran, le spectre est votre reflet.
            L'inconscient ne répond pas aux questions, il dévore les certitudes.
          </p>

          <div className={`echo-chamber ${isCritical ? 'critical' : ''}`}>
            <span className="cursor">{'>'}</span>
            <p className="echo-message">{glitchText}</p>
          </div>

          <div className="decision-matrix">
            <div className="button-glitch-wrap">
              <Button to="/decryptage" label="DÉCHIFFRER L'ABÎME" variant="primary" />
              <span className="shadow-btn">DÉCHIFFRER L'ABÎME</span>
            </div>
            
            <div className="button-glitch-wrap">
              <Button to="/codex" label="RETOUR AU CODEX" variant="acid" />
              <span className="shadow-btn">RETOUR AU CODEX</span>
            </div>
          </div>
        </div>

        <footer className="terminal-footer">
          <p>STATUT : CONSCIENCE EN COURS DE DÉCOMPOSITION...</p>
        </footer>
      </div>
    </section>
  );
}