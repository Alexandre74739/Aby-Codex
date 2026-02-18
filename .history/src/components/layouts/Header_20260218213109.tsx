import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const navLinks = [
    { path: '/', label: 'NEXUS', sub: 'Accueil' },
    { path: '/decryptage', label: 'DECRYPTAGE', sub: 'Fondement' },
    { path: '/codex', label: 'CODEX', sub: 'Archives' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu lors d'un changement de page
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header >
            
        </header>
    );
}