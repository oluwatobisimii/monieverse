import React, { useState } from "react";
import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import USA from "../../assets/countries/Country = USA.svg";
import Nigeria from "../../assets/countries/Country = Nigeria.svg";
import Euro from "../../assets/countries/Country = Europe.svg";
import UK from "../../assets/countries/Country = UK.svg";
import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import sendIcon from "../../assets/icons/PaperPlaneTiltSend.svg";
import convertIcon from "../../assets/icons/ArrowsClockwiseConvert.svg";
import CurrencyFormat from "../CurrencyFormat";
import Transactions from "../Transaction/Transactions";
import ReceiveMoneyOption from "../ReceiveMoney/ReceiveMoneyOption";

const CurrencyOption = ({
  currency,
  currencyImg,
  currencyCode,
  selected,
  setSelected,
}) => {
  return (
    <div
      className={`rounded-xl border border-gray-100 flex items-center justify-between px-4 py-3 ${
        selected === currency && "bg-gray-25"
      }`}
      onClick={() => {
        setSelected(currency);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
            <img src={currencyImg} alt="" />
          </div>
          <p className="text-gray-600 text-md font-medium">{currencyCode}</p>
        </div>
        <p className="text-md text-gray-400">- {currency}</p>
      </div>
      <div
        className={`h-6 w-6 ${
          selected === currency ? "bg-primary-400" : "bg-gray-50"
        } rounded-full flex center`}
      >
        {selected === currency && (
          <CheckIcon className="h-[18px] text-gray-0" />
        )}
      </div>
    </div>
  );
};

const AvailableBalances = () => {
  const [balance, setBalance] = useState("");
  const [balanceOptions, setBalanceOptions] = useState("");
  const [receiveMoneyOption, setReceiveMoneyOption] = useState(false);
  const [switchCurrency, setSwitchCurrency] = useState(false);

  const toggleOverlay = () => {
    setReceiveMoneyOption(!receiveMoneyOption);
  };

  return (
    <>
      {/* Overlays */}
      {receiveMoneyOption && (
        <ReceiveMoneyOption
          isOpen={receiveMoneyOption}
          onClose={toggleOverlay}
        />
      )}

      <section className="bg-gray-50 font-inter">
        <div className="container mx-auto px-4 py-6 lg:py-10">
          <div className="flex items-center gap-4">
            <ArrowLeftIcon className="h-4 lg:h-6 text-gray-600" />
            <p className="text-md  lg:text-d-xs font-medium lg:font-clashGrotesk">
              Available Balance
            </p>
          </div>
          <div className="h-8" />
          <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
            <div className="flex justify-between items-center">
              {/* Select Currency Mobile */}
              <div>
                <div
                  className="bg-grey-50 flex py-2 px-5 gap-10 md:hidden rounded-lg bg-gray-50"
                  onClick={() => {
                    setSwitchCurrency(true);
                  }}
                >
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                      <img src={USA} alt="" />
                    </div>
                    <p className="text-gray-600 text-md font-medium">USD</p>
                  </div>
                  <ChevronDownIcon className="text-gray-400 h-5" />
                </div>
                {/* Bottom Sheet Switch Currencies */}
                {switchCurrency && (
                  <div className="h-screen top-0 left-0 w-screen fixed z-10 appOverlay flex flex-col justify-end pb-20">
                    <div className="bg-gray-0 rounded-t-3xl ">
                      <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
                        <p className="text-sm text-gray-600">
                          Switch Currencies
                        </p>
                        <XMarkIcon
                          className="h-6 text-gray-300"
                          onClick={() => {
                            setSwitchCurrency(false);
                          }}
                        />
                      </div>
                      <div className="h-4" />
                      <div className="px-4 mb-10 space-y-6">
                        <div className="rounded-xl border border-gray-100 flex items-center gap-3 px-4 py-3">
                          <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                              <img src={UK} alt="" />
                            </div>
                            <p className="text-gray-600 text-md font-medium">
                              GBP
                            </p>
                          </div>
                          <p className="text-md text-gray-400">
                            - Great Britain Pounds
                          </p>
                        </div>
                        <div className="rounded-xl border border-gray-100 flex items-center gap-3 px-4 py-3">
                          <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                              <img src={Euro} alt="" />
                            </div>
                            <p className="text-gray-600 text-md font-medium">
                              EUR
                            </p>
                          </div>
                          <p className="text-md text-gray-400">- Euros</p>
                        </div>
                        <div className="rounded-xl border border-gray-100 flex items-center gap-3 px-4 py-3">
                          <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                              <img src={Nigeria} alt="" />
                            </div>
                            <p className="text-gray-600 text-md font-medium">
                              NGN
                            </p>
                          </div>
                          <p className="text-md text-gray-400">
                            - Nigerian Naira
                          </p>
                        </div>
                        <div className="rounded-xl border border-gray-100 flex items-center gap-3 px-4 py-3">
                          <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                              <img src={USA} alt="" />
                            </div>
                            <p className="text-gray-600 text-md font-medium">
                              USD
                            </p>
                          </div>
                          <p className="text-md text-gray-400">
                            - United States Dollar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Select Currency Desktop */}
                <div className="bg-gray-50 p-[2px] rounded-lg md:flex gap-2 hidden">
                <div className="px-3 py-1.5 flex gap-1 items-center rounded-[6px] cursor-pointer hover:bg-gray-0 bg-gray-0">
                    <div className="h-5 w-5 rounded-full">
                      <img src={Nigeria} alt="" />
                    </div>
                    <p className="text-md font-medium text-gray-600">NGN</p>
                  </div>
                  <div className="px-3 py-1.5 flex gap-1 items-center rounded-[6px] cursor-pointer hover:bg-gray-0">
                    <div className="h-5 w-5 rounded-full">
                      <img src={USA} alt="" />
                    </div>
                    <p className="text-md font-medium text-gray-600">USD</p>
                  </div>
                  <div className="px-3 py-1.5 flex gap-1 items-center rounded-[6px] cursor-pointer hover:bg-gray-0">
                    <div className="h-5 w-5 rounded-full">
                      <img src={UK} alt="" />
                    </div>
                    <p className="text-md font-medium text-gray-600">GBP</p>
                  </div>
                  <div className="px-3 py-1.5 flex gap-1 items-center rounded-[6px] cursor-pointer hover:bg-gray-0">
                    <div className="h-5 w-5 rounded-full">
                      <img src={Euro} alt="" />
                    </div>
                    <p className="text-md font-medium text-gray-600">EUR</p>
                  </div>
                </div>
              </div>
              {/* Add Balance */}
              <div className="relative z-0">
                <button
                  className="py-2 px-4 flex gap-2 items-center border border-gray-200 rounded-lg"
                  onClick={() => {
                    setBalanceOptions(true);
                  }}
                >
                  <PlusCircleIcon className="h-5 text-gray-600" />
                  <p className="text-md font-medium text-gray-600">
                    Add Balance
                  </p>
                </button>
                {/* Add Balance Dropdown */}
                {balanceOptions && (
                  <div className="absolute top-full right-0 shadow-lg bg-gray-0 rounded-2xl  w-[348px]">
                    <div className=" space-y-3 p-3">
                      <CurrencyOption
                        currencyImg={UK}
                        currency={"Great Britain Pounds"}
                        currencyCode={"GBP"}
                        selected={balance}
                        setSelected={setBalance}
                      />
                      <CurrencyOption
                        currencyImg={Euro}
                        currency={"Euros"}
                        currencyCode={"EUR"}
                        selected={balance}
                        setSelected={setBalance}
                      />
                      <CurrencyOption
                        currencyImg={Nigeria}
                        currency={"Nigerian Naira"}
                        currencyCode={"NGN"}
                        selected={balance}
                        setSelected={setBalance}
                      />
                      <CurrencyOption
                        currencyImg={USA}
                        currency={"United States Dollar"}
                        currencyCode={"USD"}
                        selected={balance}
                        setSelected={setBalance}
                      />
                    </div>
                    <div className="border-t border-gray-100 p-3 flex gap-4">
                      <button
                        className="rounded-lg py-2 px-5 border border-gray-200 text-gray-600 text-md font-medium flex-1"
                        onClick={() => {
                          setBalanceOptions(false);
                        }}
                      >
                        {" "}
                        Cancel
                      </button>
                      <button
                        className="rounded-lg py-2 px-5 bg-primary-400 text-gray-0 text-md font-medium flex-1"
                        onClick={() => {
                          setBalanceOptions(false);
                        }}
                      >
                        {" "}
                        Continue
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="h-12 lg:h-16" />
            <div className="mx-auto lg:mx-0">
              <div className="flex items-center gap-1 justify-center lg:justify-start">
                <p className="text-caption uppercase text-gray-400 font-semibold">
                  available balance
                </p>
                <img src={ShieldCheck} alt="" />
              </div>
              <div className="h-2" />
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex justify-center lg:justify-start">
                  <CurrencyFormat currency="USA" balance="150220.79" />
                </div>
                <div className="h-12 lg:hidden" />
                <div className="flex flex-col lg:flex-row gap-y-3 gap-3 items-center">
                  <button className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 w-full lg:w-auto">
                    <img src={sendIcon} alt="" />
                    <p className="text-md font-medium text-gray-600 font">
                      Send
                    </p>
                  </button>
                  <div className="flex gap-3 items-center w-full lg:w-auto">
                    <button
                      className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 flex-1"
                      onClick={() => {
                        setReceiveMoneyOption(true);
                      }}
                    >
                      <PlusIcon className="h-5 text-primary-500" />
                      <p className="text-md font-medium text-gray-600 font">
                        Receive
                      </p>
                    </button>
                    <button className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 flex-1">
                      <img src={convertIcon} alt="" />
                      <p className="text-md font-medium text-gray-600 font">
                        Convert
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-6" />
          <Transactions />
        </div>
      </section>
    </>
  );
};

export default AvailableBalances;
