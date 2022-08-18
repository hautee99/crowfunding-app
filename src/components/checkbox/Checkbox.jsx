import React from "react";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5 cursor-pointer">
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center w-5 h-5 text-white rounded border-2 border-strock  ${
          checked
            ? "bg-primary border-primary"
            : "border-strock dark:border-text3"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          onChange={() => {}}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label onClick={onClick} className="font-medium text-text3">
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
