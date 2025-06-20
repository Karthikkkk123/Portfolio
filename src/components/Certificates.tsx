import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2023",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "AWS-CSA-2023-001",
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "November 2023",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "GCP-PD-2023-002",
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      date: "October 2023",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "META-FE-2023-003",
      verifyUrl: "#"
    },
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "September 2023",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "AZ-900-2023-004",
      verifyUrl: "#"
    },
    {
      id: 5,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "August 2023",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "DCA-2023-005",
      verifyUrl: "#"
    },
    {
      id: 6,
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "July 2023",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentialId: "CKA-2023-006",
      verifyUrl: "#"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, certificates.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications & Licenses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-96 md:h-[500px]">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold mb-4 w-fit">
                      <Award size={18} />
                      Certificate
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {cert.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <Calendar size={18} />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-6">
                      Credential ID: {cert.credentialId}
                    </div>
                    <a
                      href={cert.verifyUrl}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
                    >
                      <ExternalLink size={18} />
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                index === currentIndex ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">{cert.date}</div>
            </div>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isAutoPlaying 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;