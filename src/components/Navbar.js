import React from "react";
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src='' alt="Logo" />
      <ul className="nav-menu">
        <li> Home </li>
        <li> About Me </li>
        <li> Education </li>
        <li> Portfolio </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>

    </div>
  );
}

export default Navbar;