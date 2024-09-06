import React, { useEffect, useState } from "react";
import logo from './Images/tg logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80; 
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="fixed w-full py-4 px-6 text-sm z-50 h-[10vh]">
        <nav className="mx-auto max-w-5xl flex justify-between items-center p-4 bg-black/30 backdrop-blur-md shadow-lg rounded-xl">
          <div className="flex items-center space-x-6">
            <img
              src={logo}
              alt=''
              className="w-1/12 h-auto object-cover opacity-75"
            />
            <a
              href="#main"
              className="text-xl font-bold text-white hover:scale-110 transition-transform duration-300"
              aria-label="Go to Home"
            >
              ticketGURU
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end space-x-6">
            <ul role="menu" className="flex space-x-6">
              <li role="menuitem">
                <a
                  href="#demo"
                  className="text-white hover:text-gray-400"
                >
                  Preview
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#about"
                  className="text-white hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#highlights"
                  className="text-white hover:text-gray-400"
                >
                  Highlights
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#faqs"
                  className="text-white hover:text-gray-400"
                >
                  FAQs
                </a>
              </li>
            </ul>
            <button
              className="bg-customGreen font-bold text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-110"
              aria-label="Try Now"
            >
              Try Now
            </button>
          </div>
          <div className="md:hidden flex items-center justify-end space-x-6">
            <button
              className="bg-customGreen font-bold text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-110"
              aria-label="Menu"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center justify-center space-y-6 bg-black/30 backdrop-blur-md shadow-lg rounded-xl p-4">
            <ul role="menu">
              <li role="menuitem">
                <a
                  href="#demo"
                  className="text-white hover:text-gray-400"
                >
                  Preview
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#about"
                  className="text-white hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#highlights"
                  className="text-white hover:text-gray-400"
                >
                  Highlights
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#faqs"
                  className="text-white hover:text-gray-400"
                >
                  FAQs
                </a>
              </li>
            </ul>
            <button
              className="bg-customGreen font-bold text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-110"
              aria-label="Try Now"
            >
              Try Now
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;