import * as React from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SelectCountry = ({
  name,
  label,
  errors,
  inputWidth = "flex-1",
  onChange,
  required,
  value,
  options,
}) => {
  const inputRef = React.useRef(null);

  // const handleClick = () => {
  //   if (inputRef && inputRef.current) inputRef.current.focus();
  // };

  return (
    <div className={`${inputWidth}`}>
      <p className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2">
        {label}
      </p>
      <div className="h-1" />

      <label
        htmlFor={name}
        className={`border border-gray-100  px-4 py-3 rounded-lg focus-within:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter flex w-full justify-between  ${
          errors && errors[name] ? "border-error-400" : "border-gray-100"
        }`}
      >
        <select
          id={name}
          ref={inputRef}
          aria-label={name}
          name={name}
          onChange={onChange}
          value={value}
          required={required}
          className="focus:outline-none w-3/4 bg-gray-0"
        >
          {options}
        </select>
        <ChevronDownIcon className="h-5" />
      </label>
      <div className="h-1" />

      {errors && (
        <p className="text-xs font-medium text-error-400">{errors[name]}</p>
      )}
    </div>
  );
};

export default SelectCountry;
