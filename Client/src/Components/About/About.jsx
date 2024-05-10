import React, { useEffect } from 'react';
import './About.css';
import about_photo from '../../assets/about-image.png';
import TypingEffect from 'react-typing-effect';

const About = () => {

  return (
    <div id='about' className='about-container'>

      <div className='about'>
        <img src={about_photo} alt="About Me" />

      </div>
      
      <div className='about-me'>
        <h1>About Me</h1>
        <p>Welcome to my portfolio! I'm Gokul Singh Shah, currently pursuing my Bachelor's degree in Technology at Sushant University in Gurgaon. As a second-year student, I'm deeply passionate about the intersection of technology and creativity, particularly in the realms of machine learning (ML) and generative artificial intelligence (AI).</p>
        <p>Throughout my academic journey, I've been actively involved in projects related to ML and AI. These experiences have not only deepened my technical skills but also reinforced my passion for exploring the endless possibilities of ML and generative AI.</p>
      </div>
    </div>
  );
};

export default About;
