import { motion } from "framer-motion";
import React from "react";

const StepperWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "-15%", opacity: 0 }}
      animate={{ x: "0%", opacity: "100%" }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      exit={{ x: "-20%", opacity: 0 }}
      className=" md:rounded-3xl relative font-inter md:w-[640px]  w-full md:max-w-[640px] bg-gray-0  flex-1 mx-auto "
    >
      <div className="px-4 pt-10 md:p-10 relative z-[1] lg:h-[calc(88vh-4px-80px)] overflow-y-auto no-scrollbar ">
        {children}
      </div>
      {/* Gradient background */}
      <div className="monie-gradient absolute top-0 h-[141px] w-full z-0 md:rounded-t-3xl" />
    </motion.div>
  );
};

export default StepperWrapper;
