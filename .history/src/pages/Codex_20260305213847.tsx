import Hero from "../components/sections/Hero";
import Game from "../components/sections/Game"
import SortGame from "../components/sections/Sortgame";
import bgHorreur from "../assets/bg-horreur-decryptage.mp4";

export default function Codex() {
  return (
    <div className="Codex">
      <Hero
        videoSrc={bgHorreur}
        eyebrow="FRAGMENT / PHILOSOPHIQUE"
        titleTop="Le Mal"
        titleSpan="en perspective"
        description="Au-delà de la peur, une vérité. Nous interrogeons les ténèbres de l'âme à travers les systèmes de pensée de Nietzsche, Schopenhauer et Freud, pour comprendre pourquoi le monstre est parfois le seul être lucide."
        buttonLink="/codex"
        buttonLabel="Plongez dans le Codex"
      />
      <Game />
      <SortGame />
    </div>
)}