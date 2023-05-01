import { AddRecipient } from "./AddRecipient";
import React, { useState } from "react";
import globe from "../../assets/icons/move-money.svg";
import USA from "../../assets/countries/Country = USA.svg";
import userPlus from "../../assets/icons/UserPlus.svg";
import Bank from "../../assets/icons/Bank.svg";
import infoPrimary from "../../assets/icons/InfoPrimary.svg";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import hour from "../../assets/icons/HourglassSimpleMedium.svg";
import recipient from "../../assets/icons/IdentificationBadge.svg";
import receipt from "../../assets/icons/Receipt.svg";
import infoTooltip from "../../assets/icons/Info-tooltip.svg";
import arrow from "../../assets/icons/ArrowsLeftRight.svg";
import doubleArrow from "../../assets/icons/doubleArrow.svg";
import SignPost from "../../assets/icons/Signpost.svg";

import SavedRecipient from "./SavedRecipient";
import CustomInput from "../Inputs/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import StepperDivider from "../UtilityComponents/StepperDivider";

const AmountRate = () => {
  // const initialvalues = { amount: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialvalues);
  // const [formErrors, setFormErrors] = useState({});
  const [addRecipient, setAddRecipient] = useState(false);
  const [dropDown, setDropDown] = useState(true);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  const [step, setStep] = useState(0);
  let loaderWidth = step === 0 ? "w-1/3" : step === 1 ? "w-2/3" : "w-full";

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
                Recipient
              </p>
            </div>
            <StepperDivider/>

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
              <p
                className={`text-sm font-medium  ${
                  step === 2 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Review
              </p>
            </div>
          </div>

          {/* Amount & Rate form */}
          {step === 0 && (
            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0 mx-auto flex-1">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={globe} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Move Money
                  </p>
                </div>
                <div className="h-14" />
                {/* Amount Input */}
                <div className="overflow-hidden border border-gray-100 rounded-2xl bg-gray-25">
                  <div className="rounded-2xl px-6 py-4 bg-gray-0 flex justify-between items-center ">
                    <div>
                      <p className="text-sm text-gray-400">Recipient gets</p>
                      <div className="h-2" />
                      <p className="text-d-xs lg:text-d-sm font-clashGrotesk font-medium text-gray-400">
                        0.00
                      </p>
                    </div>
                    <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full">
                      <img
                        src={USA}
                        alt=""
                        className="border border-gray-100 rounded-full"
                      />
                      <p className="text-md font-medium text-gray-500 ">USD</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-center text-sm text-gray-400">
                      <span> You have </span>
                      <span className="font-medium text-gray-500">
                        500.09 USD
                      </span>
                      <span> available in your balance </span>
                    </p>
                  </div>
                </div>

                <div className="h-6" />
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 flex items-center justify-center rounded-full bg-gray-50">
                      <PlusIcon className="h-2 w-2 text-gray-500 " />
                    </div>
                    <p className="text-sm font-medium text-grey-500">
                      0.24 USD
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <p className="text-sm text-gray-400">5%</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    <p className="text-sm text-gray-400">Our fees</p>
                  </div>
                </div>
                <div className="h-6" />

                <div className="flex gap-3 items-center">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-gray-400">
                      Payment should arrive by
                    </p>
                    <div className="flex gap-0.5">
                      <img src={hour} alt="" />
                      <p className="text-sm text-gray-r00 font-medium">
                        Friday
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 h-[1px] bg-gray-100" />
                </div>
                <div className="h-6" />
                {/* Total Amount Sending*/}
                <div className="overflow-hidden border border-gray-100 rounded-2xl bg-gray-25">
                  <div className="rounded-2xl px-6 py-4 flex justify-between items-center ">
                    <div>
                      <p className="text-sm text-gray-400">You send</p>
                      <div className="h-2" />
                      <p className="text-d-xs lg:text-d-sm font-clashGrotesk font-medium text-gray-400">
                        0.24
                      </p>
                    </div>
                    <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full">
                      <img
                        src={USA}
                        alt=""
                        className="border border-gray-100 rounded-full"
                      />
                      <p className="text-md font-medium text-gray-500 ">USD</p>
                    </div>
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

          {/* Recipient Details*/}
          {step === 1 && (
            // Add New Customer

            <div className=" lg:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0  flex-1 mx-auto">
              <div className="px-4 pt-10 lg:p-10 relative z-[1]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={recipient} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Recipient’s Details
                  </p>
                </div>
                <div className="h-14" />
                {!addRecipient && (
                  <SavedRecipient
                    dropDown={dropDown}
                    setAddRecipient={setAddRecipient}
                    addRecipient={addRecipient}
                    userPlus={userPlus}
                    setDropDown={setDropDown}
                    Bank={Bank}
                    setStep={setStep}
                  />
                )}
                {addRecipient && (
                  <AddRecipient
                    addRecipient={addRecipient}
                    infoTooltip={infoTooltip}
                    setAddRecipient={setAddRecipient}
                  />
                )}
              </div>

              {/* Gradient background */}
              <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
            </div>
          )}

          {/* Review */}
          {step === 2 && (
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
                    <div className="h-16 w-16 rounded-full avatarShadow center flex border-[2px] border-gray-0 bg-error-100 ">
                      <p className="text-error-500 text-d-sm">K</p>
                    </div>
                    <div>
                      <p className="text-d-sm font-clashGrotesk font-medium">
                        1,000 USD
                      </p>
                      <div className="flex gap-1">
                        <img src={arrow} alt="" />
                        <p className="text-sm text-gray-400">
                          <span className="text-gray-500">SWIFT transfer</span>{" "}
                          to <span className="text-gray-500">Konotal</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 p-[1px]">
                      <img src={USA} alt="" />
                    </div>
                    <img src={doubleArrow} alt="" />
                    <div className="w-6 h-6 rounded-full bg-gray-100 p-[1px]">
                      <img src={USA} alt="" />
                    </div>
                  </div>
                </div>

                <div className="h-9" />

                <div className="flex gap-3 items-center">
                  <p className="text-sm text-gray-400">Transaction breakdown</p>
                  <div className="flex-1 h-[1px] bg-gray-100" />
                  <p className="text-sm text-primary-500">Edit</p>
                </div>
                <div className="h-6" />
                <div className="bg-gray-25 rounded-t-2xl p-6 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">Konotal receives</p>
                      <p className="text-sm text-right font-medium">
                        1,000 USD
                      </p>
                    </div>
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">Total fees (Our charges incl.)</p>
                      <p className="text-sm text-right font-medium">0.24 USD</p>
                    </div>
                    <div className="flex justify-between text-gray-500 ">
                      <p className="text-sm ">SWIFT transfer charges</p>
                      <p className="text-sm text-right font-medium">2.55 USD</p>
                    </div>
                  </div>
                  <div className="h-6" />
                  <div className="h-[1px] w-full bg-gray-200" />
                  <div className="h-6" />
                  <div className="flex justify-between text-gray-600 ">
                    <p className="text-sm font-medium">You send</p>
                    <p className="text-d-sm text-right font-clashGrotesk font-medium">
                      1,002.79 USD
                    </p>
                  </div>
                </div>

                <div className="h-2" />
                <div className="bg-green-100 rounded-b-2xl p-6 text-green-600 flex justify-between items-center ">
                  <p className="text-sm">Estimated arrival date</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      Thursday, 23 Sept 2023
                    </p>
                    <img src={SignPost} alt="" />
                  </div>
                </div>

                <div className="h-10" />

                <div className="flex gap-3 items-center">
                  <p className="text-sm text-gray-400">Recipient details</p>
                  <div className="flex-1 h-[1px] bg-gray-100" />
                  <p className="text-sm text-primary-500">Change</p>
                </div>
                <div className="h-6" />
                <div className="flex gap-3 ">
                  <div className="h-8 w-8 center flex bg-lightBlue-100 rounded-full">
                    <img src={Bank} alt="" />
                  </div>
                  <div className="flex-1">
                    <p className="text-md text-gray-600">
                      Konotal Logistics Express Ltd
                    </p>
                    <p className="text-sm text-gray-400">hello@konotal.co</p>

                    <div className="h-4" />
                    <div className="flex  justify-between md:justify-start lg:gap-20 items-center">
                      <div>
                        <p className="text-xs text-gray-400 ">SWIFT code</p>
                        <div className="h-0.5" />
                        <p className="text-md text-gray-600 ">UIJ90I454DF</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 ">Account number</p>
                        <div className="h-0.5" />
                        <p className="text-md text-gray-600 ">0234222212</p>
                      </div>
                    </div>
                    <div className="h-1" />
                  </div>
                </div>
                <div className="h-10" />
                <div className="flex-1 h-[1px] bg-gray-100" />
                <div className="h-10" />
                <CustomInput
                  label={"Purpose of this transfer"}
                  placeholder={"Select a reason"}
                />
                <div className="h-6" />
                <CustomInput
                  label={"Reference (Optional)"}
                  placeholder={"Include an optional reference note"}
                />
                <div className="h-10" />
                <div className="flex items-center gap-4">
                  <input type="checkbox" name="terms" id="" />
                  <p className="text-sm text-gray-500">
                    I accept the{" "}
                    <span className="font-medium text-primary-500">
                      <Link to="">Terms of Use</Link>
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-primary-500">
                      <Link to="">Privacy policy</Link>
                    </span>
                  </p>
                </div>
                <div className="h-6" />
                <div className="rounded-2xl px-4 py-3 bg-primary-100 flex gap-2 items-start">
                  <img src={infoPrimary} alt="" />
                  <p className="text-sm text-primary-500">
                    Ensure to verify the identity of the person you’re sending
                    to avoid fraudulent transactions. Also, get fully refunded
                    within 30 minutes of payment when you cancel, unless the
                    funds have been deposited.
                  </p>
                </div>
                <div className="h-6" />
                <button
                  className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Confirm and proceed
                </button>
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

export default AmountRate;
