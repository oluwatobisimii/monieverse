import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { refreshAccessToken } from "../features/refreshTokenSlice";
import { useEffect } from "react";

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

  let accessToken = JSON.parse(localStorage.getItem("accessToken"));

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
