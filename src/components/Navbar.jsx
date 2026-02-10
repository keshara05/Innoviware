import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            const sections = ['home', 'services', 'team', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Services', path: '#services' },
        { name: 'Team', path: '#team' },
        { name: 'Contact', path: '#contact' },
    ];

    const scrollToSection = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 components-transition ${scrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div
                    className={`relative w-full transition-all duration-500 ease-out flex items-center justify-between px-6 ${scrolled
                        ? 'max-w-[90%] md:max-w-5xl rounded-full bg-brand-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] py-3'
                        : 'max-w-7xl bg-transparent border-transparent py-2'
                        }`}
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="relative group z-50 flex items-center gap-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-neon to-color-neon-purple flex items-center justify-center text-white font-bold text-xl font-display shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-300">
                            I
                        </div>
                        <span className={`text-2xl font-bold tracking-tight font-display transition-colors ${scrolled ? 'text-white' : 'text-white'} `}>
                            Innoviware<span className="text-brand-neon">.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className={`flex items-center gap-1 p-1 rounded-full ${scrolled ? 'bg-white/5 border border-white/5' : ''}`}>
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.path.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={(e) => scrollToSection(e, link.path)}
                                        className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-6 relative px-6 py-2.5 overflow-hidden rounded-full group bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-neon via-color-neon-purple to-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
                            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                Start Project <ChevronRight size={16} />
                            </span>
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-brand-900/95 z-40 flex flex-col items-center justify-center"
                    >
                        {/* Background Blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-color-neon-purple/20 rounded-full blur-[100px]" />

                        <div className="flex flex-col items-center gap-8 relative z-10">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={(e) => scrollToSection(e, link.path)}
                                    className={`text-4xl font-display font-medium ${activeSection === link.path.substring(1)
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-color-neon-purple'
                                        : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 px-8 py-4 bg-gradient-to-r from-brand-neon to-color-neon-purple text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            >
                                Start Your Project
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
