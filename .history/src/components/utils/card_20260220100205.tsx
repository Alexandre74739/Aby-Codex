import { useState } from 'react';
import './Card.scss';

interface CardProps {
    title: string;
    backTitle: string;
    backText: string;
}

export default function ard({ title, backTitle, backText }: CardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flipcard" onClick={() => setFlipped(!flipped)}>
            <div className={`flipcard-inner ${flipped ? 'flipped' : ''}`}>
                <div className="flipcard-front">
                    <h3>{title}</h3>
                </div>
                <div className="flipcard-back">
                    <h3>{backTitle}</h3>
                    <p>{backText}</p>
                </div>
            </div>
        </div>
    );
}