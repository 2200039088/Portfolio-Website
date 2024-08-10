import React from 'react';
import './Project.css';
import project_data from '../../assets/project_data';
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div className='project'>
      <div className="project-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt='theme-pattern' />
      </div>

      <div className='project-container'>
        {project_data.map((project, index) => {
          return (
            <div
              key={index}
              className="project-item"
              onClick={() => window.open(project.s_link, "_blank")}
            >
              <img src={project.s_img} alt="Project pic" />
              <div className="project-overlay">
                <p className="project-name">{project.s_name}</p>
                <p className="project-subtitle">{project.s_subtitle}</p> 
                <p className="project-tech">{project.s_tech}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div 
        className='project-showmore' 
        onClick={() => window.open("https://github.com/2200039088", "_blank")}
      >
        <p>Show More</p>
        <img src={arrow_icon} alt='-->' />
      </div>
    </div>
  );
}

export default Project;