import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/commom/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center gap-x-3 w-full py-4 mb-5 text-base justify-center border border-strock rounded-lg text-text2 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google"></img>
      <span cla>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onCLick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
