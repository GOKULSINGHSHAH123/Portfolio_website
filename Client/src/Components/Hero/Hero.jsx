import React from 'react'
import logo from '../../assets/avatar.jpeg'
import TypingEffect from 'react-typing-effect';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Hero.css'

const Hero = () => {
  return (
    <div id='hero' className='hero-container'>

            <div className='hero'> 
            <img src={logo} alt="" id='hero' />
        <p>
            
        <div className='heading'>
        <p id='name'>Hello I'M Gokul Singh Shah</p> 
         <TypingEffect 
      text={["AI Enginner","Machine learning","Web developer"]}
      speed={100}
      eraseSpeed={50}
      eraseDelay={1000}
      typingDelay={100}
      cursor="|"
      />
        </div>
         

      
      <p>deeply passionate about machine learning and dedicated to exploring Gen AI.</p>

        <div className='internship'>
        <p >
        Actively seeking internship opportunities to apply my expertise and contribute to innovative projects.
        </p>
        </div>
        </p></div>
       

        <div className='buttons'>
           <span  onClick={() => setMenu("Contact")}><AnchorLink className='anchor-link' offset={50} href="#Contact">
            Contact me</AnchorLink></span>
           <span id='resume'>My resume</span>
        </div>
       
        
    </div>
  )
}

export default Hero