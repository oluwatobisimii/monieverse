import React, { useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

import identity from "../../assets/icons/IdentificationBadge.svg";
import map from "../../assets/icons/MapTrifold.svg";

import CustomInput from "../Inputs/CustomInput";
import passport from "../../assets/icons/kyc/AddressBook.svg";
import driversLicence from "../../assets/icons/kyc/IdentificationCard.svg";
import NationalID from "../../assets/icons/kyc/IdentificationBadge.svg";
import StepperDivider from "../UtilityComponents/StepperDivider";

const KYCFrame = () => {
  // const initialvalues = { amount: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialvalues);
  // const [formErrors, setFormErrors] = useState({});

  const [optionType, setOptionType] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  const [step, setStep] = useState(0);
  let loaderWidth = step === 0 ? "w-1/2" : "w-full";

  return (
    <>
      {/* Loader */}

      <div className="lg:bg-gray-50 w-full min-h-screen">
        <div className="h-1 bg-primary-200 w-full">
          <div
            className={`h-full ${loaderWidth} duration-200 bg-primary-400 transition-all`}
          />
        </div>
        {/* Mobile Stepper */}
        <div className="flex justify-between lg:hidden p-4 pt-3 bg-gray-50">
          <p className="text-xs font-medium text-gray-500 ">
            {step === 0 ? "Your Details" : "Identity"}
          </p>
          <p className="text-xs font-medium text-gray-500 ">
            {step + 1}
            <span className="text-gray-400"> / 2</span>
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
                Your Details
              </p>
            </div>
            <StepperDivider/>

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
                Identity
              </p>
            </div>
          </div>

          {/* Amount & Rate form */}
          {step === 0 && (
            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0 mx-auto flex-1">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={map} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Address Details
                  </p>
                </div>
                <div className="h-14" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="country"
                      className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2"
                    >
                      Country
                    </label>
                    <div className="h-1" />
                    <div className="border border-gray-100  px-4 py-3 rounded-lg focus-within:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter flex justify-between">
                      <select
                        name="country"
                        id=""
                        className="focus:outline-none flex-1 bg-gray-0"
                      >
                        <option value="">Nigeria</option>
                      </select>
                      <ChevronDownIcon className="h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="country"
                      className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2"
                    >
                      State
                    </label>
                    <div className="h-1" />
                    <div className="border border-gray-100  px-4 py-3 rounded-lg focus-within:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter flex justify-between">
                      <select
                        name="country"
                        id=""
                        className="focus:outline-none flex-1 bg-gray-0"
                      >
                        <option value="">Select State</option>
                      </select>
                      <ChevronDownIcon className="h-5" />
                    </div>
                  </div>
                </div>

                <div className="h-6" />
                <CustomInput
                  label={"Street Address"}
                  placeholder="Enter your street address"
                />
                <div className="h-6" />

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <CustomInput label={"City"} placeholder="Town or City" />
                  </div>
                  <div className="flex-1">
                    <CustomInput label={"Zip Code"} placeholder="Ex. 100001" />
                  </div>
                </div>

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

          {/* Identity*/}
          {step === 1 && (
            // Add New Customer
            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0 mx-auto flex-1">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={identity} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Identity Document
                  </p>
                </div>
                <div className="h-14" />
                <p className="text-md font-medium text-gray-600">
                  Prove your identity through any document below.
                </p>

                <div className="h-3" />
                <div
                  className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex gap-8  ${
                    optionType === "passport" ? "bg-gray-25" : ""
                  }`}
                  onClick={() => {
                    setOptionType("passport");
                  }}
                >
                  <div
                    className={`h-6 w-6 rounded-full center ${
                      optionType === "passport"
                        ? "bg-primary-400"
                        : "bg-gray-50"
                    }`}
                  >
                    {optionType === "passport" && (
                      <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                    )}
                  </div>
                  <div className="flex  justify-between flex-1 md:flex-row flex-col gap-[7px] items-start">
                    <div className="flex gap-1 items-center">
                      {optionType === "passport" ? (
                        <img src={passport} alt="" />
                      ) : (
                        <img src={passport} alt="" />
                      )}

                      <p
                        className={`${
                          optionType === "passport"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } font-medium text-md`}
                      >
                        Passport
                      </p>
                    </div>
                    <p className="text-gray-400  text-sm md:text-sm  w-[240px]">
                      <span
                        className={` ${
                          optionType === "passport"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } `}
                      >
                        Prove your identity through your government issued
                        passport
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-4" />
                <div
                  className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex gap-8  ${
                    optionType === "drivers-license" ? "bg-gray-25" : ""
                  }`}
                  onClick={() => {
                    setOptionType("drivers-license");
                  }}
                >
                  <div
                    className={`h-6 w-6 rounded-full center ${
                      optionType === "drivers-license"
                        ? "bg-primary-400"
                        : "bg-gray-50"
                    }`}
                  >
                    {optionType === "drivers-license" && (
                      <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                    )}
                  </div>
                  <div className="flex  justify-between flex-1 md:flex-row flex-col gap-[7px] items-start">
                    <div className="flex gap-1 items-center">
                      {optionType === "drivers-license" ? (
                        <img src={driversLicence} alt="" />
                      ) : (
                        <img src={driversLicence} alt="" />
                      )}

                      <p
                        className={`${
                          optionType === "drivers-license"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } font-medium text-md`}
                      >
                        Driver’s License
                      </p>
                    </div>
                    <p className="text-gray-400  text-sm md:text-sm  w-[240px]">
                      <span
                        className={` ${
                          optionType === "drivers-license"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } `}
                      >
                        Prove your identity through your government issued
                        driver’s license
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-4" />
                <div
                  className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex gap-8  ${
                    optionType === "national-id" ? "bg-gray-25" : ""
                  }`}
                  onClick={() => {
                    setOptionType("national-id");
                  }}
                >
                  <div
                    className={`h-6 w-6 rounded-full center ${
                      optionType === "national-id"
                        ? "bg-primary-400"
                        : "bg-gray-50"
                    }`}
                  >
                    {optionType === "national-id" && (
                      <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
                    )}
                  </div>
                  <div className="flex  justify-between flex-1 md:flex-row flex-col gap-[7px] items-start">
                    <div className="flex gap-1 items-center">
                      {optionType === "national-id" ? (
                        <img src={NationalID} alt="" />
                      ) : (
                        <img src={NationalID} alt="" />
                      )}

                      <p
                        className={`${
                          optionType === "national-id"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } font-medium text-md`}
                      >
                        National ID
                      </p>
                    </div>
                    <p className="text-gray-400  text-sm md:text-sm  w-[240px]">
                      <span
                        className={` ${
                          optionType === "national-id"
                            ? "text-gray-600"
                            : "text-gray-400"
                        } `}
                      >
                        Prove your identity through your legal national ID card
                      </span>
                    </p>
                  </div>
                </div>

                <div className="h-6" />

                <div className="h-14" />
                <div className="flex gap-x-6">
                  <button
                    className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
                    onClick={() => {
                      setStep(0);
                    }}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                    <p>Go back</p>
                  </button>
                  <button className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl">
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
            <span className="text-gray-400">Step </span>
            {step + 1}
            <span className="text-gray-400"> / 2</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default KYCFrame;
