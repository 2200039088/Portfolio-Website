import React from 'react';
import './Experience.css';
import internship_data from '../../assets/internship_data';

const Experience = () => {
  return (
    <div className='experience'>
      <div className="experience-title">
        <h1>Experience</h1>
        <img src='' alt='theme-pattern' />
      </div>

      <div className="experience-container">
        {internship_data.map((internship, index) => {
          return (
            <div key={index} className="experience-format">
              <div className="experience-left">
                <h3>{internship.s_no}</h3>
              </div>
              <div className="experience-right">
                <h1>{internship.s_name}</h1>
                <h2>{internship.s_company}</h2>
                <p>{internship.s_date}</p>
                <p>{internship.s_desc}</p>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;