import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experience = {
    id: 1,
    company: "TechCorp Solutions",
    position: "Full Stack Developer",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description: "Led development of web applications using React, Node.js, and AWS. Implemented microservices architecture and improved application performance by 40%.",
    achievements: [
      "Developed and maintained 5+ production applications",
      "Led a team of 3 junior developers",
      "Reduced API response time by 60% through optimization",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Built scalable microservices architecture",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "TypeScript", "GraphQL"]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Building size={18} />
                  <span className="font-semibold text-lg">{experience.company}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {experience.location}
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {experience.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;