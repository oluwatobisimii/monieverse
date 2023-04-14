import * as React from "react";

const CustomInput = ({
  className,
  containerStyle,
  errors,
  disabled,
  icon,
  inputStyle,
  name,
  inputWidth = "w-full",
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  value,
  label,
  labelIcon,
  wrapperStyle,
}) => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2"
        >
          {label}
          {labelIcon}
        </label>

        <div className="h-1" />
        <input
          ref={inputRef}
          aria-label={name}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          className={`border border-gray-100  px-4 py-3 rounded-lg focus:outline-none focus:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter ${inputWidth}`}
        />
        <div className="h-1" />
        {errors && (
          <p className="text-xs font-medium text-error-400">{errors[name]}</p>
        )}
      </div>
    </>
  );
};

export default CustomInput;
