import React, { useState } from "react";
import key from "../../assets/icons/KeyPasswordEdit.svg";
import SwitchInput from "../Inputs/SwitchInput";
import ChangePin from "./ChangePin";
import ChangePassword from "./ChangePassword";
const NotificationSecurity = () => {
  const [loginNotification, setLoginNotification] = useState(false);
  const [transactionNotification, setTransactionNotification] = useState(true);
  const [changePassword, setChangePassword] = useState(false);
  const [changePin, setChangePin] = useState(false);

  const toggleChangePasswordOverlay = () => {
    setChangePassword(!changePassword);
  };

  const toggleChangePinOverlay = () => {
    setChangePin(!changePin);
  };

  return (
    <>
      {changePin && (
        <ChangePin
          isOpen={changePin}
          onClose={toggleChangePinOverlay}
        />
      )}

      {changePassword && (
        <ChangePassword
          isOpen={changePassword}
          onClose={toggleChangePasswordOverlay}
        />
      )}

      <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-10 p-4">
        <div className="flex justify-between items-center">
          <div className="w-[62%] lg:w-auto ">
            <p className="text-md font-medium text-gray-600">
              Transaction Notification
            </p>
            <p className="text-sm text-gray-400">
              Receive email notifications on every state of your transactions.
            </p>
          </div>
          <SwitchInput
            value={transactionNotification}
            setValue={setTransactionNotification}
          />
        </div>
        <div className="h-10"></div>
        <div className="flex justify-between items-center">
          <div className="w-[62%] lg:w-auto ">
            <p className="text-md font-medium text-gray-600">
              Login Notification
            </p>
            <p className="text-sm text-gray-400">
              Receive email notifications every time you login into to your
              account.
            </p>
          </div>
          <SwitchInput
            value={loginNotification}
            setValue={setLoginNotification}
          />
        </div>
        <div className="h-10"></div>
        <div className="flex justify-between items-center">
          <div className="w-[62%] lg:w-auto ">
            <p className="text-md font-medium text-gray-600">Password</p>
            <p className="text-sm text-gray-400">
              Update your password information.
            </p>
          </div>
          <button 
          onClick={toggleChangePasswordOverlay}
          className="px-4 py-2.5 border border-gray-200 rounded-lg flex gap-2 items-center">
            <img src={key} alt="" className="hidden lg:inline" />
            <p className="text-sm md:text-md text-gray-600 font-medium">
              Change <span className="hidden lg:inline">Password</span>{" "}
            </p>
          </button>
        </div>
        <div className="h-10"></div>
        <div className="flex justify-between items-center">
          <div className="w-[62%] lg:w-auto ">
            <p className="text-md font-medium text-gray-600">Transaction PIN</p>
            <p className="text-sm text-gray-400">Update your 6-Digit PIN.</p>
          </div>
          <button
            onClick={toggleChangePinOverlay}
            className="px-4 py-2.5 border border-gray-200 rounded-lg flex gap-2 items-center"
          >
            <img src={key} alt="" className="hidden lg:inline" />
            <p className="text-sm md:text-md text-gray-600 font-medium">
              Change <span className="hidden lg:inline">Pin</span>{" "}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationSecurity;
