import React, { useEffect, useState } from "react";
import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import OtpTimer from "../../../components/UtilityComponents/OtpTimer";
import OtpInput from "react-otp-input";
import { resendOtpCode, verifyToken } from "./ForgotPasswordApi";
import { motion } from "framer-motion";
import { WarningOctagon, X } from "phosphor-react";
import Spinner from "../../../components/Loaders/Spinner";

export const ForgotPasswordOtp = ({
  pin,
  email,
  errors,
  setErrors,
  setStep,
}) => {
  const [otp, setOtp] = useState("");
  const [resendOtpVar, setResendOtpVar] = useState(false);
  const [toasterError, setToasterError] = useState("");
  const [toasterSuccess, setToasterSuccess] = useState("");
  const [showToaster, setShowToaster] = useState(false);

  const [loading, setLoading] = useState(false)



  useEffect(() => {
    if (errors === "invalid credential") {
      console.log("second condition");
      setShowToaster(true);
      setToasterError("Invalid credentials entered, please confirm details.");
      return;
    }
    if (
      errors?.token === "sql: no rows in result set" ||
      errors?.token === "invalid token"
    ) {
      console.log("here");
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (errors.token === "token expired") {
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (errors?.token !== "" && errors?.token !== undefined) {
      console.log(errors?.token);
      console.log("here");
      setShowToaster(true);
      setToasterError(errors.token);
      return;
    }

    if (
      toasterError !== null &&
      toasterError !== "" &&
      toasterError !== undefined
    ) {
      console.log("here");
      setShowToaster(true);
      return;
    }

    if (toasterError === "" && errors.token === "") {
      setShowToaster(false);
      return;
    }

    setToasterError(errors.token);
    // eslint-disable-next-line
  }, [errors, toasterError]);

  return (
    <>
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
            onChange={(otp) => {
              setToasterError(null);
              setErrors({ ...errors, token: "" });
              setOtp(otp);
            }}
            numInputs={6}
            inputType="number"
            shouldAutoFocus={true}
            containerStyle="justify-between gap-1 lg:gap-2.5"
            inputStyle={`flex-1 py-3 lg:py-4 text-d-xsw lg:text-d-sm font-medium font-clashGrotesk  block rounded-xl border ${
              errors?.token ? "border-error-400" : "border-gray-200"
            } focus:outline-none focus:border-primary-400`}
            renderSeparator={<div className="h-[1px] w-2 lg:w-4 bg-gray-200" />}
            renderInput={(props) => <input {...props} />}
          />
          {/* {errors?.token && (
          <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 ">
            {errors.token}
          </p>
        )} */}
        </div>
        <div className="h-12" />

        <p className="text-center text-gray-400 text-lg">
          Didn’t receive code?{" "}
          {resendOtpVar ? (
            <button
              className="font-medium text-primary-400"
              onClick={async (e) => {
                e.preventDefault();
                setLoading(true)
                try {
                  const response = await resendOtpCode(email, setErrors);
                  if (response.status === "OK") {
                    console.log("here");
                    setToasterSuccess("OTP Token sent successfully");
                    setResendOtpVar(false);
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {loading? <Spinner/>: 'Resend'}
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
    </>
  );
};
