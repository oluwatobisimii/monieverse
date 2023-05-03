import React, { useState } from "react";
import { transactionsData } from "../data/TransactionData";
import { format } from "date-fns";
import Account from "./Account";
import PaymentMethod from "./PaymentMethod";
import PaymentStatus from "./PaymentStatus";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import receipt from "../../assets/icons/IdentificationBadgeReceipt.svg";
import Bank from "../../assets/icons/Bank.svg";
import editIcon from "../../assets/icons/PencilSimpleLine.svg";
import calendar from "../../assets/icons/CalendarCheck.svg";
import sendIcon from "../../assets/icons/PaperPlaneTiltGrey.svg";
import arrowRight from "../../assets/icons/CaretRight.svg";
import dots from "../../assets/icons/DotsThree.svg";
import hourGlass from "../../assets/icons/HourglassSimpleMedium.svg";
import signPost from "../../assets/icons/Signpost.svg";
import attachment from "../../assets/icons/Attachment.svg";
import Delete from "../../assets/icons/Trash.svg";

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
  const [tab, setTab] = useState("timeline");
  return (
    <div className="recipientCard bg-gray-0 rounded-3xl w-[437px]">
      <div className="py-6">
        <div className="flex justify-between px-6 items-center">
          <div className="">
            <p className="text-d-xs font-medium font-clashGrotesk text-gray-600">
              50,000.90 USD
            </p>
            <div className="h-1" />
            <div className="flex gap-2">
              <div className="px-2 py-0.5 bg-green-100 flex gap-1 rounded-full">
                <div className="h-full w-0.5 rounded-full bg-green-300" />
                <p className="text-xs">In-Progress</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="">
                  <img src={sendIcon} alt="" className="grayscale" />
                </div>
                <p className="text-sm text-gray-400">
                  {" "}
                  Sent{" "}
                  <span className="font-medium text-gray-500">49,000 USD</span>
                </p>
              </div>
            </div>
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
        <div className="h-6" />
        <div className="border-b border-gray-100 flex px-6">
          <div
            className={`px-6 pb-4 pt-1 cursor-pointer border-b ${
              tab === "timeline"
                ? "text-primary-500 font-medium border-primary-500"
                : "text-gray-400 border-gray-100"
            } hover:bg-gray-25 text-md `}
            onClick={() => {
              setTab("timeline");
            }}
          >
            <p>Timeline</p>
          </div>
          <div
            className={`px-6 pb-4 pt-1 cursor-pointer border-b ${
              tab === "details"
                ? "text-primary-500 font-medium border-primary-500"
                : "text-gray-400 border-gray-100"
            } hover:bg-gray-25 text-md `}
            onClick={() => {
              setTab("details");
            }}
          >
            <p>Details</p>
          </div>
        </div>

        <div className="h-6" />
        {tab === "timeline" && (
          <div className="px-6">
            <div className="flex gap-4 items-center">
              <div className="h-5 w-5 rounded-full center bg-gray-100">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="space-y-1">
                <p className="text-md font-medium text-gray-600">
                  You started a USD transfer
                </p>
                <p className="text-sm text-gray-400">
                  Saturday, 1 Apr, 9:23 PM
                </p>
              </div>
            </div>
            <div className="w-5 center my-[-6px]">
              <div className="h-9 w-[1px] bg-gray-200"></div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-5 w-5 rounded-full center bg-gray-100">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="space-y-1">
                <p className="text-md font-medium text-gray-600">
                  We sent out your USD
                </p>
                <p className="text-sm text-gray-400">Friday, 6 Apr, 8:45 PM</p>
              </div>
            </div>
            <div className="w-5 center my-[-6px]">
              <div className="h-9 w-[1px] bg-gray-200"></div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-5 w-5 rounded-full center bg-gray-100">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              </div>
              <div className="space-y-1">
                <p className="text-md font-medium text-gray-600">
                  Completed your 50,000.90 USD transfer
                </p>
                <p className="text-sm text-gray-400">
                  Saturday, 7 Apr, 2:12 AM
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "details" && (
          <div className="px-6 max-h-[250px] overflow-y-scroll">
            <div className="bg-gray-25 p-6 rounded-2xl space-y-2 ">
              <div className="justify-between flex items-center">
                <p className="text-sm text-gray-400">Sola receives</p>
                <p className="text-sm font-medium text-gray-600">49,000 USD</p>
              </div>
              <div className="justify-between flex items-center">
                <p className="text-sm text-gray-400">You sent</p>
                <p className="text-sm font-medium text-gray-600">
                  50,000.90 USD
                </p>
              </div>
              <div className="justify-between flex items-baseline gap-3">
                <p className="text-sm text-gray-400">Completed by</p>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-600">
                    6 Apr, 8:45 PM
                  </p>
                  <img src={hourGlass} alt="" />
                </div>
              </div>
              <div className="justify-between flex items-baseline gap-3">
                <p className="text-sm text-gray-400">Our fees</p>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-600">0.6 USD</p>
                  <img src={signPost} alt="" className="grayscale" />
                </div>
              </div>
              <div className="justify-between flex items-baseline gap-3">
                <p className="text-sm text-gray-400">SWIFT transfer charges</p>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-600">1.2 USD</p>
                  <img src={signPost} alt="" className="grayscale" />
                </div>
              </div>
              <div className="justify-between flex items-baseline gap-3">
                <p className="text-sm text-gray-400">Transaction reference</p>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-600">
                    #3223434343
                  </p>
                </div>
              </div>
            </div>
            <div className="h-6" />
            <div className="gap-2 flex items-center">
              <p className="text-sm text-gray-400">Bank details</p>
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </div>
            <div className="h-4" />
            <div className="space-y-4">
              <div className="space-y-0.5">
                <p className="text-caption uppercase font-medium text-gray-400 ">
                  IBAN
                </p>
                <p className="text-md  text-gray-600 ">
                  US02342ERTK3433433434333212
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="text-caption uppercase font-medium text-gray-400 ">
                  BIC / SWIft code
                </p>
                <p className="text-md  text-gray-600 ">LM34543A034</p>
              </div>
            </div>

            <div className="h-6" />
            <div className="gap-2 flex items-center">
              <p className="text-sm text-gray-400">Notes & Attachments</p>
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </div>
            <div className="h-4" />

            <div className="space-y-2">
              <p>Notes</p>
              <div className="border border-gray-100  px-4 py-3 rounded-lg focus-within:outline-none focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
                <textarea
                  type="text"
                  placeholder="Balance for resources purchased"
                  className="invalid:border-error-400 h-16 invalid:animate-pulse placeholder:text-md placeholder:text-grey-400 focus:outline-none w-full "
                />
                <div className="justify-end flex gap-4 text-sm">
                  <button className="text-gray-400 ">Cancel</button>
                  <button className="text-primary-500 ">Save</button>
                </div>
              </div>
            </div>
            <div className="h-6" />
            <div className="px-4 py-2.5 rounded-lg border border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={attachment} alt="" />
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    File Attached
                  </p>
                  <div className="flex gap-1">
                    <p className="text-xs text-gray-400">
                      Shipping manife..ina.pdf (2.3MB)
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-8 w-8 hover:bg-gray-25 rounded-lg center">
                <img src={Delete} alt="" />
              </div>
            </div>
            <div className="h-2" />
          </div>
        )}
      </div>
      <div className="h-6" />
      <div className="px-6 py-3 flex gap-4 border-t border-gray-100 justify-between items-center">
        <div className="h-10 w-10 center cursor-pointer hover:bg-gray-25 rounded-lg">
          <img src={dots} alt="" />
        </div>
        <div className="flex gap-4">
          <button
            className="flex-1 flex  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2 px-5 py-2 hover:bg-gray-25"
            onClick={() => {}}
          >
            <p>Share</p>
          </button>
          <Link
            to="/move-money"
            className=" bg-primary-400 hover:bg-primary-500 text-center text-gray-0 text-md font-medium rounded-xl flex gap-2 center px-5 py-2"
          >
            Repeat Transfer
          </Link>
        </div>
      </div>
    </div>
  );
}

