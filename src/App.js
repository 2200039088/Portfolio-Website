import React from 'react';
import Home from './components/Navbar/Navbar'; // Correct import statement
import './App.css'; // Import CSS if needed
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  );
}

export default App;