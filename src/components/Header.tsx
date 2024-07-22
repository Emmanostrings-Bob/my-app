

import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 p-4 z-50 transition-colors duration-300 ${scrolling ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolling ? 'text-black' : 'text-white'}`}>PHOTO<span className="text-gray-500">RUUM</span></h1>
        <nav>
          <ul className="flex space-x-10 items-center text-xl">
            <li><a href="#" className={`transition-colors duration-300 ${scrolling ? 'text-gray-800' : 'text-gray-300'} hover:text-gray-500`}>Home</a></li>
            <li><a href="#" className={`transition-colors duration-300 ${scrolling ? 'text-gray-800' : 'text-gray-300'} hover:text-gray-500`}>Get Featured</a></li>
            <li><a href="#" className={`transition-colors duration-300 ${scrolling ? 'text-gray-800' : 'text-gray-300'} hover:text-gray-500`}>Events</a></li>
            <li><a href="#" className={`transition-colors duration-300 ${scrolling ? 'text-gray-800' : 'text-gray-300'} hover:text-gray-500`}>Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600">Join Community</a>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white-300 dark:peer-focus:ring-black-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-black"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
