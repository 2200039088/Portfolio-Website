import React from 'react'
import Education_Data from '../../assets/education_data'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Education = () => {
  return (
    <div className='education'>
      <div className="education-title">
      <h1>Education</h1>
      <img src={theme_pattern} alt='theme-pattern' />
      </div>

      <div className="education-container">
      {Education_Data.map((education, index)=>{
        return <div key={index} className="education-format">
            <h3>{education.s_no}</h3>
            <h2>{education.s_name}</h2>
            <p>{education.s_desc}</p>
            <p>{education.s_grade}</p>
        </div>

      })}


      </div>

    </div>
      
  )
}

export default Education
