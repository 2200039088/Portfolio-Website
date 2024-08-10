import React from 'react';
import './App.css'; // Import CSS if needed
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Certification from './components/Certification/Certification';
import Achievement from './components/Achievement/Achievement';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Project />
      <Certification />
      <Achievement />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;