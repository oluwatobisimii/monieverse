import React from "react";
import { Link } from "react-router-dom";
import globe from '../../assets/onboard/Globe.svg'
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <section className="font-inter bg-gray-25 h-screen relative overflow-hidden">
        <NavBar/>
      <div className="container mx-auto p-4 md:p-8 lg:p-10 lg:py-[120px] py-12">
        <div className="h-[13vh]"></div>
        <div className="text-d-md items-center justify-center lg:text-d-xl font-clashGrotesk font-medium flex gap-2 ">
          <p>Move money globally</p>
        </div>
        <div className="h-4"></div>
        <p className="text-gray-400 text-md md:text-lg lg:w-[718px] text-center mx-auto">
          Receive and make payments to vendors from across the globe. With
          multi-currency accounts, you can send and receive from China, UK,
          Nigeria and more at low-fees.
        </p>
<div className="h-10"></div>
        <div className="flex center gap-4 flex-col lg:flex-row">
          <Link
            to="/register"
            className="bg-primary-400 hover:bg-primary-500 rounded-xl py-4 px-6 text-gray-0 text-sm md:text-md font-medium md:w-auto "
          >
            Create a free account
          </Link>
          <Link
            to="#"
            className="bg-gray-0 hover:bg-gray-25 rounded-xl py-4 px-6 text-gray-600 text-sm md:text-md font-medium"
          >
            Contact sales
          </Link>
        </div>
        <div className="absolute top-[60vh]"> 
        <img src={globe} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
