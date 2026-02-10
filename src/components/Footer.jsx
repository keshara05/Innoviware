import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-900 border-t border-white/5 relative overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                <h1 className="text-[15vw] md:text-[20vw] font-bold text-white/[0.02] tracking-tighter font-display leading-none whitespace-nowrap">
                    INNOVIWARE
                </h1>
            </div>

            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-20 border-b border-white/5 pb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white tracking-tight font-display mb-4">
                                Innoviware<span className="text-brand-neon">.</span>
                            </h3>
                            <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                                Crafting digital experiences that define the future. We build software that empowers businesses and individuals to achieve more.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-neon hover:border-brand-neon transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-8 text-lg font-display">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Team', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-brand-neon transition-colors group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-brand-neon transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-bold mb-8 text-lg font-display">Get in Touch</h4>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-medium">Email Us</p>
                                <a href="mailto:innoviware41@gmail.com" className="text-xl md:text-2xl text-white hover:text-brand-neon transition-colors font-display break-all">
                                    innoviware41@gmail.com
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-medium">Call Us</p>
                                    <p className="text-white font-medium">+94 77 524 7113</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-medium">Location</p>
                                    <p className="text-white font-medium">Dehiattakandiya, SL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <p>© 2026 Innoviware. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
