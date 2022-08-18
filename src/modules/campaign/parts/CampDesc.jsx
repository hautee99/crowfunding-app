import React from "react";

const CampDesc = ({ children, className = "" }) => {
  return (
    <div className={`mb-4 text-sm text-text3 font-normal ${className}`}>
      {children}
    </div>
  );
};

export default CampDesc;
