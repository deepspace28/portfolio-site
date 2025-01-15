import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, GraduationCap, Lightbulb } from 'lucide-react';

const experiences = [
  {
    title: "Artificial Intelligence Engineer",
    company: "Harvard University",
    period: "Nov 2024 - Present",
    type: "Part-time",
    location: "Remote",
    icon: <GraduationCap className="w-8 h-8 text-[#00ff9d]" />,
    responsibilities: [
      "Developed cutting-edge algorithms to advance machine learning capabilities",
      "Collaborated with top minds in the field to shape the future of AI",
      "Contributed to innovations at Harvard in AI development",
      "Gained hands-on experience in AI development"
    ]
  },
  {
    title: "Solar Engineer",
    company: "MittGroup",
    period: "Oct 2023 - Mar 2024",
    type: "Part-time",
    location: "Remote",
    icon: <Lightbulb className="w-8 h-8 text-[#00ff9d]" />,
    responsibilities: [
      "Designed and implemented PV systems for residential and commercial projects",
      "Conducted site assessments and feasibility studies",
      "Collaborated with cross-functional teams for system installation"
    ]
  },
  {
    title: "Research Intern",
    company: "Carnegie Mellon University",
    period: "Jul 2023 - Mar 2024",
    type: "Part-time",
    location: "Remote",
    icon: <Building2 className="w-8 h-8 text-[#00ff9d]" />,
    responsibilities: [
      "Conducted data analysis and experimental design for AI projects",
      "Enhanced Python skills for data modeling and research automation",
      "Presented findings to senior researchers",
      "Contributed to academic publications"
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-[#00ff9d]">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-[#112240] p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-6">
              <div className="bg-[#1d2d50] p-4 rounded-lg">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#00ff9d]">{exp.title}</h3>
                <p className="text-lg mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period} · {exp.type} · {exp.location}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;