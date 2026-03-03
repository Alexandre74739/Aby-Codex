import './Badges.scss';

interface LabelProps {
    eyebrow: string;
}

export default function Label({ eyebrow }: LabelProps) {
    return(
        <p className="hero-eyebrow">{eyebrow}</p>
    );
}