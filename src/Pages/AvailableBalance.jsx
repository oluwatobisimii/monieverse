import React from "react";
import DashboardNav from "../components/NavBar/DashboardNav";
import AvailableBalances from "../components/AvailableBalance/AvailableBalances";

const AvailableBalance = () => {
  return (
    <>
      <DashboardNav />
      <AvailableBalances/>
    </>
  );
};

export default AvailableBalance;
