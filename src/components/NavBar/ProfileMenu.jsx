import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import userSettings from "../../assets/icons/UserGear.svg";
import wallet from "../../assets/icons/Wallet.svg";
import signOut from "../../assets/icons/SignOut.svg";
import warnings from "../../assets/icons/Warning.svg";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <div
          className="cursor-pointer flex gap-1 center font-inter"
          onClick={toggleDropdown}
        >
          <div className="p-2 bg-green-100 rounded-full ">
            <p className="text-green-500">RS</p>
          </div>
          <ChevronDownIcon className="h-4 text-gray-400" />
        </div>
        {isOpen && (
          <div className="absolute mt-3 top-[100%] cardShadow rounded-2xl overflow-hidden bg-gray-0 right-0 z-[10]">
            <div className="relative w-[328px]">
              <div className="">
                <div className="relative z-[1]">
                  <div className="px-4 pt-5">
                    <div className="flex gap-2 ">
                      <div className="h-10 w-10 rounded-full bg-error-100"></div>
                      <div>
                        <div className="flex gap-1 items-center">
                          <p className="text-md font-medium text-gray-600">
                            Kenneth Shoryu
                          </p>
                          <CheckBadgeIcon className="h-5 text-lightBlue-400" />
                        </div>
                        <p className="text-sm text-gray-400">
                          shoryu_ken@streetex.co
                        </p>
                      </div>
                    </div>
                    <div className="h-4" />
                    <div className="h-[1px] w-full bg-gray-100" />
                  </div>
                  <div className="p-3">
                    <Link to="/settings" className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl cursor-pointer">
                      <img src={userSettings} alt="" />
                      <p className="text-sm font-medium text-gray-500">
                        Account Settings
                      </p>
                    </Link>
                    <div className="h-3" />
                    <div className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl">
                      <img src={wallet} alt="" />
                      <p className="text-sm font-medium text-gray-500">
                        Hide Balances
                      </p>
                    </div>
                    <div className="h-3" />

                    <div className="h-[1px] w-full bg-gray-100" />
                    <div className="h-4" />
                    <Link to="/kyc" className="px-3 flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <img src={warnings} alt="" />
                          <p className="text-sm font-medium text-gray-600">
                            KYC Required
                          </p>
                        </div>
                        <p className="text-xs text-gray-400">
                          Please verify your account
                        </p>
                      </div>
                      <button className="border border-primary-300 bg-primary-100 text-primary-500 rounded-lg px-5 py-2 text-md font-medium">
                        Verify
                      </button>
                    </Link>
                    <div className="h-4" />

                    <div className="h-[1px] w-full bg-gray-100" />
                    <div className="h-3" />
                    <div className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl">
                      <img src={signOut} alt="" />
                      <p className="text-sm font-medium text-gray-500">
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="monie-gradient absolute top-0 h-[73px] w-full z-0" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileMenu;
