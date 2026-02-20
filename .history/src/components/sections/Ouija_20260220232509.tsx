import { useState, useRef, useEffect } from 'react';
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
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        setPosition({
            x: ((clientX - rect.left) / rect.width) * 100,
            y: ((clientY - rect.top) / rect.height) * 100
        });
    };

    const checkLetter = (letter: string) => {
        if (letter === TARGET_WORD[index]) {
            const nextIndex = index + 1;
            setIndex(nextIndex);
            if (nextIndex === TARGET_WORD.length) setShowModal(true);
        }
    };

    return (
        <section className="ouija-section" ref={containerRef} onMouseMove={handleMove} onTouchMove={handleMove}>
            <div className={`board ${showModal ? 'blur' : ''}`}>
                <div className="board-top"><span>OUI</span><span>NON</span></div>

                <div className="alphabet">
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
                        <span
                            key={l}
                            onMouseEnter={() => checkLetter(l)}
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
                        <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
                        <h3>L'OMBRE VOUS ACCEPTE</h3>
                        <p>Le pacte est scellé. Les fragments sont accessibles.</p>
                        <div className="actions">
                            <a href="/decryptage" className="btn">DÉCRYPTAGE</a>
                            <a href="/codex" className="btn">CODEX</a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}