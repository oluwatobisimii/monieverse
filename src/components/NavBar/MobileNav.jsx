import React from "react";
import { Link, useLocation } from "react-router-dom";
import send from "../../assets/icons/PaperPlaneTilt.svg";

const MobileNav = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/");
  const recipients = location[1] === "recipients" ? true : false;
  return (
    <div className="lg:hidden fixed bottom-10 rounded-full mobileBar mx-4 w-[calc(100%-32px)] flex p-2 justify-between">
      <Link
        to="/"
        className={`px-6 py-2 ${
          !recipients ? "bg-primary-100" : ""
        } hover:cursor-pointer rounded-full`}
      >
        <p
          className={`text-[13px] ${
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
          className={`text-[13px] ${
            recipients ? "text-primary-600" : "text-gray-400"
          } font-medium`}
        >
          Recipients
        </p>
      </Link>
      <Link
        to="/move-money"
        className="bg-primary-400 py-2 px-5 text-xs text-gray-0 font-medium rounded-full flex items-center gap-2"
      >
        Move Money
        <img src={send} alt="" />
      </Link>
    </div>
  );
};

export default MobileNav;
