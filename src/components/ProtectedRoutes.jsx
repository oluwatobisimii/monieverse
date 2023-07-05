

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { refreshAccessToken } from "../features/refreshTokenSlice";
import { useEffect, useState } from "react";
import { fetchWallets } from "../features/walletSlice";
import { getAllCurrencies } from "../features/currenciesSlice";
import { getKyc } from "../features/kycStatusSlice";
import { getUserProfile } from "../features/profile/userProfileAction";
import logo from "../assets/logo/logo-sm.svg";
import PinDialog from "./Inputs/PinDialog";
import { getAllRecipients } from "../features/recipientsSlice";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let refreshTokenOld = JSON.parse(localStorage.getItem("refreshToken"));

    function refreshToken() {
      if (refreshTokenOld) {
        dispatch(refreshAccessToken());
      }
    }

    const minutes = 1000 * 60;
    refreshToken();
    const refreshInterval = setInterval(refreshToken, minutes * 10);

    return () => {
      clearInterval(refreshInterval);
    };
    // eslint-disable-next-line
  }, []);

  const userProfileStatus = useSelector((state) => state.userProfile.status);
  const allRecipientsStatus = useSelector((state) => state.allRecipients.status);
  const currenciesStatus = useSelector((state) => state.allCurrencies.status);
  const getKycStatus = useSelector((state) => state.getKyc.status);
  const fetchWalletStatus = useSelector((state) => state.wallets.status);

  const [firstLoad, setFirstLoad] = useState(() => {
    const storedFirstLoad = localStorage.getItem("firstLoad");
    return storedFirstLoad ? JSON.parse(storedFirstLoad) : true;
  });

  const [render, setRender] = useState(false);

  // Fetch UserProfile
  useEffect(() => {
    console.log("fetch user here " + userProfileStatus);
    if (userProfileStatus === "idle" || userProfileStatus === "failed") {
      dispatch(getUserProfile());
    }
  }, [userProfileStatus, dispatch]);

  // Fetch AllCurrencies
  useEffect(() => {
    if (currenciesStatus === "idle") {
      dispatch(getAllCurrencies());
    }
  }, [currenciesStatus, dispatch]);


  // Fetch AllRecipients
  useEffect(() => {
    
    if (allRecipientsStatus === "idle") {
      dispatch(getAllRecipients());
    }
  }, [allRecipientsStatus, dispatch]);


  // Get KYC
  useEffect(() => {
    if (getKycStatus === "idle") {
      dispatch(getKyc());
    }
  }, [getKycStatus, dispatch]);

  // Fetch Wallets
  useEffect(() => {
    if (fetchWalletStatus === "idle") {
      dispatch(fetchWallets());
    }
  }, [dispatch, fetchWalletStatus]);

  useEffect(() => {
    if (
      userProfileStatus === "fulfilled" &&
      fetchWalletStatus === "fulfilled" &&
      getKycStatus === "fulfilled" &&
      currenciesStatus === "fulfilled"
      &&
      allRecipientsStatus === "fulfilled"
    ) {
      if (firstLoad) {
        setTimeout(() => {
          console.log("all loaded");
          setRender(true);
          setFirstLoad(false); // Mark first load as completed
          localStorage.setItem("firstLoad", JSON.stringify(false)); // Store firstLoad in local storage
        }, 1000); // Delay of 1000 milliseconds (1 second) only during the first load
      } else {
        setRender(true);
      }
    }
  }, [
    firstLoad,
    userProfileStatus,
    currenciesStatus,
    getKycStatus,
    fetchWalletStatus,
    allRecipientsStatus
  ]);

  let accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return accessToken ? (
    render ? (
      <>
        
        <PinDialog />
        <Outlet />
      </>
    ) : (
      <>
        <div className="sheen w-screen h-screen center">
          <img src={logo} alt="" />
        </div>
      </>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
