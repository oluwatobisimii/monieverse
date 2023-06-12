import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const SelectState = ({ name, errors, setState, states, state }) => {
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


  return (
    <div className="flex-1">
      <p className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2">
        State
      </p>
      <div className="h-1"></div>
      
        <div className="relative " ref={popupRef} key={"container"}>
          <div
            className={`flex gap-1 items-center cursor-pointer border  rounded-lg ${
              isOpen && "shadow-[0px_0px_0px_3px_#DDD7FE] border-primary-400 "
            } px-4 justify-between flex text-gray-600 border-gray-100 h-12`}
            onClick={handleTogglePopup}
          >
            <p>{state || "Select State"} </p>
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
              className="absolute top-full left-0 shadow-lg bg-gray-0 rounded-2xl  w-full h-[250px] overflow-auto p-3  scroll-smooth "
            >
              {states.map((item, index) => {
                return (
                  <motion.p
                    className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl"
                    key={index}
                    // variants={listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.01 }}
                    onClick={() => {
                      setState(item);
                      handleTogglePopup();
                    }}
                  >
                    <p className="text-sm text-gray-500 countryName">{item}</p>
                  </motion.p>
                );
              })}
            </motion.div>
          )}
          </AnimatePresence>

          <div className="h-1" />

          {errors && (
            <p className="text-xs font-medium text-error-400">{errors[name]}</p>
          )}
        </div>
      
    </div>
  );
};

export default SelectState;
