import React, { useState } from "react";
import logo from "../../assets/logo/logo-lg.svg";
import { Link } from "react-router-dom";


import google from "../../assets/icons/GOOGLE_ICON.svg";
import { useNavigate } from "react-router-dom";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Register = () => {
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  return (
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
              className="border border-gray-100  px-4 py-3 rounded-lg focus:outline-none focus:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
              focus:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter  w-full"
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
                placeholder="Enter your email address"
                className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
              />
              {/* <EyeIcon className="h-5 w-5 text-grey-400 mx-4" /> */}
            </div>
            <div className="h-1" />
            {<p className="text-xs font-medium text-error-400">{}</p>}
          </div>
          <div className="h-6" />
          <div className="w-full">
            <label
              htmlFor={"Phone number"}
              className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
            >
              <p> Legal last name </p>
            </label>

            <div className="h-1" />
            <div className="flex items-center border border-gray-100 rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]">
              <input
                type={"text"}
                name={"lastName"}
                placeholder="Enter your email address"
                className="  px-4 py-3 rounded-lg  focus:outline-none placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
               font-inter  flex-1"
              />
              {/* <EyeIcon className="h-5 w-5 text-grey-400 mx-4" /> */}
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
            <PhoneInput
              defaultCountry="ng"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              disableDialCodeAndPrefix={true}
              showDisabledDialCodeAndPrefix={false}
              inputClassName="px-4 py-3 rounded-lg focus:outline-none text-md  text-gray-600 font-inter flex-1 h-12"
              className=" rounded-lg focus-within:border-primary-400 focus-within:shadow-[0px_0px_0px_3px_#DDD7FE]"
            />
          </div>
          <div className="h-6" />

          <div className="flex items-center gap-4">
            <input type="checkbox" name="terms" id="" />
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
          <div className="h-12" />
          <button
            className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
            onClick={() => {
              
              navigate("/verify-account");
            }}
          >
            Create Account
          </button>
          <div className="h-6" />
          <div className="flex items-center gap-x-2">
            <div className="h-[1px] flex-1 bg-gray-100" />
            <p className="text-sm text-gray-400">Or</p>
            <div className="h-[1px] flex-1 bg-gray-100" />
          </div>
          <div className="h-6" />
          <button className="w-full flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2">
            <img src={google} alt="" />
            <p>Continue with Google</p>
          </button>
        </form>

        <div className="h-10" />
        <p className="text-center text-gray-300 text-xs">
          Monieverse Microfinance Bank Limited © 2023{" "}
        </p>
      </div>
      <div className="bg-gray-50 flex-1 hidden lg:block"></div>
    </section>
  );
};

export default Register;
