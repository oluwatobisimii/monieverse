import React from "react";

const StepperWrapper = ({ children }) => {
  return (
    <div className=" md:rounded-3xl overflow-hidden relative font-inter md:max-w-[640px] bg-gray-0  flex-1 mx-auto">
      <div className="px-4 pt-10 md:p-10 relative z-[1]">{children}</div>
      {/* Gradient background */}
      <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
    </div>
  );
};

export default StepperWrapper;
