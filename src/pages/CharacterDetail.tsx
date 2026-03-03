import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../data/supabaseClient";
import type { Character } from "../data/character";
import "./CharacterDetail.scss";

export default function CharacterDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [char, setChar] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFullData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("aby_codex_characters")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) throw error;
        if (data) setChar(data as Character);
      } catch (err) {
        console.error("Erreur de récupération :", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchFullData();
  }, [slug]);

  if (loading)
    return <div className="loading">Accès aux serveurs en cours...</div>;
  if (!char) return <div className="error">Dossier introuvable.</div>;

  return (
    <section className="char-detail-page">
      <div className="container">
        <div className="detail-header">
          <h1 className="char-name">{char.name}</h1>
          <p>"{char.quote}"</p>
          <div className="origin">
            <p className="name-tag">{char.origin}</p>
            <span className="type-tag">{char.type}</span>
          </div>
        </div>

        <div className="history-section">
          <h2 className="section-title">Origines Déclassées</h2>
          <p className="history-text">{char.histoire}</p>
        </div>

        <div className="analysis-grid">
          <div className="analysis-section">
            <h3 className="section-title">
              Analyse <span>Psychologique</span>
            </h3>
            <p className="analysis-text">{char.analysis_text}</p>
          </div>

          <div className="expertise-section">
            <h3 className="section-title">
              Analyse <span>Structurelle</span>
            </h3>

            <div className="interpretation-container">
              <div className="expertise-group">
                <h4 className="expertise-label">Systèmes Philosophiques</h4>
                <ul className="expertise-list philo">
                  {char.philosophers?.map((p) => (
                    <li key={p} className="expertise-item">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="expertise-group">
                <h4 className="expertise-label">Concepts Psychiatriques</h4>
                <ul className="expertise-list psycho">
                  {char.psycho_concepts?.map((c) => (
                    <li key={c} className="expertise-item">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
