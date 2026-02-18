import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Nexus from './pages/Nexus';
import Decryptage from './pages/Decryptage';
import Codex from './pages';
import Diagnostic from './pages/Diagnostic';

export default function App() {
  return (
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
    </BrowserRouter>
  );
}