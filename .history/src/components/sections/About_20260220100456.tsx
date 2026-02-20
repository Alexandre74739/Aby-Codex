import './About.scss';


export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <header className="about-header">
          <span className="about-eyebrow">MANIFESTE</span>
          <h2 className="about-title">Ce que l'horreur <span>révèle</span></h2>
          <div className="about-content">
            <p>
              L'horreur n'est pas un genre. C'est un <strong>révélateur</strong>. 
              Ce que vous fuyez, ce que vous cherchez, ce que vous ressentez dans le noir... 
              tout cela parle de vous bien plus que vous ne l'imaginez.
            </p>
            <p>
              Aby-Codex est né de cette conviction : les œuvres qui nous terrifient sont aussi celles qui nous comprennent le mieux. 
              Derrière chaque monstre se cache une vérité psychologique ou philosophique que la lumière du jour peine à formuler.
            </p>
          </div>
        </header>

        <div className="about-cards-grid">
          <Card
            title="HORREUR"
            backTitle="Le Miroir Noir"
            backText="L'horreur agit comme un espace sécurisé pour confronter nos peurs primordiales sans péril réel."
          />
          <Card
            title="PHILOSOPHIE"
            backTitle="L'Existentialisme"
            backText="Explorer le néant et l'insignifiance de l'homme face à l'immensité cosmique de l'indicible."
          />
          <Card
            title="PSYCHOLOGIE"
            backTitle="L'Ombre de Jung"
            backText="Intégrer sa propre part d'ombre pour atteindre une complétude psychique souvent occultée."
          />
        </div>
      </div>
    </section>
  );
}