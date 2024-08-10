import React from 'react';
import './Certification.css';
import certification_data from '../../assets/certification_data';

const Certification = () => {
  return (
    <div className='certification'>
      <div className="certification-title">
        <h1>Certifications</h1>
        <img src='' alt='theme-pattern' />
      </div>

      <div className='certification-container'>
        {certification_data.map((certification, index) => {
          return (
            <div
              key={index}
              className={`certification-format ${certification.s_name === 'Show More' ? 'show-more' : ''}`}
              onClick={() => certification.s_link && window.open(certification.s_link, "_blank")}
            >
              {certification.s_name !== 'Show More' ? (
                <>
                  <div className="certification-left">
                    <h3>{certification.s_no}</h3>
                  </div>
                  <div className="certification-right">
                    <h1>{certification.s_name}</h1>
                    <p>{certification.s_date}</p>
                  </div>
                </>
              ) : (
                <div className="show-more-button">
                  <p>{certification.s_name}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certification;