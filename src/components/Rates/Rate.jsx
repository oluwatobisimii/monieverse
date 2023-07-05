import React, { useState, useEffect } from "react";
import { AllCurrencies } from "../data/AllCurrencies";
import { ArrowDown } from "phosphor-react";
import { baseApiCall } from "../../api/MakeApiCallswithHeader";
import InputCurrency from "../Inputs/InputCurrency";
import SwapFromCurrencies from "../Inputs/SwapFromCurrencies";
import SwapToCurrencies from "../Inputs/SwapToCurrencies";

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
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(2);
  const [rate, setRate] = useState(0.025);
  const [fromCurrency, setFromCurrency] = useState({});
  const [toCurrency, setToCurrency] = useState({});
  const [num, setNum] = React.useState(0);

  const getRateDetails = async () => {
    await baseApiCall(
      `/users/quotes?base_currency=${from}&quote_currency=${to}&amount=10000`,
      "GET"
    )
      .then((payload) => {
        if (payload.status === "OK") {
          setRate(payload.data.rate.rate);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          if (to === from) {
            setRate(1);
          } else {
            setRate(0);
          }
        }
      });
  };

  useEffect(() => {
    console.log(1 + 1 + "Time: " + Date.now());
    console.log(fromCurrency);
    setFrom(fromCurrency.id);
    setTo(toCurrency.id);
    getRateDetails();
    // eslint-disable-next-line
  }, [fromCurrency, toCurrency]);

  

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
              <div className="rounded-2xl px-3 md:px-6 py-4 bg-gray-0 flex justify-between items-center ">
                <div className="flex-1 w-1/2 ">
                  <p className="text-sm text-gray-400 ">From Currency</p>
                  <div className="h-2" />
                  {/* <CurrencyInput num={num} setNum={setNum} /> */}
                  <InputCurrency value={num} setValue={setNum} />
                </div>
                <SwapFromCurrencies
                  fromCurrency={fromCurrency}
                  setFromCurrency={setFromCurrency}
                  setFrom={setFrom}
                />
              </div>
              <div className="h-2" />
              {/* Divider */}
              <div className="flex items-center">
                <div className="flex-1 h-[1px] bg-gray-100" />
                <div className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center">
                  <ArrowDown className="text-gray-400 text-[24px]" />
                </div>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="h-2" />
              <div className="rounded-2xl px-3 md:px-6 py-4 bg-gray-0 flex justify-between items-center ">
                <div>
                  <p className="text-sm text-gray-400">For</p>
                  <div className="h-2" />
                  <p className="text-d-sm font-medium font-clashGrotesk text-gray-600">
                    {(Number(num) * rate).toFixed(2)}
                  </p>
                </div>
                <SwapToCurrencies
                  toCurrency={toCurrency}
                  setToCurrency={setToCurrency}
                  setTo={setTo}
                />
              </div>
            </div>

            {/* Unit of Exchange */}
            <div className="bg-gray-25 p-16 lg:w-[42%] rounded-xl lg:rounded-2xl flex-col center">
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full pr-2.5">
                      <img
                        src={AllCurrencies[from-1]?.currencyImg}
                        alt=""
                        className="border border-gray-100 rounded-full"
                      />
                      <p className="text-md font-medium text-gray-500 ">
                        1 {fromCurrency.code}
                      </p>
                    </div>
                    <p className="text-md font-medium text-gray-500">equals</p>
                  </div>
                  <p className="text-d-sm lg:text-d-lg text-gray-600 font-clashGrotesk font-medium text-center">
                    {rate} {toCurrency.code}
                  </p>
                </div>

            {/* <div className="bg-gray-25 p-16 lg:w-[42%] rounded-xl lg:rounded-2xl">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
