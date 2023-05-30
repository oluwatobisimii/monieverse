import React, { useEffect } from "react";
import DashboardNav from "../components/NavBar/DashboardNav";
import Balances from "../components/Balance/Balances";
import Transactions from "../components/Transaction/Transactions";
import Rate from "../components/Rates/Rate";
import MobileNav from "../components/NavBar/MobileNav";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../features/profile/userProfileAction";
import { getAllCurrencies } from "../features/currenciesSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userProfileStatus = useSelector((state) => state.userProfile.status);
  const currenciesStatus = useSelector((state) => state.allCurrencies.status);

  // Fetch UserProfile
  useEffect(() => {
    if (userProfileStatus === "idle") {
      dispatch(getUserProfile());
    }
  }, [userProfileStatus, dispatch]);

  // Fetch AllCurrencies
  useEffect(() => {
    if (currenciesStatus === "idle") {
      dispatch(getAllCurrencies());
    }
  }, [currenciesStatus, dispatch]);

  return (
    <>
      <MobileNav />
      <DashboardNav />
      <Balances />
      <Transactions />
      <Rate />
    </>
  );
};

export default Dashboard;
