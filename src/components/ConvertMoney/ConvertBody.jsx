import React, { useState } from "react";
import swap from "../../assets/icons/Swap.svg";
import Nigeria from "../../assets/countries/Country = Nigeria.svg";

import minus from "../../assets/icons/Minus.svg";
import equals from "../../assets/icons/Equals.svg";
import multiply from "../../assets/icons/X.svg";

import time from "../../assets/icons/HourglassSimpleMedium.svg";
import ArrowDownUp from "../../assets/icons/ArrowsDownUp.svg";

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import receipt from "../../assets/icons/Receipt.svg";
import arrow from "../../assets/icons/ArrowsLeftRight.svg";
import doubleArrow from "../../assets/icons/doubleArrow.svg";
import SignPost from "../../assets/icons/Signpost.svg";

import { useNavigate } from "react-router-dom";
import StepperDivider from "../UtilityComponents/StepperDivider";
import CurrencyInput from "../Inputs/CurrencyInput";
import { AllCurrencies } from "../data/AllCurrencies";
import { CurrencyList } from "../Rates/Rate";

const ConvertBody = () => {
  // const initialvalues = { amount: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialvalues);
  // const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [num, setNum] = React.useState(0);

  const conversionRate = 0.0045;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  const [step, setStep] = useState(0);
  let loaderWidth = step === 0 ? "w-1/2" : "w-full";
  const [from, setFrom] = useState(6);
  const [fromDropDown, setFromDropDown] = useState(false);

  return (
    <>
      {/* Loader */}
      <div className="lg:bg-gray-50 w-full min-h-screen">
        <div className="h-1 bg-primary-200 w-full">
          <div
            className={`h-full ${loaderWidth} duration-1000 bg-primary-400 transition-all`}
          />
        </div>
        {/* Mobile Stepper */}
        <div className="flex justify-between lg:hidden p-4 pt-3 bg-gray-50">
          <p className="text-xs font-medium text-gray-500 ">Amount</p>
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
                Amount & Rate
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
                Review
              </p>
            </div>
          </div>

          {/* Amount & Rate form */}
          {step === 0 && (
            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] min-h-[650px] bg-gray-0 mx-auto flex-1 ">
              <div className="px-4 pt-10 lg:p-10 relative z-[1] flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={swap} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Convert Money
                  </p>
                </div>
                <div className="h-14" />
                {/* Amount Input */}

                <div className="flex-1 flex flex-col">
                  <div className="overflow-hidden border border-gray-100 rounded-2xl bg-gray-25">
                    <div className="rounded-2xl px-6 py-4 bg-gray-0 flex justify-between items-center ">
                      <div>
                        <p className="text-sm text-gray-400">Swap</p>
                        <div className="h-2" />
                        <CurrencyInput num={num} setNum={setNum} />
                      </div>
                      <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full pr-2.5">
                        <img
                          src={Nigeria}
                          alt=""
                          className="border border-gray-100 rounded-full"
                        />
                        <p className="text-md font-medium text-gray-500 ">
                          NGN
                        </p>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-center text-sm text-gray-400">
                        <span> You have </span>
                        <span className="font-medium text-gray-500">
                          500,000.09 NGN
                        </span>
                        <span> available in your balance </span>
                      </p>
                    </div>
                  </div>
                  <div className="h-6"></div>
                  <div className="flex justify-between -mb-2">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full center bg-gray-50">
                        <img src={minus} alt="" />
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        {(Number(num) * 0.05).toFixed(2)} NGN
                      </p>
                    </div>
                    <div className="gap-1.5 flex items-center ">
                      <p className="text-sm text-gray-400">5%</p>
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                      <p className="text-sm text-gray-400">Our fees</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 h-[1px] bg-gray-100" />
                    <div className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center">
                      <img src={ArrowDownUp} alt="" />
                    </div>
                    <div className="flex-1 h-[1px] bg-gray-100" />
                  </div>
                  <div className="flex justify-between -mt-2">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full center bg-gray-50">
                        <img src={equals} alt="" />
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        {(Number(num) - Number(num) * 0.05).toFixed(2)} NGN
                      </p>
                    </div>
                    <div className="gap-1.5 flex items-center ">
                      <p className="text-sm text-gray-400">
                        Total amount we’ll convert
                      </p>
                    </div>
                  </div>
                  <div className="h-4"></div>
                  <div className="flex justify-between ">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full center bg-gray-50">
                        <img src={multiply} alt="" />
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        0.0045
                      </p>
                    </div>
                    <div className="gap-1.5 flex items-center ">
                      <p className="text-sm text-gray-600">Recent rate</p>
                      <img src={SignPost} alt="" />
                    </div>
                  </div>
                  <div className="h-6"></div>
                  <div className=" border border-gray-100 rounded-2xl bg-gray-25">
                    <div className="rounded-2xl px-6 py-4 bg-gray-0 flex justify-between items-center ">
                      <div>
                        <p className="text-sm text-gray-400">For</p>
                        <div className="h-2" />
                        <p className="text-d-sm font-medium font-clashGrotesk text-gray-600">
                          {(
                            (Number(num) - Number(num) * 0.05) *
                            conversionRate
                          ).toFixed(2)}
                        </p>
                      </div>
                      <div className="relative">
                        <div
                          className="bg-gray-50 hover:bg-gray-100 cursor-pointer p-1 rounded-full flex gap-5"
                          onClick={() => {
                            setFromDropDown(!fromDropDown);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <img src={AllCurrencies[from].currencyImg} alt="" />
                            <p className="text-md font-medium text-gray-500">
                              {AllCurrencies[from]?.currencyCode}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-[1px] bg-gray-200" />
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        {fromDropDown && (
                          <CurrencyList
                            position="bottom-full right-0"
                            setSelected={setFrom}
                            setDropDown={setFromDropDown}
                          />
                        )}
                      </div>
                    </div>
                    <div className="p-3 w-full">
                      <div className="justify-center text-sm text-gray-400 flex gap-0.5 w-full ">
                        <p> Payment should arrive </p>
                        <img src={time} alt="" />
                        <p className="font-medium text-gray-500"> in seconds</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-6"></div>
                  <div className="w-full p-6 flex flex-col items-center bg-gray-25 rounded-2xl">
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full pr-2.5">
                        <img
                          src={AllCurrencies[from].currencyImg}
                          alt=""
                          className="border border-gray-100 rounded-full"
                        />
                        <p className="text-md font-medium text-gray-500 ">
                          {AllCurrencies[from].currencyCode}
                        </p>
                      </div>
                      <p className="text-md font-medium text-gray-500">
                        equals
                      </p>
                    </div>
                    <p className="text-d-md font-medium text-gray-600 font-clashGrotesk">
                      {conversionRate} NGN
                    </p>
                  </div>
                  <div className="h-10"></div>
                  <button
                    className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl mt-auto"
                    onClick={() => {
                      setStep(1);
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

          {/* Recipient Details*/}
          {step === 1 && (
            // Add New Customer

            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0  flex-1 mx-auto">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={receipt} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Review
                  </p>
                </div>
                <div className="h-14" />
                {/* Amount */}
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <div>
                      <p className="text-d-sm font-clashGrotesk font-medium">
                        {Number(num).toFixed(2)} NGN
                      </p>
                      <div className="flex gap-1">
                        <img src={arrow} alt="" />
                        <p className="text-sm text-gray-400">Convert money</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 p-[1px]">
                      <img src={Nigeria} alt="" />
                    </div>
                    <img src={doubleArrow} alt="" />
                    <div className="w-6 h-6 rounded-full bg-gray-100 p-[1px]">
                      <img src={AllCurrencies[from].currencyImg} alt="" />
                    </div>
                  </div>
                </div>

                <div className="h-9" />
                {/* Transaction Breakdown */}
                <div className="flex gap-3 items-center">
                  <p className="text-sm text-gray-400">Transaction breakdown</p>
                  <div className="flex-1 h-[1px] bg-gray-100" />
                  <p
                    className="text-sm text-primary-500 cursor-pointer"
                    onClick={() => {
                      setStep(0);
                    }}
                  >
                    Edit
                  </p>
                </div>

                <div className="h-6" />
                {/* Transaction Breakdown */}
                <div className="bg-gray-25 rounded-2xl p-6 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">You swap</p>
                      <p className="text-sm text-right font-medium">
                        {Number(num).toFixed(2)} NGN
                      </p>
                    </div>
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">Our charges</p>
                      <p className="text-sm text-right font-medium">
                        {(Number(num) * 0.05).toFixed(2)} NGN
                      </p>
                    </div>
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">Rate</p>
                      <p className="text-sm text-right font-medium">
                        {conversionRate}
                      </p>
                    </div>
                  </div>
                  <div className="h-6" />
                  <div className="h-[1px] w-full bg-gray-200" />
                  <div className="h-6" />
                  <div className="flex justify-between text-gray-600 ">
                    <p className="text-sm font-medium">You receive</p>
                    <p className="text-d-sm text-right font-clashGrotesk font-medium">
                      {(
                        (Number(num) - Number(num) * 0.05) *
                        conversionRate
                      ).toFixed(2)}{" "}
                      {AllCurrencies[from].currencyCode}
                    </p>
                  </div>
                </div>

                <div className="h-10"></div>
                <button
                  className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl mt-auto"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {" "}
                  Swap Money
                </button>
              </div>

              {/* Gradient background */}
              <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
            </div>
          )}

          {/* Desktop Stepper Counter */}
          <p className="text-xs font-medium text-gray-500 hidden lg:block">
            <span className="text-gray-400">Step </span>
            {step + 1}
            <span className="text-gray-400"> / 2</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ConvertBody;
