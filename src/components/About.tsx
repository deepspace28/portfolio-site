import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Brain, Sun } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-[#00ff9d]">About Me</h2>
      <div className="space-y-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          As a passionate innovator at the intersection of artificial intelligence and sustainable energy, 
          I bring a unique perspective to solving complex technological challenges. My journey in solar engineering 
          has equipped me with deep insights into renewable energy systems, while my AI research experience has 
          sharpened my analytical and problem-solving capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 bg-[#112240] rounded-lg"
            whileHover={{ y: -5 }}
          >
            <Sun className="w-10 h-10 text-[#00ff9d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solar Innovation</h3>
            <p className="text-gray-400">
              Pioneering sustainable energy solutions through advanced photovoltaic systems and optimization.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-[#112240] rounded-lg"
            whileHover={{ y: -5 }}
          >
            <Brain className="w-10 h-10 text-[#00ff9d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
            <p className="text-gray-400">
              Developing cutting-edge machine learning solutions for complex technological challenges.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-[#112240] rounded-lg"
            whileHover={{ y: -5 }}
          >
            <Zap className="w-10 h-10 text-[#00ff9d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tech Innovation</h3>
            <p className="text-gray-400">
              Bridging the gap between theoretical research and practical applications in sustainable tech.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;