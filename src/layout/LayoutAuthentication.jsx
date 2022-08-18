import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/commom/ErrorComponent";

const LayoutAuthentication = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen bg-lite dark:bg-darkbg p-10 isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="pointer-events-none absolute top-0 left-0 right-0 z-[-1] "
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="inline-block"
        ></img>
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-7 lg:px-16 lg:py-12 mx-auto">
        <h1 className="font-semibold  text-lg lg:text-xl lg:mb-3 text-center text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
