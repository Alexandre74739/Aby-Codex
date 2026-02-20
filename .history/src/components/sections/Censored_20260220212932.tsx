import { useState, useEffect, useRef } from 'react';
import './Censored.scss';
import scareSound from '../../assets/jump-scare.mp3';

const HIDDEN_WORDS = [
  { id: 1, text: "une infection silencieuse" },
  { id: 2, text: "votre propre destruction" },
  { id: 3, text: "monstre tapi dans l'ombre" },
  { id: 4, text: "se nourrit de vos doutes" },
  { id: 5, text: "la fin de votre raison" },
  { id: 6, text: "une présence étrangère" },
  { id: 7, text: "IL EST DÉJÀ TROP TARD" }
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
  La confrontation avec soi-même n'est pas un acte de courage, c'est la constatation d'
  <span className="censor-item" onClick={() => handleReveal(1)}>
    {revealed.includes(1) ? HIDDEN_WORDS[0].text : "████████████████████"}
  </span>. 
  Nous passons notre vie à polir un masque social, tout en ignorant que derrière le plâtre commence 
  <span className="censor-item" onClick={() => handleReveal(2)}>
    {revealed.includes(2) ? HIDDEN_WORDS[1].text : "████████████████████"}
  </span>. 
  
  <br /><br />
  Chaque peur refoulée, chaque désir inavoué ne disparaît jamais vraiment ; il mute pour devenir un  
  <span className="censor-item" onClick={() => handleReveal(3)}>
    {revealed.includes(3) ? HIDDEN_WORDS[2].text : "████████████████████"}
  </span>. 
  Cette entité ne se contente pas de vous suivre, elle  
  <span className="censor-item" onClick={() => handleReveal(4)}>
    {revealed.includes(4) ? HIDDEN_WORDS[3].text : "██████████████████"}
  </span> jusqu'à ce que votre volonté s'effondre. 

  <br /><br />
  Accepter cette part d'ombre est vital, car la nier, c'est inviter  
  <span className="censor-item" onClick={() => handleReveal(5)}>
    {revealed.includes(5) ? HIDDEN_WORDS[4].text : "██████████████████"}
  </span>. 
  Au moment où vous lisez ces lignes, vous sentez peut-être  
  <span className="censor-item" onClick={() => handleReveal(6)}>
    {revealed.includes(6) ? HIDDEN_WORDS[5].text : "██████████████████"}
  </span> presser son souffle contre votre nuque. 

  <br /><br />
  Souvenez-vous d'une chose : 
  <span className="censor-item critical" onClick={() => handleReveal(7)}>
    {revealed.includes(7) ? HIDDEN_WORDS[6].text : "██████████████████████"}
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