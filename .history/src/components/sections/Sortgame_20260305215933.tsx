import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import './SortGame.scss';

type Column = 'conscient' | 'inconscient';
type Result = { word: SortWord; correct: boolean };

export default function SortGame() {
    const [remaining, setRemaining] = useState<SortWord[]>([...sortWords]);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [dropTarget, setDropTarget] = useState<Column | null>(null);
    const [results, setResults] = useState<Result[]>([]);
    const [lastResult, setLastResult] = useState<Result | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    const handleDrop = (column: Column) => {
        if (!draggingId) return;
        const word = remaining.find(w => w.id === draggingId);
        if (!word) return;

        const result = { word, correct: word.correct === column };
        
        setLastResult(result);
        setResults(prev => [...prev, result]);
        setRemaining(prev => {
            const next = prev.filter(w => w.id !== draggingId);
            if (next.length === 0) setTimeout(() => setIsFinished(true), 800);
            return next;
        });
        
        setDraggingId(null);
        setDropTarget(null);
    };

    const resetGame = () => {
        setRemaining([...sortWords]);
        setResults([]);
        setLastResult(null);
        setIsFinished(false);
    };

    const score = results.filter(r => r.correct).length;

    return (
        <section className="sort-game">
            <header className="game-intro">
                <span className="label">Exercice Pratique</span>
                <h2 className="title">Conscient vs <span>Inconscient</span></h2>
                <p className="description">
                    Assignez chaque fragment de psyché à sa sphère d'origine.
                </p>
            </header>

            {!isFinished ? (
                <div className="game-board">
                    <div className="status-bar">
                        <div className="progress">
                            <span className="count">{results.length} / {sortWords.length}</span>
                            <div className="progress-track">
                                <div className="progress-fill" style={{ width: `${(results.length / sortWords.length) * 100}%` }} />
                            </div>
                        </div>

                        {lastResult && (
                            <div className={`feedback-message ${lastResult.correct ? 'is-correct' : 'is-wrong'}`}>
                                <span className="symbol">{lastResult.correct ? '✓' : '✕'}</span>
                                <p>{lastResult.word.explanation}</p>
                            </div>
                        )}
                    </div>

                    <div className="word-pool">
                        {remaining.slice(0, 3).map((word, index) => (
                            <div
                                key={word.id}
                                className={`draggable-word ${draggingId === word.id ? 'is-dragging' : ''}`}
                                draggable
                                onDragStart={() => setDraggingId(word.id)}
                                onDragEnd={() => { setDraggingId(null); setDropTarget(null); }}
                                style={{ zIndex: 10 - index, transform: `scale(${1 - index * 0.05}) translateY(${index * 10}px)` }}
                            >
                                {word.word}
                            </div>
                        ))}
                    </div>

                    <div className="drop-zones">
                        {(['conscient', 'inconscient'] as Column[]).map(col => (
                            <div
                                key={col}
                                className={`zone ${col} ${dropTarget === col ? 'is-hovered' : ''} ${draggingId ? 'is-active' : ''}`}
                                onDragOver={(e) => { e.preventDefault(); setDropTarget(col); }}
                                onDragLeave={() => setDropTarget(null)}
                                onDrop={() => handleDrop(col)}
                            >
                                <div className="zone-content">
                                    <span className="zone-name">{col}</span>
                                    <p className="zone-hint">
                                        {col === 'conscient' ? 'Le domaine du Moi' : 'L\'abîme du Soi'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="game-results">
                    <div className="result-card">
                        <span className="result-label">Évaluation terminée</span>
                        <div className="result-score">
                            {score}<span>/{sortWords.length}</span>
                        </div>
                        <p className="result-comment">
                            {score === sortWords.length 
                                ? "Maîtrise absolue du sujet. Votre vision est limpide."
                                : "Les contours de l'ombre restent flous. L'exploration continue."}
                        </p>
                        <button className="reset-btn" onClick={resetGame}>Réinitialiser le protocole</button>
                    </div>
                </div>
            )}
        </section>
    );
}