import { useState, useRef } from 'react';
import Button from '../utils/Button';
import './Ouija.scss';

const TARGET_WORD = "OMBRE";

export default function Ouija() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: any) => {
    if (showModal || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) / rect.width) * 100;
    const y = (((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  const handleLetter = (letter: string) => {
    if (letter === TARGET_WORD[index]) {
      const next = index + 1;
      setIndex(next);
      if (next === TARGET_WORD.length) setShowModal(true);
    }
  };

  return (
    <section className="ouija-section" ref={containerRef} onMouseMove={handleMove} onTouchMove={handleMove}>
      
      <div className={`board ${showModal ? 'blurred' : ''}`}>
        <div className="board-header">
          <span>OUI</span>
          <span>NON</span>
        </div>

        <div className="alphabet">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
            <span 
              key={l} 
              onMouseEnter={() => handleLetter(l)}
              className={`letter ${TARGET_WORD.slice(0, index).includes(l) ? 'active' : ''}`}
            >
              {l}
            </span>
          ))}
        </div>

        <h2 className="goodbye">AU REVOIR</h2>

        <div className="planchette" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
          <div className="eye"></div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowModal(false)}>×</button>
            <p className="status">LIAISON ÉTABLIE</p>
            <h3>L'OMBRE VOUS ACCEPTE</h3>
            <p>Les fragments de votre inconscient sont désormais cartographiés.</p>
            <div className="actions">
              <Button to="/decryptage" label="DÉCRYPTAGE" variant="primary" />
              <Button to="/codex" label="CODEX" variant="acid" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}