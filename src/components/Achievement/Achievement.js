import React from 'react';
import './Achievement.css';
import achievement_data from '../../assets/achievement_data';

const Achievement = () => {
  return (
    <div className='achievement'>
      <div className="achievement-title">
        <h2> Hmmm, that’s not the whole story—he’s far from a bookworm!</h2>
        <h1>Achievements</h1>
        <img src='' alt='theme-pattern' />
      </div>

      <div className='achievement-container'>
        {achievement_data.map((achievement, index) => {
          return (
            <div key={index} className="achievement-item">
              <div className="achievement-overlay">
                <p className="achievement-name">{achievement.s_name}</p>
                <p className="achievement-desc">{achievement.s_desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievement;