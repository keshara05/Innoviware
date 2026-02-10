import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import ParallaxText from '../components/ui/ParallaxText';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-32">
            {/* Cinematic Background */}
            <div className="absolute inset-0 w-full h-full bg-brand-900 z-0">
                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-neon/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[100px]"
                />

                {/* Grid */}
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:60px_60px]" />

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/0 via-brand-900/50 to-brand-900" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-neon/20 bg-brand-neon/5 text-brand-neon text-sm font-medium mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
                        </span>
                        Next-Gen Software Solutions
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-display">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-brand-purple animate-gradient-x bg-300%">Digital Future</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed font-light">
                        Transforming ideas into powerful, scalable, and beautiful software experiences. We engineer clarity out of complexity.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" className="h-12 px-8 text-base shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                            View Our Work
                        </Button>
                        <button className="h-12 px-8 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">
                            Contact Sales
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            Available for new projects
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                            Global Reach
                        </div>
                    </div>
                </motion.div>

                {/* 3D Visual */}
                <div className="relative h-[600px] perspective-1000 hidden lg:block">
                    <motion.div
                        style={{ y: y1, rotateX: 5, rotateY: -10 }}
                        className="relative w-full h-full transform-style-3d will-change-transform"
                    >
                        {/* Main Floating Card */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[10%] right-[10%] aspect-video bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden group"
                        >
                            {/* Inner UI Mockup */}
                            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 h-2 w-32 bg-white/10 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 h-full">
                                <div className="col-span-1 bg-white/5 rounded-xl animate-pulse"></div>
                                <div className="col-span-2 space-y-4">
                                    <div className="h-8 w-3/4 bg-brand-neon/20 rounded-lg"></div>
                                    <div className="h-4 w-full bg-white/5 rounded-lg"></div>
                                    <div className="h-4 w-5/6 bg-white/5 rounded-lg"></div>
                                    <div className="h-32 w-full bg-gradient-to-br from-brand-purple/10 to-transparent rounded-xl border border-white/5 mt-4"></div>
                                </div>
                            </div>

                            {/* Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
                        </motion.div>

                        {/* Floating Feature Icons */}
                        <motion.div
                            animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -right-8 top-[30%] p-4 bg-brand-900/60 backdrop-blur-xl border border-brand-neon/30 rounded-2xl shadow-lg"
                        >
                            <Sparkles className="text-brand-neon w-8 h-8" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -25, 0], x: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-[30%] p-4 bg-brand-900/60 backdrop-blur-xl border border-brand-purple/30 rounded-2xl shadow-lg"
                        >
                            <Zap className="text-brand-purple w-8 h-8" />
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/20 to-brand-purple/20 rounded-full blur-[80px] -z-10 transform scale-75"></div>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Text */}
            <motion.div
                style={{ opacity, y: y2 }}
                className="absolute bottom-0 w-full pb-8 z-10 pointer-events-none"
            >
                <ParallaxText baseVelocity={-2}>INNOVATION • PERFORMANCE • SECURITY • SCALABILITY •</ParallaxText>
            </motion.div>
        </section>
    );
};

export default Hero;
