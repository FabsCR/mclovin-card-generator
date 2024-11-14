import React from 'react';
import { FaGithub, FaPaypal } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-3 shadow-md">
      <div className="container mx-auto flex flex-col items-center space-y-2 text-center">
        <span className="text-gray-400 text-lg font-bold tracking-wide">Developed by</span>
        
        <div className="flex flex-wrap justify-center items-center space-x-3 text-base font-semibold">
          <a
            href="https://github.com/FabsCR"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-1" />
            Fabs
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <a
            href="https://github.com/MauroQ80"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-1" />
            Mauro
          </a>
        </div>

        <div className="mt-1">
          <a
            href="https://www.paypal.com/paypalme/fabianfdezfdez"
            className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200 text-base font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaypal className="mr-1" />
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;