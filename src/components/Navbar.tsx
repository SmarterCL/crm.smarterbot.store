'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Producto', path: '#producto' },
        { name: 'Cómo funciona', path: '#como-funciona' },
        { name: 'Precios', path: '#precios' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
                isScrolled ? 'glass-strong shadow-lg navbar-scrolled py-2' : 'bg-transparent navbar-transparent py-4'
            }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(10, 10, 12, 0.85)' : 'transparent',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
            }}
        >
            <div className="container">
                <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
                    <div className="d-flex flex-column leading-none">
                        <span className="fw-bold tracking-tight text-white fs-4">
                            Smarter<span className="text-primary">BOT</span>
                        </span>
                    </div>
                </Link>

                <button 
                    className="navbar-toggler border-0 shadow-none text-white" 
                    type="button" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show bg-dark p-4 rounded-4 mt-3 border border-secondary border-opacity-25' : ''}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.name}>
                                <Link
                                    href={link.path}
                                    className="nav-link px-3 py-2 text-white-50 hover-text-white transition-all fw-medium"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center">
                        <Link href="/register" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-primary transition-transform hover-scale d-flex align-items-center gap-2">
                            Crear cuenta
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
