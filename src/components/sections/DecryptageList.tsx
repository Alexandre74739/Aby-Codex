import { useEffect, useState } from "react";
import { supabase } from "../../data/supabaseClient";
import type { Character } from "../../data/character";
import CharacterCard from "../utils/CharacterCard";

export default function DecryptageList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchChars = async () => {
      // On ne récupère que slug et name pour la performance
      const { data } = await supabase
        .from("aby_codex_characters")
        .select("slug, name");

      if (data) setCharacters(data as unknown as Character[]);
    };
    fetchChars();
  }, []);

  return (
    <section className="decryptage-grid container">
      <h2 className="section-title">Archives : Dossiers Cliniques</h2>
      <div className="grid-container">
        {characters.map((char) => (
          <CharacterCard key={char.slug} character={char} />
        ))}
      </div>
    </section>
  );
}