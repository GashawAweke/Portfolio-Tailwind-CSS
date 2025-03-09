import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default App;
