import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import Home from './pages/Home'
import Analyses from './pages/Analyses'
import Philosophie from './pages/Philosophie'
import Bibliotheque from './pages/Bibliotheque'
import APropos from './pages/APropos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="analyses" element={<Analyses />} />
          <Route path="philosophie" element={<Philosophie />} />
          <Route path="bibliotheque" element={<Bibliotheque />} />
          <Route path="a-propos" element={<APropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}