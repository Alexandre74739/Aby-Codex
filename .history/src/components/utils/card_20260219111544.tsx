import { use } from 'react';
import './Card.scss';

interface CardProps {
    title: string;
    backTitle: string;
    backText: string;
}



export default function FlipCard({ title, backTitle, backText }: CardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div class
    )
}