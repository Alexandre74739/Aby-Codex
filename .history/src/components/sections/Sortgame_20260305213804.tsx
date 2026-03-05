import { useState } from 'react'
import { sortWords, type SortWord } from '../../data/concept'
import './SortGame.scss'

type Column = 'conscient' | 'inconscient'
type Result = { word: SortWord; correct: boolean }

export default function SortGame() {
    const [remaining, setRemaining] = useState<SortWord[]>([...sortWords])
    const [dragging, setDragging] = useState<string | null>(null)
    const [results, setResults] = useState<Result[]>([])
    const [lastResult, setLastResult] = useState<Result | null>(null)
    const [done, setDone] = useState(false)

    const handleDrop = (col: Column) => {
        if (!dragging) return
        const word = remaining.find(w => w.id === dragging)
        if (!word) return

        const correct = word.correct === col
        const result = { word, correct }

        setLastResult(result)
        setResults(prev => [...prev, result])
        setRemaining(prev => {
            const next = prev.filter(w => w.id !== dragging)
            if (next.length === 0) setTimeout(() => setDone(true), 600)
            return next
        })
        setDragging(null)
    }

    const score = results.filter(r => r.correct).length

    const reset = () => {
        setRemaining([...sortWords])
        setResults([])
        setLastResult(null)
        setDone(false)
    }

    return (
        <div className="sort-game">

            <div className="codex-game">
          <div className="codex-game-header">
            <span className="codex-label">EXERCICE PRATIQUE</span>
            <h2 className="codex-game-title">Conscient ou <span>Inconscient ?</span></h2>
            <p className="codex-game-intro">
              Faites glisser chaque concept dans la colonne qui lui appartient.
              Vos instincts en disent souvent plus que votre raison.
            </p>
          </div>
        </div>

            {!done ? (
                <>
                    <div className="sort-game-status">
                        <span className="sort-game-count">
                            {results.length} / {sortWords.length}
                        </span>
                        {lastResult && (
                            <span className={`sort-game-feedback ${lastResult.correct ? 'correct' : 'wrong'}`}>
                                {lastResult.correct ? '✓' : '✗'} {lastResult.word.explanation}
                            </span>
                        )}
                    </div>

                    <div className="sort-game-words">
                        {remaining.slice(0, 3).map(word => (
                            <div
                                key={word.id}
                                className={`sort-word ${dragging === word.id ? 'dragging' : ''}`}
                                draggable
                                onDragStart={() => setDragging(word.id)}
                                onDragEnd={() => setDragging(null)}
                            >
                                {word.word}
                            </div>
                        ))}
                    </div>

                    <div className="sort-game-cols">
                        {(['conscient', 'inconscient'] as Column[]).map(col => (
                            <div
                                key={col}
                                className={`sort-col ${dragging ? 'active' : ''}`}
                                onDragOver={e => e.preventDefault()}
                                onDrop={() => handleDrop(col)}
                            >
                                <span className="sort-col-label">{col.toUpperCase()}</span>
                                <p className="sort-col-hint">
                                    {col === 'conscient'
                                        ? 'Ce que le Moi perçoit et contrôle'
                                        : 'Ce qui échappe à la conscience'}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="sort-result">
                    <span className="sort-result-label">RÉSULTAT FINAL</span>
                    <p className="sort-result-score">{score}<span>/{sortWords.length}</span></p>
                    <p className="sort-result-text">
                        {score === sortWords.length
                            ? "Votre inconscient n'a aucun secret pour vous."
                            : score >= sortWords.length * 0.7
                                ? "Votre Moi commence à percevoir les contours de l'Ombre."
                                : "L'inconscient vous résiste encore. C'est son rôle."}
                    </p>
                    <button className="sort-result-reset" onClick={reset}>RECOMMENCER</button>
                </div>
            )}
        </div>
    )
}