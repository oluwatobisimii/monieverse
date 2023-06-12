import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Info, LockKey, Wallet } from "phosphor-react";
import { motion } from "framer-motion";
import { CreateNGNWallet } from "./AddWalletApi";

const AddNGNWallet = ({ isOpen, onClose, currencyName, currencysymbol }) => {
  const navigate = useNavigate();
  return (
    <>
      <Overlay isOpen={isOpen} onClose={onClose}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl"
        >
          <div className="px-4 py-[22px] flex items-center justify-between  border-gray-100">
            <div />
            <div className="h-10 w-10 flex center" onClick={onClose}>
              <XMarkIcon className="h-6 text-gray-300" />
            </div>
          </div>
          <div
            className={`w-14 h-14 rounded-lg bg-lightBlue-100 flex center mx-auto`}
          >
            <Wallet
              weight="duotone"
              className={` text-lightBlue-400
                 text-[32px]`}
            />
          </div>
          <div className="h-4" />
          <p className="text-d-sm text-grey-600 font-medium font-clashGrotesk text-center">
            Add NGN Wallet
          </p>

          <div className="p-4 md:p-10">
            <div className="w-full p-4 md:px-6 bg-yellow-100 rounded-2xl flex gap-2">
              <div>
                <Info
                  className="text-yellow-500 text-[20px]"
                  weight="duotone"
                />
              </div>
              <p className="text-sm text-yellow-600">
                Please note that you will be creating an accounts with these
                information below, kindly confirm the details below or contact
                support for any issues.
              </p>
            </div>
            <div className="h-12" />
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between">
                <p className="text-md text-gray-400">First Name</p>
                <div className="flex items-center gap-2">
                  <p className="text-md font-medium text-gray-600">
                    {JSON.parse(localStorage.getItem("user")).first_name}
                  </p>
                  <LockKey />
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="flex items-center justify-between">
                <p className="text-md text-gray-400">Last Name</p>
                <div className="flex items-center gap-2">
                  <p className="text-md font-medium text-gray-600">
                    {JSON.parse(localStorage.getItem("user")).last_name}
                  </p>
                  <LockKey />
                </div>
              </div>
            </div>

            <div className="h-[38px] md:h-20" />
            <div className="flex gap-x-6">
              <button
                className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                onClick={() => {
                  CreateNGNWallet(
                    navigate,
                    onClose,
                    currencyName,
                    currencysymbol
                  );
                }}
              >
                Add NGN Wallet
              </button>
            </div>
          </div>
        </motion.div>
      </Overlay>
    </>
  );
};

export default AddNGNWallet;
