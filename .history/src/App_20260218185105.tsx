import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'; // Ton nouveau Header
import Nexus from './pages/Nexus';
import Decryptage from './pages/Decryptage'; // Renommé selon tes souhaits
import Codex from './pages/Codex';           // Renommé selon tes souhaits
import Qcm from './pages/Diagnostic';               // Nouvelle page pour "Je m'interroge"

export default function App() {
  return (
    <BrowserRouter>
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Nexus />} />
          <Route path="/decryptage" element={<Decryptage />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="diagnostic" element={<Qcm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}