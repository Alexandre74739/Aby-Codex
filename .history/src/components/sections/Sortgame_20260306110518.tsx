import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import Badge from '../utils/Badge';
import './SortGame.scss';

export default function SortGame() {
    const [game, setGame] = useState({
        remaining: [...sortWords],
        results: [] as { word: SortWord; isCorrect: boolean }[],
        lastFeedback: null as { text: string; isCorrect: boolean } | null,
        isDone: false
    });

    const handleDrop = (category: 'conscient' | 'inconscient') => {
        const currentWord = game.remaining[0];
        if (!currentWord) return;

        const isCorrect = currentWord.correct === category;
        const newResults = [...game.results, { word: currentWord, isCorrect }];
        const newRemaining = game.remaining.slice(1);

        setGame({
            remaining: newRemaining,
            results: newResults,
            lastFeedback: { text: currentWord.explanation, isCorrect },
            isDone: newRemaining.length === 0
        });
    };

    const progress = (game.results.length / sortWords.length) * 100;

    return (
        <section className="sort-game">
            <header className="game-header">
                <Badge eyebrow="ANALYSE SYNAPTIQUE" />
                <h2 className="game-title">Les Abîmes de <span>l'Esprit</span></h2>
                <div className="game-intro">
                    <p>Déterminez si ces fragments appartiennent à la clarté du <strong>Conscient</strong> ou aux profondeurs de l'<strong>Inconscient</strong>.</p>
                </div>
            </header>

            <div className="game-container">
                <div className="progress-section">
                    <div className="bar-track"><div className="bar-fill" style={{ width: `${progress}%` }} /></div>
                    <div className="stats-label">SÉQUENCE COMPLÉTÉE : {game.results.length} / {sortWords.length}</div>
                </div>

                {!game.isDone ? (
                    <div className="play-zone">
                        {/* Zone Conscient en haut */}
                        <div className="drop-target top" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('conscient')}>
                            <span className="target-label">CONSCIENT</span>
                        </div>

                        {/* La carte au centre, très lisible */}
                        <div className="active-card-area">
                            <div 
                                className="main-card" 
                                draggable 
                                onDragStart={(e) => e.dataTransfer.setData('text', 'dragging')}
                            >
                                <span className="card-text">{game.remaining[0]?.word}</span>
                                <div className="drag-handle">::: GLISSER :::</div>
                            </div>
                            
                            <div className="feedback-layer">
                                {game.lastFeedback && (
                                    <div className={`feedback-msg ${game.lastFeedback.isCorrect ? 'valid' : 'invalid'}`}>
                                        <div className="status-line">{game.lastFeedback.isCorrect ? '✓ SYNCHRONISÉ' : '✕ DISSONANCE'}</div>
                                        <p>{game.lastFeedback.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Zone Inconscient en bas */}
                        <div className="drop-target bottom" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('inconscient')}>
                            <span className="target-label">INCONSCIENT</span>
                        </div>
                    </div>
                ) : (
                    <div className="game-over-panel">
                        <h3>ANALYSE TERMINÉE</h3>
                        <div className="score-display">{game.results.filter(r => r.isCorrect).length} <span>/ {sortWords.length}</span></div>
                        <button className="reset-action" onClick={() => window.location.reload()}>RÉINITIALISER LE SYSTÈME</button>
                    </div>
                )}
            </div>
        </section>
    );
}