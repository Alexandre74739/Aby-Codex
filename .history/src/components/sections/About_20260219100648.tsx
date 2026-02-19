import { useState } from 'react';
import './InputZone.scss';

export default function About() {
    const [inputValue, setInputValue] = useState(0);

  return (
    <section className="about-section">
      <button onClick={() => setInputValue(inputValue + 1)}>{inputValue}</button>
    </section>
  );
}