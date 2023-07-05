import React from "react";
import logo from "../../assets/logo/logo-sm.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-0  font-inter">
      <div className="container mx-auto p-4 md:p-8 lg:p-10 lg:py-20 py-8">
        <div className="flex flex-col gap-6 lg:gap-0 md:flex-row md:items-center">
          <div className="w-1/6">
            <img src={logo} alt="" className="" />
          </div>
          <div className="flex flex-col md:flex-row gap-6  justify-between flex-1">
            <div className="flex gap-10">
              <Link
                to={"#"}
                className="text-sm md:text-md font-medium text-gray-500"
              >
                Privacy Policy
              </Link>
              <Link
                to={"#"}
                className="text-sm md:text-md font-medium text-gray-500"
              >
                Terms of Use
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              © 2023 Monieverse Ltd. All rights reserved
            </p>
          </div>
        </div>
        <div className=" h-10 md:h-16"></div>
        <div className="flex items-center">
          <div className="w-1/6 hidden md:block">
            <p className="text-md md:text-lg font-medium text-gray-500">
              Monieverse
            </p>
          </div>
          <div className="flex justify-between flex-1">
            <p className="text-[12px] text-gray-400">
            Monieverse Ltd. (Monieverse)is an essential tool for businesses operating globally. It ensures that businesses remain compliant with local and global tax laws and regulations, helping them avoid legal trouble and costly penalties. Monieverse can also provide businesses with a better understanding of the tax implications of their operations, allowing them to make informed decisions that minimize tax liabilities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
