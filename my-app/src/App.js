import React from 'react';
import Header  from './component/Head/Header';
import './App.css';
import Home from './component/Hero/Home';
import Features from './component/Features/Features';
import Portfolio from './component/Portfolio/Portfolio';
import Resume from './component/Resume/Resume'
import Testionial from './component/Testimonial/Testionial'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact';
const App = () => {
  return (
    <>
    <Header/>
      <Home />
      <Features/>
      <Portfolio/>
      <Resume/> 
      <Testionial/>  
      <Blog/>  
      <Contact />
      </>
      
    
  )
}

export default App
