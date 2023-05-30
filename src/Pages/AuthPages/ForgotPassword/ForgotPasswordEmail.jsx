import React from "react";
import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import CustomInput from "../../../components/Inputs/CustomInput";
import envelope from "../../../assets/icons/EnvelopeOpen.svg";
import { sendToken } from "./ForgotPasswordApi";

export function ForgotPasswordEmail({
  email,
  setEmail,
  setErrors,
  errors,
  setStep,
}) {
  return (
    <StepperWrapper>
      <div className="flex items-center gap-3">
        <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
          <img src={envelope} alt="" />
        </div>
        <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
          Email Address
        </p>
      </div>
      <div className="h-14" />
      {/* Amount Input */}

      <CustomInput
        label={"Email address"}
        placeholder={"Enter your email address"}
        value={email}
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors("");
        }}
        errors={errors}
      />
      <div className="h-6" />

      <div className="flex gap-3 items-center justify-center">
        <p className="text-sm text-gray-400">
          Can’t remember email?{" "}
          <span className="font-medium text-primary-500 underline">
            Send us a mail
          </span>
        </p>
      </div>
      <div className="h-6" />

      <div className="h-20 lg:h-[283px]" />
      <button
        className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          sendToken(email, setStep, setErrors);
        }}
      >
        {" "}
        Continue
      </button>
    </StepperWrapper>
  );
}
