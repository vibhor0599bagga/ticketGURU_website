import React from 'react';
import womanImage from './Images/woman.jpg'; // Import the image
import MainFeatures from './MainFeatures';

const Main = () => {
  return (
    <main id="main" className="relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Full-width image that appears below the navbar */}
      <div className="w-full h-full absolute inset-0">
        <img
          src={womanImage}
          alt="Woman in museum"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      {/* Content section positioned over the image */}
      <section className="relative z-10 flex items-center justify-center h-full mt-24">
        <div className="max-w-4xl text-center px-8 py-10 bg-black/30 rounded-lg backdrop-blur-sm">
          <div className="">
            <h1 className="text-4xl font-bold text-white">Introducing</h1>
            <h2 className="text-6xl font-extrabold text-green-500 py-8">
              ticketGURU
            </h2>
            <p className="text-2xl font-light text-white mb-8">
              "Your Ticket to a Better Experience"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-xl font-medium text-white">
                Ready to book your e-ticket on WhatsApp?
              </span>
              <button className="text-lg text-white bg-green-500 px-3 py-2 rounded-md hover:scale-105 transition-transform duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MainFeatures component */}
      <div className="relative z-10 w-full flex justify-center items-center mt-12">
        <MainFeatures />
      </div>
    </main>
  );
};

export default Main;
