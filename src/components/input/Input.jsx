import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
import classNames from "utils/classNames";

const Input = ({
  control,
  name,
  type = "text",
  error = "",
  placeholder = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative mb-6">
      <input
        id={name}
        type={type}
        //className
        className={classNames(
          "w-full py-4 px-6 text-sm border border-strock rounded-lg font-medium text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent",
          error.length > 0
            ? "border-error text-error"
            : "border-strock dark:border-strock",
          children ? "pr-16" : ""
        )}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none error-input">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorBoundary,
});
