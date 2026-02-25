import Hero from "../components/sections/Hero";
import bgHorreur from "../assets/bg-horreur-decryptage.mp4";

export default function Decryptage() {
  return (
    <div className="decryptage">
      <Hero
        videoSrc={bgHorreur}
        eyebrow="FRAGMENT / PHILOSOPHIQUE"
        titleTop="Le Mal"
        titleSpan="en perspective"
        description="Au-delà de la peur, une vérité. Nous interrogeons les ténèbres de l'âme à travers les systèmes de pensée de Nietzsche, Schopenhauer et Freud, pour comprendre pourquoi le monstre est parfois le seul être lucide."
        buttonLink="/codex"
        buttonLabel="Plongez dans le Codex"
      />
    </div>
  );
}
