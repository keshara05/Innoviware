import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Play } from 'lucide-react';
import Button from '../components/ui/Button';
import ParallaxText from '../components/ui/ParallaxText';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse move effect for 3D card
    const cardRef = useRef(null);
    const useMouseParallax = (stiffness = 150, damping = 20) => {
        const x = useSpring(0, { stiffness, damping, mass: 1.2 });
        const y = useSpring(0, { stiffness, damping, mass: 1.2 });

        const handleMouseMove = (e) => {
            const rect = cardRef.current?.getBoundingClientRect();
            if (rect) {
                const width = rect.width;
                const height = rect.height;
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const xPct = mouseX / width - 0.5;
                const yPct = mouseY / height - 0.5;
                x.set(xPct * 20);
                y.set(yPct * 20);
            }
        }

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        }

        return { x, y, handleMouseMove, handleMouseLeave };
    };

    const { x: rotateY, y: rotateX, handleMouseMove, handleMouseLeave } = useMouseParallax();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-32"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Cinematic Background - Aurora Borealis Style */}
            <div className="absolute inset-0 w-full h-full bg-[#030303] z-0 overflow-hidden">
                {/* Aurora Layers */}
                <motion.div
                    animate={{
                        opacity: [0.4, 0.6, 0.4],
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-r from-brand-neon/20 via-color-neon-purple/20 to-transparent rounded-full blur-[120px] mix-blend-screen will-change-transform"
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -15, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-l from-color-hot-pink/15 via-color-cyber-blue/15 to-transparent rounded-full blur-[120px] mix-blend-screen will-change-transform"
                />
                <motion.div
                    animate={{
                        x: [-50, 50, -50],
                        y: [-20, 20, -20],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-color-acid-lime/5 rounded-full blur-[100px] mix-blend-screen will-change-transform"
                />

                {/* Grid */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030303]/50 to-[#030303]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier for fluid feel
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-8 backdrop-blur-md overflow-hidden whitespace-nowrap"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Pioneering the Digital Frontier
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter font-display">
                        WE CRAFT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-color-neon-purple animate-gradient-x bg-300% pb-2">
                            DIGITAL REALITY
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light border-l-2 border-white/10 pl-6">
                        Merging art and engineering to build software that defines the future.
                        Scalable, secure, and stunningly beautiful.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="primary"
                            className="h-14 px-10 text-lg shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] group relative overflow-hidden transition-transform active:scale-95"
                        >
                            <span className="relative z-10">Start Building</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon to-color-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                        </Button>

                        <button className="h-14 px-10 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-white font-medium flex items-center gap-3 group active:scale-95">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Play size={14} className="fill-white" />
                            </div>
                            <span>Showreel</span>
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-8">
                        {['Client Satisfaction', 'Projects Launched', 'Expert Support'].map((label, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h4 className="text-3xl font-bold text-white mb-1">
                                    {i === 0 && '98%'}
                                    {i === 1 && '50+'}
                                    {i === 2 && '24/7'}
                                </h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">{label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 3D Visual */}
                <div className="relative h-[600px] perspective-1000 hidden lg:block" ref={cardRef}>
                    <motion.div
                        style={{ y: y1, rotateX, rotateY }}
                        className="relative w-full h-full transform-style-3d will-change-transform transition-transform duration-200 ease-out"
                    >
                        {/* Main Holographic Card */}
                        <div className="absolute top-[10%] left-[10%] right-[10%] aspect-[16/10] bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden group">
                            {/* Gradient Border Overlay */}
                            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/5 mask-image-source" />

                            {/* Inner Content */}
                            <div className="relative h-full w-full p-8 flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                                        <div className="h-2 w-10 bg-white/5 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Main UI Area */}
                                <div className="flex-1 grid grid-cols-12 gap-6">
                                    <div className="col-span-3 space-y-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-2 w-full bg-white/5 rounded-full" />
                                        ))}
                                        <div className="mt-8 h-20 w-full bg-gradient-to-b from-white/5 to-transparent rounded-xl" />
                                    </div>
                                    <div className="col-span-9 bg-[#050505] rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                        {/* Chart/Graph Simulation */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-neon/20 to-transparent" />
                                        <svg className="w-full h-full absolute inset-0 text-brand-neon" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <path d="M0,80 Q25,50 50,70 T100,40 V100 H0 Z" fill="currentColor" fillOpacity="0.1" />
                                            <path d="M0,80 Q25,50 50,70 T100,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                        </svg>

                                        {/* Floating UI Elements */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-neon to-color-neon-purple" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>

                        {/* Floating 3D Icons */}
                        <motion.div
                            animate={{ y: [0, 40, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -right-4 top-[20%] p-5 bg-[#1a1a1a]/80 backdrop-blur-xl border border-brand-neon/30 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform-style-3d will-change-transform"
                        >
                            <Sparkles className="text-brand-neon w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -30, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-6 bottom-[25%] p-5 bg-[#1a1a1a]/80 backdrop-blur-xl border border-color-neon-purple/30 rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.3)] transform-style-3d will-change-transform"
                        >
                            <Zap className="text-color-neon-purple w-10 h-10 drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -z-10 top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-neon/10 to-color-neon-purple/10 blur-[80px] rounded-full will-change-transform"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Text */}
            <motion.div
                style={{ opacity, y: y2 }}
                className="absolute bottom-0 w-full pb-8 z-10 pointer-events-none select-none"
            >
                <ParallaxText baseVelocity={-2}>INNOVATION • PERFORMANCE • SECURITY • SCALABILITY •</ParallaxText>
            </motion.div>
        </section>
    );
};

export default Hero;
