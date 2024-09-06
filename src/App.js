import React, { useRef, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Demo from './Demo';
import About from './About';
import Highlights from './Highlights';
import FAQs from './FAQs';
import Footer from './Footer';

const App = () => {
  const myRef = useRef(null);

  useLayoutEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array so it only runs once when the component mounts

  return (
    <div className='bg-black'>
      <Navbar/>
      <div className='mb-36'>
        <div ref={myRef}><Main/></div>
      </div>
      <Demo />
      <About /> 
      <Highlights />   
      <FAQs /> 
      <Footer /> 
    </div>
  );
}

export default App;
