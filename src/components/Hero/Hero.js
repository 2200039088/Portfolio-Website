import React from "react";
import './Hero.css';
import profile_photo from '../../assets/profile_photo.png'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_photo} alt="Profile pic here" />
            <h1><span> I'm Vineel Arepalli </span> <br/> CSE Undergrad, Class of 2026 </h1>
            <p> I'm a full stack developer and an aspiring DevOps Engineer</p>
            <div className="hero-action">

                
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/arepallivineel/" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="hero-connect">Connect with me</div>
            </a>
          
            
            <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/17M8Gyoe9Psgs4_OhQrVY9FYtPSO6Kke2/view?usp=share_link" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="hero-resume">My Resume</div></a>
            </div>
        </div>
    );
}

export default Hero;