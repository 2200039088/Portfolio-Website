import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './Navbar.css';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/vineel_name_logo.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu ] = useState('home')
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
  }

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
      <img src={logo} alt="Logo" />
      <img id='clickMenu' onClick={openMenu} src={menu_open}  alt="" className="nav-mob-open"/>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt='' className="nav-mob-close"/>
        <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p> </AnchorLink>{menu==='home'?<img src={underline} alt='' /> : <></> } </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p> </AnchorLink> {menu==='about'?<img src={underline} alt='' /> : <></> } </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu("portfolio")}>Portfolio</p> </AnchorLink> {menu==='portfolio'?<img src={underline} alt='' /> : <></> } </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#achievements'><p onClick={() => setMenu("achievements")}>Achievements</p> </AnchorLink> {menu==='achievements'?<img src={underline} alt='' /> : <></> }  </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p> </AnchorLink> {menu==='contact'?<img src={underline} alt='' /> : <></> }  </li>
      </ul>
    </div>
  );
}

export default Navbar;