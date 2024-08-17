import React from "react";
import { FaWhatsapp, FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl font-extrabold mb-4 md:mb-0 cursor-pointer">
        Crypto<span className="text-blue-500">Tracker</span>
      </h1>
      <div className="flex text-3xl gap-4">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-400 transition-colors" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-500 transition-colors" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
