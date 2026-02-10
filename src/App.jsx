import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Team from './sections/Team';
import Contact from './sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-900 min-h-screen text-white overflow-x-hidden cursor-none flex flex-col selection:bg-brand-neon selection:text-white">
      <SmoothScroll />
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand-neon origin-left z-[100] shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navbar />

      <main className="flex flex-col relative z-0">
        <Hero />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
