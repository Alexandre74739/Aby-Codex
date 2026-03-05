import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import './SortGame.scss';

type Column = 'conscient' | 'inconscient';

export default function SortGame() {
    const [remaining, setRemaining] = useState<SortWord[]>([...sortWords]);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [results, setResults] = useState<{ word: SortWord; correct: boolean }[]>([]);
    const [lastFeedback, setLastFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);
    const [done, setDone] = useState(false);

    const handleDrop = (column: Column) => {
        if (!draggingId) return;
        const word = remaining.find(w => w.id === draggingId);
        if (!word) return;

        const isCorrect = word.correct === column;
        
        // Mise à jour du feedback et des résultats
        setLastFeedback({ text: word.explanation, isCorrect });
        setResults(prev => [...prev, { word, correct: isCorrect }]);
        
        setRemaining(prev => {
            const next = prev.filter(w => w.id !== draggingId);
            if (next.length === 0) setDone(true);
            return next;
        });
        setDraggingId(null);
    };

    const progress = (results.length / sortWords.length) * 100;
    const score = results.filter(r => r.correct).length;

    return (
        <section className="sort-game">
            {/* Header explicatif */}
            <header className="game-header">
                <span className="game-meta">Dissection Psychologique</span>
                <h2 className="game-title">La Frontière <span>du Moi</span></h2>
                <div className="game-explanation">
                    <p>
                        Pour Freud et Jung, notre psyché est un iceberg. Le <strong>Conscient</strong> est la partie émergée, 
                        siège de la raison et du langage. L'<strong>Inconscient</strong> est l'abîme où croupissent nos désirs refoulés, 
                        nos traumas et l'Ombre.
                    </p>
                    <p className="instruction">
                        Glissez les fragments ci-dessous dans leur sphère d'influence pour tester votre discernement.
                    </p>
                </div>
            </header>

            {/* Barre de progression technologique */}
            <div className="progress-container">
                <div className="progress-info">
                    <span className="label">Analyse en cours...</span>
                    <span className="stats">{results.length} / {sortWords.length}</span>
                </div>
                <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {!done ? (
                <div className="game-layout">
                    {/* Zone de feedback immédiat */}
                    <div className="feedback-area">
                        {lastFeedback && (
                            <div className={`feedback-bubble ${lastFeedback.isCorrect ? 'correct' : 'error'}`}>
                                <span className="status">{lastFeedback.isCorrect ? '✓ CORRECT' : '✕ ERREUR'}</span>
                                <p className="explanation">{lastFeedback.text}</p>
                            </div>
                        )}
                    </div>

                    <div className="interaction-zone">
                        <div className="word-stack">
                            {remaining.length > 0 && (
                                <div
                                    className={`word-card ${draggingId ? 'is-dragging' : ''}`}
                                    draggable
                                    onDragStart={() => setDraggingId(remaining[0].id)}
                                    onDragEnd={() => setDraggingId(null)}
                                >
                                    {remaining[0].word}
                                </div>
                            )}
                        </div>

                        <div className="drop-zones">
                            {(['conscient', 'inconscient'] as Column[]).map(col => (
                                <div
                                    key={col}
                                    className="drop-zone"
                                    onDragOver={e => e.preventDefault()}
                                    onDrop={() => handleDrop(col)}
                                >
                                    <span className="zone-label">{col}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="game-final">
                    <div className="result-card">
                        <h3>Analyse Terminée</h3>
                        <div className="final-score">{score} <span>/ {sortWords.length}</span></div>
                        <p className="verdict">
                            {score === sortWords.length 
                                ? "Votre maîtrise de la psyché est absolue. L'Ombre ne peut rien vous cacher."
                                : "Certaines zones d'ombre persistent. C'est là que l'horreur prend racine."}
                        </p>
                        <button className="reset-btn" onClick={() => window.location.reload()}>
                            REPRENDRE L'ANALYSE
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}