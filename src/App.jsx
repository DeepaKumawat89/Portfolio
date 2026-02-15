import React from 'react';
import Navbar from './components/Navbar';
import GlobalBackground from './components/GlobalBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {
  return (
    <div className="relative min-h-screen text-text selection:bg-pista/20 selection:text-pista scroll-smooth">
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

    </div>
  );
}

export default App;
