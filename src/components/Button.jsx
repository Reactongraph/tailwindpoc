import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-sky-200  border-2 border-sky-200 rounded-[10px] outline-none ${styles} hover:bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-400 hover:text-primary `}
  >
    Get Started
  </button>
);

export default Button;
