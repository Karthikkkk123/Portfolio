import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experience = {
    id: 1,
    company: "Amrita CREATE",
    position: "AI Intern",
    location: "Amritapuri, Kerala",
    period: "Jun 2025 - Present",
    type: "Internship",
    description: " Funded by Ministry of Education and Ministry of IT, Govt. of India",
    achievements: [
      "Developing RAG-based AI Teaching Assistant using JS ML libraries and OLabs content",
      "Implementing real-time student profiling with MySQL for personalized insights.",
      "Building analytics dashboard with Chart.js Node.js to track engagement.",
    ],
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {experience.position}
                </motion.h3>
                <motion.div 
                  className="flex items-center gap-2 text-blue-600 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Building size={18} />
                  <span className="font-semibold text-lg">{experience.company}</span>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-4 text-gray-600 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {experience.location}
                  </div>
                  <motion.span 
                    className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {experience.type}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {experience.description}
            </motion.p>

            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.achievements.map((achievement, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-gray-600">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;