const TransactionPageTable = () => {
  const [cardShow, setCardShow] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState();
  return (
    <div className="relative">
      <div>
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
          {cardShow && (
            <img src={arrowRight} alt="" className="ml-2 opacity-0" />
          )}
          <div
            className={`bg-gray-25 border-b border-gray-100 px-6 py-3 w-[20%] pl-12 duration-500 transition-all ${
              cardShow
                ? "-translate-x-[40%] opacity-0"
                : "opacity-100 translate-x-[0]"
            }`}
          >
            <p className="text-gray-400 uppercase text-caption font-medium ">
              Payment Method
            </p>
          </div>
          <div
            className={`bg-gray-25 border-b border-gray-100 px-6 py-3 w-[18%] duration-500 transition-all ${
              cardShow
                ? "-translate-x-[38%] opacity-0"
                : "opacity-100 translate-x-[0]"
            }`}
          >
            <p className="text-gray-400 uppercase text-caption font-medium ">
              Status
            </p>
          </div>
        </div>
        {transactionsData.map((data, index) => {
          const date = new Date(data.date);
          return (
            <div
              className={`group group-hover:bg-gray-25 cursor pointer w-full flex font-inter items-center h-[72px] `}
              key={index}
              onClick={() => {
                setCurrentTransaction(index);
                setCardShow(true);
              }}
            >
              <div
                className={`  px-6 py-4 w-[16%] border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25 ${
                  currentTransaction === index &&
                  cardShow &&
                  "bg-gray-25 rounded-l-3xl"
                }`}
              >
                <p className="text-gray-500  text-sm">
                  {format(Date.parse(date), "MMM dd, yyyy")}
                </p>
              </div>
              <div
                className={`px-6 py-3 w-[28%] border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25 ${
                  currentTransaction === index && cardShow && "bg-gray-25"
                }`}
              >
                <Account
                  type={data.accounType}
                  initials={data.initials}
                  name={data.accountName}
                />
              </div>
              <div
                className={` pr-6 py-3 w-[18%] border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25 ${
                  currentTransaction === index &&
                  cardShow &&
                  "bg-gray-25 rounded-r-3xl"
                }`}
              >
                <p className="text-gray-500  text-sm  text-right w-full">
                  {data.amount} {data.currency}
                </p>
              </div>

              <img
                src={arrowRight}
                alt=""
                className={`ml-2 ${
                  currentTransaction === index && cardShow
                    ? "opacity-100"
                    : "opacity-0 hidden"
                }`}
              />

              <div
                className={`duration-500 transition-all px-6 py-3 w-[20%] pl-12 ${
                  cardShow
                    ? "-translate-x-[40%] opacity-0"
                    : "opacity-100 translate-x-[0]"
                } border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25`}
              >
                <PaymentMethod type={data.paymentMethod} />
              </div>
              <div
                className={`duration-500 transition-all px-6 py-3 w-[18%] ${
                  cardShow
                    ? "-translate-x-[38%] opacity-0"
                    : "opacity-100 translate-x-[0]"
                } border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25`}
              >
                <PaymentStatus status={data.paymentStatus} />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`absolute top-0 right-0 delay-100 transition-all duration-400 ease-in ${
          cardShow
            ? "translate-x-[0] opacity-100"
            : "opacity-0 -translate-x-[50px]"
        }`}
      >
        <RecipientCard
          receipt={receipt}
          setUserDetailCard={setCardShow}
          userDetailCard={cardShow}
          initials={transactionsData[currentTransaction]?.initials || ""}
          accountName={transactionsData[currentTransaction]?.accountName || ""}
          Bank={Bank}
          editIcon={editIcon}
          calendar={calendar}
          sendIcon={sendIcon}
        />
      </div>
    </div>
  );
};

export default TransactionPageTable;
