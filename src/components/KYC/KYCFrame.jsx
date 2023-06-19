import React, { useEffect, useState } from "react";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import identity from "../../assets/icons/IdentificationBadge.svg";
import map from "../../assets/icons/MapTrifold.svg";

import yourhandle from "countrycitystatejson";
import CustomInput from "../Inputs/CustomInput";
import StepperDivider from "../UtilityComponents/StepperDivider";
import SelectCountry from "../Inputs/SelectCountry";
import { updateProfileKycAddress } from "./KycApi";
import StepperWrapper from "../Wrappers/StepperWrapper";
import KycUpload from "./KycUpload";
import SelectState from "../Inputs/SelectState";
import SelectBank from "../Inputs/SelectBank";
import { BankNamesCodes } from "../data/NigerianBanks";
import PinSetup from "./PinSetup";
import {
  AddressBook,
  Bank,
  IdentificationBadge,
  IdentificationCard,
} from "phosphor-react";
import { useSelector } from "react-redux";
import {
  validateAccountNumber,
  validateBVNNumber,
} from "../UtilityComponents/Validators";

const OptionsComponent = ({
  accountType,
  setAccountType,
  name,
  description,
  value,
}) => {
  let Icon;
  switch (name) {
    case "Passport":
      Icon = (
        <AddressBook
          className={
            accountType === "Business" ? "text-primary-400" : "text-gray-300"
          }
          size={24}
        />
      );
      break;

    case "Driver’s License":
      Icon = (
        <IdentificationCard
          className={
            accountType === "Business" ? "text-primary-400" : "text-gray-300"
          }
          size={24}
        />
      );
      break;

    case "National ID":
      Icon = (
        <IdentificationBadge
          className={
            accountType === "Business" ? "text-primary-400" : "text-gray-300"
          }
          size={24}
        />
      );
      break;

    default:
      break;
  }

  return (
    <>
      <div
        className={`group transition-all duration-500 hover:bg-gray-25 cursor-pointer border border-gray-100 rounded-2xl p-4 lg:p-8 flex  justify-between ${
          accountType === value ? "bg-gray-25" : ""
        }`}
        onClick={() => {
          setAccountType(value);
        }}
      >
        <div className="flex gap-8 items-center">
          <div
            className={`h-6 w-6 transition-all duration-500 rounded-full center ${
              accountType === value
                ? "group-hover:bg-primary-500 bg-primary-500"
                : `group-hover:bg-primary-100 bg-gray-50`
            }`}
          >
            {accountType === value && (
              <CheckIcon className="h-[18px] w-[18px] text-gray-0" />
            )}
          </div>
          <div className="flex gap-1 transition-all duration-500  items-center">
            {Icon}

            <p
              className={`group-hover:text-gray-600  transition-all duration-500 text-gray-400 font-medium text-md  ${
                accountType === value ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {name}
            </p>
          </div>
        </div>
        <p
          className={`${
            accountType === value ? "text-gray-500" : "text-gray-400"
          } text-xs md:text-sm w-[120px] lg:w-[240px]`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

const KYCFrame = () => {
  const [optionType, setOptionType] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [bank, setBank] = useState(0);
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [bvn, setBvn] = useState("");
  const [states, setStates] = useState([]);
  const [countryShortName, setCountryShortName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  // eslint-disable-next-line
  const [kycLevel, setKycLevel] = useState("");
  const [errors, setErrors] = useState({ bvn: "", account: "" });

  useEffect(() => {
    const selectedCountry = yourhandle.getCountryByShort("NG");
    setCountryShortName("NG");
    setSelectedCountry(selectedCountry);
    setStates(Object.keys(selectedCountry.states));
    setState(Object.keys(selectedCountry.states)[0]);
    // eslint-disable-next-line
  }, []);

  const kycDatas = useSelector((state) => state.getKyc.kyc);
  const getKycReduxStatus = useSelector((state) => state.getKyc.status);

  const setFetchedKycData = () => {
    if (getKycReduxStatus === "fulfilled") {
      console.log(kycDatas);
      console.log(getKycReduxStatus);
      setState(kycDatas.state);
      setAddress(kycDatas.address);
      setCity(kycDatas.city);
      setZipcode(kycDatas.Zipcode);
      setCountryShortName(kycDatas.country);
      const selectedCountry = yourhandle.getCountryByShort(kycDatas.country);
      setSelectedCountry(selectedCountry);
      setStates(Object.keys(selectedCountry.states));
      setBvn(kycDatas.bvn);
      setAccountNumber(kycDatas.account_number);
      const index = BankNamesCodes.findIndex(
        (element) => element.name === kycDatas.bank_name
      );
      if (index !== -1) {
        setBank(index);
      }
    }
  };
  useEffect(() => {
    setFetchedKycData();
    // eslint-disable-next-line
  }, [getKycReduxStatus]);

  const [step, setStep] = useState(0);
  let loaderWidth =
    step === 0
      ? "w-1/4"
      : step === 1
      ? "w-1/2"
      : step === 2
      ? "w-2/3"
      : "w-full";

  return (
    <>
      {/* Loader */}

      <div className="md:bg-gray-50 w-full min-h-[88vh] overflow-hidden">
        <div className="h-1 bg-primary-200 w-full">
          <div
            className={`h-full ${loaderWidth} duration-200 bg-primary-400 transition-all`}
          />
        </div>
        {/* Mobile Stepper */}
        <div className="flex justify-between lg:hidden p-4 pt-3 bg-gray-50">
          <p className="text-xs font-medium text-gray-500 ">
            {step === 0 ? "Your Details" : step === 1 ? "Identity" : ""}
          </p>
          <p className="text-xs font-medium text-gray-500 ">
            {step + 1}
            <span className="text-gray-400"> / 2</span>
          </p>
        </div>
        <div className="flex justify-between lg:container mx-auto md:pt-10">
          {/* Desktop Stepper */}
          <div className="hidden lg:block">
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 0 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 0 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 0 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {" "}
                Your Details
              </p>
            </div>
            <StepperDivider />
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 1 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 1 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 1 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Bank Details
              </p>
            </div>
            <StepperDivider />
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 2 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 2 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 2 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Identity
              </p>
            </div>
            <StepperDivider />
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-0 center ">
                {step === 3 ? (
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                ) : step > 3 ? (
                  <CheckIcon className="h-4 w-4 text-primary-500" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`text-sm font-medium  ${
                  step === 3 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                PIN Set-Up
              </p>
            </div>
          </div>

          {/* Address Detail */}
          {step === 0 && (
            <StepperWrapper>
              <form
                className="md:min-h-[500px] flex flex-col"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const userInput = {
                    address: address,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                    country_code: countryShortName,
                  };

                  try {
                    const response = await updateProfileKycAddress(userInput);
                    console.log(response);
                    if (response === "OK") {
                      setStep(1);
                      return;
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={map} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Address Details
                  </p>
                </div>
                <div className="h-14" />
                <div className="flex flex-col md:flex-row gap-6">
                  <SelectCountry
                    value={countryShortName}
                    setStates={setStates}
                    setState={setState}
                    setCountryShortName={setCountryShortName}
                    setSelectedCountry={setSelectedCountry}
                    selectedCountry={selectedCountry}
                  />

                  <SelectState
                    states={states}
                    state={state}
                    setState={setState}
                  />
                </div>

                <div className="h-6" />
                <CustomInput
                  label={"Street Address"}
                  value={address}
                  required={true}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Enter your street address"
                />
                <div className="h-6" />

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <CustomInput
                      label={"City"}
                      placeholder="Town or City"
                      value={city}
                      required={true}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <CustomInput
                      label={"Zip Code"}
                      placeholder="Ex. 100001"
                      value={zipcode}
                      required={true}
                      onChange={(e) => {
                        setZipcode(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="h-14" />
                <button
                  type="submit"
                  className="w-full h-14 bg-primary-400 hover:bg-primary-500 text-center text-gray-0 text-md font-medium rounded-xl mt-auto"
                >
                  {" "}
                  Continue
                </button>
              </form>
            </StepperWrapper>
          )}

          {/* Bank Detail */}
          {step === 1 && (
            <StepperWrapper>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const userInput = {
                    bvn: bvn,
                    account_number: account_number,
                    bank_name: BankNamesCodes[bank].name,
                    bank_code: BankNamesCodes[bank].code,
                  };

                  try {
                    const response = await updateProfileKycAddress(userInput);
                    if (response === "OK") {
                      setStep(2);
                    }
                    console.log(response);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className="flex-col flex md:min-h-[500px]  w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <Bank
                      weight="duotone"
                      className="text-gray-0 text-[32px]"
                    />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Bank Details
                  </p>
                </div>
                <div className="h-14" />
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <CustomInput
                      label={"BVN"}
                      required={true}
                      name={"bvn"}
                      type="number"
                      placeholder="Enter your 11 digit bvn"
                      value={bvn}
                      errors={errors}
                      onChange={(e) => {
                        let updateErrors = {
                          ...errors,
                          bvn: "",
                        };
                        setErrors({ ...updateErrors });
                        setBvn(e.target.value.trim());
                        if (!validateBVNNumber(e.target.value)) {
                          
                          updateErrors = {
                            ...errors,
                            bvn: "Invalid BVN",
                          };
                          setErrors({ ...updateErrors });
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="h-6" />

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <CustomInput
                      label={"Account Number"}
                      placeholder="10-digit account number"
                      type={"number"}
                      name={"account"}
                      errors={errors}
                      value={account_number}
                      required={true}
                      onChange={(e) => {
                        let updateErrors = {
                          ...errors,
                          account: "",
                        };
                        setErrors({ ...updateErrors });
                        setAccountNumber(e.target.value);
                        if (!validateAccountNumber(e.target.value)) {
                          console.log("error");
                          updateErrors = {
                            ...errors,
                            account: "Invalid Account Number",
                          };
                          setErrors({ ...updateErrors });
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <SelectBank bank={bank} setBank={setBank} />
                  </div>
                </div>

                <div className="h-14" />
                <div className="flex gap-x-6 mt-auto">
                  <div
                    className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-25"
                    onClick={() => {
                      setStep(0);
                    }}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                    <p>Go back</p>
                  </div>
                  <button
                    disabled={
                      !(
                        account_number &&
                        bvn &&
                        errors?.account === "" &&
                        errors?.bvn === ""
                      )
                    }
                    type="submit"
                    className="flex-1 h-14 disabled:bg-primary-300 bg-primary-400 hover:bg-primary-500 text-center  disabled:cursor-not-allowed text-gray-0 text-md font-medium rounded-xl"
                    // onClick={() => {
                    //   setStep(2);
                    // }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </form>
            </StepperWrapper>
          )}

          {/* Identity*/}
          {step === 2 && (
            // Add New Customer

            <StepperWrapper>
              <div className="h-full w-full md-min-h-[500px] flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
                    <img src={identity} alt="" />
                  </div>
                  <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
                    Identity Document
                  </p>
                </div>
                <div className="h-14" />
                <p className="text-md font-medium text-gray-600">
                  Prove your identity through any document below.
                </p>
                <div className="h-3" />
                <OptionsComponent
                  setAccountType={setOptionType}
                  accountType={optionType}
                  name="Passport"
                  description="Prove your identity through your government issued passport"
                  value={"passport"}
                />
                <div className="h-4" />
                <OptionsComponent
                  setAccountType={setOptionType}
                  accountType={optionType}
                  name="Driver’s License"
                  description="Prove your identity through your government issued driver’s license"
                  value={"drivers_license"}
                />
                <div className="h-4" />
                <OptionsComponent
                  setAccountType={setOptionType}
                  accountType={optionType}
                  name="National ID"
                  description="Prove your identity through your legal national ID card"
                  value={"national_id"}
                />

                <div className="h-14" />
                <div className="flex gap-x-6 mt-auto">
                  <button
                    className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
                    onClick={() => {
                      setStep(0);
                    }}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                    <p>Go back</p>
                  </button>
                  <button
                    className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
                    onClick={() => {
                      setStep(3);
                    }}
                  >
                    {" "}
                    Continue
                  </button>
                </div>
              </div>
            </StepperWrapper>
          )}

          {step === 3 && (
            <KycUpload optionType={optionType} step={step} setStep={setStep} />
          )}

          {step === 4 && (
            <PinSetup optionType={optionType} step={step} setStep={setStep} />
          )}

          {/* Desktop Stepper Counter */}
          <p className="text-xs font-medium text-gray-500 hidden lg:block">
            <span className="text-gray-400">Step </span>
            {step === 0 ? "1" : step === 1 ? "2" : step === 2 ? "2" : "3"}
            <span className="text-gray-400"> / 4</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default KYCFrame;
