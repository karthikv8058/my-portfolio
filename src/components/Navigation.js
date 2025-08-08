import React from 'react';

const Navigation = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-3xl mx-auto flex justify-center gap-8 py-4">
        {['me', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="text-yellow-300 font-semibold hover:text-blue-900 transition-colors duration-200 capitalize hover:bg-gray-100 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
