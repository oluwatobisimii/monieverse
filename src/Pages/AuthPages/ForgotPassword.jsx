import React, { useState } from "react";

import envelope from "../../assets/icons/EnvelopeOpen.svg";
import { useNavigate } from "react-router-dom";
import pin from "../../assets/icons/Password.svg";
import key from "../../assets/icons/Key.svg";
import OtpInput from "react-otp-input";

import {
  CheckIcon,
  ChevronLeftIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

import CustomInput from "../../components/Inputs/CustomInput";

import OnboardNav from "../../components/NavBar/OnboardNav";

const ForgotPassword = () => {
  // const initialvalues = { amount: "", email: "", password: "" };
  const [otp, setOtp] = useState("");
  // const [formValues, setFormValues] = useState(initialvalues);
  // const [formErrors, setFormErrors] = useState({});
  // const [addRecipient, setAddRecipient] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  let loaderWidth = step === 0 ? "w-1/3" : step === 1 ? "w-2/3" : "w-full";
  return (
    <>
      <OnboardNav />
      {/* Loader */}

      <div className="lg:bg-gray-50 w-full min-h-screen">
        <div className="h-1 bg-primary-200 w-full">
          <div className={`h-full ${loaderWidth} duration-200 bg-primary-400 transition-all`} />
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
              <p className={`text-sm font-medium  ${step === 0?'text-gray-600':'text-gray-400'}`}> Email</p>
            </div>
            <div className="h-10 ml-4 w-[1px] bg-gray-0"></div>
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
              <p className={`text-sm font-medium  ${step === 1?'text-gray-600':'text-gray-400'}`}>Verification</p>
            </div>
            <div className="h-10 ml-4 w-[1px] bg-gray-0"></div>
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
              <p className={`text-sm font-medium  ${step === 2?'text-gray-600':'text-gray-400'}`}>Password</p>
            </div>
          </div>
          {/* Email */}
          {step === 0 && (
            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0 mx-auto flex-1">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
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
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  {" "}
                  Continue
                </button>
              </div>

              {/* Gradient background */}
              <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
            </div>
          )}

          {/* OTP Details*/}
          {step === 1 && (
            // Add New Customer

            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0  flex-1 mx-auto">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
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
                  <span className="font-medium text-gray-500">
                    mason@gmail.com
                  </span>
                </p>
                <div className="h-6" />

                <div className="w-full">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputType="number"
                    shouldAutoFocus={true}
                    containerStyle="justify-between gap-1 lg:gap-2.5"
                    inputStyle="flex-1 py-3 lg:py-4 text-d-xsw lg:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
                    renderSeparator={
                      <div className="h-[1px] w-2 lg:w-4 bg-gray-200" />
                    }
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <div className="h-12" />
                <p className="text-center text-gray-400 text-lg">
                  Didn’t receive code?{" "}
                  <span className="font-medium text-green-400">00:30</span>
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
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>

              {/* Gradient background */}
              <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
            </div>
          )}

          {/* New Password*/}
          {step === 2 && (
            // Add New Customer

            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0  flex-1 mx-auto">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={key} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    New Password
                  </p>
                </div>
                <div className="h-14" />

                <div className="w-full">
                  <label
                    htmlFor={"password"}
                    className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
                  >
                    <p> Password </p>
                  </label>

                  <div className="h-1" />
                  <div className="flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
                    <input
                      type={"password"}
                      name={"password"}
                      placeholder="Enter your email address"
                      className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
                    />
                    <EyeIcon className="h-5 w-5 text-gray-400 mx-4" />
                  </div>
                  <div className="h-1" />
                  {<p className="text-xs font-medium text-error-400">{}</p>}
                </div>
                <div className="h-4" />
                <div>
                  <div className="flex gap-3 items-center">
                    <div className="h-6 w-6 bg-gray-100 rounded-full" />
                    <p className="text-sm text-gray-400">1 capital letter</p>
                  </div>
                  <div className="h-3" />
                  <div className="flex gap-3 items-center">
                    <div className="h-6 w-6 bg-gray-100 rounded-full" />
                    <p className="text-sm text-gray-400">
                      At least 8 characters
                    </p>
                  </div>
                  <div className="h-3" />
                  <div className="flex gap-3 items-center">
                    <div className="h-6 w-6 bg-green-200 rounded-full items-center justify-center flex">
                      <CheckIcon className="h-[18px] w-[18px] text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      1 special character, ex. @#$%&
                    </p>
                  </div>
                </div>
                <div className="h-12" />
                <p className="text-center text-gray-400 text-lg">
                  Didn’t receive code?{" "}
                  <span className="font-medium text-green-400">00:30</span>
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
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>

              {/* Gradient background */}
              <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
            </div>
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
