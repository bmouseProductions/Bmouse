import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles, text, link, target }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] z-10`}
    >
      <Link to={link} target={target}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
