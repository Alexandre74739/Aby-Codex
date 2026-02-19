import { useState } from 'react';
import './InputZone.scss';

export default function InputZone() {
  // Déclaration de l'état pour stocker le texte
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-zone">
      <div className="input-header">
        <span className="status-dot"></span>
        <span className="terminal-label">SYSTEM_INPUT_V1.0</span>
      </div>

      <textarea
        className="terminal-area"
        placeholder="Décrivez votre fragment de pensée..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="input-footer">
        <span className="character-count">
          CHAR_COUNT: {inputValue.length}
        </span>
        {inputValue.length > 0 && (
          <span className="sync-status">PRÊT POUR SYNCHRONISATION</span>
        )}
      </div>
    </div>
  );
}