import React, { useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Info } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { AllCurrencies as localCurrencyData } from "../data/AllCurrencies";
import { CreateWalletbyID } from "./AddWalletApi";
import { fetchWallets } from "../../features/walletSlice";
import Spinner from "../Loaders/Spinner";

const CurrencyOption = ({
  currency,
  currencyImg,
  currencyCode,
  selected,
  setSelected,
  item,
}) => {
  return (
    <div
      className={`rounded-xl border border-gray-100 flex items-center justify-between px-4 py-3 ${
        selected === item && "bg-gray-25"
      }`}
      onClick={() => {
        setSelected(item);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 p-[1px]">
            <img src={currencyImg} alt="" />
          </div>
          <p className="text-gray-600 text-md font-medium">{currencyCode}</p>
        </div>
        <p className="text-md text-gray-400">- {currency}</p>
      </div>
      <div
        className={`h-6 w-6 ${
          selected === item ? "bg-primary-400" : "bg-gray-50"
        } rounded-full flex center`}
      >
        {selected === item && <CheckIcon className="h-[18px] text-gray-0" />}
      </div>
    </div>
  );
};

export const AvailableWallets = ({ selected, setSelected }) => {
  const Wallets = useSelector((state) => state.wallets.wallets);
  const Currencies = useSelector((state) => state.allCurrencies.allCurrencies);
  const WalletCurrencies = Currencies.filter(
    (wallet) => wallet.can_have_wallet
  );

  console.log(WalletCurrencies);
  console.log(Wallets);
  const AddWallet = WalletCurrencies.filter((wallet, index) => {
    return !Wallets.some((filterObj) => filterObj.currency_id === wallet.id);
  });

  return (
    <>
      <div className="space-y-3">
        {AddWallet.map((item, index) => {
          console.log(item);
          return (
            <CurrencyOption
              currency={item.name}
              currencyCode={item.code}
              currencyImg={localCurrencyData[item.id - 1].currencyImg}
              selected={selected}
              setSelected={setSelected}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

const AddNewBalance = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl">
        <div className="px-4 py-[22px] flex items-center justify-between border-b border-gray-100">
          <p className="texxt-sm font-medium text-gray-600">Add New Balance</p>
          <div className="h-10 w-10 flex center" onClick={onClose}>
            <XMarkIcon className="h-6 text-gray-300" />
          </div>
        </div>
        <div className="p-4 md:p-6">
          {/* Notice */}
          <div className="bg-yellow-100 py-4 px-6 flex rounded-2xl gap-2">
            <Info weight="duotone" className="text-yellow-500 h-5" />
            <p className="text-sm text-yellow-600">
              Please note that you will required to provide more KYC details if
              you choose to add any of the balances below.
            </p>
          </div>
          <div className="h-6"></div>
          {/* Wallets List */}
          <AvailableWallets selected={selected} setSelected={setSelected} />
        </div>
        <div className="border-t border-gray-100 p-3 flex gap-4">
          <button
            className="rounded-lg py-2 px-5 border border-gray-200 text-gray-600 text-md font-medium flex-1"
            onClick={() => {
              onClose();
            }}
          >
            {" "}
            Cancel
          </button>
          {loading ? (
            <div className="rounded-lg py-0.5 px-5 bg-primary-400 flex-1 center">
              <div className="scale-[60%]">
                <Spinner />
              </div>
            </div>
          ) : (
            <button
              className="rounded-lg py-2 px-5 bg-primary-400 hover:bg-primary-500 disabled:bg-primary-300 text-gray-0 text-md font-medium flex-1"
              onClick={async () => {
                console.log(selected);
                setLoading(true);
                try {
                  const response = CreateWalletbyID(selected.id);
                  setLoading(false);
                  if (response.status === "OK") {
                    console.log(response);
                    dispatch(fetchWallets());
                    onClose();
                  }
                } catch (error) {}
              }}
            >
              {" "}
              Continue
            </button>
          )}
        </div>
      </div>
    </Overlay>
  );
};

export default AddNewBalance;
