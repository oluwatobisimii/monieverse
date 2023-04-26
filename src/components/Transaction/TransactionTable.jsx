import React from "react";
import { format } from "date-fns";
import Account from "./Account";
import PaymentStatus from "./PaymentStatus";
import PaymentMethod from "./PaymentMethod";
import { transactionsData } from "../data/TransactionData";

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
        {transactionsData.map((data,index)=>{

          const date = new Date(data.date)
return ( <div className="hover:bg-gray-25 cursor pointer w-full flex font-inter items-center h-20 border-b border-gray-100" key={index}>
          <div className="  px-6 py-4 w-[16%]">
            <p className="text-gray-500  text-sm">{format(Date.parse(date), "MMM dd, yyyy")}</p>
          </div>
          <div className="  px-6 py-3 w-[28%]">
            <Account type={data.accounType} initials={data.initials} name={data.accountName} />
          </div>
          <div className=" pr-6 py-3 w-[18%]">
            <p className="text-gray-500  text-sm  text-right">{data.amount} {data.currency}</p>
          </div>
          <div className="px-6 py-3 w-[20%] pl-12">
            <PaymentMethod type={data.paymentMethod} />
          </div>
          <div className="px-6 py-3 w-[18%]">
            <PaymentStatus status={data.paymentStatus} />
          </div>
        </div>)

        })}
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
