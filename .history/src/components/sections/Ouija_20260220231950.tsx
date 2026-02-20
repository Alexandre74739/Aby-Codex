import { useState, useRef, useEffect } from 'react';
import './Ouija.scss';

// Le mot à former pour déclencher la suite
const TARGET_WORD = "ABYSS";

export default function Ouija() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [currentWord, setCurrentWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current || showModal) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const x = 'touches' in e 
      ? ((e.touches[0].clientX - rect.left) / rect.width) * 100 
      : ((e.clientX - rect.left) / rect.width) * 100;
    const y = 'touches' in e 
      ? ((e.touches[0].clientY - rect.top) / rect.height) * 100 
      : ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const handleLetterHover = (letter: string) => {
    if (showModal) return;

    // Vérifie si la lettre survolée est la suivante dans le mot cible
    const nextCharIndex = currentWord.length;
    if (letter === TARGET_WORD[nextCharIndex]) {
      const newWord = currentWord + letter;
      setCurrentWord(newWord);

      if (newWord === TARGET_WORD) {
        setTimeout(() => setShowModal(true), 500);
      }
    } else if (letter !== TARGET_WORD[nextCharIndex - 1]) {
      // Optionnel : Reset si on se trompe de lettre
      // setCurrentWord(""); 
    }
  };

  return (
    <section className="ouija-section" ref={containerRef} onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}>
      <div className={`ouija-board ${showModal ? 'disabled' : ''}`}>
        <div className="board-header">
          <span>YES</span>
          <span>NO</span>
        </div>

        <div className="letters-grid">
          {"ABCDEFGHIJKLM".split("").map(l => (
            <span 
              key={l} 
              className={`letter ${currentWord.includes(l) && TARGET_WORD.includes(l) ? 'active' : ''}`}
              onMouseEnter={() => handleLetterHover(l)}
            >
              {l}
            </span>
          ))}
          <br />
          {"NOPQRSTUVWXYZ".split("").map(l => (
            <span 
              key={l} 
              className={`letter ${currentWord.includes(l) && TARGET_WORD.includes(l) ? 'active' : ''}`}
              onMouseEnter={() => handleLetterHover(l)}
            >
              {l}
            </span>
          ))}
        </div>

        <div className="board-footer">
          <h2 className="goodbye">GOOD BYE</h2>
        </div>

        <div className="planchette" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
          <div className="lens"></div>
        </div>
      </div>

      {showModal && (
        <div className="ouija-modal-overlay">
          <div className="ouija-modal">
            <h3 className="modal-title">LIAISON ÉTABLIE</h3>
            <p className="modal-text">
              L'ombre a répondu. Les fragments de votre inconscient sont désormais cartographiés. 
              Où souhaitez-vous porter votre regard ?
            </p>
            <div className="modal-actions">
              <a href="/decryptage" className="cta-interrogative">
                <span className="cta-text">DÉCRYPTAGE</span>
              </a>
              <a href="/codex" className="cta-interrogative">
                <span className="cta-text">CODEX</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}