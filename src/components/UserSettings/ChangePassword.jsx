import React, { useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Key } from "phosphor-react";

import { AnimatePresence, motion } from "framer-motion";
import PasswordInput from "../Inputs/PasswordInput";

import PrimaryButton from "../Inputs/PrimaryButton";
import { ChangePasswordApi } from "./ChangePinApi";
import Toaster from "../Inputs/Toaster";
import pinChanged from "../../assets/pinChanged.svg";
import PasswordInputwithValidation from "../Inputs/PasswordInputwithValidation";
import { convertToSentenceCase } from "../UtilityComponents/ToggleCase";
import Spinner from "../Loaders/Spinner";

const ChangePassword = ({ isOpen, onClose, setBankTransfer }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ current_password: "", password: "" });
  const [step, setStep] = useState(0);

  const [toasterError, setToasterError] = useState("");

  const [validationLength, setValidationLength] = useState(false);
  const [validationUpperCase, setValidationUpperCase] = useState(false);

  const [loading, setLoading] = useState(false);

  let loaderWidth = step === 0 ? "w-1/2" : "w-full";
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
              Change Password
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
                  Change Password
                </p>
              </div>

              <div className="h-12" />
              <PasswordInput
                label={"Current Password"}
                placeholder={"Enter your current password"}
                value={confirmPassword}
                name={"current_password"}
                errors={errors}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <div className="h-4"></div>
              <div className="h-4"></div>

              <PasswordInputwithValidation
                password={password}
                setPassword={setPassword}
                validationLength={validationLength}
                setValidationLength={setValidationLength}
                validationUpperCase={validationUpperCase}
                setValidationUpperCase={setValidationUpperCase}
                errors={errors}
              />

              <div className="h-6" />

              <div className="py-4 md:py-6 mt-auto">
                <div className="flex gap-x-6">
                  {loading ? (
                    <div className="flex-1 h-14 bg-primary-400 rounded-xl center">
                      <Spinner />
                    </div>
                  ) : (
                    <button
                      className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                      disabled={
                        !(
                          password &&
                          confirmPassword &&
                          validationLength &&
                          validationUpperCase
                        )
                      }
                      onClick={async () => {
                        setLoading(true);
                        setToasterError("");
                        const userInput = {
                          current_password: confirmPassword,
                          password: password,
                        };

                        try {
                          const response =
                            await ChangePasswordApi.updatePassword(userInput);
                          setLoading(false);
                          if (response.status === "OK") {
                            setStep(1);
                          } else {
                            console.log(response);
                          }
                        } catch (error) {
                          if (
                            error.response.status === 422 &&
                            error.response.data.errors.current_password
                          ) {
                            setToasterError(
                              convertToSentenceCase(
                                error.response.data.errors.current_password
                              )
                            );
                            setErrors({
                              ...errors,
                              current_password: "Incorrect current password",
                            });
                            return;
                          }

                          if (
                            error.response.status === 422 &&
                            error.response.data.errors.password
                          ) {
                            setToasterError(
                              "New password " +
                                error.response.data.errors.password
                            );
                            return;
                          }
                        }
                      }}
                    >
                      {" "}
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Pin Changed */}
          {step === 1 ? (
            <motion.div
              key="step4"
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 py-6 md:p-6 lg:p-10 flex-1 flex flex-col items-center"
            >
              <div className="">
                <img src={pinChanged} alt="" />
              </div>
              <div className="h-6" />
              <p className="text-d-xs md:text-d-md font-medium font-clashGrotesk text-gray-600">
                Password Changed!
              </p>
              <div className="h-2" />
              <p className="text-sm md:text-md text-gray-400">
                You can now make login using your new password
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

export default ChangePassword;
