import React from "react";
import './Hero.css';
import profile_photo from '../../assets/profile_photo.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_photo} alt="Profile pic here" />
            <h1>
                <Typewriter
                    words={['I\'m Vineel Arepalli']}
                    loop={1}
                    cursor
                    cursorStyle=','
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <h2>
            <Typewriter
                    words={['CSE Undergrad, Class of 2026']}
                    loop={1}
                    cursor
                    cursorStyle='.'
                    typeSpeed={45}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <p> I'm a full stack developer and an aspiring DevOps Engineer</p>
            <div className="hero-action">

                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/arepallivineel/" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="hero-connect">Connect with me</div>
                </a>

                <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1Dio4KVmwIStjUr4h_Y5qbbPc-aXPNBR8/view?usp=sharing" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="hero-resume">My Resume</div>
                </a>
            </div>
        </div>
    );
}

export default Hero;