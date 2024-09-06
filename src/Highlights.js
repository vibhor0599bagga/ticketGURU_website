import React from 'react';

const Highlights = () => {
  return (
    <div id="highlights" className="max-w-5xl mx-auto p-8 py-28">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-customGreen1">Highlights</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">22+ Languages</h1>
          <h2 className="text-white">Communicate in your preferred language with ease.</h2>
        </div>
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">Accessibility</h1>
          <h2 className="text-white">Whatsapp provides easy, text-based and voice-based interaction for users.</h2>
        </div>
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">Quick Bookings</h1>
          <h2 className="text-white">Experience quick hassle-free bookings within minutes.</h2>
        </div>
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">User Friendly</h1>
          <h2 className="text-white">Navigate and book tickets easily through a simple, intuitive interface on WhatsApp.</h2>
        </div>
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">E-Tickets</h1>
          <h2 className="text-white">Ditch the paper—use modern, eco-friendly digital tickets.</h2>
        </div>
        <div className="border-2 p-5 rounded-lg shadow-lg bg-white/15">
          <h1 className="text-xl font-semibold text-gray-300 mb-2">Real-Time Updates</h1>
          <h2 className="text-white">Stay informed with instant notifications and alerts.</h2>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
