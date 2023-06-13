import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo/logo-lg.svg";
import { Link, useLocation } from "react-router-dom";
import google from "../../../assets/icons/GOOGLE_ICON.svg";
import "react-international-phone/style.css";

// import axios from "../../api/axios";
import VerifyAccount from "./VerifyAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  resetErrors,
  updateError,
} from "../../../features/register/registerSlice";
import CustomPhoneInput from "../../../components/Inputs/CustomPhoneInput";
import { defaultCountries, parseCountry } from "react-international-phone";
import { motion } from "framer-motion";

const Register = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { stepRoute, emailRoute } = state;
      setStep(stepRoute);
      setEmail(emailRoute);
    }
    // eslint-disable-next-line
  }, []);

  const [phone, setPhone] = useState();
  const [first_name, setFirstName] = useState();
  const [country_code, setCountryCode] = useState("ng");
  const [last_name, setLastName] = useState();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    parseCountry(defaultCountries[138])
  );
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");

  const validateNigerianPhoneNumber = (phoneNumber) => {
    // Nigerian phone number pattern: ^\+?234[789]\d{9}$
    const nigerianPhoneNumberRegex = /^\+?234[789]\d{9}$/;

    return nigerianPhoneNumberRegex.test(phoneNumber);
  };

  // State from Redux
  const { loading, errors, errorMessage } = useSelector(
    (state) => state.register
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (errors && errors.phone) {
      setStep(0);
    }
  }, [errors]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
    >
      {step === 0 ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-screen w-full font-inter"
        >
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
                <div className="h-1"></div>
                <CustomPhoneInput
                  value={phone}
                  errors={errors}
                  onChange={(e) => {
                    dispatch(resetErrors("phone"));
                    setPhone(e.target.value.toString());
                    if (
                      !validateNigerianPhoneNumber(
                        `+234${Number(e.target.value)}`
                      )
                    ) {
                      dispatch(updateError({ phone: "Invalid phone number" }));
                    }
                  }}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  setCountryCode={setCountryCode}
                />
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
                disabled={!(first_name && last_name && phone && acceptTerms && errors?.phone === "")}
                className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300"
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
        </motion.section>
      ) : (
        <VerifyAccount
          step={step}
          setStep={setStep}
          email={email}
          setEmail={setEmail}
          loading={loading}
          errors={errors}
          errorMessage={errorMessage}
        />
      )}
    </motion.section>
  );
};

export default Register;
