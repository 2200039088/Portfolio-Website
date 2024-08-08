import React, { useEffect } from "react";
import './Navbar.css';

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('transparent');
      } else {
        navbar.classList.remove('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <img src='' alt="Logo" />
      <ul className="nav-menu">
        <li> Home </li>
        <li> About Me </li>
        <li> Portfolio </li>
        <li> Achievements </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;