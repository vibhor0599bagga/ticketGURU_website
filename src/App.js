import React, { useRef, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Features from './MainFeatures';
import Demo from './Demo';
import About from './About';
import Highlights from './Highlights';
import FAQs from './FAQs';
import Footer from './Footer';

const App = () => {
  const myRef = useRef(null);

  useLayoutEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [myRef]);

  return (
    <div className='bg-black'>
      <Navbar/>
      <div className='mb-36'>
        <div ref={myRef}><Main/></div> 
        <Features/>
      </div>  
      <Demo />
      <About /> 
      <Highlights />   
      <FAQs /> 
      <Footer /> 
    </div>
  )
}

export default App;