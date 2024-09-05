import React from 'react';

const About = () => {
  return (
    <div
      id="about" // Add this id to enable smooth scrolling
      className="max-w-4xl mx-auto text-center pt-10 pb-20 my-12 px-6 rounded-lg bg-white/5"
    >
      <h1 className="text-4xl font-bold py-6 text-green-500">About Us</h1>
      <h2 className="text-lg text-white leading-relaxed mb-8">
        Welcome to Heritage Yatri, where we’re transforming the entire travel experience. Our chatbot makes ticket booking easy and fast through WhatsApp, anytime, anywhere.
      </h2>
      <hr className="border-t-2 border-gray-300 mt-14 mb-6" />
      <h1 className="text-3xl font-semibold pt-4 pb-6 text-green-500">Our Mission</h1>
      <h2 className="text-lg text-white leading-relaxed mb-14">
        We’re here to make museum visits seamless. With advanced technology, we eliminate the hassles of traditional ticketing, letting you enjoy your visit without the wait.
      </h2>
      <hr className="border-t-2 border-gray-300 my-8" />
      <h1 className="text-3xl font-semibold pt-6 pb-4 text-green-500">Our Vision</h1>
      <h2 className="text-lg text-white leading-relaxed">
        To modernize museum visits, making them more enjoyable and accessible for all.
      </h2>
    </div>
  );
};

export default About;
