import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Indian Sign Language Detector",
      description: "Real-time Indian Sign Language detection system using OpenCV and a custom-trained CNN model. Detects hand gestures via webcam and classifies them into corresponding sign language alphabets.",
      image: "ISL.png",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
      githubUrl: "https://github.com/Karthikkkk123/Indian-Sign-Language-Detector"
    },
    {
      id: 2,
      title: "AgriTech",
      description: "Full-stack agritech platform that connects farmers with buyers. Features include crop listing, live market pricing, smart recommendations, and secure communication between stakeholders.",
      image: "AgriTech.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "LLM", "Voice Recognition", "JWT"],
      githubUrl: "https://github.com/Karthikkkk123/AgriTech"
    },
    {
      id: 3,
      title: "Sanjeevani",
      description: "AI-powered health diagnosis assistant that collects user symptoms and provides preliminary analysis using LLMs. Includes voice input, symptom filtering, and automated report generation.",
      image: "Sanjeevani.png",
      technologies: ["Python", "n8n", "Gemini API", "ElevenLabs", "LLM", "Voice Recognition"],
      githubUrl: "https://github.com/Karthikkkk123/Sanjeevani"
    },
    {
      id: 4,
      title: "Suraksha",
      description: "SURAKSHA is an AI-powered, all‑in‑one cybersecurity platform that automates vulnerability detection (e.g., scanning open ports, weak passwords) and provides AI‑driven remediation guidance alongside interactive educational tools like voice‑based learning and a conversational security agent.",
      image: "Suraksha.png",
      technologies: ["Python", "AI Agents", "Penetration Testing Automation", "Dashboards/Visualization", "Voice & Chat Interfaces"],
      githubUrl: "https://github.com/Karthikkkk123/Suraksha"
    },
    {
      id: 5,
      title: "Game Recommendation System using GNN",
      description: "A content-based PC game recommendation engine using Graph Neural Networks (GNNs). Users select up to 5 games, and the system predicts similar games based on graph relationships between game attributes.",
      image: "GNN.png",
      technologies: ["Python", "PyTorch Geometric", "GNN", "Google Colab", "Pandas", "NumPy"],
      githubUrl: "https://github.com/Karthikkkk123/Game-Recommendation-System-using-GNN"
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