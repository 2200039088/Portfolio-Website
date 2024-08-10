import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img src='' alt='name-logo'/>
                <p>A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog </p>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p className="footer-bottom-left">© 2024 Vineel Arepalli. All rights reserved.</p>
            </div>

            <div className="footer-bottom-right">
                <p> Terms of Service </p>
                <p> Privacy Policy </p>
                <p> Contact </p>
            </div>


        </div>
      
    </div>
  )
}

export default Footer
