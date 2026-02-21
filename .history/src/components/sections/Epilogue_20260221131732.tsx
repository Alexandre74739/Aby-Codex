import { Link } from 'react-router-dom';
import './Epilogue.scss';

export default function Epilogue() {
  return (
    <section className="epilogue-final">
      <div className="epilogue-glow" />

      <div className="epilogue-container">
        <div className="epilogue-content">

          <span className="epilogue-label">TRANSMISSION FINALE</span>

          <h2 className="epilogue-title">
            L'ÉVEIL DE <span>L'AUTRE</span>
          </h2>

          <p className="epilogue-highlight">
            Vous n'êtes plus un simple observateur. En parcourant ces données,
            vous avez ouvert une porte que la conscience ne sait plus refermer.
          </p>

          <p className="epilogue-text">
            Le Codex n'est pas une bibliothèque de faits, c'est un miroir.
            Chaque mot que vous lisez ici est une partie de votre propre ombre
            qui commence à respirer.
          </p>

          <blockquote className="epilogue-quote">
            <p>« Ce que l'on ne ramène pas à la conscience revient sous forme de destin. »</p>
            <cite>C.G. Jung</cite>
          </blockquote>

          <div className="epilogue-actions">
            <Link to="/decryptage" className="epilogue-btn epilogue-btn--primary">
              <span>DÉCRYPTER LA PSYCHÉ</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link to="/codex" className="epilogue-btn epilogue-btn--acid">
              <span>S'ABANDONNER AU CODEX</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}