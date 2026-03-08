import Hero from "../components/sections/Hero";
import Game from "../components/sections/Game"
import bgHorreur from "../assets/bg-horreur-codex.mp4";

export default function Codex() {
  return (
    <div className="Codex">
      <Hero
        videoSrc={bgHorreur}
        eyebrow="FRAGMENT / PSYCHOLOGIQUE"
        titleTop="Disséquer"
        titleSpan="l'indicible"
        description="Le Mal n'est pas une absence de lumière, mais une présence ignorée. Plongez dans les strates du Codex pour déterrer les vérités occultées par la morale. Des pulsions freudiennes au nihilisme de Schopenhauer, confrontez-vous aux fondations de votre propre chaos."
        buttonLink="/diagnostic"
        buttonLabel="Lancer le diagnostic"
      />
      <Game />
    </div>
  );}