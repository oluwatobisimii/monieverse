import { CheckIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

const PasswordInputwithValidation = ({
  password,
  setPassword,
  validationLength,
  setValidationLength,
  validationUpperCase,
  setValidationUpperCase,
  validationSpecialCharacter,
  setValidationSpecialCharacter,
  errors,
}) => {
  // Password Validation
  //   const [validationLength, setValidationLength] = useState(false);
  //   const [validationUpperCase, setValidationUpperCase] = useState(false);
  //   const [validationSpecialCharacter, setValidationSpecialCharacter] =
  useState(false);
  useEffect(() => {
    password.length >= 8
      ? setValidationLength(true)
      : setValidationLength(false);

    password.match(/[A-Z]/)
      ? setValidationUpperCase(true)
      : setValidationUpperCase(false);

    password.match(/[#?!@$%^&*-]/)
      ? setValidationSpecialCharacter(true)
      : setValidationSpecialCharacter(false);
  }, [password, setValidationSpecialCharacter, setValidationUpperCase, setValidationLength]);

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <div className="w-full">
        <label
          htmlFor={"password"}
          className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
        >
          <p> Password </p>
        </label>

        <div className="h-1" />
        <div
          className={`flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE] ${errors && errors['password'] && "border-error-400"}`}
        >
          <input
            type={passwordType}
            name={"password"}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={`  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
font-inter  flex-1 `}
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
        <div className="h-1" />
        {errors && (
          <p className="text-xs font-medium text-error-400">
            {errors["password"]}
          </p>
        )}
      </div>
      <div className="h-4" />
      <div>
        <div className="flex gap-3 items-center">
          <div
            className={`h-6 w-6 ${
              validationUpperCase ? "bg-green-200" : "bg-gray-100"
            } rounded-full items-center justify-center flex`}
          >
            {validationUpperCase && (
              <CheckIcon className="h-[18px] w-[18px] text-green-500" />
            )}
          </div>
          <p
            className={`text-sm ${
              validationUpperCase ? "text-gray-600" : "text-gray-400"
            }`}
          >
            1 capital letter
          </p>
        </div>
        <div className="h-3" />
        <div className="flex gap-3 items-center">
          <div
            className={`h-6 w-6 ${
              validationLength ? "bg-green-200" : "bg-gray-100"
            } rounded-full items-center justify-center flex`}
          >
            {validationLength && (
              <CheckIcon className="h-[18px] w-[18px] text-green-500" />
            )}
          </div>
          <p
            className={`text-sm ${
              validationLength ? "text-gray-600" : "text-gray-400"
            }`}
          >
            At least 8 characters
          </p>
        </div>
        <div className="h-3" />
        <div className="flex gap-3 items-center">
          <div
            className={`h-6 w-6 ${
              validationSpecialCharacter ? "bg-green-200" : "bg-gray-100"
            } rounded-full items-center justify-center flex`}
          >
            {validationSpecialCharacter && (
              <CheckIcon className="h-[18px] w-[18px] text-green-500" />
            )}
          </div>
          <p
            className={`text-sm ${
              validationSpecialCharacter ? "text-gray-600" : "text-gray-400"
            }`}
          >
            1 special character, ex. @#$%&
          </p>
        </div>
      </div>
    </>
  );
};

export default PasswordInputwithValidation;
