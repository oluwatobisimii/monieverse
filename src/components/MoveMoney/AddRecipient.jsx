import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { AddRecipientForm } from "../Recipients/AddRecipientForm";


export function AddRecipient({ addRecipient, infoTooltip, setAddRecipient }) {

    const [formData, setFormData] = useState({});
  const [currency, setCurrency] = useState(null);
  const [scheme, setScheme] = useState();
  // const [loading, setloading] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${
        addRecipient ? "opacity-100" : "opacity-0"
      }`}
    >
      <AddRecipientForm
            formData={formData}
            setFormData={setFormData}
            currency={currency}
            setCurrency={setCurrency}
            selectedOption={scheme}
            setSelectedOption={setScheme}
          />
      <div className="h-10" />
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
      <div className="h-10"></div>
    </div>
  );
}
