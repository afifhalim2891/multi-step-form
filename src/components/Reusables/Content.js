import React from "react";

const Content = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto p-10 h-5/6 text-marineBlue">
      {children}
    </div>
  );
};

export default Content;
