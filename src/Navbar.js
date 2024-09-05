import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Smooth scrolling function for navbar links
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80; // Adjust this value based on your navbar height
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    // Attach the smooth scrolling function to all navbar links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <header className="fixed w-full pt-4 px-6 pb-4 text-sm z-50 h-[10vh]">
      <nav className="mx-auto max-w-5xl flex justify-between items-center p-4 bg-white/5 backdrop-blur-lg shadow-lg rounded-xl">
        <div className="flex items-center space-x-6">
          <a
            href="#main"
            className="text-xl font-bold text-green-500 hover:scale-110 transition-transform duration-300"
            aria-label="Go to Home"
          >
            ticketGURU
          </a>
          <ul className="hidden md:flex space-x-6" role="menu">
            <li role="menuitem">
              <a
                href="#demo"
                className="text-white hover:text-green-500"
              >
                Demo
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#about"
                className="text-white hover:text-green-500"
              >
                About
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#highlights"
                className="text-white hover:text-green-500"
              >
                Highlights
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#faqs"
                className="text-white hover:text-green-500"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-500 font-bold text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-110"
            aria-label="Try Now"
          >
            Try Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;