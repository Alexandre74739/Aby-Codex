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

  const handleHover = (letter: string) => {
    if (letter === TARGET_WORD[index]) {
      const next = index + 1;
      setIndex(next);
      if (next === TARGET_WORD.length) setShowModal(true);
    }
  };

  return (
    <section className="ouija-container" ref={containerRef} onMouseMove={handleMove} onTouchMove={handleMove}>
      <div className="ambient-fog" />

      <div className={`board-layout ${showModal ? 'is-blurred' : ''}`}>
        <div className="word-progress">
          {TARGET_WORD.split('').map((l, i) => (
            <span key={i} className={`progress-char ${i < index ? 'is-revealed' : ''}`}>
              {i < index ? l : '·'}
            </span>
          ))}
        </div>

        <div className="board-header">
          <span className="side-text">OUI</span>
          <span className="center-id">ABY://SYSTEM</span>
          <span className="side-text">NON</span>
        </div>

        <div className="alphabet-grid">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
            <span
              key={l}
              onMouseEnter={() => handleHover(l)}
              className={`letter-unit ${TARGET_WORD.slice(0, index).includes(l) ? 'is-found' : ''}`}
            >
              {l}
            </span>
          ))}
        </div>

        <p className="board-footer-text">AU REVOIR</p>
      </div>

      <div className="spirit-pointer" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
        <div className="pointer-lens" />
      </div>

      {showModal && (
        <div className="modal-screen" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <span className="modal-tag">PACTE SCELLÉ</span>
            <h3 className="modal-title">L'OMBRE VOUS ACCEPTE</h3>
            <p className="modal-description">Les fragments de votre inconscient sont désormais cartographiés.</p>
            <div className="modal-btns">
              <Button to="/decryptage" label="DÉCHIFFRER" variant="primary" />
              <Button to="/codex" label="ACCÉDER AU CODEX" variant="acid" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}