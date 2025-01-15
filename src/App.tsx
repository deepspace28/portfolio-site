import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm flex flex-col items-center space-y-1">
        <p className="text-[#00ff9d]">Built with 💚</p>
        <p className="text-gray-400">by Jishnav</p>
      </footer>
    </div>
  );
}

export default App;