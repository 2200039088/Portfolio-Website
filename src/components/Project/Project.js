import React from 'react'
import './Project.css'
import project_data from '../../assets/project_data'

const Project = () => {
  return (
    <div  className='project'>
        <div className="project-title">
            <h1>Projects</h1>
            <img src='' alt='theme-pattern' />
        </div>

        <div className='project-container'>
            {project_data.map((project, index) => {

                return <img key={index} src={project.s_img} alt="Project pic" />
                
                })}

         </div>

         <div className='project-showmore'>
            <p> Show More </p>
            <img src='' alt='-->' />
         </div>
        
        

        
    
        

      
    </div>
  )
}

export default Project
