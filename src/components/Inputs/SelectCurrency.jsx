import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AllCurrencies as localCurrency } from "../data/AllCurrencies";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const SelectCurrency = ({ currency, setCurrency, setSelectedOption }) => {
  const popupRef = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    let savedCurrencies = JSON.parse(localStorage.getItem("allCurrencies"))
      ?.filter((item, index) => item.supported_payment_schemes !== "")
      .sort((a, b) => a.id - b.id);
    setCurrencies([...savedCurrencies]);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-1">
      <p className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2">
        Currency
      </p>
      <div className="h-1"></div>
      <div className="relative " ref={popupRef} key={"container"}>
        <div
          className={`flex gap-1 items-center hover:cursor-pointer hover:bg-gray-25 border  rounded-lg ${
            isOpen && "shadow-[0px_0px_0px_3px_#DDD7FE] border-primary-400 "
          } px-4 justify-between flex text-gray-600 border-gray-100 h-12`}
          onClick={handleTogglePopup}
        >
          <div className="flex gap-3 items-center  rounded-xl">
            <div className="h-5 w-5 rounded-full border border-gray-100 flex center overflow-hidden">
              <img
                src={localCurrency[currency?.id - 1]?.currencyImg || ""}
                alt=""
              />
            </div>
            <p className="text-sm text-gray-500 countryName">
              {currency?.name}
            </p>
          </div>
          {isOpen ? (
            <ChevronUpIcon className="w-4 text-gray-400 ml-1" />
          ) : (
            <ChevronDownIcon className="w-4 text-gray-400 ml-1" />
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={listRef}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full left-0 shadow-lg bg-gray-0 rounded-2xl  w-full  overflow-auto p-3  scroll-smooth "
            >
              {currencies.map((item, index) => {
                return (
                  <motion.div
                    className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl"
                    key={index}
                    // variants={listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.01 }}
                    onClick={() => {
                      handleTogglePopup();
                      const options = item.supported_payment_schemes.split(",");
                      console.log(options);
                      setSelectedOption(options[0]);
                      setCurrency(item);
                    }}
                  >
                    <div className="h-5 w-5 rounded-full border border-gray-100 flex center overflow-hidden">
                      <img
                        src={localCurrency[item.id - 1]?.currencyImg || ""}
                        alt=""
                      />
                    </div>
                    <p className="text-sm text-gray-500 countryName">
                      {item.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="h-1" />
      </div>
    </div>
  );
};

export default SelectCurrency;
