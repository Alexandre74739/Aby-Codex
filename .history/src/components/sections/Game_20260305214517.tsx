import { useState } from 'react';
import { concepts, Concept } from '../../data/';
import './Game.scss';

interface ConceptCardProps {
    concept: Concept;
    isActive: boolean;
    onClick: () => void;
}

// Sous-composant pour la liste à gauche
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
            <div className="game-overlay" />

            <div className="game-container">

                <div className="game-top">
                    <div className="top-meta">Exploration des courants</div>
                    <h1 className="top-title">
                        Architectes <span>de l'Ombre</span>
                    </h1>
                    <p className="top-description">
                        Cinq concepts fondateurs. Cinq clefs pour comprendre pourquoi
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
                            <div className="content-wrap">
                                <span className="content-label">{activeConcept.author}</span>
                                <h2 className="content-title">{activeConcept.name}</h2>
                                <div className="content-body">
                                    <p>{activeConcept.definition}</p>
                                </div>
                                <blockquote className="content-quote">
                                    "{activeConcept.quote}"
                                </blockquote>
                            </div>
                        ) : (
                            <div className="content-placeholder">
                                Sélectionnez un fragment de pensée pour l'analyser.
                            </div>
                        )}
                    </article>

                </div>
            </div>
        </section>
    );
}