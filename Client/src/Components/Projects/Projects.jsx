// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import ChatbotDisplay from '../../Chatbot_display/Chatbot_display.jsx';
import data from '../../assets/project';

const Projects = () => {
  const [displayChatbot, setDisplayChatbot] = useState(false);
  const chatbotRef = useRef(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setDisplayChatbot(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openDisplay = (projectId) => {
    console.log("projectId:", projectId);
    setDisplayChatbot(true);
    setSelectedProjectId(projectId);
  };

  const closeDisplay = () => {
    setDisplayChatbot(false);
    setSelectedProjectId(null);
  };

  const onHandleClick = (item) => {
    if (item) {
      window.open(item);
    } else {
      alert("Not deployed yet please take a look to github");
    }
  };

  return (
    <div id="Projects" className='Projects-container'>
      <h1>Projects</h1>
      <div className='card'>
        {data.map((item) => (
          <div key={item.id} className="Projects-card">
            <img src={item.image} alt="" />
            <span>{item.title}</span>
            <div className='button'>
              <span onClick={() => onHandleClick(item.demo)}>Demo</span>
              <span onClick={() => window.open(item.Github)}>Github</span>
              <span onClick={() => openDisplay(item.id)}>Description</span>
            </div>
          </div>
        ))}
      </div>
      {displayChatbot && (
        <div ref={chatbotRef}>
          <ChatbotDisplay onClose={closeDisplay} projectId={selectedProjectId} />
        </div>
      )}
    </div>
  );
};

export default Projects;
