import Button from '../utils/Button';
import './Epilogue.scss';

export default function Epilogue() {
    return (
        <section className="epilogue-final">
            {/* Overlay de scanlines pour l'ambiance TV vintage corrompue */}
            <div className="scanline-overlay" />
            
            <div className="epilogue-container">
                <div className="epilogue-content">
                    
                    <div className="system-alert animate-flicker">
                        <span className="status-dot"></span>
                        <p className="mono-text">AVERTISSEMENT : INTÉGRITÉ DU MOI COMPROMISE</p>
                    </div>

                    <div className="title-wrapper">
                        <h2 className="title-base">L'ÉVEIL DE <span>L'AUTRE</span></h2>
                        <h2 className="title-glitch" aria-hidden="true">L'ÉVEIL DE <span>L'AUTRE</span></h2>
                    </div>

                    <div className="text-frame">
                        <p className="lead-text animate-reveal">
                            L'observation a pris fin. 
                            Le miroir ne reflète plus votre visage, mais ce qui attendait derrière.
                        </p>
                        <div className="divider animate-pulse-v" />
                        <p className="sub-text">
                            "Nul ne peut longtemps porter un masque devant lui-même et un autre 
                            devant la foule sans finir par ne plus savoir lequel est le vrai."
                        </p>
                    </div>

                    <div className="action-grid">
                        <div className="choice-block">
                            <span className="choice-label">FRAGMENTATION</span>
                            <Button to="/decryptage" label="DÉCHIRER LE VOILE" variant="primary" />
                        </div>
                        
                        <div className="choice-block">
                            <span className="choice-label">ASSIMILATION</span>
                            <Button to="/codex" label="RETOUR AU NÉANT" variant="acid" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Effet de grain de film sur toute la section */}
            <div className="noise-floor" />
        </section>
    );
}