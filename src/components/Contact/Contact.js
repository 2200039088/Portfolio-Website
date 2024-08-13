import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    // Validate form data
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    setError('');

    const object = {
      ...formData,
      access_key: process.env.REACT_APP_WEB_FORM_API_KEY
    };
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message + " Your mail will be viewed by Vineel shortly");
        // Clear form fields on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>So far, Did you hover on everything?</h1>
        <h2>Get in touch</h2>
        <img src={theme_pattern} alt='Theme-pattern' />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I am currently looking for internships and PPO's. I am looking for an environment where I can contribute to innovative projects which help me to grow personally and professionally</p>
          <div className="contact-details">

            <div className="contact-detail">
              <img src={mail_icon} alt='mail-logo' /> <p>vineelcse@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt='phone-logo' /> <p>+91 970 567 1274</p>                
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt='location-logo' /> <p>Andhra Pradesh, India</p>            
            </div>                    
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name='message'
            rows='10'
            placeholder='Enter your message here'
            value={formData.message}
            onChange={handleChange}
          />

          <button type='submit' className='contact-submit'>Submit <br /> (It's functional)</button>
          
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;