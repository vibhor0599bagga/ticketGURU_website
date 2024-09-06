import React, { useState } from 'react';
import whatsapp from './Images/whatsapp.jpeg';
import woman from './Images/woman.jpg';

const Demo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [whatsapp, woman];
  const descriptions = [
    "This is an image of WhatsApp. WhatsApp is a popular messaging app used globally.",
    "This is an image of a woman. It represents diversity and empowerment."
  ];

  const handleNextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <div id="demo" className="w-full">
      <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold py-6 sm:py-10 text-customGreen1 text-center">Preview</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 border-2">
          
          {/* Text section */}
          <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
            <p className="text-base sm:text-lg text-gray-300">{descriptions[currentImage]}</p>
          </div>

          {/* Image section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="relative w-full max-w-sm">
              <img
                src={images[currentImage]}
                alt="Demo"
                className={`w-full h-auto object-cover transition-all duration-500 ease-in-out ${
                  fade ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </div>

            {/* Button to change image */}
            <button
              onClick={handleNextImage}
              className="mt-4 bg-customGreen1 text-white p-3 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;