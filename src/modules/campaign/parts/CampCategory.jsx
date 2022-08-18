import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "Education", className = "text-xs mb-4" }) => {
  return (
    <div>
      <Link
        to="/"
        className={`flex items-center mb-4 gap-x-3 text-sm font-medium text-text3 ${className}`}
      >
        <IconFolder></IconFolder>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default CampCategory;
