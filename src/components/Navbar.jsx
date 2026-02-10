import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

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
    }, []);

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
            // lenient scroll for header offset if needed, or just let lenis handle it
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-brand-900/80 backdrop-blur-xl border-white/5 py-4'
                    : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="relative group z-50"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-neon to-brand-purple flex items-center justify-center text-white font-bold text-xl font-display shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            I
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight font-display">
                            Innoviware<span className="text-brand-neon">.</span>
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => scrollToSection(e, link.path)}
                            className="relative group py-2"
                        >
                            <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${activeSection === link.path.substring(1) ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                }`}>
                                {link.name}
                            </span>
                            {activeSection === link.path.substring(1) && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 -z-10 bg-white/5 rounded-lg -m-2 opacity-100" // active background
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-neon transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                        </a>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-6 py-2.5 bg-white text-brand-900 font-semibold rounded-full overflow-hidden transition-all hover:bg-brand-neon hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Project <ChevronRight size={16} />
                        </span>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white relative z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-brand-900/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={(e) => scrollToSection(e, link.path)}
                                    className={`text-3xl font-display font-medium ${activeSection === link.path.substring(1) ? 'text-brand-neon' : 'text-white/60'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 px-8 py-4 bg-brand-neon text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                            >
                                Start Your Project
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
