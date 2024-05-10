import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import home from './Pages/Home/home'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Chatbot from './Chatbot/Chatbot'
import Chatbot_display from './Chatbot_display/Chatbot_display'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/> 
      <Chatbot/>
      <Projects/>
      <Contact/>
    
  
      

    </div>
  )
}

export default App