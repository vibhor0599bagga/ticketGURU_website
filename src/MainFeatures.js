//mainfeature
import React from 'react';

function Features() {
  return (
    <section className="mx-auto max-w-4xl text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black/30 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <div className="flex justify-center items-center p-2">
          <span className="text-lg font-medium">22+ Languages</span>
        </div>
        <div className="flex justify-center items-center p-2">
          <span className="text-lg font-medium">Secure Payment Gateway</span>
        </div>
        <div className="flex justify-center items-center p-2">
          <span className="text-lg font-medium">Available 24/7</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="text-xs text-white px-6 py-3 rounded-md hover: transform hover:scale-110 transition-transform duration-300">
          <a href="#highlights">Learn More</a>
        </button>
      </div>
    </section>
  );
}

export default Features;