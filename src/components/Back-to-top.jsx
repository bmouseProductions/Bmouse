import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./test.css";

const Back = () => {
  const [visible, setVisible] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="back-to-top fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 z-50"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Back;
