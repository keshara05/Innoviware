import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-900 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-neon to-brand-purple bg-clip-text text-transparent mb-4">
                            Innoviware
                        </h3>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Crafting digital experiences that define the future. We build software that empowers businesses and individuals to achieve more.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-neon/20 transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Team', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>No 215 Hungamalagama</li>
                            <li>Dehiattakandiya, TC 32150</li>
                            <li>innoviware41@gmail.com</li>
                            <li>+ 94 775247113</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 Innoviware. All rights reserved.</p>
                    <div className="flex items-center gap-1 mt-4 md:mt-0">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Innoviware Team
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
