import React from "react";
import DashboardNav from "../components/NavBar/DashboardNav";
import Balances from "../components/Balance/Balances";
import Transactions from "../components/Transaction/Transactions";
import Rate from "../components/Rates/Rate";
import MobileNav from "../components/NavBar/MobileNav";
import { motion } from "framer-motion";
import KycStatus from "../components/KYC/KycStatus";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserProfile } from "../features/profile/userProfileAction";
// import { getAllCurrencies } from "../features/currenciesSlice";
// import { getKyc } from "../features/kycStatusSlice";
// import { fetchWallets } from "../features/walletSlice";

const Dashboard = () => {


  return (
    <>
      {
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MobileNav />
          <DashboardNav />
          <KycStatus />
          <Balances />
          <Transactions />
          <Rate />
        </motion.section>
      }
    </>
  );
};

export default Dashboard;
