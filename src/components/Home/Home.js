import React from 'react';
import './Home.css';

function Home(){

    return(
        <div className='background-img'>
        <div className="caption-container">
          <h1 className="caption">Hey there,</h1>
          <h2 className="caption">Welcome to my digital world</h2>
          <h3 className="caption">Together, Let's</h3>
          <h3 className="caption">Learn - Apply - Share</h3>
          <h3 className="caption">How you wanna see me today?</h3>
        </div>
        <div className='button-container'>
          <button className='button student-button'>Student</button>
          <button className='button youtuber-button'>YouTuber</button>
        </div>
      </div>
    )

}

export default Home;

