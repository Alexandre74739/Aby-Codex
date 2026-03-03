import { Link } from "react-router-dom";
import type { Character } from "../../data/character";
import "./CharacterCard.scss";

type CardProps = {
  character: Pick<Character, "slug" | "name" | "image_url">;
};

export default function CharacterCard({ character }: CardProps) {
  return (
    <Link to={`/decryptage/${character.slug}`} className="char-card">
      <div className="char-card-image">
        {character.image_url && (
          <img src={character.image_url} alt={character.name} />
        )}
        <div className="char-card-overlay" />
      </div>
      <div className="char-card-content">
        <h3 className="char-name">{character.name}</h3>
        <span className="char-card-arrow">→</span>
      </div>
    </Link>
  );
}
