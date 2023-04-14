import React, { useState } from "react";


import { useNavigate } from "react-router-dom";
import pin from "../../assets/icons/Password.svg";

import setup from "../../assets/icons/UserCircleGear.svg";
import OtpInput from "react-otp-input";
import OnboardNav from "../../components/NavBar/OnboardNav";

import {
  CheckIcon,
  ChevronLeftIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import CustomInput from "../../components/Inputs/CustomInput";

const VerifyAccount = () => {
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

  const [accountType, setAccountType] = useState("");
  const [fillDetails, setFillDetails] = useState("");
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  let loaderWidth = step === 0 ? "w-1/2" : "w-full";


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
              <p className="text-sm font-medium  text-gray-400">
                {" "}
                Verification
              </p>
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
              <p className="text-sm font-medium  text-gray-600">
                Account Setup
              </p>
            </div>
          </div>
          {/* Email */}

          {/* OTP Details*/}
          {step === 0 && (
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
                    +2348123456789
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

          {/* New Password*/}
          {step === 1 && (
            // Add New Customer

            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0  flex-1 mx-auto">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
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
                  <div>
                    <div
                      className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex  justify-between ${
                        accountType === "personal" ? "bg-gray-25" : ""
                      }`}
                      onClick={() => {
                        setAccountType("personal");
                      }}
                    >
                      <div className="flex gap-8 items-center">
                        <div
                          className={`h-6 w-6 rounded-full center ${
                            accountType === "personal"
                              ? "bg-primary-500"
                              : "bg-gray-50"
                          }`}
                        >
                          {accountType === "personal" && (
                            <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                          )}
                        </div>
                        <div className="flex gap-1 items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.4867 19.9687C20.0045 17.4075 17.6776 15.6103 14.9739 14.8481C16.2884 14.1799 17.3396 13.0885 17.9579 11.7498C18.5762 10.411 18.7256 8.90311 18.382 7.4691C18.0385 6.03508 17.222 4.75856 16.0642 3.84537C14.9064 2.93218 13.4747 2.43555 12.0001 2.43555C10.5255 2.43555 9.09392 2.93218 7.93611 3.84537C6.7783 4.75856 5.96179 6.03508 5.61824 7.4691C5.27468 8.90311 5.4241 10.411 6.04241 11.7498C6.66072 13.0885 7.71188 14.1799 9.02639 14.8481C6.32264 15.6094 3.99577 17.4065 2.51358 19.9687C2.47288 20.0328 2.44555 20.1043 2.43324 20.1792C2.42093 20.2541 2.42388 20.3306 2.44193 20.4043C2.45998 20.478 2.49275 20.5473 2.53826 20.608C2.58378 20.6687 2.6411 20.7195 2.70678 20.7575C2.77246 20.7955 2.84514 20.8197 2.92045 20.8289C2.99576 20.838 3.07215 20.8319 3.14501 20.8107C3.21786 20.7896 3.2857 20.7539 3.34442 20.7059C3.40314 20.6579 3.45154 20.5985 3.4867 20.5312C5.28764 17.4197 8.46952 15.5625 12.0001 15.5625C15.5308 15.5625 18.7126 17.4197 20.5136 20.5312C20.5487 20.5985 20.5971 20.6579 20.6559 20.7059C20.7146 20.7539 20.7824 20.7896 20.8553 20.8107C20.9281 20.8319 21.0045 20.838 21.0798 20.8289C21.1551 20.8197 21.2278 20.7955 21.2935 20.7575C21.3592 20.7195 21.4165 20.6687 21.462 20.608C21.5075 20.5473 21.5403 20.478 21.5584 20.4043C21.5764 20.3306 21.5794 20.2541 21.567 20.1792C21.5547 20.1043 21.5274 20.0328 21.4867 19.9687ZM6.56264 8.99998C6.56264 7.92455 6.88155 6.87326 7.47903 5.97907C8.07651 5.08488 8.92573 4.38794 9.9193 3.97639C10.9129 3.56484 12.0062 3.45716 13.0609 3.66696C14.1157 3.87677 15.0846 4.39464 15.845 5.15509C16.6055 5.91554 17.1234 6.88441 17.3332 7.93918C17.543 8.99395 17.4353 10.0873 17.0237 11.0808C16.6122 12.0744 15.9152 12.9236 15.0211 13.5211C14.1269 14.1186 13.0756 14.4375 12.0001 14.4375C10.5586 14.4357 9.17652 13.8623 8.15717 12.843C7.13781 11.8236 6.56438 10.4416 6.56264 8.99998Z"
                              fill={
                                accountType === "personal"
                                  ? "#8872FD"
                                  : "#BBC0CA"
                              }
                            />
                          </svg>
                          <p className="text-gray-400 font-medium text-md ">
                            Personal
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium text-xs md:text-sm w-[120px] lg:w-[240px]">
                        Payments will be using your personal bank account
                      </p>
                    </div>
                    <div className="h-4" />
                    <div
                      className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex  justify-between ${
                        accountType === "business" ? "bg-gray-25" : ""
                      }`}
                      onClick={() => {
                        setAccountType("business");
                      }}
                    >
                      <div className="flex gap-8 items-center">
                        <div
                          className={`h-6 w-6 rounded-full center ${
                            accountType === "business"
                              ? "bg-primary-500"
                              : "bg-gray-50"
                          }`}
                        >
                          {accountType === "business" && (
                            <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                          )}
                        </div>
                        <div className="flex gap-1 items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.9375 10.5C9.9375 10.3508 9.99676 10.2077 10.1023 10.1023C10.2077 9.99676 10.3508 9.9375 10.5 9.9375H13.5C13.6492 9.9375 13.7923 9.99676 13.8977 10.1023C14.0032 10.2077 14.0625 10.3508 14.0625 10.5C14.0625 10.6492 14.0032 10.7923 13.8977 10.8977C13.7923 11.0032 13.6492 11.0625 13.5 11.0625H10.5C10.3508 11.0625 10.2077 11.0032 10.1023 10.8977C9.99676 10.7923 9.9375 10.6492 9.9375 10.5ZM21.5625 6.75V18.75C21.5625 19.0981 21.4242 19.4319 21.1781 19.6781C20.9319 19.9242 20.5981 20.0625 20.25 20.0625H3.75C3.4019 20.0625 3.06806 19.9242 2.82192 19.6781C2.57578 19.4319 2.4375 19.0981 2.4375 18.75V6.75C2.4375 6.4019 2.57578 6.06806 2.82192 5.82192C3.06806 5.57578 3.4019 5.4375 3.75 5.4375H7.6875V4.5C7.6875 3.95299 7.9048 3.42839 8.29159 3.04159C8.67839 2.6548 9.20299 2.4375 9.75 2.4375H14.25C14.797 2.4375 15.3216 2.6548 15.7084 3.04159C16.0952 3.42839 16.3125 3.95299 16.3125 4.5V5.4375H20.25C20.5981 5.4375 20.9319 5.57578 21.1781 5.82192C21.4242 6.06806 21.5625 6.4019 21.5625 6.75ZM8.8125 5.4375H15.1875V4.5C15.1875 4.25136 15.0887 4.0129 14.9129 3.83709C14.7371 3.66127 14.4986 3.5625 14.25 3.5625H9.75C9.50136 3.5625 9.2629 3.66127 9.08709 3.83709C8.91127 4.0129 8.8125 4.25136 8.8125 4.5V5.4375ZM3.5625 6.75V10.7616C6.14554 12.1892 9.04868 12.9379 12 12.9375C14.9515 12.938 17.8547 12.189 20.4375 10.7606V6.75C20.4375 6.70027 20.4177 6.65258 20.3826 6.61742C20.3474 6.58225 20.2997 6.5625 20.25 6.5625H3.75C3.70027 6.5625 3.65258 6.58225 3.61742 6.61742C3.58225 6.65258 3.5625 6.70027 3.5625 6.75ZM20.4375 18.75V12.0347C17.8246 13.3674 14.9332 14.0623 12 14.0625C9.06688 14.0628 6.17542 13.3682 3.5625 12.0356V18.75C3.5625 18.7997 3.58225 18.8474 3.61742 18.8826C3.65258 18.9177 3.70027 18.9375 3.75 18.9375H20.25C20.2997 18.9375 20.3474 18.9177 20.3826 18.8826C20.4177 18.8474 20.4375 18.7997 20.4375 18.75Z"
                              fill={
                                accountType === "business"
                                  ? "#8872FD"
                                  : "#BBC0CA"
                              }
                            />
                          </svg>

                          <p className="text-gray-400 font-medium text-md ">
                            Business
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium text-xs md:text-sm w-[120px] lg:w-[240px]">
                        Payments will be using your business’ bank account
                      </p>
                    </div>

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
                        className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                        onClick={() => {
                          setFillDetails(true);
                        }}
                        disabled={!accountType}
                      >
                        {" "}
                        Continue
                      </button>
                    </div>
                  </div>
                )}
                {fillDetails && (
                  <div>
                    {accountType && accountType === "business" && (
                      <CustomInput
                        label={"Business name"}
                        type={"text"}
                        placeholder={"Ex. Georgewill & Sons Co."}
                      />
                    )}
                    <div className="h-6" />
                    <CustomInput
                      label="Email"
                      type={"email"}
                      placeholder={"you@example.com"}
                    />
                    <div className="h-6" />
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
                        <EyeIcon className="h-5 w-5 text-grey-400 mx-4" />
                      </div>
                      <div className="h-1" />
                      {<p className="text-xs font-medium text-error-400">{}</p>}
                    </div>
                    <div className="h-4" />
                    <div>
                      <div className="flex gap-3 items-center">
                        <div className="h-6 w-6 bg-gray-100 rounded-full" />
                        <p className="text-sm text-gray-400">
                          1 capital letter
                        </p>
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

                    <div className="h-14" />
                    <div className="flex gap-x-6">
                      <button
                        className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
                        onClick={() => {
                          setStep(0);
                          setFillDetails(false);
                        }}
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                        <p>Go back</p>
                      </button>
                      <button
                        className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
                        onClick={() => {
                          localStorage.setItem("isLogged", true);
                          navigate("/");
                        }}
                      >
                        {" "}
                        Continue
                      </button>
                    </div>
                  </div>
                )}
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

export default VerifyAccount;
