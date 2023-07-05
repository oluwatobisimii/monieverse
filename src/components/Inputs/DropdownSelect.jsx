import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const DropdownSelect = ({
  options,
  value,
  handleSelectChange,
  label,
  key,
  name,
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
    <div className="relative" key={key}>
      <label className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2">
        {label}
      </label>

      <div className="h-1" />
      <div
        className={`flex gap-1 items-center hover:cursor-pointer hover:bg-gray-25 border rounded-lg ${
          isOpen && "shadow-[0px_0px_0px_3px_#DDD7FE] border-primary-400"
        } px-4 justify-between flex text-gray-600 border-gray-100 h-12`}
        onClick={handleTogglePopup}
      >
        <p className="text-gray-500 text-sm font-inter font-medium flex items-center gap-2">
          {value}
        </p>
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
            className="absolute top-full left-0 shadow-lg bg-gray-0 rounded-2xl w-full overflow-auto p-3 scroll-smooth z-20 max-h-[250px]"
          >
            {options.map((item, index) => (
              <motion.div
                className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl"
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: index * 0.01 }}
                onClick={() => {
                  handleTogglePopup();
                  handleSelectChange(name,item);
                }}
              >
                <p className="text-sm text-gray-500">
                  {typeof item === "string" ? item : item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownSelect;
