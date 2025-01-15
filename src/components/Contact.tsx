import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#00ff9d]">Let's Connect</h2>
          <p className="text-gray-400">
            Have an exciting project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>

        <motion.div 
          className="bg-[#112240] p-8 rounded-lg shadow-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Mail className="text-[#00ff9d] w-6 h-6" />
            <a
              href="mailto:deepspace185@gmail.com"
              className="text-[#00ff9d] hover:underline"
            >
              deepspace185@gmail.com
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1d2d50] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1d2d50] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-[#1d2d50] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#00ff9d] text-[#0a192f] px-8 py-3 rounded-lg font-medium hover:bg-[#00ff9d]/90 transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;