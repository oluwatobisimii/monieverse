import React, { useEffect, useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { EnvelopeOpen, Key, Vault } from "phosphor-react";
import CustomInput from "../Inputs/CustomInput";
import { AnimatePresence, motion } from "framer-motion";
import PasswordInput from "../Inputs/PasswordInput";
import OTPInput from "react-otp-input";
import PrimaryButton from "../Inputs/PrimaryButton";
import { ChangePasswordApi } from "./ChangePinApi";
import Toaster from "../Inputs/Toaster";
import pinChanged from "../../assets/pinChanged.svg";

const ChangePin = ({ isOpen, onClose, setBankTransfer }) => {
  const [password, setPassword] = useState("");
  
  const [step, setStep] = useState(0);

  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleOtpChange = (otpValue) => {
    // Remove non-numeric characters from the input value
    const numericValue = otpValue.replace(/[^0-9]/g, "");
    setPin(numericValue);
  };

  const [toasterError, setToasterError] = useState("");

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

  let loaderWidth =
    step === 0
      ? "w-1/4"
      : step === 1
      ? "w-1/2"
      : step === 2
      ? "w-2/3"
      : "w-full";



  const handleCloseError = () => {
    setToasterError("");
  };

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <Toaster error={toasterError} onClose={handleCloseError} />
      <AnimatePresence>
        <div className="w-full min-h-[60vh] flex flex-col overflow-hidden">
          <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
            <p className="texxt-sm font-medium text-gray-600">
              Change Transaction PIN
            </p>
            <div className="h-10 w-10 flex center" onClick={onClose}>
              <XMarkIcon className="h-6 text-gray-300" />
            </div>
          </div>
          {/* Loader */}
          <div className="h-1 md:h-1.5 w-full bg-primary-200">
            <div
              className={`h-full ${loaderWidth} duration-200 bg-primary-400 transition-all`}
            />
          </div>
          {step === 0 ? (
            <motion.div
              key="step1"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col"
            >
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg text-gray-0 bg-primary-400 flex center">
                  <EnvelopeOpen
                    weight="duotone"
                    className="text-[24px] md:text-[32px]"
                  />
                </div>
                <p className="text-d-xs md:text-d-sm font-medium font-clashGrotesk text-gray-600 ">
                  Email Address
                </p>
              </div>

              <div className="h-12" />

              <CustomInput
                label="Email address"
                readOnly={true}
                type={"email"}
                value={JSON.parse(localStorage.getItem("user")).email}
                name={"email"}
                placeholder={"you@example.com"}
                
              />

              <div className="h-6" />
              <div className="flex justify-center gap-1">
                <p className="text-sm md:text-md text-gray-500">
                  Can’t remember email?
                </p>
                <a
                  href="mailto:hello@monieverse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 underline text-sm md:text-md font-medium"
                >
                  Send us a mail
                </a>
              </div>
              <div className="p-4 md:p-6 mt-auto">
                <div className="flex gap-x-6">
                  <button
                    className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                    onClick={() => {
                      setStep(1);
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          ) : null}

          {step === 1 ? (
            <motion.div
              key="step2"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col"
            >
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg text-gray-0 bg-primary-400 flex center">
                  <Key
                    weight="duotone"
                    className="text-[24px] md:text-[32px]"
                  />
                </div>
                <p className="text-d-xs md:text-d-sm font-medium font-clashGrotesk text-gray-600 ">
                  Enter Password
                </p>
              </div>

              <div className="h-12" />

              <PasswordInput
                label="Password"
                type={"password"}
                value={password}
                name={"email"}
                placeholder={"you@example.com"}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
              />

              <div className="h-6" />
              <div className="flex gap-1">
                <p
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 underline text-sm md:text-md font-medium"
                >
                  Forgot password
                </p>
              </div>
              <div className="p-4 md:p-6 mt-auto">
                <div className="flex gap-x-6">
                  <button
                    className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                    disabled={!password}
                    onClick={async () => {
                      const userInput = {
                        identity: JSON.parse(localStorage.getItem("user"))
                          .email,
                        password: password,
                      };
                      try {
                        const response = await ChangePasswordApi.checkLogin(
                          userInput
                        );
                        console.log(response);

                        if (
                          response.payload.status === 200 &&
                          response.payload.data.message === "login successful"
                        ) {
                          setToasterError(
                            ""
                          );
                          setStep(2);
                        } else {
                          setToasterError(
                            "Invalid password. Please try again."
                          );
                        }
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Enter Pin */}
          {step === 2 ? (
            <motion.div
              key="step3"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col"
            >
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg text-gray-0 bg-primary-400 flex center">
                  <Vault
                    weight="duotone"
                    className="text-[24px] md:text-[32px]"
                  />
                </div>
                <p className="text-d-xs md:text-d-sm font-medium font-clashGrotesk text-gray-600 ">
                  Set-Up New PIN
                </p>
              </div>

              <div className="h-8" />
              <p className="text-sm md:texd-md font-medium text-gray-500">
                To ensure your transactions are quick and secure, please enter a
                6-Digit PIN to confirm transactions.
              </p>
              <div className="h-8" />

              <div className="w-full">
                <OTPInput
                  value={pin}
                  onChange={handleOtpChange}
                  numInputs={6}
                  inputType={otpType}
                  shouldAutoFocus={true}
                  containerStyle="justify-between gap-1 md:gap-2"
                  inputStyle="flex-1 py-3 lg:py-3 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
                  renderSeparator={
                    <div className="h-[1px] w-2 lg:w-2 bg-gray-200" />
                  }
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div className="h-6" />

              <div className="p-4 md:p-6 mt-auto">
                <div className="flex gap-x-6">
                  <PrimaryButton
                    disabled={!(pin.length === 6)}
                    onClick={() => {
                      setStep(3);
                    }}
                    label={"Continue"}
                  />
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Confirm Pin */}
          {step === 3 ? (
            <motion.div
              key="step3"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col"
            >
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg text-gray-0 bg-primary-400 flex center">
                  <Vault
                    weight="duotone"
                    className="text-[24px] md:text-[32px]"
                  />
                </div>
                <p className="text-d-xs md:text-d-sm font-medium font-clashGrotesk text-gray-600 ">
                  Confirm Transaction PIN
                </p>
              </div>

              <div className="h-8" />
              <p className="text-sm md:texd-md font-medium text-gray-500">
                Please re-enter your transaction 6-Digit transaction PIN for
                confirmation.
              </p>
              <div className="h-8" />

              <div className="w-full">
                <OTPInput
                  value={confirmPin}
                  onChange={(value) => {
                    setConfirmPin(value);
                  }}
                  numInputs={6}
                  inputType={otpTypeConfirm}
                  shouldAutoFocus={true}
                  containerStyle="justify-between gap-1 md:gap-2"
                  inputStyle="flex-1 py-3 lg:py-3 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
                  renderSeparator={
                    <div className="h-[1px] w-2 lg:w-2 bg-gray-200" />
                  }
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div className="h-6" />

              <div className="p-4 md:p-6 mt-auto">
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
                  <PrimaryButton
                    disabled={!(pin.length === 6 && confirmPin.length === 6)}
                    onClick={async () => {
                      if (pin !== confirmPin) {
                        setToasterError(
                          "PINs don't match. Please make sure your PIN entries are identical"
                        );
                        setPin("");
                        setConfirmPin("");
                        setStep(2);
                        return;
                      }
                      if (pin === confirmPin) {
                        setToasterError("");
                        const response = await ChangePasswordApi.createPin(pin);
                        if (
                          response?.message ===
                          "transaction pin set successfully"
                        ) {
                          console.log(response);
                          setStep(4);
                        }
                      }
                    }}
                    label={"Continue"}
                  />
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Pin Changed */}
          {step === 4 ? (
            <motion.div 
            key="step4"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
            className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col items-center">
              <div className="">
                <img src={pinChanged} alt="" />
              </div>
              <div className="h-6" />
              <p className="text-d-xs md:text-d-md font-medium font-clashGrotesk text-gray-600">
                PIN Changed!
              </p>
              <div className="h-2" />
              <p className="text-sm md:text-md text-gray-400">
                You can now make transactions using your new PIN
              </p>
              <div className="mt-auto flex w-full">
                <PrimaryButton label={"Done"} onClick={onClose} />
              </div>
            </motion.div>
          ) : null}
        </div>
      </AnimatePresence>
    </Overlay>
  );
};

export default ChangePin;
