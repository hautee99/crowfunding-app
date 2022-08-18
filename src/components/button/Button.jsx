import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={`flex p-4 items-center justify-center text-base font-semibold rounded-xl text-white  ${className} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } min-h-[56px]`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
