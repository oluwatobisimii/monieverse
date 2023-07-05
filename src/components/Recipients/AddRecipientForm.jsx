import React, { useEffect, useState } from "react";
import CustomInput from "../Inputs/CustomInput";

import SelectCurrency from "../Inputs/SelectCurrency";
import { baseApiCall } from "../../api/MakeApiCallswithHeader";

import logo from "../../assets/logo/logo-sm.svg";
import DropdownSelect from "../Inputs/DropdownSelect";

export function AddRecipientForm({
  formData,
  setFormData,
  currency,
  setCurrency,
  selectedOption,
  setSelectedOption,
}) {
  const [supportedFields, setSupportedFields] = useState(null);
  const [filteredFields, setFilteredFields] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, selectedValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedValue,
    }));
  };

  useEffect(() => {
    let savedCurrencies = JSON.parse(localStorage.getItem("allCurrencies"))
      ?.filter((item, index) => item.supported_payment_schemes !== "")
      .sort((a, b) => a.id - b.id);
    setCurrency(savedCurrencies[0]);
    // eslint-disable-next-line
  }, []);

  const [paymentOptions, setPaymentOptions] = useState([]);

  const fetchFields = async () => {
    try {
      const response = await baseApiCall(
        "/users/recipients/supported-fields",
        "GET"
      );
      console.log(response.data);
      setSupportedFields({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFields();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currency !== null) {
      setSelectedOption("");

      const splittedValue = currency?.supported_payment_schemes?.split(",");

      let firstOption = splittedValue && splittedValue[0];
      setSelectedOption(firstOption);
      setPaymentOptions(splittedValue);
    } // eslint-disable-next-line
  }, [currency]);

  useEffect(() => {
    if (selectedOption && supportedFields !== null) {
      setFilteredFields(supportedFields[currency.code][selectedOption]);
    }
    // eslint-disable-next-line
  }, [selectedOption, supportedFields]);

  return (
    <>
      <div className="px-4 md:px-6 ">
        <div className="h-4 md:h-6 lg:h-8"></div>
        <CustomInput
          label="Recipient email"
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={(e) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              email: e.target.value,
            }));
          }}
        />
        <div className="h-6" />
        <SelectCurrency
          currency={currency}
          setCurrency={setCurrency}
          setSelectedOption={setSelectedOption}
        />
        <div className="h-6" />

        {/* Breaker */}
        <div className="flex gap-3 items-center">
          <p className="text-sm text-gray-400">Bank Details</p>
          <div className="flex-1 h-[1px] bg-gray-100" />
        </div>
        <div className="h-2" />
      </div>

      <div className="w-full flex px-4 md:px-6 border-b border-gray-200  ">
        {paymentOptions &&
          paymentOptions.map((item, index) => {
            return (
              <div
                className={`max-w-[50%] flex-1 flex center py-3 cursor-pointer transition-all duration-300 ${
                  selectedOption === item
                    ? "border-primary-500"
                    : "border-gray-200"
                } border-b  mb-[-1px]`}
                key={index}
                onClick={() => {
                  setSelectedOption(item);
                }}
              >
                <p
                  className={`text-sm font-medium transition-all duration-300 ${
                    selectedOption === item
                      ? "text-primary-500"
                      : "text-gray-500"
                  }`}
                >
                  {item}
                </p>
              </div>
            );
          })}
      </div>
      <div className="h-6" />
      <div className="px-4 md:px-6 ">
        <div className="h-6" />
        {supportedFields && filteredFields ? (
          supportedFields[currency.code][selectedOption].map((item, index) => {
            if (item.type === "text") {
              return (
                <>
                  <CustomInput
                    label={item.label}
                    onChange={handleInputChange}
                    keys={index}
                    name={item.name}
                  />
                  <div className="h-6" />
                </>
              );
            }

            if (item.type === "dropdown") {
              let options = JSON.parse(item.items);

              return (
                <>
                  <div className="h-1" />
                  <DropdownSelect
                    options={options}
                    label={item.label}
                    key={index}
                    name={item.name}
                    value={
                      typeof formData[item.name] === "string"
                        ? formData[item.name]
                        : formData[item.name]?.name
                    }
                    handleSelectChange={handleSelectChange}
                  />
                  <div className="h-6" />
                </>
              );
            }
            return null;
          })
        ) : (
          <div className="overflow-hidden">
            <div className="animate-ping  h-[250px] center">
              <img src={logo} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
