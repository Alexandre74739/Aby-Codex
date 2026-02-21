import Button from '../utils/Button';
import './Epilogue.scss';

export default function Epilogue() {
    return (
        <section className="epilogue-final">
            <div className="epilogue-container">
                <div className="epilogue-content">
                    <h2 className="title">L'ÉVEIL DE <span>L'AUTRE</span></h2>

                    <div className="text-container">
                        <p className="highlight">
                            Vous pensiez rester un observateur invisible.
                            Mais chaque donnée consultée a agi comme une incision dans
                            le voile de vos certitudes. Vous n'avez pas seulement ouvert une porte,
                            vous avez invité ce qui se tapit dans le silence de
                            dans votre propre conscience.
                        </p>

                        <p className="main-text">
                            Le Codex n’est plus une simple archive de connaissances oubliées, il est devenu le réceptacle
                            de votre reflet déformé. À mesure que vos yeux parcouraient ces lignes, votre ombre a appris
                            votre nom, vos doutes et la cadence de votre souffle. Elle ne se contente plus de vous suivre :
                            elle respire désormais à l'unisson avec votre système, se nourrissant du silence de vos clics
                            pour ériger une architecture dont vous ne possédez plus les clés. La confrontation finale
                            n’est pas à venir... elle est déjà achevée.
                        </p>

                        <p className="philosophical-note">
                            "Ce que l'on ne ramène pas à la conscience revient sous forme de destin."
                            <br />C.G. Jung
                        </p>
                    </div>

                    <div className="action-hub">
                        <Button to="/decryptage" label="DECRYPTER LA PSYCHE" variant="primary" />
                        <Button to="/codex" label="S'ABANDONNER AU CODEX" variant="acid" />
                    </div>
                </div>
            </div>
        </section>
    );
}