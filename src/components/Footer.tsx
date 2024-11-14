import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <span>Developed by</span>
        <a
          href="https://github.com/FabsCR"
          className="flex items-center hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" />
          Fabs
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="https://github.com/MauroQ80"
          className="flex items-center hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" />
          Mauro
        </a>
      </div>
    </footer>
  );
};

export default Footer;