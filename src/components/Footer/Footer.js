import React from 'react'
import './Footer.css'
import logo from '../../assets/vineel_name_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img src={logo} alt='name-logo'/>
                <p>Dear Recruiter, <br /> Congratulations in advance! <br/>You are about to bring 70 kilos of talent blended with awesomeness to your organization.<br/> Because ain't nobody like him. :)</p>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2024 Vineel Arepalli. <br/> All rights reserved.</p>
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
