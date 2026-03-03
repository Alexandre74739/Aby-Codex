import { useEffect, useState } from "react";
import { supabase } from "../../data/supabaseClient";
import type { Character } from "../../data/character";
import CharacterCard from "../utils/CharacterCard";
import "./DecryptageList.scss";

export default function DecryptageList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchChars = async () => {
      const { data } = await supabase
        .from("aby_codex_characters")
        .select("slug, name, image_url");

      if (data) setCharacters(data as unknown as Character[]);
    };
    fetchChars();
  }, []);

  return (
    <section className="decryptage-list">
      <div className="container">
        <h2>
          Archives : <span>Dossiers Cliniques</span>
        </h2>
        <p>
          Autopsies de la psyché et dossiers déclassés. Explorez les racines de
          l'abîme à travers une dissection philosophique de ces figures de
          l'ombre. Apprenez à les connaître, à les comprendre, et peut-être à
          apprécier leur monstre interne.
        </p>
        <div className="card">
          {characters.map((char) => (
            <CharacterCard key={char.slug} character={char} />
          ))}
        </div>
      </div>
    </section>
  );
}
