import React, { useState } from "react";
import { format } from "date-fns";

import { transactionsData } from "../data/TransactionData";
import Account from "../Transaction/Account";
import PaperPlane from "../../assets/icons/PaperPlaneTiltSend.svg";
import sendIcon from "../../assets/icons/PaperPlaneTilt.svg";
import arrowRight from "../../assets/icons/CaretRight.svg";
import receipt from "../../assets/icons/IdentificationBadgeReceipt.svg";
import Bank from "../../assets/icons/Bank.svg";
import editIcon from "../../assets/icons/PencilSimpleLine.svg";
import calendar from "../../assets/icons/CalendarCheck.svg";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const TableHeader = () => {
  return (
    <div className="w-full flex">
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[50%]">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          name
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[25%]">
        <p className="text-gray-400 uppercase text-caption font-medium ">
          last payment
        </p>
      </div>
      <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[25%]">
        <p className="text-gray-400 uppercase text-caption font-medium text-right"></p>
      </div>
    </div>
  );
};

const RecipientsTable = () => {
  const [userDetailCard, setUserDetailCard] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const tableWidth = "w-full";
  return (
    <div className="font-inter">
      <div className="flex gap-4">
        <div
          className={`hidden lg:block duration-1000 transition-all ${tableWidth}`}
        >
          <TableHeader />
          {transactionsData.map((data, index) => {
            const date = new Date(data.date);
            return (
              <div
                className="hover:bg-gray-25 cursor pointer w-full flex font-inter items-center h-20 border-b border-gray-100"
                key={index}
                onClick={() => {
                  setUserDetailCard(true);
                  setCurrentUser(index);
                }}
              >
                <div className="  px-6 py-3 w-[50%]">
                  <Account
                    type={data.accounType}
                    initials={data.initials}
                    name={data.accountName}
                  />
                </div>
                <div className="  px-6 py-4 w-[25%]">
                  <p className="text-gray-500  text-sm">
                    {format(Date.parse(date), "MMM dd, yyyy")}
                  </p>
                </div>

                <div className=" pr-6 py-3 w-[25%] ">
                  <div className="h-5">
                    <img
                      src={PaperPlane}
                      alt=""
                      className="ml-auto grayscale"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {userDetailCard && <img src={arrowRight} alt="" className="" />}

        {userDetailCard && (
          <div className="flex-1 hidden lg:block">
            <RecipientCard
              receipt={receipt}
              setUserDetailCard={setUserDetailCard}
              userDetailCard={userDetailCard}
              initials={transactionsData[currentUser]?.initials || ""}
              accountName={transactionsData[currentUser]?.accountName || ""}
              Bank={Bank}
              editIcon={editIcon}
              calendar={calendar}
              sendIcon={sendIcon}
            />
          </div>
        )}
      </div>
      {/* Mobile transaction Table */}
      <div className="flex flex-col gap-y-4">
        <div className="lg:hidden ">
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

export default RecipientsTable;

function RecipientCard({
  receipt,
  setUserDetailCard,
  userDetailCard,
  initials,
  accountName,
  Bank,
  editIcon,
  calendar,
  sendIcon,
}) {
  return (
    <div className="recipientCard rounded-3xl w-[437px]">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <img src={receipt} alt="" />
            <p className="text-sm text-gray-400">Recipient Details</p>
          </div>
          <div
            className="h-10 w-10 flex center cursor-pointer group"
            onClick={() => {
              setUserDetailCard(!userDetailCard);
            }}
          >
            <XMarkIcon className="text-gray-300 group-hover:text-gray-400  h-6" />
          </div>
        </div>
        <div className="h-7" />
        <div className="flex gap-3 items-center">
          <div className="shadow-[0px_4px_12px_-4px_rgba(16,_24,_40,_0.1),_0px_2px_4px_-2px_rgba(16,_24,_40,_0.05)] border-2 border-gray-0 bg-lightBlue-100 text-lightBlue-500 text-d-xs font-medium font-clashGrotesk w-16 h-16 rounded-full flex center">
            <p>{initials}</p>
          </div>
          <div>
            <p className="text-d-xs font-medium font-clashGrotesk text-gray-600">
              {accountName}
            </p>
            <div className="h-1" />
            <div className="flex gap-1 items-center">
              <EnvelopeIcon className="h-4 text-gray-400" />
              <p className="text-sm text-gray-400">matthew.o@bodital.co</p>
            </div>
          </div>
        </div>
        <div className="h-8" />
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-400">Bank Details</p>
          <div className="h-[1px] flex-1 bg-gray-100"></div>
        </div>
        <div className="h-4" />
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="h-8 w-8 center flex bg-lightBlue-100 rounded-full">
              <img src={Bank} alt="" />
            </div>
            <div>
              <div className="h-2" />
              <div className="flex gap-3 items-center">
                <p className="text-sm text-gray-500">UIJ90123HM2</p>

                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <p className="text-sm text-gray-400">9092</p>
                </div>
              </div>
              <div className="h-1" />
              <p className="text-sm text-gray-500">Texas, USA</p>
            </div>
          </div>

          <div className="flex group items-center cursor-pointer">
            <p className="text-sm text-primary-500 font-medium">Edit</p>
            <img
              src={editIcon}
              alt=""
              className="transition-all duration-300 group-hover:visible group-hover:top-0 group-hover:opacity-100 invisible relative top-1/4 opacity-0"
            />
          </div>
        </div>
        <div className="h-8" />
        <div className="bg-gray-25 rounded-2xl px-6 py-4">
          <div className="flex gap-2">
            <p className="text-sm text-gray-400 ">Last payment</p>
            <div className="flex gap-1">
              <img src={calendar} alt="" />
              <p className="text-sm text-gray-400 ">Mar 10, 2023</p>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex items-center justify-between">
            <p className="text-d-xxs font-medium font-clashGrotesk text-gray-600">
              1,390.72 USD
            </p>

            <p className="text-sm text-primary-500 font-medium">View All</p>
          </div>
        </div>
        <div className="h-10" />
      </div>
      <div className="px-6 py-3 flex gap-4 border-t border-gray-100">
        <button
          className="flex-1 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
          onClick={() => {}}
        >
          <p>Remove Recipient</p>
        </button>
        <Link
          to="/move-money"
          className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl flex gap-2 center"
        >
          Send Money
          <div className="h-5">
            <img src={sendIcon} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
