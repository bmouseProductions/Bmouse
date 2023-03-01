import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] z-10`}
    >
      <a
        href="https://wa.me/5534997226999?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
        target="_blank"
      >
        Faça um orçamento
      </a>
    </button>
  );
};

export default Button;
