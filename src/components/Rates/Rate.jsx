import React, { useState, useEffect } from "react";
import Nigeria from "../../assets/countries/Country = Nigeria.svg";
import USA from "../../assets/countries/Country = USA.svg";
import ArrowDownUp from "../../assets/icons/ArrowsDownUp.svg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AllCurrencies } from "../data/AllCurrencies";

export const CurrencyList = ({
  position = "top-full right-0",
  setSelected,
  setDropDown,
}) => {
  return (
    <div
      className={`absolute ${position} shadow-lg bg-gray-0 rounded-2xl  w-[348px] z-30`}
    >
      <p className="text-sm text-gray-400 p-4 pb-1">All currencies</p>
      {AllCurrencies.map((currency, index) => {
        return (
          <div className="space-y-1">
            <div
              className="py-2 px-4 flex gap-2 hover:bg-gray-25 cursor-pointer"
              key={index}
              onClick={() => {
                setSelected(index);
                setDropDown(false);
              }}
            >
              <div className="h-6 w-6 rounded-full border border-gray-100">
                <img src={currency.currencyImg} alt="" />
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-sm text-gray-600">{currency.currencyCode}</p>
                <div className="h-1 w-1 rounded-full bg-gray-200 " />
                <p className="text-sm text-gray-400">{currency.currencyName}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Rate = () => {
  const [from, setFrom] = useState(0);
  const [fromValue, setFromValue] = useState(0);
  // eslint-disable-next-line
  const [formattedInput, setFormattedInput] = useState(0);
  const [fromDropDown, setFromDropDown] = useState(false);
  // eslint-disable-next-line
  const [to, setTo] = useState(1);
  // eslint-disable-next-line
  const [toValue, setToValue] = useState(1);
  // eslint-disable-next-line
  const [toDropDown, setToDropDown] = useState(false);

  useEffect(() => {
    if (fromValue < 100) {
      setFormattedInput((prev) => {
        if (prev) {
          return prev / 100;
        } else return fromValue / 100;
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className="bg-gray-50 w-full overflow-hidden font-inter pb-28">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
          <div className="flex justify-between items-center">
            <p className="font-clashGrotesk text-[20px] lg:text-d-xs font-medium ">
              Exchange Rate
            </p>
            <p className="text-sm font-medium text-primary-500">Sync Rates</p>
          </div>
          {/* Space */}
          <div className="h-6 lg:h-10" />
          {/* Cards */}
          <div className="flex flex-col gap-y-6 gap-x-10 lg:flex-row">
            {/* Exchange */}
            <div className="p-4 lg:px-10 lg:py-8 rounded-xl lg:rounded-2xl border-gray-100 border w-full  lg:w-[54%]">
              <div className="flex w-full justify-between items-end">
                <div className="w-[50%] ">
                  <p className="text-sm text-gray-400">From Currency</p>
                  <div className="h-2" />

                  <input
                    className="text-d-xs lg:text-d-sm text-gray-600 placeholder:text-gray-600 font-clashGrotesk font-medium outline-none flex-1"
                    type="number"
                    step="0.01"
                    value={fromValue}
                    placeholder="720.00"
                    onChange={(e) => {
                      const value = e.target.value;

                      setFromValue(
                        parseFloat(value).toLocaleString("en-US", {
                          style: "decimal",
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                      );
                    }}
                    onBlur={(e) => {}}
                  />
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
                      setSelected={setFrom}
                      setDropDown={setFromDropDown}
                    />
                  )}
                </div>
              </div>
              <div className="h-2" />
              {/* Divider */}
              <div className="flex items-center">
                <div className="flex-1 h-[1px] bg-gray-100" />
                <div className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center">
                  <img src={ArrowDownUp} alt="" />
                </div>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="h-2" />
              <div className="flex justify-between items-end">
                <div className="w-[50%]">
                  <p className="text-sm text-gray-400">To Currency</p>
                  <div className="h-2" />
                  <input
                    className="text-d-xs lg:text-d-sm text-gray-600 placeholder:text-gray-600 font-clashGrotesk font-medium outline-none"
                    placeholder="1.00"
                  />
                </div>
                <div className="bg-gray-50 p-1 rounded-full flex gap-5">
                  <div className="flex items-center gap-2">
                    <img src={USA} alt="" />
                    <p className="text-md font-medium text-gray-500">USD</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-[1px] bg-gray-200" />
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Unit of Exchange */}
            <div className="bg-gray-25 p-16 lg:w-[42%] rounded-xl lg:rounded-2xl">
              <div className="flex gap-2 items-center justify-center">
                <div className="flex items-center gap-2 bg-gray-0 rounded-full p-1 pr-3">
                  <img src={Nigeria} alt="" />
                  <p className="text-md font-medium text-gray-500">1 NGN</p>
                </div>
                <p className="text-md font-medium text-gray-500">equals</p>
              </div>
              <div className="h-4" />
              <p className="text-d-sm lg:text-d-lg text-gray-600 font-clashGrotesk font-medium text-center">
                0.0045USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
