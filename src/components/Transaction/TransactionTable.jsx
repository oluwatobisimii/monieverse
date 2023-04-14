import React from "react";

import Account from "./Account";
import PaymentStatus from "./PaymentStatus";
import PaymentMethod from "./PaymentMethod";

const TableHeader = () => {
  return (
    <div className="w-full flex">
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[16%]">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          date
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[28%]">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          account
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[18%]">
        <p className="text-gray-400 uppercase text-caption font-medium text-right">
          Amount
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[20%] pl-12">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          Payment Method
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[18%]">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          Status
        </p>
      </div>
    </div>
  );
};



const TransactionTable = () => {
  return (
    <div className="font-inter">
      <div className="hidden lg:block">
        <TableHeader />
        <div className="w-full flex font-inter items-center h-20 border-b border-gray-100">
          <div className="  px-6 py-4 w-[16%]">
            <p className="text-gray-500  text-sm">Mar 16, 2023</p>
          </div>
          <div className="  px-6 py-3 w-[28%]">
            <Account type="personal" initials="SK" name="Sola Adetokin" />
          </div>
          <div className=" px-6 py-3 w-[18%]">
            <p className="text-gray-500  text-sm  text-right">23,489.90 NGN</p>
          </div>
          <div className="px-6 py-3 w-[20%] pl-12">
            <PaymentMethod type="swap" />
          </div>
          <div className="px-6 py-3 w-[18%]">
            <PaymentStatus status="progress" />
          </div>
        </div>
      </div>
      {/* Mobile transaction Table */}
      <div className="flex flex-col gap-y-4">
        <div className="lg:hidden">
          <div className="flex justify-between">
            <Account type="personal" initials="SK" name="Sola Adetokin" />
            <p className="text-gray-500  text-sm  text-right">
              1,533,650.76 NGN
            </p>
          </div>
          <div className="h-4" />
          <div className="ml-[52px] w-[calc(100%-52px)] h-[1px] bg-gray-100" />
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between">
            <Account type="personal" initials="SK" name="Sola Adetokin" />
            <p className="text-gray-500  text-sm  text-right">
              1,533,650.76 NGN
            </p>
          </div>
          <div className="h-4" />
          <div className="ml-[52px] w-[calc(100%-52px)] h-[1px] bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
