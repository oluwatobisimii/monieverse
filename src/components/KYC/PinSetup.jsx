import React, { useEffect, useState } from "react";
import StepperWrapper from "../Wrappers/StepperWrapper";

import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { createPin } from "./KycApi";
import Spinner from "../Loaders/Spinner";
import { Vault, WarningOctagon, X } from "phosphor-react";
import OTPInput from "react-otp-input";
import { motion } from "framer-motion";

const PinSetup = ({ optionType, step, setStep }) => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinScreens, setPinScreens] = useState(false);

  const handleOtpChange = (otpValue) => {
    // Remove non-numeric characters from the input value
    const numericValue = otpValue.replace(/[^0-9]/g, "");
    setPin(numericValue);
  };

  const [toasterError, setToasterError] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  const [otpType, setOtpType] = useState("number");
  const [otpTypeConfirm, setOtpTypeConfirm] = useState("number");

  useEffect(() => {
    if (pin.length === 6) {
      setOtpType("password");
    }
    if (pin.length === 0) {
      setOtpType("number");
    }
  }, [pin]);

  useEffect(() => {
    if (confirmPin.length === 6) {
      setOtpTypeConfirm("password");
    }
    if (confirmPin.length === 0) {
      setOtpTypeConfirm("number");
    }
  }, [confirmPin]);

  useEffect(() => {
    if (error === "invalid credential") {
      console.log("second condition");
      setShowToaster(true);
      setToasterError("Invalid credentials entered, please confirm details.");
      return;
    }
    if (error === "sql: no rows in result set" || error === "invalid token") {
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (error === "token expired") {
      setShowToaster(true);
      setToasterError("Invalid token entered, please confirm details.");
      return;
    }
    if (error !== "") {
      setShowToaster(true);
      setToasterError(error);
      return;
    }

    if (toasterError !== null && toasterError !== "") {
      setShowToaster(true);
      return;
    }

    if (toasterError === "" && error === "") {
      setShowToaster(false);
      return;
    }

    setToasterError(error);
    // eslint-disable-next-line
  }, [error, toasterError]);

  const navigate = useNavigate();

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
              setError("");
              setShowToaster(false);
            }}
          >
            <X />
          </div>
        </motion.div>
      )}

      {!pinScreens && (
        <StepperWrapper>
          <div className="flex items-center gap-3">
            <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
              <Vault weight="duotone" className="text-gray-0 text-[32px]" />
            </div>
            <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
              Set-Up Transaction PIN
            </p>
          </div>
          <div className="h-8" />
          <p className="text-md font-medium text-gray-500">
            To ensure your transactions are quick and secure, please enter a
            6-Digit PIN to confirm transactions.
          </p>
          <div className="h-32" />
          <div className="w-full">
            <OTPInput
              value={pin}
              onChange={handleOtpChange}
              numInputs={6}
              inputType={otpType}
              shouldAutoFocus={true}
              containerStyle="justify-between gap-1 md:gap-3"
              inputStyle="flex-1 py-3 lg:py-3 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
              renderSeparator={
                <div className="h-[1px] w-2 lg:w-4 bg-gray-200" />
              }
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="h-6" />
          <div className="h-32" />
          <div className="flex gap-x-6">
            <button
              className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <p>Go back</p>
            </button>
            <button
              disabled={pin.length < 6}
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault();
                setPinScreens(!pinScreens);
              }}
            >
              {" "}
              {loading ? <Spinner color="#FFFFFF" /> : "Continue"}
            </button>
          </div>{" "}
        </StepperWrapper>
      )}
      {pinScreens && (
        <StepperWrapper>
          <div className="flex items-center gap-3">
            <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
              <Vault weight="duotone" className="text-gray-0 text-[32px]" />
            </div>
            <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
              Confirm Transaction PIN
            </p>
          </div>
          <div className="h-8" />
          <p className="text-md font-medium text-gray-500">
            Please re-enter your transaction 6-Digit transaction PIN for
            confirmation.
          </p>
          <div className="h-32" />
          <div className="w-full">
            <OTPInput
              value={confirmPin}
              onChange={(value) => {
                setConfirmPin(value);
              }}
              numInputs={6}
              inputType={otpTypeConfirm}
              shouldAutoFocus={true}
              containerStyle="justify-between gap-1 md:gap-3"
              inputStyle="flex-1 py-3 lg:py-3 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
              renderSeparator={
                <div className="h-[1px] w-2 lg:w-4 bg-gray-200" />
              }
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="h-6" />
          <div className="h-32" />
          <div className="flex gap-x-6">
            <button
              className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
              onClick={() => {
                setPinScreens(!pinScreens);
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <p>Go back</p>
            </button>
            <button
              disabled={confirmPin.length < 6}
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
              onClick={async (e) => {
                e.preventDefault();
                if (confirmPin !== pin) {
                  setError("Pin mismatch, kindly check and try again");
                } else {
                  // Make API call to update pin

                  try {
                    const response = await createPin(pin);
                    if (
                      response?.message === "transaction pin set successfully"
                    ) {
                      navigate("/success-page", {
                        state: {
                          to: "/",
                          title: "Verification in Progress",
                          description:
                            "We’ll let you know once your documents have been verified.",
                          buttonLabel: "Return Home",
                        },
                      });
                    }
                    console.log(response);
                  } catch (error) {
                    console.log(error);
                  }
                }
              }}
            >
              {" "}
              {loading ? <Spinner color="#FFFFFF" /> : "Continue"}
            </button>
          </div>{" "}
        </StepperWrapper>
      )}
    </>
  );
};

export default PinSetup;
