import React from 'react';
import museum from './Videos/museum.mp4';
import woman from './Images/woman.jpg'; // Add this import
import MainFeatures from './MainFeatures';

const Main = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main id="main" className="relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Full-width background that appears below the navbar */}
      <div className="w-full h-full absolute inset-0">
        {isMobile ? (
          <img 
            src={woman} 
            alt="Museum background" 
            className="w-full h-full object-cover opacity-50"
          />
        ) : (
          <video 
            src={museum} 
            loop 
            autoPlay 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          ></video>
        )}
      </div>

      <section className="relative z-10 flex items-center justify-center w-full h-full mt-24 px-4">
        <div className="max-w-4xl w-full text-center px-4 sm:px-8 py-10 bg-black/50 rounded-lg backdrop-blur-md">
          <div>
            <h1 className="text-3xl sm:text-4xl text-white">Introducing</h1>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white pt-4 pb-6">
              ticketGURU
            </h2>
            <p className="text-xl sm:text-2xl font-light text-white mb-8">
              "Your Ticket to a Better Experience"
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-lg sm:text-xl font-medium text-white">
                Ready to book your e-ticket on WhatsApp?
              </span>
              <button className="text-md text-white bg-customGreen px-3 pt-1 pb-2 rounded-md hover:scale-105 transition-transform duration-300">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MainFeatures component */}
      <div className="relative z-10 w-full flex justify-center items-center mt-12 px-4">
        <MainFeatures />
      </div>
    </main>
  );
};

export default Main;