import React from "react";
import bank from "../../assets/icons/BankOutline.svg";
import info from "../../assets/icons/InfoBlue.svg";
import time from "../../assets/icons/HourglassSimpleMedium.svg";

const Limits = () => {
  return (
    <>
    <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
      <div className="flex justify-between items-center">
        <p className="text-d-xs font-clashGrotesk font-medium">
          Withdrawal Limits
        </p>
        <div className="flex gap-2 px-3 py-2 rounded-lg bg-gray-25">
          <img src={bank} alt="" />
          <p className="text-sm text-gray500">
            Our transaction limits are regulated by the FDIC
          </p>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="h-[1px] w-full bg-gray-100"></div>
      <div className="h-8"></div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 p-6 border border-gray-100 rounded-2xl">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600">
              Daily Transaction Limit
            </p>
            <img src={time} alt="" />
          </div>
          <div className="h-4"></div>

          <div className="loaderBg h-2 w-full bg-primary-200 rounded-full overflow-hidden">
            <div className="w-2/3 bg-primary-400 h-full "></div>
          </div>
          <div className="h-4"></div>
          <div className="flex justify-between">
            <p className="font-medium text-sm text-primary-500">
              <span className="font-semibold">$2,750.04</span>
              spent of $5,000.00
            </p>
            <p className="font-medium text-sm text-primary-500">55%</p>
          </div>
        </div>
        <div className="flex-1 p-6 border border-gray-100 rounded-2xl">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600">
              Monthly Transaction Limit
            </p>
            <img src={time} alt="" />
          </div>
          <div className="h-4"></div>

          <div className="loaderBg h-2 w-full bg-primary-200 rounded-full overflow-hidden">
            <div className="w-2/3 bg-primary-400 h-full "></div>
          </div>
          <div className="h-4"></div>
          <div className="flex justify-between">
            <p className="font-medium text-sm text-primary-500">
              <span className="font-semibold">$20,000.98</span>
              spent of $30,000.00
            </p>
            <p className="font-medium text-sm text-primary-500">67%</p>
          </div>
        </div>
      </div>
    </div>
    <div className="h-10"></div>
    <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
      <div className="flex justify-between items-center">
        <p className="text-d-xs font-clashGrotesk font-medium">
        Deposit Limits
        </p>
        <div className="flex gap-2 px-3 py-2 rounded-lg bg-gray-25">
          <img src={bank} alt="" />
          <p className="text-sm text-gray500">
            Our transaction limits are regulated by the FDIC
          </p>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="h-[1px] w-full bg-gray-100"></div>
      <div className="h-8"></div>
      <div className="bg-primary-100 w-full py-4 px-6 rounded-2xl flex gap-2">
        <img src={info} alt="" />
        <p className="text-sm text-primary-500 font-medium">You can deposit any amount into your foreign account. For deposits over $10,000, we'll need to verify some details with you.</p>
      </div>
      <div className="h-6"></div>
      <div className="flex gap-2 items-center">
        <p className="text-sm text-gray-400">Bank Deposit</p>
        <div className="flex-1 h-[1px] bg-gray-100"></div>
      </div>
      <div className="h-6"></div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 p-6 border border-gray-100 rounded-2xl">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600">
              Daily Transaction Limit
            </p>
            <img src={time} alt="" />
          </div>
          <div className="h-4"></div>

          <div className="loaderBg h-2 w-full bg-primary-200 rounded-full overflow-hidden">
            <div className="w-2/3 bg-primary-400 h-full "></div>
          </div>
          <div className="h-4"></div>
          <div className="flex justify-between">
            <p className="font-medium text-sm text-primary-500">
              <span className="font-semibold">$2,750.04</span>
              spent of $5,000.00
            </p>
            <p className="font-medium text-sm text-primary-500">55%</p>
          </div>
        </div>
        <div className="flex-1 p-6 border border-gray-100 rounded-2xl">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600">
              Monthly Transaction Limit
            </p>
            <img src={time} alt="" />
          </div>
          <div className="h-4"></div>

          <div className="loaderBg h-2 w-full bg-primary-200 rounded-full overflow-hidden">
            <div className="w-2/3 bg-primary-400 h-full "></div>
          </div>
          <div className="h-4"></div>
          <div className="flex justify-between">
            <p className="font-medium text-sm text-primary-500">
              <span className="font-semibold">$20,000.98</span>
              spent of $30,000.00
            </p>
            <p className="font-medium text-sm text-primary-500">67%</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Limits;
