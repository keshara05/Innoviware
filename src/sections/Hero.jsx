import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import ParallaxText from '../components/ui/ParallaxText';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Aurora Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-brand-900">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-tr from-brand-neon/20 to-brand-purple/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(-90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-brand-purple/20 to-brand-neon/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-900/80 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-brand-neon/30 text-brand-neon text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
                        </span>
                        INNOVATING THE FUTURE
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 font-display tracking-tight">
                        Building Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-brand-purple to-pink-500 animate-gradient-x bg-300%">Experiences</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
                        We craft modern, high-performance software solutions that empower businesses to thrive in the digital age.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button variant="primary" className="shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] text-lg px-8 py-4">
                            Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Visual Content */}
                <div className="relative h-[500px] md:h-[700px] flex items-center justify-center perspective-1000">
                    <motion.div
                        style={{ y: y1, rotateY: -10, rotateX: 5 }}
                        className="relative w-full h-full transform-style-3d"
                    >
                        {/* Floating Cards Animation */}
                        <motion.div
                            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-[15%] left-[5%] w-[220px] glass rounded-2xl p-6 flex flex-col items-center justify-center border border-brand-neon/30 z-20 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                        >
                            <div className="p-4 bg-brand-neon/10 rounded-full mb-4 ring-1 ring-brand-neon/50">
                                <Code className="w-10 h-10 text-brand-neon" />
                            </div>
                            <span className="text-white font-bold text-xl font-display">Clean Code</span>
                            <div className="w-full h-1.5 bg-white/10 mt-4 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="w-1/2 h-full bg-brand-neon"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] right-[0%] w-[200px] glass rounded-2xl p-6 flex flex-col items-center justify-center border border-brand-purple/30 z-30 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                        >
                            <div className="p-4 bg-brand-purple/10 rounded-full mb-4 ring-1 ring-brand-purple/50">
                                <Cpu className="w-10 h-10 text-brand-purple" />
                            </div>
                            <span className="text-white font-bold text-xl font-display">AI Powered</span>
                            <div className="flex gap-1.5 mt-4">
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [12, 24, 12] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-1.5 bg-brand-purple rounded-full"
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: y2 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[30%] right-[15%] w-[180px] h-[180px] rounded-full border border-white/5 border-t-brand-neon border-r-brand-purple opacity-60 z-10"
                        />

                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[40%] left-[40%] w-[100px] h-[100px] bg-brand-neon rounded-full blur-[60px] -z-10"
                        />

                        {/* Central Glow */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <div className="w-[400px] h-[400px] bg-gradient-to-tr from-brand-neon to-brand-purple rounded-full opacity-20 blur-[100px] animate-pulse"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 w-full z-20 opacity-50 mix-blend-overlay pointer-events-none">
                <ParallaxText baseVelocity={-5}>INNOVATION • TECHNOLOGY • FUTURE • DESIGN •</ParallaxText>
            </div>
        </section>
    );
};

export default Hero;
