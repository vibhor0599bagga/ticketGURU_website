import React from 'react';
import womanImage from './Images/woman.jpg'; // Import the image

const Main = () => {
  return (
    <main id="main" className="w-full h-screen ">

      {/* Full-width image that appears below the navbar */}
      <div className="w-full h-[80vh] pt-24">
        <img
          src={womanImage}
          alt="Woman in museum"
          className="w-full h-full object-cover blur-sm opacity-75"
        />
      </div>

      {/* Rest of the content, which has a black background once scrolled */}
      <section className="w-full bg-black py-16">
        <div className="max-w-4xl text-center px-4 mx-auto">
          <div className="border-2 p-10 bg-white/10 rounded-lg">
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
    </main>
  );
};

export default Main;