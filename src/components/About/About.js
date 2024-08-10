import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='about'>
          <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt='Theme pattern' />
          </div>   
      <div className="about-sections">
        <div className="about-left">
            <img src='' alt='Profile pic' />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p> Hello, I’m Vineel, a CSE undergrad at KL University with a passion for full-stack development and cloud technologies. I’m an AWS Certified Cloud Practitioner and have a strong foundation in core CSE courses. I run a YouTube channel, “Review Tech,” where I share insights and reviews on various tech topics. Dedicated to learning and growing, I aim to make a positive impact in the tech community.</p>
                <p> Here is the list of technical skills I posses</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <hr />
                    <p>Programming: C++, Java, Python</p>
                </div>
                <div className="about-skill">
                    <hr />
                    <p>Web Development: HTML/CSS, JavaScript, React JS, Node JS</p>
                </div>
                <div className="about-skill">
                    <hr />
                    <p>Database Management: MySQL, MongoDB</p>
                </div>
                <div className="about-skill">
                    <hr />
                    <p>Version Control: Git, GitHub</p>
                </div>
                <div className="about-skill">
                    <hr />
                    <p>Cloud Technologies: AWS </p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="about-acheivements">
        <div className="about-acheivement">
            <h1>1+</h1>
            <p>CERTIFICATIONS COMPLETED<br/></p>
        </div>
        <hr/>
        <div className="about-acheivement">
            <h1>2+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-acheivement">
            <h1>3+</h1>
            <p>INTERNSHIPS COMPLETED<p>(Physical + Virtual)</p></p>
        </div>
      </div>
    </div>
  )
}

export default About