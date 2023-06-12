import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { BankNamesCodes } from "../data/NigerianBanks";

const SelectBank = ({ name, errors, setBank, bank }) => {
  const popupRef = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  //   Scroll the Elements on Keypress
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (listRef.current && /[a-zA-Z]/.test(key)) {
        const items = listRef.current.getElementsByClassName("countryName");
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const text = item.textContent.trim().toUpperCase();

          if (text.startsWith(key.toUpperCase())) {
            listRef.current.scrollTop = item.offsetTop;
            break;
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // framer motion keyframes
  const container = {
    hidden: { opacity: 0 },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
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
        Bank
      </p>
      <div className="h-1"></div>
      <AnimatePresence>
        <div className="relative " ref={popupRef} key={"container"}>
          <div
            className={`flex gap-1 items-center cursor-pointer border  rounded-lg ${
              isOpen && "shadow-[0px_0px_0px_3px_#DDD7FE] border-primary-400 "
            } px-4 justify-between flex text-gray-600 border-gray-100 h-12`}
            onClick={handleTogglePopup}
          >
            <p>{BankNamesCodes[bank].name || "Select Bank"} </p>
            {isOpen ? (
              <ChevronUpIcon className="w-4 text-gray-400 ml-1" />
            ) : (
              <ChevronDownIcon className="w-4 text-gray-400 ml-1" />
            )}
          </div>

          {isOpen && (
            <motion.div
              ref={listRef}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute bottom-[calc(100%+18px)] left-0 shadow-lg bg-gray-0 rounded-2xl  w-full h-[250px] overflow-auto p-3  scroll-smooth border border-gray-25"
            >
              {BankNamesCodes.map((item, index) => {
                return (
                  <motion.p
                    className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl"
                    key={index}
                    // variants={listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, delay: index * 0.01 }}
                    onClick={() => {
                      setBank(index);
                      console.log(index)
                      handleTogglePopup();
                    }}
                  >
                    <p className="text-sm text-gray-500 countryName">
                      {item.name}
                    </p>
                  </motion.p>
                );
              })}
            </motion.div>
          )}

          <div className="h-1" />

          {errors && (
            <p className="text-xs font-medium text-error-400">{errors[name]}</p>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SelectBank;
