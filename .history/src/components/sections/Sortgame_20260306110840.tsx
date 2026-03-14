import { useState } from 'react';
import { sortWords, type SortWord } from '../../data/concept';
import Badge from '../utils/Badge';
import './SortGame.scss';

export default function SortGame() {
    const [state, setState] = useState({
        index: 0,
        score: 0,
        feedback: null as { text: string; isCorrect: boolean } | null,
        history: [] as boolean[], // Pour une mini visualisation des derniers résultats
        isDone: false
    });

    const handleChoice = (choice: 'conscient' | 'inconscient') => {
        if (state.isDone) return;

        const currentWord = sortWords[state.index];
        const isCorrect = currentWord.correct === choice;
        
        const nextIndex = state.index + 1;
        const reachedEnd = nextIndex >= sortWords.length;

        setState(prev => ({
            ...prev,
            index: nextIndex,
            score: isCorrect ? prev.score + 1 : prev.score,
            feedback: { text: currentWord.explanation, isCorrect },
            history: [isCorrect, ...prev.history].slice(0, 5),
            isDone: reachedEnd
        }));
    };

    const progress = (state.index / sortWords.length) * 100;
    const currentWord = sortWords[state.index];

    return (
        <section className="diagnostic-engine">
            <header className="engine-header">
                <Badge eyebrow="SYSTÈME EXPERT" />
                <h2 className="engine-title">Sonde <span>Psychométrique</span></h2>
                <p className="engine-desc">
                    Analysez les impulsions sémantiques. Archivez chaque fragment dans la strate appropriée du Moi.
                </p>
            </header>

            <div className="engine-core">
                {/* Barre de progression ultra-fine style terminal */}
                <div className="scanner-track">
                    <div className="scanner-progress" style={{ width: `${progress}%` }} />
                    <div className="scanner-text">SCANNING: {state.index}/{sortWords.length}</div>
                </div>

                {!state.isDone ? (
                    <div className="interface">
                        <div className="display-module">
                            <div className="word-glitch" key={currentWord?.id}>
                                {currentWord?.word}
                            </div>
                            
                            <div className="feedback-module">
                                {state.feedback && (
                                    <div className={`status-msg ${state.feedback.isCorrect ? 'pos' : 'neg'}`}>
                                        <span className="code">{state.feedback.isCorrect ? '[ OK ]' : '[ ERR ]'}</span>
                                        <p>{state.feedback.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="control-module">
                            <button className="ctrl-btn c-btn" onClick={() => handleChoice('conscient')}>
                                <span className="btn-label">CONSCIENT</span>
                                <span className="btn-sub">LOGIQUE / MOI</span>
                            </button>
                            <button className="ctrl-btn i-btn" onClick={() => handleChoice('inconscient')}>
                                <span className="btn-label">INCONSCIENT</span>
                                <span className="btn-sub">PULSION / OMBRE</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="summary-module">
                        <div className="final-hex">
                            <span className="score-val">{state.score}</span>
                            <span className="score-max">/ {sortWords.length}</span>
                        </div>
                        <p className="verdict">Diagnostic : {state.score > 8 ? 'Équilibre psychique stable.' : 'Dissonances cognitives majeures détectées.'}</p>
                        <button className="reboot-btn" onClick={() => window.location.reload()}>REBOOT SYSTEM</button>
                    </div>
                )}
            </div>
        </section>
    );
}