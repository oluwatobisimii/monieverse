import React, { useEffect, useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";

import info from "../../assets/icons/InfoPrimary.svg";
import copy from "../../assets/icons/Copy.svg";
import { AllCurrencies } from "../data/AllCurrencies";
import AccountDetails from "../../assets/payment/AccountDetails.svg";
import { baseApiCall } from "../../api/MakeApiCallswithHeader";

const BankTransferPopup = ({
  isOpen,
  onClose,
  setBankTransfer,
  currentWallet,
}) => {
  const [virtualAccounts, setVirtualAccounts] = useState(null);
  const [virtualAccountNGN, setVirtualAccountNGN] = useState(null);

  const getVirtualAccounts = async () => {
    await baseApiCall("/users/virtual-accounts", "GET")
      .then((payload) => {
        if (payload.status === "OK") {
          setVirtualAccounts(payload.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getVirtualAccounts();
  }, []);

  useEffect(() => {
    if (virtualAccounts !== null) {
      const NGNAccount = virtualAccounts?.find((item) => {
        return item.currency_code === "NGN";
      });
      setVirtualAccountNGN(NGNAccount);
    }
  }, [virtualAccounts]);

  if (AllCurrencies[currentWallet.currency_id - 1]?.currencyCode === "USD") {
    return (
      <>
        <Overlay isOpen={isOpen} onClose={onClose}>
          <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
            <p className="texxt-sm font-medium text-gray-600">
              Your {AllCurrencies[currentWallet.currency_id - 1]?.currencyCode}{" "}
              account details
            </p>
            <div className="h-10 w-10 flex center" onClick={onClose}>
              <XMarkIcon className="h-6 text-gray-300" />
            </div>
          </div>
          <div className="min-h-[420px] flex center flex-col">
            <img src={AccountDetails} alt="" />
            <div className="h-4" />
            <p className="text-d-xxs font-medium text-gray-600 font-clashGrotesk">
              No Banks Available
            </p>
            <div className="h-1" />
            <p className="text-sm  text-gray-400">
              We don’t have any banks available at the moment.
            </p>
          </div>
        </Overlay>
      </>
    );
  }

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl">
        <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
          <p className="texxt-sm font-medium text-gray-600">
            Your {AllCurrencies[currentWallet.currency_id - 1]?.currencyCode}{" "}
            account details
          </p>
          <div className="h-10 w-10 flex center" onClick={onClose}>
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-md text-gray-500">
            Use this account to receive money from people and businesses
            directly to your NGN balance.
          </p>
          <div className="h-4" />
          <div className="px-6 py-5 bg-primary-100 flex gap-2 rounded-2xl items-start">
            <img src={info} alt="" />
            <p className="text-sm font-medium text-primary-500">
              Please note that there is a
              <span className="font-semibold"> 5,000,000 NGN </span> limit per
              payment on this account.
            </p>
          </div>
          <div className="h-8" />
          <div className="border border-gray-100 rounded-2xl p-8 space-y-8">
            {/* <div className="">
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Payment Network</p>
                <img src={infoBlack} alt="" />
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1">
                <p className="text-md text-gray-600">SWIFSTER</p>
                <img src={copy} alt="" />
              </div>
            </div> */}
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Account holder</p>
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1">
                <p className="text-md text-gray-600">
                  {virtualAccountNGN?.account_name}
                </p>
                <div
                  className="cursor-pointer transition-all duration-100 hover:scale-105"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      virtualAccountNGN?.account_name
                    );
                  }}
                >
                  <img src={copy} alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Bank name</p>
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1">
                <p className="text-md text-gray-600">
                  {virtualAccountNGN?.bank_name}
                </p>
                <div
                  className="cursor-pointer transition-all duration-100 hover:scale-105"
                  onClick={() => {
                    navigator.clipboard.writeText(virtualAccountNGN?.bank_name);
                  }}
                >
                  <img src={copy} alt="" />
                </div>
              </div>
            </div>

            {/* <div>
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Bank code</p>
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1">
                <p className="text-md text-gray-600">392</p>
                <img src={copy} alt="" />
              </div>
            </div> */}

            <div>
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Account number</p>
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1">
                <p className="text-md text-gray-600">
                  {virtualAccountNGN?.account_number}
                </p>
                <div
                  className="cursor-pointer transition-all duration-100 hover:scale-105"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      virtualAccountNGN?.account_number
                    );
                  }}
                >
                  <img src={copy} alt="" />
                </div>
              </div>
            </div>

            {/* <div>
              <div className="flex gap-1">
                <p className="text-xs text-gray-400">Address</p>
              </div>
              <div className="h-0.5" />
              <div className="flex gap-1 items-center">
                <p className="text-md text-gray-600">
                  234 Boulevard Rd, 489 PO, Palms Springs, TA United States
                  102120
                </p>
                <img src={copy} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default BankTransferPopup;
