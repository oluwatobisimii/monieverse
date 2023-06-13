import React from "react";
// eslint-disable-next-line
import { format } from "date-fns";

// eslint-disable-next-line
import Account from "./Account";
// eslint-disable-next-line
import PaymentStatus from "./PaymentStatus";
// eslint-disable-next-line
import PaymentMethod from "./PaymentMethod";
// eslint-disable-next-line
import { transactionsData } from "../data/TransactionData";
import emptyState from "../../assets/icons/transactionEmpty.svg";

const TableHeader = () => {
  return (
    <div className="w-full flex">
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[16%] flex items-center">
        <p className="text-gray-400 uppercase text-caption font-medium  ">
          date
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[28%] flex items-center">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          account
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[18%] flex items-center">
        <p className="text-gray-400 uppercase text-caption font-medium text-right">
          Amount
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[20%] pl-12 flex items-center">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          Payment Method
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[18%] flex items-center">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          Status
        </p>
      </div>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex h-[350px] p-20 w-full center flex-col gap-4">
      <img src={emptyState} alt="" />
      <p className="text-d-xxs text-gray-400 font-clashGrotesk text-center">
        {" "}
        Your transactions will show here{" "}
      </p>
    </div>
  );
};

const TransactionTable = () => {
  return (
    <div className="font-inter">
      <div className="hidden lg:block">
        <TableHeader />
        <EmptyState />

        {/* {transactionsData.map((data,index)=>{

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

        })} */}
      </div>
      {/* Mobile transaction Table */}
      <div className="flex flex-col gap-y-4 lg:hidden">
        <EmptyState />
        {/* <div className="lg:hidden">
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
        </div> */}
      </div>
    </div>
  );
};

export default TransactionTable;
