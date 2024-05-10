import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

import './Contact.css'

const Contact = () => {
  return (
    <div id='Contact' className='Contact-container'>
        <h1>Get In Touch</h1>

        <div className='Contact'>
            <div className='information-container'>
                <h2> Let's Talk</h2>
                <p>I'm currently available to take new  projects, so feel free to send me a message about anythng that you want me to work on. you can contact me anytime </p>
                <div className='information'>
                    <img src={mail_icon} alt="" />
                    <span> gokulsinghshah041@gmail.com</span>

                </div>
                <div className='information'>
                    <img src={call_icon} alt="" />
                    <span>9667083414</span>

                </div>
                <div className='information'>
                    <img src={location_icon} alt="" />
                    <span>New-Delhi, ArjanGarh</span>

                </div>
            </div>

            <div className='enterDetails-container'>
                <div className='enterDetails'>
                    <span>Your Name</span>
                    <input type="text" placeholder='Enter yout name' />
                </div>
                <div className='enterDetails'>
                    <span>Your Email</span>
                    <input type="text" placeholder='Enter yout email' />
                </div>
                <div className='enterDetails 'id='message'>
                    <span>Write your message here</span>
                    <input type="text" placeholder='Enter yout message' />
                </div>

            </div>
        </div>
   </div>


  )
}

export default Contact