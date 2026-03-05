import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import './SortGame.scss';

type Column = 'conscient' | 'inconscient';

export default function SortGame() {
    const [remaining, setRemaining] = useState<SortWord[]>([...sortWords]);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [results, setResults] = useState<{ word: SortWord; correct: boolean }[]>([]);
    const [done, setDone] = useState(false);

    const handleDrop = (column: Column) => {
        if (!draggingId) return;
        const word = remaining.find(w => w.id === draggingId);
        if (!word) return;

        setResults(prev => [...prev, { word, correct: word.correct === column }]);
        setRemaining(prev => {
            const next = prev.filter(w => w.id !== draggingId);
            if (next.length === 0) setDone(true);
            return next;
        });
        setDraggingId(null);
    };

    const progress = (results.length / sortWords.length) * 100;

    return (
        <section className="sort-game">
            <div className="game-progress-container">
                <div className="progress-label">Analyse du psychisme : {results.length} / {sortWords.length}</div>
                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {!done ? (
                <div className="game-content">
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
                                <span className="zone-title">{col}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="game-result">
                    <p>Analyse terminée. Score : {results.filter(r => r.correct).length} / {sortWords.length}</p>
                    <button onClick={() => window.location.reload()}>Réinitialiser</button>
                </div>
            )}
        </section>
    );
}