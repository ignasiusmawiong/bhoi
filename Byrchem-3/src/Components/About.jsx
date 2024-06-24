import React, { useState } from 'react';
import './About.css';
import learn_more from '../assets/learn_more.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='about'>
      <div className="about-img">
        <img src={learn_more} alt="Learn More" />
        <button onClick={handleClick}><span>Click here</span></button>
      </div>
      {isVisible && (
        <>
          <div className="about-us-text">
            <h2>Our Mission</h2>
            <p>
              At Byrchem, our mission is simple: to empower businesses by creating exceptional web experiences.
              We understand that a website is more than just a digital storefront—it's a crucial component of your
              brand identity and a powerful tool for engaging with your audience. Our goal is to deliver solutions
              that not only meet your needs but exceed your expectations, providing a seamless and impactful 
              online presence.
            </p>
          </div>
          <div className="about-us-text">
            <h2>Our Team</h2>
            <p>
              Our team is our greatest asset. Comprising seasoned developers, creative designers, and strategic
              thinkers, we bring a wealth of experience and a collaborative spirit to every project.Each member
              of our team is passionate about technology and committed to continuous learning, ensuring we
              stay at the forefront of industry trends and innovations.
            </p>
          </div>
          <div className="about-us-text">
            <h2>What we do</h2>
            <p>
              We offer a comprehensive suite of web development services tailored to meet the unique needs of
              each client.Our services include:
            
            <ul>
              <li><span>Custom Website Development:</span> Building responsive, user-friendly websites from the ground up.</li>
              <li><span>E-Commerce Solutions:</span> Creating powerful online stores that drive sales and enhance customer experience.</li>
              <li><span>Website Redesign:</span> Revamping existing sites to improve functionality, aesthetics, and user engagement.</li>
              <li><span>Content Management Systems:</span> Implementing CMS platforms that allow for easy content updates and management.</li>
            </ul>
            </p>
          </div>
          <div className="about-us-text">
            <h2>Why choose us</h2>
            <p>
              Choosing Byrchem means partnering with a team that is dedicated to your success.We take a personalized approach
              to each project, working closely with you to understand your goals and deliver a solution that is perfectly aligned with
              your vision. Our commitment to quality, transparency, and customer satisfaction sets us apart in the competitive world
              of web development.
            </p>
            <p>
              At Byrchem, we believe in building more than just websites; we believe in building lasting relationships. Let us help you
              navigate the digital landscape and achieve new heights of success.
            </p>
            <p>
              Explore the possibilities with Byrchem. Your vision, our expertise—together, we create the extraordinary.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
