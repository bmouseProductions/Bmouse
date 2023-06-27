import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whats = () => {
  return (
    <a
      href="https://wa.me/5534999306776?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
      target="_blank"
      id="whatsapp"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4  bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors duration-300 z-50 whatsapp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default Whats;
