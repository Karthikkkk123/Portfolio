import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/Karthikkkk123"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates using Socket.io. Built with React and Express.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Karthikkkk123"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Modern weather application with detailed forecasts and interactive charts. Built with React and OpenWeather API.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      githubUrl: "https://github.com/Karthikkkk123"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["Vue.js", "D3.js", "Python", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/Karthikkkk123"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <div className="flex">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;