import React from "react";
import './Hero.css';
import profile_photo from '../../assets/profile_photo.png'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_photo} alt="Profile pic here" />
            <h1><span> I'm Vineel Arepalli </span>, <br/> CSE Undergrad, Class of 2026 </h1>
            <p> I'm a full stack developer and an aspiring DevOps Engineer</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a href="https://www.linkedin.com/in/arepallivineel/" style={{ textDecoration: 'none', color: 'white' }}>Connect with me</a>
                </div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
}

export default Hero;