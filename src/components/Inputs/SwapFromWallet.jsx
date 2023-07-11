import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCurrencies as localCurrency } from "../data/AllCurrencies";
import { getAllCurrencies } from "../../features/currenciesSlice";

const SwapFromWallet = ({
  position = "top-full right-0",
  fromCurrency,
  setFromCurrency,
  setFrom,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [SwappableFromCurrencies, setSwappableFromCurrencies] = useState([]);

  const Wallets = useSelector((state) => state.wallets);
  const AllCurrencies = useSelector((state) => state.allCurrencies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (AllCurrencies.status === "fulfilled") {
      let SwapFromCurrencies = Wallets.wallets
        .filter((currency) => {
          console.log(currency);
          const currentWallet = AllCurrencies.allCurrencies.find((data) => {
            console.log(currency.currency_id);
            return currency.currency_id === data.id;
          });
          console.log(currentWallet);
          return currentWallet.can_swap_from;
        })
        .sort((a, b) => a.id - b.id);
      console.log(SwapFromCurrencies);
      setSwappableFromCurrencies(SwapFromCurrencies);
      setFromCurrency({ ...SwapFromCurrencies[0] });
    } else if (AllCurrencies.status === "idle") {
      dispatch(getAllCurrencies());
    }
    // eslint-disable-next-line
  }, [AllCurrencies]);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="relative" ref={popupRef}>
      <div
        className="bg-gray-50 hover:bg-gray-100 cursor-pointer p-1 rounded-full flex gap-5"
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-gray-100 flex center overflow-hidden">
            <img
              src={localCurrency[fromCurrency.currency_id - 1]?.currencyImg}
              alt=""
            />
          </div>
          <p className="text-md font-medium text-gray-500">
            {localCurrency[fromCurrency.currency_id - 1]?.currencyCode}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-[1px] bg-gray-200" />
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {dropDown && (
        <div
          className={`absolute ${position} shadow-lg bg-gray-0 rounded-2xl w-[270px] md:w-[348px] z-30`}
        >
          <p className="text-sm text-gray-400 p-4 pb-1">All currencies</p>
          {SwappableFromCurrencies.map((currency, index) => {
            return (
              <div className="space-y-1" key={index}>
                <div
                  className="py-2 px-4 flex gap-2 hover:bg-gray-25 cursor-pointer"
                  key={index}
                  onClick={() => {
                    setFromCurrency({ ...currency });
                    setFrom(currency.currency_id);
                    setDropDown(false);
                  }}
                >
                  <div className="h-5 w-5 rounded-full border border-gray-100 flex center overflow-hidden">
                    <img
                      src={
                        localCurrency[currency.currency_id - 1]?.currencyImg ||
                        ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="text-sm text-gray-600">
                      {" "}
                      {localCurrency[currency.currency_id - 1]?.currencyCode}
                    </p>
                    <div className="h-1 w-1 rounded-full bg-gray-200 " />
                    <p className="text-sm text-gray-400">{currency.currency}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SwapFromWallet;
