import { useState } from 'react'
import { concepts } from '../data/codex'
import SortGame from '../components/utils/SortGame'
import './Game.scss'

export default function Game() {
  const [active, setActive] = useState<string | null>(null)
  const current = concepts.find(c => c.id === active) ?? null

  return (
    <div className="game">
      <div className="game-bg">
        <div className="codex-bg-glow" />
        <div className="codex-bg-grid" />
      </div>

      <div className="codex-container">

        <div className="codex-header">
          <span className="codex-label">CODEX — GRIMOIRE PSYCHOLOGIQUE</span>
          <h1 className="codex-title">
            Les Architectes<br /><span>de l'Ombre</span>
          </h1>
          <p className="codex-intro">
            Cinq concepts fondateurs. Cinq clefs pour comprendre pourquoi
            l'horreur nous fascine autant qu'elle nous révèle.
          </p>
        </div>

        <div className="codex-concepts">
          <div className="codex-concepts-list">
            {concepts.map(c => (
              <button
                key={c.id}
                className={`codex-concept-btn ${active === c.id ? 'active' : ''}`}
                onClick={() => setActive(active === c.id ? null : c.id)}
              >
                <span className="codex-concept-name">{c.name}</span>
                <span className="codex-concept-author">{c.author}</span>
              </button>
            ))}
          </div>

          <div className={`codex-concept-panel ${current ? 'visible' : ''}`}>
            {current ? (
              <>
                <p className="codex-concept-author-label">{current.author}</p>
                <h2 className="codex-concept-title">{current.name}</h2>
                <p className="codex-concept-def">{current.definition}</p>
                <blockquote className="codex-concept-quote">« {current.quote} »</blockquote>
              </>
            ) : (
              <p className="codex-concept-empty">Sélectionnez un concept pour l'explorer.</p>
            )}
          </div>
        </div>

        <div className="codex-game">
          <div className="codex-game-header">
            <span className="codex-label">EXERCICE PRATIQUE</span>
            <h2 className="codex-game-title">Conscient ou <span>Inconscient ?</span></h2>
            <p className="codex-game-intro">
              Faites glisser chaque concept dans la colonne qui lui appartient.
              Vos instincts en disent souvent plus que votre raison.
            </p>
          </div>
          <SortGame />
        </div>

      </div>
    </div>
  )
}