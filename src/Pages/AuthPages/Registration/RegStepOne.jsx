import React, { useEffect, useState } from "react";
import setup from "../../../assets/icons/UserCircleGear.svg";
import PasswordInput from "../../../components/Inputs/PasswordInputwithValidation";
import StepperWrapper from "../../../components/Wrappers/StepperWrapper";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { registerUser } from "../../../features/register/registerActions";
import { motion } from "framer-motion";
import { Briefcase, User } from "phosphor-react";
import CustomInput from "../../../components/Inputs/CustomInput";
import { updateError } from "../../../features/register/registerSlice";
import { validateEmail } from "../../../components/UtilityComponents/Validators";

export default function RegStepOne({
  setStep,

  errors,
  email,
  dispatch,
  resetErrors,
  setEmail,
  setShowToaster,
  loading,
  setToasterError,
  setErrorMsg,
}) {
  const [button2State, setButton2State] = useState(false);
  const [password, setPassword] = useState("");
  const [validationLength, setValidationLength] = useState(false);
  const [validationUpperCase, setValidationUpperCase] = useState(false);
  const [validationSpecialCharacter, setValidationSpecialCharacter] =
    useState(false);
  const [accountType, setAccountType] = useState("");
  const [fillDetails, setFillDetails] = useState("");
  const [business_name, setBusinessName] = useState("");
  useEffect(() => {
    if (
      email === "" ||
      password === "" ||
      !validationLength ||
      !validationUpperCase ||
      !validationSpecialCharacter ||
      (accountType === "Business" && business_name === "")
    ) {
      setButton2State(false);
    } else setButton2State(true);
  }, [
    email,
    password,
    validationLength,
    validationUpperCase,
    validationSpecialCharacter,
    accountType,
    business_name,
  ]);

  

  return (
    <StepperWrapper>
      <div className="flex items-center gap-3">
        <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
          <img src={setup} alt="" />
        </div>
        <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
          Account Set-up
        </p>
      </div>
      <div className="h-14" />
      {!fillDetails && (
        <motion.div
          initial={{
            x: "-20%",
            opacity: 0,
          }}
          animate={{
            x: "0%",
            opacity: "100%",
          }}
          exit={{
            x: "-20%",
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: "0.25",
          }}
        >
          <p className="text-sm md:text-md font-medium text-gray-500">What type of account are you creating?</p>
          <div className="h-3"/>
          <div
            className={`group hover:bg-gray-25 transition-all duration-500 cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex  justify-between ${
              accountType === "Personal" ? "bg-gray-25" : ""
            }`}
            onClick={() => {
              setAccountType("Personal");
            }}
          >
            <div className="flex gap-8 items-center">
              <div
                className={`h-6 w-6 rounded-full center  transition-all duration-500 ${
                  accountType === "Personal"
                    ? "group-hover:bg-primary-500"
                    : `group-hover:bg-primary-100`
                } ${
                  accountType === "Personal" ? "bg-primary-500" : "bg-gray-50"
                }`}
              >
                {accountType === "Personal" && (
                  <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                )}
              </div>
              <div className="flex gap-1 items-center">
                <User
                  className={`transition-all duration-500 ${
                    accountType === "Personal"
                      ? "text-primary-400"
                      : "text-gray-300"
                  }
                  `}
                  size={24}
                />

                <p
                  className={`group-hover:text-gray-600 transition-all duration-500 text-gray-400 font-medium text-md ${
                    accountType === "Personal"
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  Agent
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm w-[120px] lg:w-[240px]">
            Choose if you will be making payment on behalf of other people
            </p>
          </div>
          <div className="h-4" />
          <div
            className={`group transition-all duration-500 hover:bg-gray-25 cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex  justify-between ${
              accountType === "Business" ? "bg-gray-25" : ""
            }`}
            onClick={() => {
              setAccountType("Business");
            }}
          >
            <div className="flex gap-8 items-center">
              <div
                className={`h-6 w-6 transition-all duration-500 rounded-full center ${
                  accountType === "Business"
                    ? "group-hover:bg-primary-500"
                    : `group-hover:bg-primary-100`
                } ${
                  accountType === "Business" ? "bg-primary-500" : "bg-gray-50"
                }`}
              >
                {accountType === "Business" && (
                  <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                )}
              </div>
              <div className="flex gap-1 transition-all duration-500  items-center">
                <Briefcase
                  className={
                    accountType === "Business"
                      ? "text-primary-400"
                      : "text-gray-300"
                  }
                  size={24}
                />

                <p
                  className={`group-hover:text-gray-600  transition-all duration-500 text-gray-400 font-medium text-md  ${
                    accountType === "Business"
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  Business
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm w-[120px] lg:w-[240px]">
            Choose if you will be making payment for yourself
            </p>
          </div>

          <div className="h-14" />
          <div className="flex gap-x-6">
            <button
              className="md:w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
              onClick={() => {
                setStep(0);
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <p>Go back</p>
            </button>
            <button
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
              onClick={() => {
                setFillDetails(true);
                let userInput = JSON.parse(sessionStorage.getItem("userInput"));
                userInput.account_type = accountType;
                sessionStorage.setItem("userInput", JSON.stringify(userInput));
              }}
              disabled={!accountType}
            >
              {" "}
              Continue
            </button>
          </div>
        </motion.div>
      )}

      {fillDetails && (
        <motion.div
          initial={{
            x: "-20%",
            opacity: 0,
          }}
          animate={{
            x: "0%",
            opacity: "100%",
          }}
          exit={{
            x: "-20%",
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: "0.25",
          }}
        >
          {accountType && accountType === "Business" && (
            <CustomInput
              label={"Business name"}
              type={"text"}
              placeholder={"Ex. Georgewill & Sons Co."}
              onChange={(e) => {
                setBusinessName(e.target.value);
              }}
              name={"business_name"}
              value={business_name}
              errors={errors}
            />
          )}
          <div className="h-6" />
          <CustomInput
            label="Email"
            type={"email"}
            value={email}
            name={"email"}
            placeholder={"you@example.com"}
            onChange={(e) => {
              dispatch(resetErrors("email"));
              setEmail(e.target.value);
              if (!validateEmail(e.target.value)) {
                dispatch(updateError({ email: "Invalid email" }));
              }
            }}
            errors={errors}
          />
          <div className="h-6" />
          <PasswordInput
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

          <div className="h-14" />
          <div className="flex gap-x-6">
            <div
              className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border hover:bg-gray-25 transition-all duration-200 border-gray-100 items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              onClick={() => {
                setStep(1);
                setFillDetails(false);
                setShowToaster(false);
              }}
              disabled={loading}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <p>Go back</p>
            </div>
            <button
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:cursor-wait disabled:bg-primary-300"
              disabled={!button2State}
              onClick={(e) => {
                setShowToaster(false);
                setToasterError("");
                setErrorMsg("");
                e.preventDefault();
                setFillDetails(true);
                let userInput = JSON.parse(sessionStorage.getItem("userInput"));
                userInput.business_name = business_name;
                userInput.email = email;
                userInput.password = password;
                sessionStorage.setItem("userInput", JSON.stringify(userInput));
                dispatch(registerUser(userInput)).then(({ payload }) => {
                  if (payload.status === 200) {
                    payload.data.status === "ok" && setStep(2);
                  }
                }); // setStep(1)
              }}
            >
              {"Continue"}
            </button>
          </div>
        </motion.div>
      )}
    </StepperWrapper>
  );
}
