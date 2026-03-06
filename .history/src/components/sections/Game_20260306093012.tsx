import { useState } from 'react';
import { concepts, type Concept } from '../../data/concept';
import './Game.scss';

interface ConceptCardProps {
    concept: Concept;
    isActive: boolean;
    onClick: () => void;
}

const ConceptItem = ({ concept, isActive, onClick }: ConceptCardProps) => (
    <button
        className={`game-nav-item ${isActive ? 'is-active' : ''}`}
        onClick={onClick}
        aria-pressed={isActive}
    >
        <div className="nav-content">
            <span className="concept-name">{concept.name}</span>
            <span className="concept-author">{concept.author}</span>
        </div>
        <div className="nav-indicator" />
    </button>
);

export default function Game() {
    const [activeId, setActiveId] = useState<string | null>(concepts[0].id);
    const activeConcept = concepts.find(c => c.id === activeId) ?? null;

    return (
        <section className="game-manifesto">
            <div className="game-container">
                <div className="game-top">
                    <div className="top-meta">Systèmes de pensée — Codex</div>
                    <h1 className="top-title">
                        Architectes <span>de l'Ombre</span>
                    </h1>
                    <p className="top-description">
                        Cinq concepts fondateurs. Cinq clefs pour comprendre pourquoi le monstre de 
                        l'horreur nous fascine autant qu'elle nous révèle.
                    </p>
                </div>

                <div className="game-viewport">
                    <nav className="game-nav-list" aria-label="Liste des concepts">
                        {concepts.map(c => (
                            <ConceptItem
                                key={c.id}
                                concept={c}
                                isActive={activeId === c.id}
                                onClick={() => setActiveId(c.id)}
                            />
                        ))}
                    </nav>

                    <article className={`game-display-panel ${activeConcept ? 'is-visible' : ''}`}>
                        {activeConcept ? (
                            <div className="content-wrap" key={activeConcept.id}>
                                <div className="content-header">
                                    <span className="content-label">Auteur / {activeConcept.author}</span>
                                    <h2 className="content-title">{activeConcept.name}</h2>
                                </div>
                                <div className="content-body">
                                    <p>{activeConcept.definition}</p>
                                </div>
                                <div className="content-footer">
                                    <blockquote className="content-quote">
                                        "{activeConcept.quote}"
                                    </blockquote>
                                </div>
                            </div>
                        ) : (
                            <div className="content-placeholder">
                                <span className="blink">_</span> En attente de sélection
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </section>
    );
}