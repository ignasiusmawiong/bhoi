import React from 'react';
import Hero from '../Components/Hero';
import Introduction from '../Components/Introduction';
import Process from '../Components/Process';
import Form from '../Components/Form';
import About from '../Components/About';
import Services from '../Components/Services';

const Container = () => {
  return (
    <div className='container'>
      <Hero />
      <Services/>
      <Introduction />
      <Process />
      <div id="contact-section">
        <Form />
      </div>
      <div id="about-section">
        <About />
      </div>
    </div>
  );
};

export default Container;
