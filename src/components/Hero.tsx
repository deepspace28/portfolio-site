import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Jishnav'],
    loop: 1,
    delaySpeed: 2000,
  });

  return (
    <motion.section 
      className="min-h-screen flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-[#00ff9d]">I'm</span>
          <br />
          <span className="text-[#e6f1ff]">{text}</span>
          <Cursor cursorColor="#00ff9d" />
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-6">I innovate with AI & Solar Technology</h2>
        <p className="max-w-2xl text-gray-400 mb-8">
          I'm a specialized engineer focused on advancing sustainable technology through AI innovation
          and solar energy solutions. Currently working on cutting-edge projects at Harvard University.
        </p>
        <motion.a 
          href="#contact"
          className="inline-block border-2 border-[#00ff9d] text-[#00ff9d] px-6 py-3 rounded-lg
                   hover:bg-[#00ff9d]/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;