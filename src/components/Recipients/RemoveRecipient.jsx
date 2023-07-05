import React from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Trash } from "phosphor-react";

const RemoveRecipient = ({ isOpen, onClose }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl p-4 md:p-8 lg:p-10">
        <div className="flex items-center justify-between ">
          <div />
          <div className="h-10 w-10 flex center" onClick={onClose}>
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="h-4" />
        <div className="mx-auto w-14 h-14 rounded-lg bg-error-100 center">
          <Trash weight="duotone" className="text-error-400 text-[32px]" />
        </div>
        <div className="h-4" />
        <div>
          <p className="text-d-sm font-medium font-clashGrotesk text-center">
            Remove Recipient
          </p>
          <div className="h-1" />
          <p className="text-md text-gray-400 font-inter text-center">
            Please note that you can’t undo this action.
          </p>
        </div>
        <div className="h-10" />
        <div className="flex gap-4 md:gap-6">
          <button className="rounded-xl py-4 flex-1 border border-gray-200 hover:bg-gray-25 text-sm md:text-md"
          onClick={onClose}
          >
            No, cancel
          </button>
          <button className="rounded-xl py-4 flex-1 bg-primary-400 hover:bg-primary-500 text-sm md:text-md text-gray-0">Yes, proceed</button>
        </div>
      </div>
    </Overlay>
  );
};

export default RemoveRecipient;
