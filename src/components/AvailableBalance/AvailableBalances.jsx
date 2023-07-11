import React, { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import sendIcon from "../../assets/icons/PaperPlaneTiltSend.svg";
import convertIcon from "../../assets/icons/ArrowsClockwiseConvert.svg";
import CurrencyFormat from "../CurrencyFormat";
import Transactions from "../Transaction/Transactions";
import ReceiveMoneyOption from "../ReceiveMoney/ReceiveMoneyOption";
import BankTransferPopup from "../ReceiveMoney/BankTransferPopup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllCurrencies } from "../data/AllCurrencies";
import { AvailableWallets } from "../Balance/AddNewBalance";

const AvailableBalances = () => {
  const [selected, setSelected] = useState({});
  const [balanceOptions, setBalanceOptions] = useState("");
  const [receiveMoneyOption, setReceiveMoneyOption] = useState(false);
  const [bankTransfer, setBankTransfer] = useState(false);
  const [switchCurrency, setSwitchCurrency] = useState(false);

  const fetchWalletStatus = useSelector((state) => state.wallets.status);
  const Wallets = useSelector((state) => state.wallets.wallets);
  const Currencies = useSelector((state) => state.allCurrencies.allCurrencies);
  const WalletCurrencies = Currencies.filter(
    (wallet) => wallet.can_have_wallet
  );
  const { currency_id } = useParams();
  const AddWallet = WalletCurrencies.filter((wallet, index) => {
    return Wallets[index]?.currency_id !== wallet.id;
  });

  const [currentWallet, setCurrentWallet] = useState({});

  useEffect(() => {
    if (fetchWalletStatus === "fulfilled" && Wallets.length > 0) {
      let currentWallet = Wallets.find((item) => {
        return item.currency_id.toString() === currency_id;
      });
      setCurrentWallet({ ...currentWallet });
    }
    // eslint-disable-next-line
  }, [fetchWalletStatus]);

  const toggleReceiveOptionOverlay = () => {
    setReceiveMoneyOption(!receiveMoneyOption);
  };

  const toggleBankTransferOverlay = () => {
    setBankTransfer(!bankTransfer);
  };

  const navigate = useNavigate();
  return (
    <>
      {/* Overlays */}
      {receiveMoneyOption && (
        <ReceiveMoneyOption
          isOpen={receiveMoneyOption}
          onClose={toggleReceiveOptionOverlay}
          setBankTransfer={setBankTransfer}
        />
      )}

      {bankTransfer && (
        <BankTransferPopup
          isOpen={bankTransfer}
          onClose={toggleBankTransferOverlay}
          currentWallet={currentWallet}
        />
      )}

      <section className="bg-gray-50 font-inter">
        <div className="container mx-auto px-4 py-6 lg:py-10">
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <ArrowLeftIcon className="h-4 lg:h-6 text-gray-600 group-hover:text-gray-400 transition-all duration-100" />
            <p className="text-md  lg:text-d-xs font-medium lg:font-clashGrotesk">
              Available Balance
            </p>
          </div>
          <div className="h-8" />
          <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
            <div className="flex justify-between items-center">
              {/* Select Currency Mobile */}
              <div>
                <div
                  className="bg-grey-50 flex py-2 px-5 gap-10 md:hidden rounded-lg bg-gray-50"
                  onClick={() => {
                    setSwitchCurrency(true);
                  }}
                >
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                      <img
                        src={AllCurrencies[currency_id - 1].currencyImg}
                        alt=""
                      />
                    </div>
                    <p className="text-gray-600 text-md font-medium">
                      {AllCurrencies[currency_id - 1].currencyCode}
                    </p>
                  </div>
                  <ChevronDownIcon className="text-gray-400 h-5" />
                </div>
                {/* Bottom Sheet Switch Currencies */}
                {switchCurrency && (
                  <div className="h-screen top-0 left-0 w-screen fixed z-[999] appOverlay flex flex-col justify-end ">
                    <div className="bg-gray-0 rounded-t-3xl pb-20">
                      <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
                        <p className="text-sm text-gray-600">
                          Switch Currencies
                        </p>
                        <XMarkIcon
                          className="h-6 text-gray-300"
                          onClick={() => {
                            setSwitchCurrency(false);
                          }}
                        />
                      </div>
                      <div className="h-4" />
                      <div className="px-4 mb-10 space-y-6">
                        {Wallets.map((wallet, index) => {
                          return (
                            <Link
                              key={index}
                              to={`/dashboard/available-balance/${wallet.currency_id}`}
                              onClick={() => {
                                setSwitchCurrency(false);
                              }}
                              className="rounded-xl border border-gray-100 flex items-center gap-3 px-4 py-3"
                            >
                              <div className="flex gap-1 items-center">
                                <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
                                  {currentWallet && (
                                    <img
                                      src={
                                        AllCurrencies[wallet.currency_id - 1]
                                          .currencyImg
                                      }
                                      alt=""
                                    />
                                  )}
                                </div>
                                <p className="text-gray-600 text-md font-medium">
                                  {
                                    AllCurrencies[wallet.currency_id - 1]
                                      .currencyCode
                                  }
                                </p>
                              </div>
                              <p className="text-md text-gray-400">
                                {
                                  AllCurrencies[wallet.currency_id - 1]
                                    .currencyName
                                }
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {/* Select Currency Desktop */}
                <div className="bg-gray-50 p-[2px] rounded-lg md:flex gap-2 hidden">
                  {Wallets.map((wallet, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/dashboard/available-balance/${wallet.currency_id}`}
                        className={`px-3 py-1.5 flex gap-1 items-center rounded-[6px] cursor-pointer hover:bg-gray-0 ${
                          currentWallet.currency_id === wallet.currency_id
                            ? "bg-gray-0"
                            : ""
                        }`}
                      >
                        <div className="h-5 w-5 rounded-full">
                          <img
                            src={
                              AllCurrencies[wallet.currency_id - 1].currencyImg
                            }
                            alt=""
                          />
                        </div>
                        <p className="text-md font-medium text-gray-600">
                          {AllCurrencies[wallet.currency_id - 1].currencyCode}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* Add Balance */}
              {AddWallet.length > 0 ? (
                <div className="relative z-0">
                  <button
                    className="py-2 px-4 flex gap-2 items-center border border-gray-200 rounded-lg"
                    onClick={() => {
                      setBalanceOptions(!balanceOptions);
                    }}
                  >
                    <PlusCircleIcon className="h-5 text-gray-600" />
                    <p className="text-md font-medium text-gray-600">
                      Add Balance
                    </p>
                  </button>
                  {/* Add Balance Dropdown */}
                  {balanceOptions && (
                    <div className="absolute top-full right-0 shadow-lg bg-gray-0 rounded-2xl  w-[348px]">
                      <AvailableWallets
                        selected={selected}
                        setSelected={setSelected}
                      />
                      <div className="border-t border-gray-100 p-3 flex gap-4">
                        <button
                          className="rounded-lg py-2 px-5 border border-gray-200 text-gray-600 text-md font-medium flex-1"
                          onClick={() => {
                            setBalanceOptions(false);
                          }}
                        >
                          {" "}
                          Cancel
                        </button>
                        <button
                          className="rounded-lg py-2 px-5 bg-primary-400 text-gray-0 text-md font-medium flex-1"
                          onClick={() => {
                            setBalanceOptions(false);
                          }}
                        >
                          {" "}
                          Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            <div className="h-12 lg:h-16" />
            <div className="mx-auto lg:mx-0">
              <div className="flex items-center gap-1 justify-center lg:justify-start">
                <p className="text-caption uppercase text-gray-400 font-semibold">
                  available balance
                </p>
                <img src={ShieldCheck} alt="" />
              </div>
              <div className="h-2" />
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex justify-center lg:justify-start">
                  <CurrencyFormat
                    currency={currentWallet.currency}
                    balance={currentWallet.balance}
                  />
                </div>
                <div className="h-12 lg:hidden" />
                <div className="flex flex-col lg:flex-row gap-y-3 gap-3 items-center">
                  <Link
                    to="/dashboard/move-money"
                    className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 w-full lg:w-auto"
                  >
                    <img src={sendIcon} alt="" />
                    <p className="text-md font-medium text-gray-600 font">
                      Send
                    </p>
                  </Link>
                  <div className="flex gap-3 items-center w-full lg:w-auto">
                    <button
                      className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 flex-1"
                      onClick={() => {
                        toggleBankTransferOverlay();
                      }}
                    >
                      <PlusIcon className="h-5 text-primary-500" />
                      <p className="text-md font-medium text-gray-600 font">
                        Receive
                      </p>
                    </button>
                    <Link
                      to="/dashboard/convert"
                      className="bg-gray-50 rounded-xl px-5 py-4 center gap-2 flex-1"
                    >
                      <img src={convertIcon} alt="" />
                      <p className="text-md font-medium text-gray-600 font">
                        Convert
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-6" />
          <Transactions />
        </div>
      </section>
    </>
  );
};

export default AvailableBalances;
