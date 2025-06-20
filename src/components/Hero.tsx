import React from 'react';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Karthik</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Passionate developer with expertise in modern web technologies. 
                I love building innovative solutions and have won multiple hackathons. 
                Always eager to learn new technologies and take on challenging projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Karthikkkk123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                <Download size={20} />
                Resume
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={20} />
              <span>karthik@example.com</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Karthik"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;