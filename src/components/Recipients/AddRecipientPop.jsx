import React, { useEffect, useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AddRecipientForm } from "./AddRecipientForm";
import { CreateRecipient } from "./RecipientApi";
import Spinner from "../Loaders/Spinner";

const AddRecipientPop = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});
  const [currency, setCurrency] = useState(null);
  const [scheme, setScheme] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
        <div className="max-h-[600px] overflow-y-scroll">
          <AddRecipientForm
            formData={formData}
            setFormData={setFormData}
            currency={currency}
            setCurrency={setCurrency}
            selectedOption={scheme}
            setSelectedOption={setScheme}
          />
          <div className="h-8" />
          <div className="flex gap-x-6 px-4 md:px-6 pb-6">
            <button
              className="w-[196px] flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
              onClick={() => {
                onClose();
              }}
            >
              <p>Cancel</p>
            </button>

            {loading ? (
              <div
                className="flex-1 h-14 bg-primary-400 
              hover:bg-primary-500 disabled:bg-primary-300
              text-center text-gray-0 text-md font-medium rounded-xl disabled:cursor-not-allowed"
              >
                <Spinner />
              </div>
            ) : (
              <button
                className="flex-1 h-14 bg-primary-400 
              hover:bg-primary-500 disabled:bg-primary-300
              text-center text-gray-0 text-md font-medium rounded-xl disabled:cursor-not-allowed"
                disabled={
                  Object.values(formData).some((value) => value === "") ||
                  Object.keys(formData).length < 9 ||
                  formData === null
                }
                onClick={async () => {
                  console.log(formData);
                  console.log(currency.code);
                  console.log(scheme);
                  setloading(true);
                  let userInput = { ...formData };
                  delete userInput.countries;
                  console.log(userInput);
                  try {
                    const response = await CreateRecipient(
                      currency.code,
                      scheme,
                      userInput
                    );
                    console.log(response);
                  } catch (error) {
                    console.log(error.response);
                  }
                  setloading(true);
                  onClose();
                }}
              >
                {" "}
                Add <span className="hidden lg:inline">New</span> Recipient
              </button>
            )}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default AddRecipientPop;
