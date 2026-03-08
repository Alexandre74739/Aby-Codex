import { useState } from "react";
import Badge from "../components/utils/Badge";
import {
  diagnosticQuestions,
  diagnosticResults,
  type Profile,
} from "../data/diagnostic";
import "./Diagnostic.scss";

export default function Diagnostic() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Profile, number>>({
    abyssal: 0,
    ombre: 0,
    deterministe: 0,
    existentialiste: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  const handleChoice = (profile: Profile) => {
    const newScores = { ...scores, [profile]: scores[profile] + 1 };
    setScores(newScores);
    if (step + 1 < diagnosticQuestions.length) setStep(step + 1);
    else setIsFinished(true);
  };

  const reset = () => {
    setStep(0);
    setIsFinished(false);
    setScores({ abyssal: 0, ombre: 0, deterministe: 0, existentialiste: 0 });
  };

  const winner = isFinished
    ? (Object.entries(scores).reduce((a, b) =>
        a[1] > b[1] ? a : b,
      )[0] as Profile)
    : null;

  const result = winner ? diagnosticResults[winner] : null;
  const current = diagnosticQuestions[step];

  return (
    <div className="diagnostic">
      <section className="quiz-section">
        <div className="quiz-intro">
          <Badge eyebrow="FRAGMENT : INTROSPECTIF" />
          <h1>
            Quel est votre <span>Profil Abyssal</span> ?
          </h1>
          <p className="quiz-description">
            Six questions pour révéler votre rapport à l'ombre, à la peur et à
            la conscience. Répondez à l'instinct.
          </p>
        </div>

        {!isFinished ? (
          <div className="quiz-container">
            <div className="quiz-top">
              <span className="step-label">
                {step + 1} / {diagnosticQuestions.length}
              </span>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{
                    width: `${((step + 1) / diagnosticQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <h2 className="question-text">{current.text}</h2>

            <div className="options-grid">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  className="option-card"
                  onClick={() => handleChoice(opt.profile as Profile)}
                >
                  <span className="card-index">0{i + 1}</span>
                  <p>{opt.text}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="results-view">
            <div className="result-card">
              <span className="sub">{result!.sub}</span>
              <h2>{result!.title}</h2>
              <p className="result-philosophy">{result!.philosophy}</p>
              <p>{result!.desc}</p>
              <ul className="result-traits">
                {result!.traits.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <button className="reset-btn" onClick={reset}>
                RÉINITIALISER
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
