import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science",
    university: "State University of Technology",
    location: "California, USA",
    period: "2019 - 2023",
    gpa: "3.8/4.0",
    status: "Graduated Magna Cum Laude",
    description: "Specialized in Software Engineering with focus on web technologies, data structures, algorithms, and software design patterns. Active member of the Computer Science Society and Hackathon Club.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Mobile App Development",
      "Object-Oriented Programming",
      "Software Design Patterns",
      "Computer Graphics",
      "Artificial Intelligence"
    ]
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and the foundation that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Education Card */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-xl text-white">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {education.degree}
                    </h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-4">
                      {education.university}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
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
                    </div>

                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                      <Award size={18} />
                      {education.status}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* University Image */}
              <div className="lg:w-80">
                <img
                  src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="University Campus"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-blue-600" size={28} />
                  <h4 className="text-2xl font-bold text-gray-900">
                    Relevant Coursework
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;