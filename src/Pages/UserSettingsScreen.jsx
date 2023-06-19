import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardNav from "../components/NavBar/DashboardNav";
import { Gauge, ShieldCheck, User } from "phosphor-react";
const UserSettingsScreen = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  return (
    <>
      <DashboardNav />
      <section className="bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 py-6 lg:py-10">
          {/* Navigation */}
          <div className="flex gap-4 items-center w-full no-scrollbar overflow-x-scroll">
            <Link
              to="/settings/"
              className={`flex cursor-pointer hover:bg-gray-0 px-3 py-2.5 rounded-full gap-2 items-center 
        ${location[2] === "" ? "bg-gray-0" : ""}
        `}
            >
              <User
                className={`${
                  location[2] === "" ? "text-[#8872FD]" : "text-[#49576D]"
                } text-[20px]`}
              />
              <p
                className={`text-md font-medium ${
                  location[2] === "" ? "text-gray-600" : "text-gray-500"
                } whitespace-nowrap`}
              >
                Personal Information
              </p>
            </Link>
            <Link
              to="/settings/notification"
              className={`flex cursor-pointer hover:bg-gray-0 px-3 py-2.5 rounded-full gap-2 items-center 
        ${location[2] === "notification" ? "bg-gray-0" : ""}
        `}
            >
             
              <ShieldCheck
                className={`${
                  location[2] === "notification" ? "text-[#8872FD]" : "text-[#49576D]"
                } text-[20px]`}
              />
              <p
                className={`text-md font-medium ${
                  location[2] === "notification"
                    ? "text-gray-600"
                    : "text-gray-500"
                } whitespace-nowrap`}
              >
                Notifications & Security
              </p>
            </Link>
            <Link
              to="/settings/limits"
              className={`flex cursor-pointer hover:bg-gray-0 px-3 py-2.5 rounded-full gap-2 items-center 
        ${location[2] === "limits" ? "bg-gray-0" : ""}
        `}
            >
              <Gauge
                className={`${
                  location[2] === "limits" ? "text-[#8872FD]" : "text-[#49576D]"
                } text-[20px]`}
              />
              <p
                className={`text-md font-medium ${
                  location[2] === "limits" ? "text-gray-600" : "text-gray-500"
                } whitespace-nowrap`}
              >
                Limits
              </p>
            </Link>
          </div>
          <div className="h-6"></div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default UserSettingsScreen;
