import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


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

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass bg-brand-900/80' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#"
                    className="text-2xl font-bold bg-gradient-to-r from-brand-neon to-brand-purple bg-clip-text text-transparent cursor-none"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Innoviware
                    </motion.div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(link.path).scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative text-gray-300 hover:text-brand-neon transition-colors group py-2 ${activeSection === link.path.substring(1) ? 'text-brand-neon' : ''}`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-neon transform transition-transform duration-300 origin-left ${activeSection === link.path.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </motion.div>
                        </a>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full bg-brand-neon/20 border border-brand-neon/50 text-brand-neon hover:bg-brand-neon hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 bg-brand-900/95 backdrop-blur-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className={`text-gray-300 hover:text-brand-neon text-lg ${activeSection === link.path.substring(1) ? 'text-brand-neon' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        document.querySelector(link.path).scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 w-full my-2"></div>
                            <button className="w-full py-3 rounded-lg bg-brand-neon text-white font-medium shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
