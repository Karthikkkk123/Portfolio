import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;