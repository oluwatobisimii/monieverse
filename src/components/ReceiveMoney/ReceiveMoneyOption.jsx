import React, { useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import {
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import cardDefault from "../../assets/icons/ cardDefault.svg";
import cardSelected from "../../assets/icons/cardSelected.svg";

const ReceiveMoneyOption = ({isOpen, onClose}) => {
  const [optionType, setOptionType] = useState("");
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl">
        <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
          <p className="texxt-sm font-medium text-gray-600">
            How do you want to receive NGN?
          </p>
          <div className="h-10 w-10 flex center" onClick={onClose}>
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div
            className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex gap-8  ${
              optionType === "card" ? "bg-gray-25" : ""
            }`}
            onClick={() => {
              setOptionType("card");
            }}
          >
            <div
              className={`h-6 w-6 rounded-full center ${
                optionType === "card" ? "bg-primary-400" : "bg-gray-50"
              }`}
            >
              {optionType === "card" && (
                <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
              )}
            </div>
            <div className="flex  justify-between flex-1 md:flex-row flex-col gap-[7px] items-start">
              <div className="flex gap-1 items-center">
                {optionType === "card" ? (
                  <img src={cardSelected} alt="" />
                ) : (
                  <img src={cardDefault} alt="" />
                )}

                <p
                  className={`${
                    optionType === "card" ? "text-gray-600" : "text-gray-400"
                  } font-medium text-md`}
                >
                  Card
                </p>
              </div>
              <p className="text-gray-400  text-sm md:text-sm  w-[240px] md:w-[150px]">
                <span
                  className={`font-medium ${
                    optionType === "card" ? "text-gray-600" : "text-gray-400"
                  } `}
                >
                  20.38 NGN charges{" "}
                </span>
                <br className="hidden md:block" />
                Receive in seconds
              </p>
            </div>
          </div>
          <div className="h-4" />
          <div
            className={`group cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex gap-8  ${
              optionType === "bank" ? "bg-gray-25" : ""
            }`}
            onClick={() => {
              setOptionType("bank");
            }}
          >
            <div
              className={`h-6 w-6 rounded-full center ${
                optionType === "bank" ? "bg-primary-400" : "bg-gray-50"
              }`}
            >
              {optionType === "bank" && (
                <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
              )}
            </div>
            <div className="flex  justify-between flex-1 md:flex-row flex-col gap-[7px] items-start">
              <div className="flex gap-1 items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 10.5427H4.6875V16.9177H3C2.85082 16.9177 2.70774 16.977 2.60225 17.0825C2.49676 17.188 2.4375 17.331 2.4375 17.4802C2.4375 17.6294 2.49676 17.7725 2.60225 17.878C2.70774 17.9834 2.85082 18.0427 3 18.0427H21C21.1492 18.0427 21.2923 17.9834 21.3977 17.878C21.5032 17.7725 21.5625 17.6294 21.5625 17.4802C21.5625 17.331 21.5032 17.188 21.3977 17.0825C21.2923 16.977 21.1492 16.9177 21 16.9177H19.3125V10.5427H21.75C21.8724 10.5426 21.9915 10.5026 22.0891 10.4287C22.1867 10.3548 22.2576 10.251 22.2909 10.1332C22.3242 10.0154 22.3181 9.8899 22.2736 9.77583C22.2291 9.66176 22.1487 9.56532 22.0444 9.50115L12.2944 3.50115C12.2058 3.44676 12.1039 3.41797 12 3.41797C11.8961 3.41797 11.7942 3.44676 11.7056 3.50115L1.95563 9.50115C1.85135 9.56532 1.77085 9.66176 1.72637 9.77583C1.68188 9.8899 1.67583 10.0154 1.70913 10.1332C1.74243 10.251 1.81326 10.3548 1.91088 10.4287C2.00849 10.5026 2.12756 10.5426 2.25 10.5427ZM5.8125 10.5427H9.1875V16.9177H5.8125V10.5427ZM13.6875 10.5427V16.9177H10.3125V10.5427H13.6875ZM18.1875 16.9177H14.8125V10.5427H18.1875V16.9177ZM12 4.63646L19.7625 9.41771H4.2375L12 4.63646ZM23.0625 20.4802C23.0625 20.6294 23.0032 20.7725 22.8977 20.878C22.7923 20.9834 22.6492 21.0427 22.5 21.0427H1.5C1.35082 21.0427 1.20774 20.9834 1.10225 20.878C0.996763 20.7725 0.9375 20.6294 0.9375 20.4802C0.9375 20.331 0.996763 20.188 1.10225 20.0825C1.20774 19.977 1.35082 19.9177 1.5 19.9177H22.5C22.6492 19.9177 22.7923 19.977 22.8977 20.0825C23.0032 20.188 23.0625 20.331 23.0625 20.4802Z"
                    fill={optionType === "bank" ? "#8872FD" : "#BBC0CA"}
                  />
                </svg>

                <p
                  className={`${
                    optionType === "bank" ? "text-gray-600" : "text-gray-400"
                  } font-medium text-md`}
                >
                  Bank Transfer
                </p>
              </div>
              <p className="text-gray-400  text-sm md:text-sm  w-[240px] md:w-[150px]">
                <span
                  className={`font-medium ${
                    optionType === "bank" ? "text-gray-600" : "text-gray-400"
                  } `}
                >
                  Free{" "}
                </span>
                <br className="hidden md:block" />1 - 2 business days
              </p>
            </div>
          </div>

          <div className="h-[38px] md:h-14" />
          <div className="flex gap-x-6">
            <button
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
              disabled={!optionType}
            >
              {" "}
              Continue
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ReceiveMoneyOption;
