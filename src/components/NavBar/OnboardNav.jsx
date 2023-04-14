import React from "react";
import logoSM from "../../assets/logo/logo-sm.svg";
import logoLG from "../../assets/logo/logo-lg.svg";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
const OnboardNav = () => {
  return (
    <div className="p-4 flex justify-between font-inter items-center lg:px-16 lg:py-8">
      <img src={logoLG} alt="" className="hidden lg:block" />
      <img src={logoSM} alt="" className="lg:hidden block" />

      <div className="lg:flex gap-2 hidden">
        <div>
          <p className="text-md text-gray-500">
            Send <span className="font-medium">1000 USD</span>
          </p>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex gap-4 items-center">
        
          <div className="flex gap-1 cursor-pointer">
            <XMarkIcon className="h-8 w-8 text-gray-500" />
            <p className="py-1 px-1.5 bg-gray-50 text-gray-400 rounded-[4px]">
              esc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardNav;
