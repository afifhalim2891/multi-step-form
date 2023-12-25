import React from "react";

const Button = ({ children, onClick }) => {
  let bgColor;
  let textColor;
  let hoverState;

  if (children === "Go back") {
    bgColor = "";
    textColor = "text-gray-400";
    hoverState = "hover:text-marineBlue";
  }
  if (children === "Next Step") {
    bgColor = "bg-marineBlue";
    textColor = "text-white";
    hoverState = "hover:bg-marineBlueLight";
  }
  if (children === "Confirm") {
    bgColor = "bg-purplishBlue";
    textColor = "text-white";
    hoverState = "";
  }

  return (
    <button
      className={`${bgColor}  ${textColor} ${hoverState} px-8 py-3 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
