import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo-lg.svg";
import { Link, useLocation } from "react-router-dom";

import google from "../../assets/icons/GOOGLE_ICON.svg";
import {
  defaultCountries,
  CountrySelector,
  DialCodePreview,
} from "react-international-phone";
import "react-international-phone/style.css";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import axios from "../../api/axios";
import VerifyAccount from "./VerifyAccount";
import { useDispatch, useSelector } from "react-redux";
import { resetErrors } from "../../features/register/registerSlice";
import { resendOTP } from "../../api/resendOTP";

const Register = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { stepRoute, emailRoute } = state;
      setStep(stepRoute);
      setEmail(emailRoute);
      const result = resendOTP(emailRoute);
      console.log(result)
    }
    // eslint-disable-next-line
  }, []);

  const [phone, setPhone] = useState();
  const [first_name, setFirstName] = useState();
  const [country_code, setCountryCode] = useState("ng");
  const [last_name, setLastName] = useState();
  const [acceptTerms, setAcceptTerms] = useState(false);
  let dialCode = defaultCountries.filter((country) => {
    return country[2] === country_code;
  })[0];

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [business_name, setBusinessName] = useState("");

  // State from Redux
  const { loading, errors } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  useEffect(() => {
    if (errors && errors.phone) {
      setStep(0);
    }
  }, [errors]);

  return (
    <>
      {step === 0 ? (
        <section className="flex h-screen w-full font-inter">
          <div className="flex-1 ">
            <div className="h-10 lg:h-14" />
            <img src={logo} alt="" className="mx-auto" />
            <div className="h-12 lg:h-[60px]" />
            <p className="text-center text-gray-600 text-d-xs lg:text-d-md font-clashGrotesk font-medium">
              Create an Account
            </p>
            <div className="h-1" />
            <p className="text-sm lg:text-md text-gray-400 text-center">
              Already have an account?{" "}
              <span className="font-medium text-primary-500 underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
            <div className="h-10" />

            <form action="" className="mx-auto max-w-[432px] p-4">
              <button className="w-full flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2">
                <img src={google} alt="" />
                <p>Continue with Google</p>
              </button>
              <div className="h-6" />
              <div className="flex items-center gap-x-2">
                <div className="h-[1px] flex-1 bg-gray-100" />
                <p className="text-sm text-gray-400">Or</p>
                <div className="h-[1px] flex-1 bg-gray-100" />
              </div>
              <div className="h-6" />
              <div className="w-full">
                <label
                  htmlFor={"firstName"}
                  className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
                >
                  <p> Legal first name </p>
                </label>

                <div className="h-1" />
                <input
                  type={"text"}
                  name={"firstName"}
                  placeholder="George"
                  value={first_name}
                  className="border border-gray-100  px-4 py-3 rounded-lg focus:outline-none focus:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
              focus:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter w-full"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <div className="h-1" />
                {<p className="text-xs font-medium text-error-400">{}</p>}
              </div>
              <div className="h-6" />

              <div className="w-full">
                <label
                  htmlFor={"lastName"}
                  className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
                >
                  <p> Legal last name </p>
                </label>

                <div className="h-1" />
                <div className="flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
                  <input
                    type={"text"}
                    name={"lastName"}
                    value={last_name}
                    placeholder="Edwards"
                    className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="h-1" />
                {<p className="text-xs font-medium text-error-400">{}</p>}
              </div>

              <div className="h-6" />
              <div className="">
                <label
                  htmlFor={"Phone number"}
                  className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
                >
                  <p> Phone Number </p>
                </label>

                <div
                  className={`border border-gray-100 flex  rounded-lg focus:outline-none focus-within:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600 focus:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter invalid:border-error-400 h-12 items-center 
                  ${
                    errors && errors.phone
                      ? "border-error-400"
                      : "border-gray-100"
                  }`}
                >
                  <div className="px-4 flex items-center">
                    <CountrySelector
                      selectedCountry={country_code}
                      onSelect={({ iso2 }) => setCountryCode(iso2)}
                      buttonClassName="removeBorder"
                      dropdownArrowStyle={{
                        display: "none",
                      }}
                    />

                    <DialCodePreview
                      dialCode={dialCode[3]}
                      prefix="+"
                      className="font-inter text-gray-500 removeBorder px-0 -ml-2"
                    />
                    <ChevronDownIcon className="w-4 text-gray-400" />
                    <div className="h-6 ml-3 w-[1px] bg-gray-100" />
                  </div>
                  <input
                    type="number"
                    className="focus:outline-none flex-1"
                    value={phone}
                    onChange={(e) => {
                      dispatch(resetErrors("phone"));
                      setPhone(e.target.value.toString());
                    }}
                  />
                </div>
                <div className="h-1" />

                {errors && (
                  <p className="text-xs font-medium text-error-400">
                    {errors["phone"]}
                  </p>
                )}
              </div>

              <div className="h-6" />

              <div className="h-6" />
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  name="terms"
                  id=""
                  value={acceptTerms}
                  onChange={(e) => {
                    e.target.value
                      ? setAcceptTerms(true)
                      : setAcceptTerms(false);
                  }}
                />
                <p className="text-sm text-gray-500">
                  I accept the{" "}
                  <span className="font-medium text-primary-500">
                    <Link to="/forgot-password">Terms of Use</Link>
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-primary-500">
                    <Link to="/forgot-password">Privacy policy</Link>
                  </span>
                </p>
              </div>
              <div className="h-6" />
              <button
                disabled={!(first_name && last_name && phone && acceptTerms)}
                className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-200"
                onClick={(e) => {
                  e.preventDefault();
                  let userInput = {
                    first_name: first_name,
                    last_name: last_name,
                    phone: phone,
                    country_code: country_code.toUpperCase(),
                  };
                  sessionStorage.setItem(
                    "userInput",
                    JSON.stringify(userInput)
                  );
                  setStep(1);
                }}
              >
                Create Account
              </button>
            </form>

            <div className="h-4" />
            <p className="text-center text-gray-300 text-xs">
              Monieverse Microfinance Bank Limited © 2023{" "}
            </p>
          </div>
          <div className="bg-gray-50 flex-1 hidden lg:block"></div>
        </section>
      ) : (
        <VerifyAccount
          step={step}
          setStep={setStep}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          business_name={business_name}
          setBusinessName={setBusinessName}
          loading={loading}
          errors={errors}
        />
      )}
    </>
  );
};

export default Register;
