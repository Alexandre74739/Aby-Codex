import './About.scss';
import Card from '../utils/Card';

export default function About() {


  return (
    <section className="about-section">
      <h2>Ce que l'horreur révèle</h2>
      <p>L'horreur n'est pas un genre. C'est un révélateur. Ce que vous fuyez, ce que vous cherchez, ce que vous ressentez dans le noir... tout cela parle de vous bien plus que vous ne l'imaginez.
        <br />Aby-Codex est né de cette conviction : les œuvres qui nous terrifient sont aussi celles qui nous comprennent le mieux. Derrière chaque monstre, chaque atmosphère oppressante, chaque fin sans issue se cache une vérité psychologique ou philosophique que la lumière du jour peine à formuler.</p>
      <div className="cards">
        <Card
        title="HORREUR"
        backTitle="L'Espace du refoulé"
        backText="L'horreur agit comme un espace sécurisé..."
      />
      <Card
        title="HORREUR"
        backTitle="L'Espace du refoulé"
        backText="L'horreur agit comme un espace sécurisé..."
      />
      <Card
        title="HORREUR"
        backTitle="L'Espace du refoulé"
        backText="L'horreur agit comme un espace sécurisé..."
      />
      </div>
      
    </section>
  );
}