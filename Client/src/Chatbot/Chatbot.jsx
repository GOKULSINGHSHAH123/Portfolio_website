import React, { useState, useEffect, useRef } from 'react';
import chatbotIcon from '../assets/chatbot.jpg'; // Ensure correct import path
import './Chatbot.css';
import ChatbotDisplay from '../Chatbot_display/Chatbot_display'; // Ensure correct import path

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
      <div className='chatbot-icon'>
        <img src={chatbotIcon} alt="Chatbot" onClick={toggleChat} />
      </div>
      {isOpen && (
        <div ref={chatbotRef}>
          <ChatbotDisplay />
        </div>
      )}
    </>
  );
};

export default Chatbot;
