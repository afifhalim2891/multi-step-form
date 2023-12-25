import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 max-w-5xl grid grid-cols-4 gap-40">
      {children}
    </div>
  );
};

export default Container;
