import React from "react";
import Nigeria from "../../assets/countries/Country = Nigeria.svg";
import USA from "../../assets/countries/Country = USA.svg";
import ArrowDownUp from "../../assets/icons/ArrowsDownUp.svg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Rate = () => {
  return (
    <section className="bg-gray-50 w-full overflow-hidden font-inter">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
          <div className="flex justify-between items-center">
            <p className="font-clashGrotesk text-[20px] lg:text-d-xs font-medium ">
              Exchange Rate
            </p>
            <p className="text-sm font-medium text-primary-500">Sync Rates</p>
          </div>
          {/* Space */}
          <div className="h-6 lg:h-10" />
          {/* Cards */}
          <div className="flex flex-col gap-y-6 gap-x-10 lg:flex-row">
            {/* Exchange */}
            <div className="p-4 lg:px-10 lg:py-8 rounded-xl lg:rounded-2xl border-gray-100 border lg:w-[54%]">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-400">From Currency</p>
                  <div className="h-2" />
                  <p className="text-d-xs lg:text-d-sm text-gray-600 font-clashGrotesk font-medium">
                    720.00
                  </p>
                </div>
                <div className="bg-gray-50 p-1 rounded-full flex gap-5">
                  <div className="flex items-center gap-2">
                    <img src={Nigeria} alt="" />
                    <p className="text-md font-medium text-gray-500">NGN</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-[1px] bg-gray-200" />
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="h-2" />
              {/* Divider */}
              <div className="flex items-center">
                <div className="flex-1 h-[1px] bg-gray-100" />
                <div className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center">
                  <img src={ArrowDownUp} alt="" />
                </div>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="h-2" />
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-400">To Currency</p>
                  <div className="h-2" />
                  <p className="text-d-xs lg:text-d-sm text-gray-600 font-clashGrotesk font-medium">
                    1.00
                  </p>
                </div>
                <div className="bg-gray-50 p-1 rounded-full flex gap-5">
                  <div className="flex items-center gap-2">
                    <img src={USA} alt="" />
                    <p className="text-md font-medium text-gray-500">USD</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-[1px] bg-gray-200" />
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Unit of Exchange */}
            <div className="bg-gray-25 p-16 lg:w-[42%] rounded-xl lg:rounded-2xl">
              <div className="flex gap-2 items-center justify-center">
                <div className="flex items-center gap-2 bg-gray-0 rounded-full p-1 pr-3">
                  <img src={Nigeria} alt="" />
                  <p className="text-md font-medium text-gray-500">1 NGN</p>
                </div>
                <p className="text-md font-medium text-gray-500">equals</p>
              </div>
              <div className="h-4" />
              <p className="text-d-sm lg:text-d-lg text-gray-600 font-clashGrotesk font-medium text-center">
                0.0045USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
