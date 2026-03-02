import { Link } from "react-router-dom";
import type { Character } from "../../data/character";

// On ne demande plus que le slug et le name
type CardProps = {
  character: Pick<Character, "slug" | "name">;
};

export default function CharacterCard({ character }: CardProps) {
  return (
    <Link to={`/decryptage/${character.slug}`} className="char-card">
      <div className="char-card-content">
        <h3 className="char-name">{character.name}</h3>
      </div>
    </Link>
  );
}