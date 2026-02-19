import './App.scss';
import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Nexus from './pages/Nexus';
import Decryptage from './pages/Decryptage';
import Codex from './pages/Codex';
import Diagnostic from './pages/Diagnostic';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => { cursor.classList.add('hovering'); ring.classList.add('hovering'); };
    const onLeave = () => { cursor.classList.remove('hovering'); ring.classList.remove('hovering'); };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    const targets = document.querySelectorAll('a, button, [data-hover]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Nexus />} />
            <Route path="/decryptage" element={<Decryptage />} />
            <Route path="/codex" element={<Codex />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}