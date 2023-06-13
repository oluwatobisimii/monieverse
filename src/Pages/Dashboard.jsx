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
  // const dispatch = useDispatch();
  // const userProfileStatus = useSelector((state) => state.userProfile.status);
  // const currenciesStatus = useSelector((state) => state.allCurrencies.status);
  // const getKycStatus = useSelector((state) => state.getKyc.status);
  // const fetchWalletStatus = useSelector((state) => state.wallets.status);

  // // Fetch UserProfile
  // useEffect(() => {
  //   if (userProfileStatus === "idle") {
  //     dispatch(getUserProfile());
  //   }
  // }, [userProfileStatus, dispatch]);

  // // Fetch AllCurrencies
  // useEffect(() => {
  //   if (currenciesStatus === "idle") {
  //     dispatch(getAllCurrencies());
  //   }
  // }, [currenciesStatus, dispatch]);

  // // Get KYC
  // useEffect(() => {
  //   if (getKycStatus === "idle") {
  //     dispatch(getKyc());
  //   }
  // }, [getKycStatus, dispatch]);

  // // Fetch Wallets
  // useEffect(() => {
  //   if (fetchWalletStatus === "idle") {
  //     dispatch(fetchWallets());
  //   }
  // }, [dispatch, fetchWalletStatus]);

  // const [render, setRender] = useState(false);

  // useEffect(() => {
  //   if (
  //     userProfileStatus === "fulfilled" &&
  //     fetchWalletStatus === "fulfilled" &&
  //     getKycStatus === "fulfilled" &&
  //     currenciesStatus === "fulfilled"
  //   ) {
  //     setRender(true);
  //   }
  // }, [userProfileStatus, currenciesStatus, getKycStatus, fetchWalletStatus]);

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
