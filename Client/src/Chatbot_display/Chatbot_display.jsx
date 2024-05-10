  import React, { useState,useEffect } from 'react';
  import './Chatbot_display.css';
  import loader from '../assets/loader.gif'

  const Chatbot_display = ({ onClose, projectId }) => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    let str = ''

  const  sendMessage2 = async(input) =>{
    setIsLoading(true); 
    const newMessages = [...messages, { text: input, sender: 'user' }];
      try {
        const response = await fetch('https://portfolio-website-10.onrender.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: str }),
        });
        const { reply } = await response.json();
        setMessages([...newMessages, { text: reply, sender: 'bot' }]);
      } catch (error) {
        console.error('Error:', error);
      }
      finally {
        setIsLoading(false); // Set loading to false when response is received
      }
    };

    useEffect(() => {
      console.log("Received projectId:", projectId);
      if (projectId == 1) {
         str ="Tell me about your image caption model";
        setMessages( [ { text: str, sender: 'user' }]);
        sendMessage2(str)
      }
      if(projectId ==2){
        str ="Tell me about your Movie recommendation System "
        setMessages( [ { text: str, sender: 'user' }]);
        sendMessage2(str)


      }
      if(projectId ==3){
        str = "Tell me about your E-commerce website project"
        setMessages( [{ text: str, sender: 'user' }]);
        sendMessage2(str)

      }
    }, [projectId]);
    



    const sendMessage = async (e) => {
      e.preventDefault()
      if (!input) return;

      setIsLoading(true); 
      
      const newMessages = [...messages, { text: input, sender: 'user' }];
      console.log(messages)
      setMessages(newMessages);
      setInput('');

      try {
        const response = await fetch('https://portfolio-website-10.onrender.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        const { reply } = await response.json();
        setMessages([...newMessages, { text: reply, sender: 'bot' }]);
      } catch (error) {
        console.error('Error:', error);
      }finally {
        setIsLoading(false); // Set loading to false when response is received
      }
    };

    return (
      
        <div className="chat-container">
          <div className='chatbot'>
            <span>Chatbot</span>
          <div className="chat-history">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <img className='gif' src={loader} alt="Loading..." />} 
          </div>

          <form onSubmit={sendMessage} className='button'>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
            />
            <button type="submit">Send</button>
          </form>
          {/* Render loading GIF when isLoading is true */}

          </div>
        
        </div>
      
    );
  };

  export default Chatbot_display;
