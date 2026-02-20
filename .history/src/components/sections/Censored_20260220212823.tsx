import { useState, useEffect, useRef } from 'react';
import './Censored.scss';
import scareSound from '../../assets/jump-scare.mp3';

const HIDDEN_WORDS = [
    { id: 1, text: "votre propre destruction" },
    { id: 2, text: "monstre tapi dans l'ombre" },
    { id: 3, text: "la fin de votre raison" },
    { id: 4, text: "IL VOUS REGARDE" }
];

export default function Censored() {
    const [revealed, setRevealed] = useState<number[]>([]);
    const [isScared, setIsScared] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Pré-chargement de l'audio pour éviter tout délai
    useEffect(() => {
        audioRef.current = new Audio(scareSound);
        audioRef.current.volume = 1.0;
        audioRef.current.preload = "auto";
    }, []);

    const handleReveal = (id: number) => {
        if (!revealed.includes(id)) {
            const newRevealed = [...revealed, id];
            setRevealed(newRevealed);

            // Déclenchement INSTANTANÉ au dernier clic
            if (newRevealed.length === HIDDEN_WORDS.length) {
                audioRef.current?.play().catch(() => console.log("Audio bloqué"));
                setIsScared(true);

                // Reset automatique après le choc
                setTimeout(() => setIsScared(false), 2500);
            }
        }
    };

    return (
        <section className="censored-section">
            <div className="content-wrapper">
                <h2 className="section-title">L'ANATOMIE DE L'INCONSCIENT</h2>

                <p className="intro-text">
                    Selon Jung, ignorer son ombre revient à nourrir une entité autonome.
                    Le texte ci-dessous contient des vérités que votre esprit a tenté de censurer.
                    Touchez les zones sombres pour restaurer la réalité.
                </p>

                <div className="main-paragraph">
                    La confrontation avec soi-même commence par la reconnaissance de
                    <span className="censor-item" onClick={() => handleReveal(1)}>
                        {revealed.includes(1) ? HIDDEN_WORDS[0].text : "██████████████"}
                    </span>.
                    Chaque peur refoulée devient un
                    <span className="censor-item" onClick={() => handleReveal(2)}>
                        {revealed.includes(2) ? HIDDEN_WORDS[1].text : "██████████████"}
                    </span>.
                    Accepter cette part d'ombre est vital, sans quoi vous risquez
                    <span className="censor-item" onClick={() => handleReveal(3)}>
                        {revealed.includes(3) ? HIDDEN_WORDS[2].text : "██████████████"}
                    </span>.
                    Souvenez-vous d'une chose :
                    <span className="censor-item critical" onClick={() => handleReveal(4)}>
                        {revealed.includes(4) ? HIDDEN_WORDS[3].text : "██████████"}
                    </span>.
                </div>
            </div>

            {isScared && (
                <div className="jumpscare-overlay">
                    <div className="flash-screen"></div>
                    <h2 className="scare-text">DERRIÈRE TOI</h2>
                </div>
            )}
        </section>
    );
}