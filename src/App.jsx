import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
