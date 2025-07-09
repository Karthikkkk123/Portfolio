import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science",
    university: "Amrita Vishwa Vidhyapeetham",
    location: "Vijayawada, Andhra Pradesh, India",
    period: "2022 - 2026",
    gpa: "8.5/10.0",
    status: "On going",
    description: "Specialized in Software Engineering with focus on web technologies, data structures, algorithms, and software design patterns. Active member of the Computer Science Society and Hackathon Club.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Object-Oriented Programming",
      "Software Design Patterns",
      "Computer Graphics",
      "Artificial Intelligence"
    ]
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and the foundation that shaped my technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Education Card */}
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="p-4 bg-blue-600 rounded-xl text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap size={32} />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {education.degree}
                    </motion.h3>
                    <motion.h4 
                      className="text-xl text-blue-600 font-semibold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {education.university}
                    </motion.h4>
                    
                    <motion.div 
                      className="flex flex-wrap gap-4 text-gray-600 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={18} />
                        <span>GPA: {education.gpa}</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award size={18} />
                      {education.status}
                    </motion.div>

                    <motion.p 
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      {education.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* University Image */}
              <motion.div 
                className="lg:w-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="college.jpg"
                  alt="University Campus"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>

            {/* Relevant Coursework */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <BookOpen className="text-blue-600" size={28} />
                  <h4 className="text-2xl font-bold text-gray-900">
                    Relevant Coursework
                  </h4>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.coursework.map((course, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-gray-700 font-medium">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;