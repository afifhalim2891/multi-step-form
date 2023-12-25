import React from "react";
import "./SideBar.css";

const SideBar = ({ step }) => {
  return (
    <div className="col-start-1 col-end-2">
      <ul className="side-bar flex flex-col space-y-4">
        <Step num={1} step={step} text="Your info" />
        <Step num={2} step={step} text="Select Plan" />
        <Step num={3} step={step} text="Add-ons" />
        <Step num={4} step={step} text="Summary" />
      </ul>
    </div>
  );
};

const Step = ({ num, step, text }) => {
  return (
    <li className="p-2 flex items-center space-x-4">
      <div
        className={`${
          num === step ? "bg-white text-gray-600" : "text-white"
        } rounded-full border border-white h-8 w-8 flex items-center justify-center font-base text-lg `}
      >
        {num}
      </div>
      <div className="flex flex-col">
        <span className="uppercase text-white text-sm font-light">
          Step {num}
        </span>
        <span className="uppercase text-white text-sm font-bold tracking-widest">
          {text}
        </span>
      </div>
    </li>
  );
};

export default SideBar;
