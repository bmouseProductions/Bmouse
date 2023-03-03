import React from "react";

const Button = ({ styles, text, link, target }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] z-10`}
    >
      <a href={link} target={target}>
        {text}
      </a>
    </button>
  );
};

export default Button;
