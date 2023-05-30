import React, { useState } from "react";
import pin from "../../assets/icons/Password.svg";
import { CheckIcon } from "@heroicons/react/24/outline";
import OnboardNav from "../../components/NavBar/OnboardNav";
import StepperDivider from "../../components/UtilityComponents/StepperDivider";
import { ForgotPasswordEmail } from "./ForgotPassword/ForgotPasswordEmail";
import { ForgotPasswordUpdate } from "./ForgotPassword/ForgotPasswordUpdate";
import { ForgotPasswordOtp } from "./ForgotPassword/ForgotPasswordOtp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const [step, setStep] = useState(0);

  let loaderWidth = step === 0 ? "w-1/3" : step === 1 ? "w-2/3" : "w-full";
  return (
    <>
      <OnboardNav />
      {/* Loader */}

      <div className="lg:bg-gray-50 w-full min-h-screen">
        <div className="h-1 bg-primary-200 w-full">
          <div
            className={`h-full ${loaderWidth} duration-200 bg-primary-400 transition-all`}
          />
        </div>
        {/* Mobile Stepper */}
        <div className="flex justify-between lg:hidden p-4 pt-3 bg-gray-50">
          <p className="text-xs font-medium text-gray-500 ">Email </p>
          <p className="text-xs font-medium text-gray-500 ">
            1<span className="text-gray-400"> / 3</span>
          </p>
        </div>
        <div className="flex justify-between lg:container mx-auto lg:pt-10">
          {/* Desktop Stepper */}
          <div className="hidden lg:block">
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 0 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 0 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 0 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {" "}
                Email
              </p>
            </div>
            <StepperDivider />
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 1 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 1 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 1 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Verification
              </p>
            </div>
            <StepperDivider />
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 2 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 2 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 2 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Password
              </p>
            </div>
          </div>
          {/* Email */}
          {step === 0 && (
            <ForgotPasswordEmail
              email={email}
              setEmail={setEmail}
              setErrors={setErrors}
              errors={errors}
              setStep={setStep}
            />
          )}

          {/* OTP Details*/}
          {step === 1 && (
            // User Email
            <ForgotPasswordOtp
              pin={pin}
              email={email}
              errors={errors}
              setErrors={setErrors}
              setStep={setStep}
            />
          )}

          {/* Update Password */}
          {step === 2 && (
            <ForgotPasswordUpdate errors={errors} setStep={setStep} />
          )}

          {/* Desktop Stepper Counter */}
          <p className="text-xs font-medium text-gray-500 hidden lg:block">
            <span className="text-gray-400">Step </span>1
            <span className="text-gray-400"> / 3</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
