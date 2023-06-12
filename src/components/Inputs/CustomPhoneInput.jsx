import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  defaultCountries,
  FlagEmoji,
  parseCountry,
} from "react-international-phone";

const CustomPhoneInput = ({
  errors,
  value,
  onChange,
  selectedCountry,
  setSelectedCountry,
  setCountryCode,
}) => {
  const popupRef = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  let allCountries = defaultCountries;

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

  return (
    <>
      <AnimatePresence>
        <div className="relative" ref={popupRef} key={"container"}>
          <div
            className={`border flex  rounded-lg focus:outline-none focus-within:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter invalid:border-error-400 h-12 items-center relative ${
              errors && errors.phone ? "border-error-400" : "border-gray-100"
            } px-4`}
          >
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={handleTogglePopup}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden relative">
                <FlagEmoji
                  iso2={selectedCountry.iso2}
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    top: -5,
                    translateX: "50%",
                    padding: 0,
                    border: "1px solid red",
                    transform: "scale(1.6)",
                  }}
                />
              </div>
              <p className="text-md text-gray-500">
                +{selectedCountry.dialCode}
              </p>
              {isOpen ? (
                <ChevronUpIcon className="w-4 text-gray-400 ml-1" />
              ) : (
                <ChevronDownIcon className="w-4 text-gray-400 ml-1" />
              )}
              <div className="h-6 ml-3 w-[1px] bg-gray-100" />
            </div>
            <input
              type="number"
              value={value}
              onChange={onChange}
              className="focus:outline-none flex-1 px-3"
            />
          </div>
          {isOpen && (
            <motion.div
              ref={listRef}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full left-0 shadow-lg bg-gray-0 rounded-2xl  w-full h-[250px] overflow-auto p-3  scroll-smooth "
            >
              {allCountries.map((c, i) => {
                const country = parseCountry(c);
                return (
                  <motion.div
                    className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl"
                    key={i}
                    // variants={listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, delay: i * 0.01 }}
                    onClick={() => {
                      setSelectedCountry(country);
                      setCountryCode(country.iso2);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <div className="w-5 h-5 rounded-full  overflow-hidden relative">
                      <FlagEmoji
                        iso2={country.iso2}
                        style={{
                          width: "30px",
                          height: "30px",
                          position: "absolute",
                          top: -5,
                          translateX: "50%",
                          padding: 0,
                          border: "1px solid red",
                          transform: "scale(1.6)",
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 countryName">
                      {country.name}
                    </p>
                    <p className="text-sm text-gray-500">+{country.dialCode}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
        <div className="h-1" />
        {errors && (
          <p className="text-xs text-error-400">
            {errors["phone"] === "phone already exists"
              ? "Phone number already exists, check and try again"
              : errors["phone"]}
          </p>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomPhoneInput;
