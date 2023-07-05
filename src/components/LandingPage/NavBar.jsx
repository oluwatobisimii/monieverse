import React from "react";
import logo from "../../assets/logo/logo-lg.svg";
import logomob from "../../assets/logo/logo-sm.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto absolute top-10 left-1/2 -translate-x-1/2">
      <div className="bg-gray-0 rounded-2xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="" className=" hidden lg:block"/>
          <img src={logomob} alt="" className=" lg:hidden"/>
          <div className="w-[80px]"></div>
          <div className="gap-4 items-center text-gray-400 hover:text-gray-500 hidden lg:flex">
            <p>Home</p>
            <p>Features</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
       
        <Link to="/register" className="bg-gray-100 hover:bg-gray-200 rounded-xl py-4 px-6 text-gray-600 text-sm md:text-md font-medium md:w-[160px] flex center">Sign up</Link>
        <Link to="/login" className="bg-primary-400 hover:bg-primary-500 rounded-xl py-4 px-6 text-gray-0 text-sm md:text-md font-medium md:w-[160px] flex center">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
