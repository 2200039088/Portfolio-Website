import React from 'react';
import './Achievement.css';
import achievement_data from '../../assets/achievement_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Achievement = () => {
  return (
    <div id='achievements' className='achievement'>
      <div className="achievement-title">
        <h1>Achievements</h1>
        <img src={theme_pattern} alt='theme-pattern' />
      </div>

      <div className='achievement-container'>
        {achievement_data.map((achievement, index) => {
          return (
            <div
              key={index}
              className="achievement-item"
              //onClick={() => certification.s_link && window.open(certification.s_link, "_blank")}
              onClick={() => achievement.s_link && window.open(achievement.s_link, "_blank")}
            >
              <img src={achievement.s_img} alt="Achievement pic" />
              <div className="achievement-overlay">
                <p className="achievement-name-overlay">{achievement.s_name}</p>
                <p className="achievement-desc">{achievement.s_desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div 
        className='achievement-showmore' 
        onClick={() => window.open("https://linkedin.com/in/arepallivineel/", "_blank")}
      >
        <p>Show More</p>
        <img src={arrow_icon} alt='-->' />
      </div>
    </div>
  );
}

export default Achievement;