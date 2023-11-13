import React from "react";

const Button = ({ styles }) => {
  return (
    <a
      href="https://wa.me/+917573988915"
      target="_blank"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </a>
  );
};

export default Button;
