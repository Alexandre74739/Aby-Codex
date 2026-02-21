import Button from '../utils/Button';
import './Epilogue.scss';

export default function Epilogue() {
    return (
        <section className="epilogue-final">
            <div className="epilogue-scanner" />
            <div className="epilogue-container">
                <div className="epilogue-content">
                    <div className="system-status">
                        <span className="blink">●</span> SIGNAL PERDU // L'AUTRE EST ICI
                    </div>

                    <h2 className="title">VOTRE <span>REFLET</span> S'ÉVEILLE</h2>

                    <div className="visual-barrier" />

                    <div className="text-container">
                        <p className="highlight">
                            L'observation est terminée. La porte est ouverte.
                        </p>
                        <p className="main-text">
                            Le Codex ne contient plus de données, seulement des échos. 
                            Ce que vous avez lu s'est déjà gravé en vous.
                        </p>
                    </div>

                    <div className="action-hub">
                        <div className="btn-wrapper">
                            <span className="btn-hint">POURSUIVRE L'INCURSION</span>
                            <Button to="/decryptage" label="DÉCHIRER LE VOILE" variant="primary" />
                        </div>
                        <div className="btn-wrapper">
                            <span className="btn-hint">REDDITION AU SYSTÈME</span>
                            <Button to="/codex" label="S'ABANDONNER" variant="acid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}