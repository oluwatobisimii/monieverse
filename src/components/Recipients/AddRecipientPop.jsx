import React from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { AddRecipientForm } from "../MoveMoney/AddRecipient";

const AddRecipientPop = ({ isOpen, onClose, setBankTransfer }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl">
        <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
          <p className="texxt-sm font-medium text-gray-600">
            Add New Recipient
          </p>
          <div className="h-10 w-10 flex center" onClick={onClose}>
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="p-4 md:p-6 max-h-[600px] overflow-y-scroll">
          <AddRecipientForm />
          <div className="h-10" />
          <div className="flex gap-x-6">
            <button
              className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
              onClick={() => {
                onClose();
              }}
            >
              <p>Cancel</p>
            </button>
            <button
              className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
              onClick={() => {
                onClose();
              }}
            >
              {" "}
              Add New Recipient
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default AddRecipientPop;
