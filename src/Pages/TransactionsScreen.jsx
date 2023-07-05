import React, { useState } from "react";
import DashboardNav from "../components/NavBar/DashboardNav";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import download from "../assets/icons/Table/DownloadSimple.svg";
import funnel from "../assets/icons/Table/FunnelSimple.svg";
import ArrowsIn from "../assets/icons/ArrowsIn.svg";
import ArrowsInSimple from "../assets/icons/ArrowsInSimple.svg";
import ArrowsCounter from "../assets/icons/ArrowsCounterClockwise.svg";
import ArrowsSquare from "../assets/icons/ArrowSquareDownLeft.svg";
import TransactionPageTable from "../components/Transaction/TransactionPageTable";
import { useNavigate } from "react-router-dom";

const TransactionsScreen = () => {
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [timeDrop, setTimeDrop] = useState(false);
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [typeDrop, setTypeDrop] = useState(false);
  const [timeCustomDrop, setTimeCustomDrop] = useState(false);

  const types = [
    {
      title: "All Transaction Types",
      value: "All Types",
      icon: ArrowsIn,
    },
    {
      title: "Transfers",
      value: "Transfers",
      icon: ArrowsInSimple,
    },
    {
      title: "Money Conversions",
      value: "Money Conversions",
      icon: ArrowsCounter,
    },
    {
      title: "Money Received",
      value: "Money Received",
      icon: ArrowsSquare,
    },
    {
      title: "Money Conversions",
      value: "Money Conversions",
      icon: ArrowsCounter,
    },
  ];

  const time = [
    "All Time",
    "Yesterday",
    "Last Week",
    "Last Month",
    "Year till Date",
  ];

  const navigate = useNavigate();

  return (
    <>
      <DashboardNav />
      <section className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-6 lg:py-10">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowLeftIcon className="h-4 lg:h-6 text-gray-600" />
              <p className="text-md  lg:text-d-xs font-medium lg:font-clashGrotesk">
                Transaction
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Displaying{" "}
                <span className="text-sm font-medium text-gray-500">
                  1 - 50
                </span>{" "}
                of 234{" "}
              </p>
            </div>
          </div>
          <div className="h-8" />
          <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
            <div className="flex lg:flex-row flex-col gap-4 justify-between">
              <div className="focus-within:border-primary-400 border border-gray-100 flex items-center py-3 pl-4 pr-3  rounded-lg gap-2 max-w-[505px] flex-1">
                <MagnifyingGlassIcon className="h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search recipient names"
                  className="focus:outline-none placeholder:text-md placeholder:text-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-6">
                <div className="relative">
                  <button className="flex center px-5 py-3 bg-gray-0 hover:bg-gray-25 border border-gray-200 gap-2 rounded-lg">
                    <p
                      className="text-md font-medium text-gray-600"
                      onClick={() => {
                        setTypeDrop(!typeDrop);
                        setTimeDrop(false);
                      }}
                    >
                      {typeFilter}
                    </p>
                    <img src={funnel} alt="" />
                  </button>
                  {typeDrop && (
                    <div className="absolute right-0 top-full px-6 py-4 bg-gray-0 space-y-2 w-[300px] cardShadow rounded-2xl z-50">
                      <p className="text-xs text-gray-400">Transaction Type</p>
                      {types.map((type, index) => {
                        return (
                          <div
                            key={index}
                            className="p-3 gap-2 flex items-center hover:bg-gray-25 rounded-xl"
                            onClick={() => {
                              setTypeFilter(type.value);
                              setTypeDrop(false);
                            }}
                          >
                            <img src={type.icon} alt="" />
                            <p className="text-md text-gray-600 font-medium ">
                              {type.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="flex center px-5 py-3 bg-gray-0 hover:bg-gray-25 border border-gray-200 gap-2 rounded-lg"
                    onClick={() => {
                      setTimeDrop(!timeDrop);
                      setTypeDrop(false);
                    }}
                  >
                    <p className="text-md font-medium text-gray-600">
                      {timeFilter}
                    </p>
                    <ChevronDownIcon className="h-5 text-gray-600" />
                  </button>
                  {timeDrop && (
                    <div className="absolute right-0 top-full px-4 py-4 bg-gray-0 space-y-2 w-[300px] cardShadow rounded-2xl z-20">
                      <p className="text-xs text-gray-400 pl-2">
                        Transaction Time
                      </p>
                      {time.map((value, index) => {
                        return (
                          <div
                            key={index}
                            className="p-3 gap-2 flex items-center hover:bg-gray-25 rounded-xl"
                            onClick={() => {
                              setTimeFilter(value);
                              setTimeDrop(false);
                            }}
                          >
                            <p className="text-md text-gray-600 font-medium ">
                              {value}
                            </p>
                          </div>
                        );
                      })}
                      <div
                        className={`p-3 ${
                          timeCustomDrop && "bg-gray-50"
                        } rounded-xl hover:bg-gray-25`}
                      >
                        <div
                          className={`flex justify-between    `}
                          onClick={() => {
                            setTimeCustomDrop(!timeCustomDrop);
                          }}
                        >
                          <p className={`text-md text-gray-600 font-medium `}>
                            Custom
                          </p>
                          {timeCustomDrop ? (
                            <ChevronUpIcon className="h-4 text-gray-600" />
                          ) : (
                            <ChevronDownIcon className="h-4 text-gray-600" />
                          )}
                        </div>
                        {timeCustomDrop && (
                          <div>
                            <div className="h-3" />
                            <div className=" space-y-2">
                              <label
                                htmlFor="startDate"
                                className="flex justify-between px-4 py-[14px] border border-gray-200 rounded-lg bg-gray-0"
                              >
                                <input
                                  type="date"
                                  name="startDate"
                                  id="startDate"
                                  className="w-full focus:outline-none"
                                  placeholder="Start date"
                                />
                              </label>
                              <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-400">To</p>
                                <div className="w-full h-[1px] bg-gray-100" />
                              </div>
                              <label
                                htmlFor="endDate"
                                className="flex justify-between px-4 py-[14px] border border-gray-200 rounded-lg bg-gray-0"
                              >
                                <input
                                  type="date"
                                  name="endDate"
                                  id="endDate"
                                  className="w-full focus:outline-none"
                                  placeholder="End date"
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <button className="flex center px-5 py-3 bg-gray-50 hover:bg-gray-100 gap-2 rounded-lg">
                  <p className="text-md font-medium text-gray-600">Download</p>
                  <img src={download} alt="" />
                </button>
              </div>
            </div>
            <div className="h-6" />
            <TransactionPageTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionsScreen;
