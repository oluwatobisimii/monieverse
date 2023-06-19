import React, { useState } from "react";
import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import PasswordInputwithValidation from "../../../components/Inputs/PasswordInputwithValidation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import key from "../../../assets/icons/Key.svg";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "./ForgotPasswordApi";
import PasswordInput from "../../../components/Inputs/PasswordInput";

export const ForgotPasswordUpdate = ({ errors, setStep }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationLength, setValidationLength] = useState(false);
  const [validationUpperCase, setValidationUpperCase] = useState(false);
  const [validationSpecialCharacter, setValidationSpecialCharacter] =
    useState(false);
  const [inputError, setInputError] = useState("");

  return (
    <StepperWrapper>
      <div className="flex items-center gap-3">
        <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
          <img src={key} alt="" />
        </div>
        <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
          New Password
        </p>
      </div>
      <div className="h-14" />

      <div className="h-4" />
      <PasswordInputwithValidation
        password={password}
        setPassword={setPassword}
        validationLength={validationLength}
        setValidationLength={setValidationLength}
        validationUpperCase={validationUpperCase}
        setValidationUpperCase={setValidationUpperCase}
        validationSpecialCharacter={validationSpecialCharacter}
        setValidationSpecialCharacter={setValidationSpecialCharacter}
        errors={errors}
      />
      <div className="h-4"></div>
      <div className="h-4"></div>

      <PasswordInput
        label={"Confirm Password"}
        placeholder={"Confirm your password"}
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <div className="h-4"></div>
      {inputError && (
        <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 ">
          {inputError}
        </p>
      )}

      <div className="h-12" />

      <div className="h-14" />
      <div className="flex gap-x-6">
        <button
          className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
          onClick={() => {
            setStep(0);
          }}
        >
          <ChevronLeftIcon className="h-6 w-6" />
          <p>Go back</p>
        </button>
        <button
          className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            if (password !== confirmPassword) {
              setInputError("Password mismatch, try again");
              return;
            }
            if (password === confirmPassword) {
              setInputError("");
              updatePassword(
                password,
                confirmPassword,
                setInputError,
                navigate
              );
              return;
            }
          }}
        >
          {" "}
          Continue
        </button>
      </div>
    </StepperWrapper>
  );
};
