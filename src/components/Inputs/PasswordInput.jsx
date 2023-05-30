import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const PasswordInput = ({ value, onChange, label, placeholder }) => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="w-full">
      <label
        htmlFor={"password"}
        className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
      >
        <p> {label || "Password"} </p>
      </label>

      <div className="h-1" />
      <div className="flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
        <input
          type={passwordType}
          name={"password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Enter  password"}
          className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            togglePassword();
          }}
        >
          {passwordType === "password" ? (
            <EyeIcon className="h-5 w-5 text-grey-400 mx-4" />
          ) : (
            <EyeSlashIcon className="h-5 w-5 text-grey-400 mx-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
