import React from 'react';
import './Hero.css';
import hero_bg1 from '../assets/byrchem_bg.png';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero_bg1} alt="Hero Background" />
    </div>
  );
};

export default Hero;
