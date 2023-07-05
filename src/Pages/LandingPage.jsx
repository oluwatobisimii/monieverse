import React from "react";
import Footer from "../components/LandingPage/Footer";
import GetStarted from "../components/LandingPage/GetStarted";
import FAQ from "../components/LandingPage/FAQ";
import CreateAccount from "../components/LandingPage/CreateAccount";
import Hero from "../components/LandingPage/Hero";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="h-[120px]"></div>
      <div className="container mx-auto w-full h-[1px] bg-gray-100"></div>
      <CreateAccount />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  );
};

export default LandingPage;
