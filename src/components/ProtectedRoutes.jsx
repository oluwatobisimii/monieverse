import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { refreshAccessToken } from "../features/refreshTokenSlice";
import { useEffect, useState } from "react";
import { fetchWallets } from "../features/walletSlice";
import { getAllCurrencies } from "../features/currenciesSlice";
import { getKyc } from "../features/kycStatusSlice";
import { getUserProfile } from "../features/profile/userProfileAction";
import logo from "../assets/logo/logo-sm.svg";

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
  const currenciesStatus = useSelector((state) => state.allCurrencies.status);
  const getKycStatus = useSelector((state) => state.getKyc.status);
  const fetchWalletStatus = useSelector((state) => state.wallets.status);

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

  const [render, setRender] = useState(false);

  useEffect(() => {
    if (
      userProfileStatus === "fulfilled" &&
      fetchWalletStatus === "fulfilled" &&
      getKycStatus === "fulfilled" &&
      currenciesStatus === "fulfilled"
    ) {
      setRender(true);
    }
  }, [userProfileStatus, currenciesStatus, getKycStatus, fetchWalletStatus]);

  let accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return accessToken ? (
    render ? (
      <Outlet />
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
