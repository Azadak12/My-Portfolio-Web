
import React from 'react';
import Navbarr from './Components/Navbarr';
import Home from "./Components/Home";
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from "./Components/Projects"
function App() {
  return (
    <div>
      <Navbarr />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
