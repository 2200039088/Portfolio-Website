import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h2> Did you hover on everything ? </h2>
            <h1> Get in touch </h1>
            <img src='' alt='Theme-pattern' />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p> I am currently looking for internships and PPO's. I am looking for an environment where I can contribute to innovative projects which help me to grow personally and professionally</p>
                <div className="contact-details">

                    <div className="contact-detail">
                        <img src='' alt='mail-logo' /> <p> vineelcse@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src='' alt='phone-logo' /> <p> +91 9705671274</p>                
                    </div>

                    <div className="contact-detail">
                    <img src='' alt='location-logo' /> <p> Andhra Pradesh , India </p>            
                    </div>                    
            </div>
            </div>

            <form className="contact-right">
                <label htmlFor=""> Your Name </label>
                <input type="text" placeholder='Enter your name' name='name' />

                <label htmlFor=""> Your Email </label>
                <input type="email" placeholder='Enter your email' name='email' />

                <label htmlFor=""> Write your message here </label>
                <textarea name='message' rows='10' placeholder='Enter your message here' />

                <button type='submit' className='contact-submit'> Submit <br/> (It's functional) </button>

            </form>



        </div>





        

      
    </div>
  )
}

export default Contact
