import React from "react";
import CustomInput from "../Inputs/CustomInput";
import RateWarning from "./RateWarning";
import Tooltip from "../Tooltip";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import infoTooltip from "../../assets/icons/Info-tooltip.svg";

export function AddRecipientForm(){
  return(
    <>
      <CustomInput
        label="Recipient email"
        name="email"
        type="email"
        placeholder="name@example.com"
      />
      <div className="h-6" />
      {/* Breaker */}
      <div className="flex gap-3 items-center">
        <p className="text-sm text-gray-400">Bank Details</p>
        <div className="flex-1 h-[1px] bg-gray-100" />
      </div>
      <div className="h-6" />
      {/* Bank Details */}
      <RateWarning />
      <div className="h-6" />
      <CustomInput
        label="Full name of the account holder"
        name="fullName"
        type="text"
        placeholder="Enter the exact account name"
      />
      <div className="h-6" />
      <CustomInput
        label="SWIFT / BIC code"
        name="bic-code"
        type="text"
        placeholder="Ex. UIJ90I454"
      />
      <div className="h-6" />
      <CustomInput
        label="IBAN / Account number"
        labelIcon={
          <div className="relative group">
            <img src={infoTooltip} alt="" />
            <div className="group-hover:visible invisible absolute w-fit bottom-6 left-1/2 -translate-x-1/2">
              <Tooltip
                position={"bottom-center"}
                text={"IBANs are long account.."}
              />
            </div>
          </div>
        }
        name="bic-code"
        type="text"
        placeholder="Enter the exact account number"
      />
      <div className="h-6" />
      {/* Breaker */}
      <div className="flex gap-3 items-center">
        <p className="text-sm text-gray-400">Recipient address</p>
        <div className="flex-1 h-[1px] bg-gray-100" />
      </div>
      <div className="h-6" />
      <CustomInput
        label="Country"
        name="country"
        type="text"
        placeholder="Select a country"
      />
      <div className="h-6" />
      <CustomInput
        label="Street Address"
        name="street"
        type="text"
        placeholder="Recipient's street address"
      />
      <div className="h-6" />
      <div className="flex gap-x-6">
        <div className="flex-1">
          <CustomInput
            label="City"
            name="city"
            type="text"
            placeholder="Town or city"
          />
        </div>

        <div className="flex-1">
          <CustomInput
            label="Zip code"
            name="city"
            type="text"
            placeholder="Ex. 100001"
          />
        </div>
      </div>
    </>
  )
}

export function AddRecipient({ addRecipient, infoTooltip, setAddRecipient }) {
  return (
    <div
      className={`transition-all duration-300 ${
        addRecipient ? "opacity-100" : "opacity-0"
      }`}
    >
    <AddRecipientForm/>

      <div className="h-14" />
      <div className="flex gap-x-6">
        <button
          className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
          onClick={() => {
            setAddRecipient(!addRecipient);
          }}
        >
          <ChevronLeftIcon className="h-6 w-6" />
          <p>Go back</p>
        </button>
        <button className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl">
          {" "}
          Continue
        </button>
      </div>
    </div>
  );
}
