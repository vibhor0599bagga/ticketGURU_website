import React from 'react';

const About = () => {
  return (
    <div>
      <div className="w-full sm:w-3/4 lg:w-1/4 h-24 overflow-hidden">
      </div>

      <div
        id="about" // Add this id to enable smooth scrolling
        className="max-w-4xl mx-auto text-center pt-6 pb-12 mb-10 px-4 sm:px-6 lg:px-10 rounded-lg bg-white/5"
      >
        <h1 className="text-3xl sm:text-4xl font-bold py-4 sm:py-6 text-customGreen1">About Us</h1>
        <h2 className="text-base sm:text-lg text-white leading-relaxed mb-6 sm:mb-8">
          Welcome to Heritage Yatri, where we’re transforming the entire travel experience. Our chatbot makes ticket booking easy and fast through WhatsApp, anytime, anywhere.
        </h2>
        <hr className="border-t-2 border-gray-300 mt-10 mb-4 sm:mt-14 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl font-semibold pt-4 pb-4 sm:pb-6 text-customGreen1">Our Mission</h1>
        <h2 className="text-base sm:text-lg text-white leading-relaxed mb-10 sm:mb-14">
          We’re here to make museum visits seamless. With advanced technology, we eliminate the hassles of traditional ticketing, letting you enjoy your visit without the wait.
        </h2>
        <hr className="border-t-2 border-gray-300 my-6 sm:my-8" />
        <h1 className="text-2xl sm:text-3xl font-semibold pt-6 pb-4 text-customGreen1">Our Vision</h1>
        <h2 className="text-base sm:text-lg text-white leading-relaxed">
          To modernize museum visits, making them more enjoyable and accessible for all.
        </h2>
      </div>
    </div>
  );
};

export default About;
