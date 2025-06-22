import React from 'react';
import { Trophy, Award, IndianRupee, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Infinity AI ",
      event: "Tredence Inc. Corporate Hackathon",
      date: "April 2025",
      description: "2nd place winner for building an AI-powered sustainability platform that helps users track and reduce their carbon footprint.",
      image: "../../public/images/Tredence.jpg",
      prizeAmount: "2,00,000"
    },
    {
      id: 2,
      title: "OLabs National Hackathon",
      event: "TechCrunch Disrupt Hackathon",
      date: "February 2025",
      description: "2nd place for developing a smart traffic management system using IoT sensors and machine learning algorithms.",
      image: "../../public/images/IMG_0727.jpg",
      prizeAmount: "1,00,000"
    },
    {
      id: 3,
      title: "KodeKurushektra",
      event: "Global FinTech Hackathon",
      date: "March 2025",
      description: "Winner for creating a blockchain-based microfinance platform that provides financial services to underbanked communities.",
      image: "../../public/images/Vit.jpg",
      prizeAmount: "25,000"
    },
    {
      id: 4,
      title: "GEN AI Hackathon",
      event: "IIT Hyderabad ",
      date: "March 2025",
      description: "Awarded for developing a mental health companion app with AI-powered mood tracking and personalized recommendations.",
      image: "../../public/images/IITH.jpg",
      prizeAmount: "15,000"
    },
    {
      id: 5,
      title: "Techathon",
      event: "Amrita Vishwa Vidhyapeetham",
      date: "January 2025",
      description: "Winner for developing an innovative solution to reduce food waste using machine learning and IoT technology.",
      image: "../../public/images/image.png",
      prizeAmount: "5,000"
    }
  ];

  const totalPrizePool = achievements.reduce((total, achievement) => {
    return total + parseInt(achievement.prizeAmount.replace(/[₹,]/g, ''));
  }, 0);

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition for innovative solutions and technical excellence in varioaus hackathons and competitions
          </p>
        </div>

        {/* Prize Pool Bar */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IndianRupee size={32} />
              <h3 className="text-3xl font-bold">Total Prize Pool</h3>
            </div>
            <div className="text-5xl font-bold mb-2">
            ₹{totalPrizePool.toLocaleString()}
            </div>
            <p className="text-xl opacity-90">
              Earned from {achievements.length} hackathon victories
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <IndianRupee size={16} />
                    {achievement.prizeAmount}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <h4 className="text-blue-600 font-semibold mb-3">
                  {achievement.event}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;