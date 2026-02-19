import { useState } from 'react';
import './InputZone.scss';

export default function InputZone() {
    const [inputValue, setInputValue] = useState(0);

  return (
    <section className="input-zone">
      <button onClick={set[inputValue]}></button>
    </section>
  );
}