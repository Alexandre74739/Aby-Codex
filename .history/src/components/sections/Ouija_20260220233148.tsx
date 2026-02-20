import { useState, useRef } from 'react';
import Button from '../utils/Button';
import './Ouija.scss';

const TARGET_WORD = "OMBRE";

export default function Ouija() {
  const [position,  setPosition]  = useState({ x: 50, y: 50 });
  const [index,     setIndex]     = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [lastHit,   setLastHit]   = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: any) => {
    if (showModal || !containerRef.current) return;
    const rect    = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: ((clientX - rect.left)  / rect.width)  * 100,
      y: ((clientY - rect.top)   / rect.height) * 100,
    });
  };

  const checkLetter = (letter: string) => {
    if (letter !== TARGET_WORD[index]) return;
    setLastHit(letter);
    setTimeout(() => setLastHit(''), 600);
    const next = index + 1;
    setIndex(next);
    if (next === TARGET_WORD.length) setShowModal(true);
  };

  const reset = () => { setIndex(0); setShowModal(false); };

  const found = TARGET_WORD.slice(0, index).split('');

  return (
    <section
      className="ouija"
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Ambiance fond */}
      <div className="ouija__fog" />

      <div className={`ouija__board ${showModal ? 'ouija__board--blur' : ''}`}>

        {/* Mot à trouver — progression */}
        <div className="ouija__progress">
          {TARGET_WORD.split('').map((l, i) => (
            <span key={i} className={`ouija__progress-letter ${i < index ? 'revealed' : ''}`}>
              {i < index ? l : '·'}
            </span>
          ))}
        </div>

        <div className="ouija__top">
          <span>OUI</span>
          <span className="ouija__top-title">ABY://CODEX</span>
          <span>NON</span>
        </div>

        <div className="ouija__alphabet">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
            <span
              key={l}
              onMouseEnter={() => checkLetter(l)}
              className={[
                'ouija__letter',
                found.includes(l)  ? 'found'   : '',
                lastHit === l      ? 'flash'   : '',
                l === TARGET_WORD[index] ? 'next' : '',
              ].join(' ')}
            >
              {l}
            </span>
          ))}
        </div>

        <p className="ouija__goodbye">AU REVOIR</p>
      </div>

      {/* Planchette */}
      <div
        className="ouija__planchette"
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
      >
        <div className="ouija__eye" />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="ouija__overlay" onClick={reset}>
          <div className="ouija__modal" onClick={e => e.stopPropagation()}>
            <button className="ouija__close" onClick={reset}>×</button>
            <p className="ouija__modal-label">PACTE SCELLÉ</p>
            <h3>L'OMBRE VOUS ACCEPTE</h3>
            <p>Les fragments sont désormais accessibles.</p>
            <div className="ouija__actions">
              <Button to="/decryptage" label="Déchiffrer" variant="primary" />
              <Button to="/codex"      label="Accéder au Codex" variant="acid" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}