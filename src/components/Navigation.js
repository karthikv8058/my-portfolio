import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['me', 'skills', 'experience', 'projects', 'education', 'contact'];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="text-yellow-300 font-bold text-lg">Karthik V</div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu items */}
        <div
          className={`flex-col md:flex md:flex-row md:static absolute left-0 w-full md:w-auto bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none transition-all duration-300 ease-in-out ${
            isOpen ? 'top-14 opacity-100' : 'top-[-300px] opacity-0 md:opacity-100'
          }`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsOpen(false);
              }}
              className="block md:inline-block text-yellow-300 font-semibold hover:text-blue-900 transition-colors duration-200 capitalize hover:bg-gray-100 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full text-left md:text-center"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

};

export default Navigation;
