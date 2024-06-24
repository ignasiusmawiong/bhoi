import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';
import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import successTick from '../assets/successTick.png.jpg'; // Import your tick image

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = 'service_5thdwk2';
    const templateId = 'template_89tgte8';
    const publicKeyId = 'siyxScmiGKV0yVqrA';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Byrchem Developer',
      message: message,
      reply_to: email, // Include reply_to for the client's email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKeyId)
      .then((response) => {
        console.log('Email sent successfully', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Failed to send email', error);
        setIsLoading(false);
      });
  };

  return (
    <div className='form-container'>
      <div className="form-con-left">
        <div className="form-text">
          <h2>Ready to Innovate?</h2>
        </div>
        <div className="form-text2">
          <p>Provide us with some information and any details you have in mind,</p>
          <p>and we'll respond within a few hours, we promise.</p>
        </div>
        <div className="form-text3">
          <span>byrchem@gmail.com</span>
          <span>+91 7805778319</span>
        </div>
        <div className="form-socials">
          <img src={whatsapp} alt="whatsapp" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
      <form className='form-con-right' onSubmit={handleSubmit}>
        <div className="box">
          <div className="name">
            Name
          </div>
          <input 
            type="text" 
            name="user_name" 
            placeholder='type here' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          
          <div className="name">
            Email Address*
          </div>
          <input 
            type="email" 
            name="user_email" 
            placeholder='type here' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          
          <div className="name">
            Project details
          </div>
          <textarea 
            name="message" 
            placeholder='Type here' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {isSubmitted ? (
            <button type="button" className="submit-button success">
              <img src={successTick} alt="success" />
            </button>
          ) : isLoading ? (
            <button type="button" className="submit-button loading">
              <div className="spinner"></div>
            </button>
          ) : (
            <button type="submit" className="submit-button">Send</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;