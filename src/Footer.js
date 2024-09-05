import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-gray-700 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
        <div className="text-center text-gray-400">
          © 2024 ticketGURU. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
