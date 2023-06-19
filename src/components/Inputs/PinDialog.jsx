import React, { useEffect, useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Key } from "phosphor-react";
import OTPInput from "react-otp-input";
import PrimaryButton from "./PrimaryButton";

const PinDialog = ({ isOpen, onClose, pin, setPin }) => {
  const [otpType, setOtpType] = useState("number");

  useEffect(() => {
    if (pin?.length === 6) {
      setOtpType("password");
    }
    if (pin?.length === 0) {
      setOtpType("number");
    }
  }, [pin]);

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col min-h-[60vh] items-center p-4 font-inter py-4 md:py-6 lg:py-8">
        <div className="flex  w-full justify-end">
          <div
            className="h-10 w-10 flex center cursor-pointer rounded-lg"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="h-3 md:h-4" />
        <div className="h-14 w-14 bg-green-100 text-green-400 flex center">
          <Key weight="duotone" className="text-[32px]" />
        </div>
        <div className="h-3 md:h-4" />
        <p className="tex-d-xs md:text-d-sm text-gray-600 font-clashGrotesk font-medium">
          Enter your 6-Digit PIN
        </p>
        <div className="h-1" />
        <p className="tex-sm md:text-md text-gray-400">
          We need to ensure your account is safe.
        </p>
        <div className="h-10"></div>
        <div className="w-full px-4 md:px-6 lg:px-8">
          <OTPInput
            value={pin}
            onChange={setPin}
            numInputs={6}
            inputType={otpType}
            shouldAutoFocus={true}
            containerStyle="justify-between gap-1 md:gap-2"
            inputStyle="flex-1 py-3 lg:py-3 text-d-xsw md:text-d-sm font-medium font-clashGrotesk  block rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400"
            renderSeparator={<div className="h-[1px] w-2 lg:w-2 bg-gray-200" />}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="w-full flex px-4 md:px-6 lg:px-8 mt-auto">
          <PrimaryButton label="Proceed" onClick={onClose} />
        </div>
      </div>
    </Overlay>
  );
};

export default PinDialog;
