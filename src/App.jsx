import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Team from './sections/Team';
import Contact from './sections/Contact';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <div className="bg-brand-800 min-h-screen text-white overflow-x-hidden cursor-none flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-neon origin-left z-[100]"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navbar />

      <main className="flex flex-col">
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
