import React from "react";
import logoSM from "../../assets/logo/logo-sm.svg";
import logoLG from "../../assets/logo/logo-lg.svg";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
const DashboardNav = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const recipients = location[1] === "recipients" ? true : false;

  return (
    <div className="p-4 flex justify-between font-inter lg:px-16 items-center lg:py-8">
      <Link to="/">
        <img src={logoLG} alt="" className="hidden lg:block" />
        <img src={logoSM} alt="" className="lg:hidden block" />
      </Link>

      <div className="lg:flex gap-2  hidden">
        <Link
          to="/"
          className={`px-6 py-2 rounded-full hover:cursor-pointer ${
            !recipients ? "bg-primary-100" : ""
          }`}
        >
          <p
            className={`text-md ${
              !recipients ? "text-primary-600" : "text-gray-400"
            } font-medium`}
          >
            Home
          </p>
        </Link>
        <Link
          to="/recipients"
          className={`px-6 py-2 rounded-full hover:cursor-pointer ${
            recipients ? "bg-primary-100" : ""
          }`}
        >
          <p
            className={`text-md ${
              recipients ? "text-primary-600" : "text-gray-400"
            } font-medium`}
          >
            Recipients
          </p>
        </Link>
      </div>

      <div className="flex gap-10">
        <Link
          to="/move-money"
          className="bg-primary-400 py-2 px-5 text-md text-gray-0 font-medium rounded-lg hidden lg:block"
        >
          Move Money
        </Link>
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-gray-50 rounded-full cursor-pointer">
            <BellIcon className="h-6 w-6 text-primary-500" />
          </div>
          <div className="w-[1px] h-6 bg-gray-100" />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
