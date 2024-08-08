import React from 'react';
import Home from './components/Navbar'; // Correct import statement
import './App.css'; // Import CSS if needed
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;