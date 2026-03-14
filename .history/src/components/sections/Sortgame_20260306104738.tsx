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

    const score = game.results.filter(r => r.isCorrect).length;
    const progress = (game.results.length / sortWords.length) * 100;

    return (
        <section className="sort-game">
            <header className="game-header">
                <Badge eyebrow="ANALYSE SYNAPTIQUE" />
                <h2 className="game-title">Les Abîmes de <span>l'Esprit</span></h2>
                <div className="game-intro">
                    <p>Selon la topique freudienne, notre esprit est divisé. Le <strong>Conscient</strong> filtre la réalité brute, tandis que l'<strong>Inconscient</strong> cache ce que nous ne saurions voir.</p>
                    <p className="instruction">Saisissez les concepts et déposez-les dans leur domaine originel.</p>
                </div>
            </header>

            <div className="game-ui">
                <div className="progress-zone">
                    <div className="stats">SÉQUENCE : {game.results.length} / {sortWords.length}</div>
                    <div className="bar"><div className="fill" style={{ width: `${progress}%` }} /></div>
                </div>

                {!game.isDone ? (
                    <div className="workspace">
                        <div className="feedback-panel">
                            {game.lastFeedback && (
                                <div className={`card-feedback ${game.lastFeedback.isCorrect ? 'valid' : 'invalid'}`}>
                                    <strong>{game.lastFeedback.isCorrect ? 'SYNCHRONISATION RÉUSSIE' : 'DISSONANCE DÉTECTÉE'}</strong>
                                    <p>{game.lastFeedback.text}</p>
                                </div>
                            )}
                        </div>

                        <div 
                            className="drag-item" 
                            draggable 
                            onDragStart={(e) => e.dataTransfer.setData('text', 'dragging')}
                        >
                            {game.remaining[0]?.word}
                        </div>

                        <div className="drop-zones">
                            <div className="zone" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('conscient')}>CONSCIENT</div>
                            <div className="zone" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop('inconscient')}>INCONSCIENT</div>
                        </div>
                    </div>
                ) : (
                    <div className="game-over">
                        <h3>Diagnostic Terminé</h3>
                        <div className="final-score">{score} / {sortWords.length}</div>
                        <p>{score > 8 ? "Votre perception de la psyché est chirurgicale." : "L'ombre obscurcit encore votre jugement."}</p>
                        <button onClick={() => window.location.reload()}>RÉINITIALISER LE PROTOCOLE</button>
                    </div>
                )}
            </div>
        </section>
    );
}