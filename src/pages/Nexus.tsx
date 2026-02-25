import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Censored from "../components/sections/Censored";
import Epilogue from "../components/sections/Epilogue";
import bgHorreur from "../assets/bg-horreur.mp4";

function Nexus() {
  return (
    <div className="nexus">
      <Hero
        videoSrc={bgHorreur}
        eyebrow="FRAGMENT : PSYCHOLOGIQUE"
        titleTop="L'Horreur"
        titleSpan="comme miroir"
        description="Bienvenue dans Aby Codex, un espace où la peur cesse d'être un frisson pour devenir une clef de lecture du monde intérieur..."
        buttonLink="/decryptage"
        buttonLabel="Commencer l'exploration"
      />
      <About />
      <Censored />
      <Epilogue />
    </div>
  );
}

export default Nexus;
