import React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import RateWarning from "./RateWarning";
import { useSelector } from "react-redux";
import { useState } from "react";
import { UserGear } from "phosphor-react";
import { truncateText } from "../UtilityComponents/TruncateText";
import { extractInitials } from "../UtilityComponents/ExtractInitials";
import { UserInitials } from "../Recipients/RecipientsTable";

export default function SavedRecipient({
  dropDown,
  setAddRecipient,
  addRecipient,
  userPlus,
  setDropDown,
  Bank,
  setStep,
}) {
  const [searchValue, setSearchValue] = useState("");

  const allRecipients = useSelector(
    (state) => state.allRecipients.allRecipients
  );

  const filteredRecipients = allRecipients.recipients.filter((item) => {
    return item.data.email.includes(searchValue);
  });

  console.log(filteredRecipients);

  return (
    <div>
      <div className="w-full">
        <label
          htmlFor={"saved-recipient"}
          className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
        >
          <p> Saved recipients </p>
        </label>
        <div className="h-1" />
        <div className="flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
          <input
            type={"text"}
            name={"lastName"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Type to search a saved recipient"
            className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-sm md:placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
          />
          {dropDown ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-400 mx-4" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-400 mx-4" />
          )}
        </div>
        <div className="h-1" />
        {<p className="text-xs font-medium text-error-400">{}</p>}
      </div>

      {/* DropDown */}
      {dropDown && (
        <div className="shadow-lg shadow-[#1018280F] cardShadow rounded-2xl pt-4 pb-2 flex flex-col gap-3">
          <div
            className="mx-2 px-2 py-1 hover:bg-gray-50 flex justify-between items-center rounded cursor-pointer"
            onClick={() => {
              setAddRecipient(!addRecipient);
            }}
          >
            <div className="flex gap-2 items-center">
              <img src={userPlus} alt="" />
              <p className="text-sm text-gray-600">Add a new recipient</p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="w-full h-[1px] bg-gray-200" />
          <div className="px-4">
            {filteredRecipients.length > 0 &&<p className="text-sm text-gray-400">Recent</p>}
            <div className="h-1" />
            <div
              className="gap-y-1 flex flex-col"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <div className="py-2 cursor-pointer gap-y-1 flex flex-col">
                {filteredRecipients.length > 0 ? (
                  ""
                ) : (
                  <div className="center h-[151px] flex-col">
                    <UserGear
                      weight="duotone"
                      className="text-gray-300 text-[48px]"
                    />
                    <div className="h-2"></div>
                    <p className="text-md md:text-lg text-gray-500">No recipient found</p>
                  </div>
                )}
                {filteredRecipients.map((recipient, index) => {
                  return (
                    <div className="flex gap-2 items-center py-2">
                      <UserInitials initials={extractInitials(recipient.data.account_holder_fullname)} size="6"/>
                      {/* <div className="rounded-full h-6 w-6 bg-lightBlue-100 text-lightBlue-500 flex center">
                        <p className="text-xs font-medium">{extractInitials(recipient.data.account_holder_fullname)}</p>
                      </div> */}
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-gray-500 whitespace-nowrap">
                        {truncateText(recipient.data.account_holder_fullname, 20)
}
                        </p>
                        <p className="text-sm text-gray-400">
                          {recipient.data.email}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {!dropDown && (
        <div>
          <div className="h-6" />
          <div className="h-[1px] w-full bg-gray-100" />
          <div className="h-6" />
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="h-8 w-8 center flex bg-lightBlue-100 rounded-full">
                <img src={Bank} alt="" />
              </div>
              <div>
                <p className="text-md text-gray-600">
                  Konotal Logistics Express Ltd
                </p>
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
            <p className="text-sm font-medium text-primary-500">Edit</p>
          </div>
          <div className="h-4" />
          <RateWarning />
        </div>
      )}

      <div className="h-16"></div>
      <div className="flex gap-x-6">
        <button
          className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setStep(0);
          }}
        >
          <ChevronLeftIcon className="h-6 w-6" />
          <p>Go back</p>
        </button>
        <button
          className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
          onClick={() => {
            setStep(2);
          }}
        >
          {" "}
          Continue
        </button>
      </div>
    </div>
  );
}
