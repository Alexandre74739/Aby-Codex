import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import Badge from '../utils/Badge';
import './SortGame.scss';

type Column = 'conscient' | 'inconscient';

export default function SortGame() {
    const [remaining, setRemaining] = useState<SortWord[]>([...sortWords]);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<{ text: string; correct: boolean } | null>(null);
    const [isDone, setIsDone] = useState(false);

    const handleDrop = (column: Column) => {
        if (!draggingId) return;
        const wordObj = remaining.find(w => w.id === draggingId);
        if (!wordObj) return;

        const isCorrect = wordObj.correct === column;
        if (isCorrect) setScore(prev => prev + 1);

        setFeedback({ text: wordObj.explanation, correct: isCorrect });

        const nextWords = remaining.filter(w => w.id !== draggingId);
        setRemaining(nextWords);
        setDraggingId(null);
        if (nextWords.length === 0) setIsDone(true);
    };

    const progress = ((sortWords.length - remaining.length) / sortWords.length) * 100;

    return (
        <section className="sort-game">
            <header className="game-header">
                <Badge eyebrow="DÉCRYPTAGE" />
                <h2 className="game-title">La Frontière <span>du Moi</span></h2>
                <p className="game-intro">Reliez chaque fragment de psyché à sa sphère d'origine.</p>
            </header>

            <div className="game-dashboard">
                <div className="stat-box">
                    <span className="label">SCORE</span>
                    <span className="value">{score}</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {!isDone ? (
                <div className="game-body">
                    <div className="feedback-slot">
                        {feedback && (
                            <div className={`message ${feedback.correct ? 'is-valid' : 'is-error'}`}>
                                {feedback.text}
                            </div>
                        )}
                    </div>

                    <div className="drag-container">
                        {remaining.length > 0 && (
                            <div
                                className={`draggable-card ${draggingId ? 'dragging' : ''}`}
                                draggable
                                onDragStart={() => setDraggingId(remaining[0].id)}
                                onDragEnd={() => setDraggingId(null)}
                            >
                                {remaining[0].word}
                            </div>
                        )}
                    </div>

                    <div className="drop-container">
                        <div className="zone" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('conscient')}>
                            <span>CONSCIENT</span>
                        </div>
                        <div className="zone" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('inconscient')}>
                            <span>INCONSCIENT</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="game-end">
                    <h3>Analyse Complétée</h3>
                    <p>Résultat : {score} sur {sortWords.length}</p>
                    <button className="btn-reset" onClick={() => window.location.reload()}>RECOMMENCER</button>
                </div>
            )}
        </section>
    );
}