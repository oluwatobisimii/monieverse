import React, { useState } from "react";
import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import OtpTimer from "../../../components/UtilityComponents/OtpTimer";
import OtpInput from "react-otp-input";
import { resendOtpCode, verifyToken } from "./ForgotPasswordApi";

export const ForgotPasswordOtp = ({
  pin,
  email,
  errors,
  setErrors,
  setStep,
}) => {
  const [otp, setOtp] = useState("");
  const [resendOtpVar, setResendOtpVar] = useState(false);

  return (
    <StepperWrapper>
      <div className="flex items-center gap-3">
        <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
          <img src={pin} alt="" />
        </div>
        <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
          Verify Identity
        </p>
      </div>
      <div className="h-14" />

      <p className="text-center text-gray-400 text-lg">
        Enter the 6-Digit code we sent to{" "}
        <span className="font-medium text-gray-500">{email}</span>
      </p>
      <div className="h-6" />

      <div className="w-full">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          shouldAutoFocus={true}
          containerStyle="justify-between gap-1 md:gap-4"
          inputStyle="flex-1 py-3 lg:py-4 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
          renderSeparator={<div className="h-[1px] w-2 lg:w-4 bg-gray-200" />}
          renderInput={(props) => <input {...props} />}
        />
        {errors?.token && (
          <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 ">
            {errors.token}
          </p>
        )}
      </div>
      <div className="h-12" />

      <p className="text-center text-gray-400 text-lg">
        Didn’t receive code?{" "}
        {resendOtpVar ? (
          <button
            className="font-medium text-primary-400"
            onClick={(e) => {
              e.preventDefault();
              resendOtpCode(email, setErrors);
            }}
          >
            Resend
          </button>
        ) : (
          <OtpTimer
            duration={300}
            onTimerComplete={() => {
              console.log("Timer Complete");
              setResendOtpVar(true);
            }}
          />
        )}
      </p>
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
            verifyToken(email, otp, setStep, setErrors);
          }}
        >
          {" "}
          Continue
        </button>
      </div>
    </StepperWrapper>
  );
};
