import React from "react";
import logoSM from "../../assets/logo/logo-sm.svg";
import logoLG from "../../assets/logo/logo-lg.svg";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const DashboardNav = () => {
  return (
    <div className="p-4 flex justify-between font-inter lg:px-16 items-center lg:py-8">
      <img src={logoLG} alt="" className="hidden lg:block" />
      <img src={logoSM} alt="" className="lg:hidden block" />

      <div className="lg:flex gap-2  hidden">
        <div className="px-6 py-2 bg-primary-100 hover:cursor-pointer rounded-full">
          <p className="text-md text-primary-600 font-medium">Home</p>
        </div>
        <div className="px-6 py-2 rounded-full hover:cursor-pointer">
          <p className="text-md text-gray-400 font-medium">Recipients</p>
        </div>
      </div>

      <div className="flex gap-10">
        <Link to='/move-money' className="bg-primary-400 py-2 px-5 text-md text-gray-0 font-medium rounded-lg hidden lg:block">
          Move Money
        </Link>
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-gray-50 rounded-full cursor-pointer">
            <BellIcon className="h-6 w-6 text-primary-500" />
          </div>
          <div className="w-[1px] h-6 bg-gray-100"/>
          <div className="p-2 bg-green-100 rounded-full cursor-pointer">
            <p className="text-green-500">DS</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
