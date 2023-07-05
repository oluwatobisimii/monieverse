import RegStepOne from "./RegStepOne";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import pin from "../../../assets/icons/Password.svg";

import OtpInput from "react-otp-input";
import OnboardNav from "../../../components/NavBar/OnboardNav";

import { CheckIcon } from "@heroicons/react/24/outline";

import StepperDivider from "../../../components/UtilityComponents/StepperDivider";
import { useDispatch } from "react-redux";

import { resetErrors } from "../../../features/register/registerSlice";

import OtpTimer from "../../../components/UtilityComponents/OtpTimer";

import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { WarningOctagon, X } from "phosphor-react";
import leftBg from "../../../assets/backgrounds/Left.svg";

import {
  resendVerificationOtpCode,
  verifyUserByToken,
} from "./RegistrationApi";

const VerifyAccount = ({
  step,
  setStep,
  email,
  setEmail,
  errors,
  loading,
  errorMessage,
}) => {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line
  const [presentError, setPresentError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [resendOtpVar, setResendOtpVar] = useState(false);
  const [toasterError, setToasterError] = useState("");
  const [toasterSuccess, setToasterSuccess] = useState("");
  const [showToaster, setShowToaster] = useState(false);

  const navigate = useNavigate();
  let loaderWidth = step === 1 ? "w-1/2" : "w-full";

  useEffect(() => {
    setErrorMsg("");
  }, [otp]);

  // eslint-disable-next-line
  const [resendOTPerror, setResendOTPerror] = useState("");

  useEffect(() => {
    if (errorMessage === "validation failed" && step <= 1) {
      console.log(errorMessage === "validation failed" && step <= 1);
      setShowToaster(true);
      setToasterError(
        "Validation failed. Please ensure the fields are correctly filled"
      );

      return;
    }

    if (errors === "invalid credential") {
      console.log("second condition");
      setShowToaster(true);
      setToasterError("Invalid credentials entered, please confirm details.");
      return;
    }
    if (
      errorMsg === "sql: no rows in result set" ||
      errorMsg === "invalid token"
    ) {
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (errorMsg === "token expired") {
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (errorMsg !== "") {
      console.log(errorMsg);
      setShowToaster(true);
      setToasterError(errorMsg);
      return;
    }

    if (toasterError !== null && toasterError !== "") {
      setShowToaster(true);
      return;
    }

    if (toasterError === null && toasterError === undefined && toasterError === "" && errorMsg === "") {
      console.log("here");
      setShowToaster(false);
      return;
    }

    setToasterError(errorMessage);
    // eslint-disable-next-line
  }, [errors, errorMsg]);

  return (
    <>
      <OnboardNav />
      {showToaster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" absolute md:left-1/2 md:-translate-x-1/2
    shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] p-4 w-full md:w-[546px] bg-gray-0 top-14 z-20 rounded-lg overflow-hidden flex justify-between
    "
        >
          <div className="absolute w-[20] h-0.5 bg-primary-300 bottom-0 left-0"></div>
          <div className="flex items-center gap-2">
            <WarningOctagon
              size={20}
              weight="duotone"
              className="text-error-500"
            />
            <p className="text-gray-500 text-xs md:text-sm font-medium">
              {/* {errors === "user not found"
                ? "We couldn't find a user with the provided information."
                : errors === "invalid credential"
                ? "Invalid credentials entered, please confirm details."
                : errors} */}
              {toasterError}
            </p>
          </div>
          <div
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-25"
            onClick={() => {
              setShowToaster(false);
            }}
          >
            <X />
          </div>
        </motion.div>
      )}

      {toasterSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" absolute md:left-1/2 md:-translate-x-1/2
    shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] p-4 w-full md:w-[546px] bg-gray-0 top-14 z-20 rounded-lg overflow-hidden flex justify-between
    "
        >
          <div className="absolute w-[20] h-0.5 bg-primary-300 bottom-0 left-0"></div>
          <div className="flex items-center gap-2">
            <WarningOctagon
              size={20}
              weight="duotone"
              className="text-green-500"
            />
            <p className="text-gray-500 text-xs md:text-sm font-medium">
              {/* {errors === "user not found"
                ? "We couldn't find a user with the provided information."
                : errors === "invalid credential"
                ? "Invalid credentials entered, please confirm details."
                : errors} */}
              {toasterSuccess}
            </p>
          </div>
          <div
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-25"
            onClick={() => {
              setToasterSuccess("");
            }}
          >
            <X />
          </div>
        </motion.div>
      )}
      {/* Loader */}
      <div className="lg:bg-gray-50 w-full min-h-screen relative">
        <div className="absolute left-0 bottom-0  z-0">
          <img src={leftBg} alt="" />
        </div>
        <div className="h-1 bg-primary-200 w-full">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: "0.75" }}
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
                {step === 1 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 1 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p className="text-sm font-medium  text-gray-400">
                {" "}
                AccountSetup
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
              <p className="text-sm font-medium  text-gray-600">Verification</p>
            </div>
          </div>
          {/* Email */}

          <AnimatePresence mode="wait">
            {/* New Password*/}
            {step === 1 && (
              // Add New Customer
              <RegStepOne
                setStep={setStep}
                errors={errors}
                email={email}
                dispatch={dispatch}
                resetErrors={resetErrors}
                setEmail={setEmail}
                setShowToaster={setShowToaster}
                loading={loading}
                setToasterError={setToasterError}
                setErrorMsg={setErrorMsg}
              />
            )}

            {/* OTP Details*/}
            {step === 2 && (
              // Add New Customer
              <motion.div transition={{ ease: "easeInOut", duration: "0.5" }}>
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
                      onChange={(value) => {
                        setShowToaster(false);
                        setToasterError("");
                        setErrorMsg("");
                        setOtp(value);
                      }}
                      numInputs={6}
                      inputType="number"
                      shouldAutoFocus={true}
                      containerStyle="justify-between gap-1 lg:gap-2.5"
                      inputStyle={`flex-1 py-3 lg:py-4 text-d-xsw lg:text-d-sm font-medium font-clashGrotesk  block rounded-xl border ${
                        errorMsg ? "border-error-400" : "border-gray-200"
                      } focus:outline-none focus:border-primary-400`}
                      renderSeparator={
                        <div className="h-[1px] w-2 lg:w-4 bg-gray-200" />
                      }
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                  <div className="h-12" />
                  <p className="text-center text-gray-400 text-lg">
                    Didn’t receive code?{" "}
                    {resendOtpVar ? (
                      <button
                        className="font-medium text-primary-400"
                        onClick={(e) => {
                          e.preventDefault();
                          resendVerificationOtpCode(
                            email,
                            setResendOTPerror,
                            setResendOtpVar,
                            setToasterSuccess
                          );
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

                  {/* {resendOTPerror?.token && (
                    <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 text-center">
                      {resendOTPerror.token}
                    </p>
                  )} */}

                  {/* {presentError && (
                    <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 text-center">
                      {errorMsg}
                    </p>
                  )} */}
                  <div className="h-14" />
                  <button
                    className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-200 disabled:cursor-not-allowed transition-all duration-500"
                    disabled={otp.length !== 6}
                    onClick={() => {
                      if (otp.length === 6) {
                        verifyUserByToken(
                          otp,
                          setSuccess,
                          navigate,
                          setErrorMsg,
                          setPresentError
                        );
                      }
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </StepperWrapper>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Desktop Stepper Counter */}
          <p className="text-xs font-medium text-gray-500 hidden lg:block">
            <span className="text-gray-400">Step </span>
            {step}
            <span className="text-gray-400"> / 2</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyAccount;
