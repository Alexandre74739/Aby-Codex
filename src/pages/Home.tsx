import './Home.css'

export default function Home() {
  return (
    <section className="home">
      <div className="home__hero container">
        <p className="home__eyebrow">TRANSMISSION 001</p>
        <h1 className="home__title">
          L'Horreur <br />
          <span>comme miroir</span>
        </h1>
        <p className="home__desc">
          Bienvenue dans Aby-Codex — un espace où la peur cesse d'être
          un frisson pour devenir une clef de lecture du monde intérieur.
        </p>
        <a href="/analyses" className="home__btn">
          <span>Commencer l'exploration</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}