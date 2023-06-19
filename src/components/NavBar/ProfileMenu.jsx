import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import userSettings from "../../assets/icons/UserGear.svg";
import wallet from "../../assets/icons/Wallet.svg";
import signOut from "../../assets/icons/SignOut.svg";
import warnings from "../../assets/icons/Warning.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../features/logoutSlice";
import { AnimatePresence, motion } from "framer-motion";
import { truncateText } from "../UtilityComponents/TruncateText";

const UserInitials = ({ first, last, colorCode }) => {
  const userDetails = useSelector((state) => state.userProfile);

  let avatarStyle = "";
  switch (colorCode) {
    case 1:
      avatarStyle = "bg-error-100 text-error-400";
      break;
    case 2:
      avatarStyle = "bg-primary-100 text-primary-400";
      break;
    case 3:
      avatarStyle = "bg-orange-100 text-orange-400";
      break;
    case 4:
      avatarStyle = "bg-green-100 text-green-400";
      break;
    case 5:
      avatarStyle = "bg-lightBlue-100 text-lightBlue-400";
      break;
    default:
      break;
  }
  return (
    <div className={`h-10 w-10 rounded-full ${avatarStyle} center`}>
      {userDetails.status === "fulfilled" &&
      userDetails.user.account_type === "Personal"
        ? userDetails.user.last_name[0]
        : ""}
      {userDetails.status === "fulfilled" &&
      userDetails.user.account_type === "Personal"
        ? userDetails.user.first_name[0]
        : ""}
      {userDetails.status === "fulfilled" &&
      userDetails.user.account_type === "Business"
        ? userDetails.user.business_name[0]
        : ""}
    </div>
  );
};

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const [colorCode, setcolorCode] = useState(1);
  useEffect(() => {
    let colorCodeVal = Math.floor(Math.random() * 5) + 1;
    setcolorCode(colorCodeVal);
  }, []);
  const handleLogout = () => {
    dispatch(logoutUser());
    toggleDropdown();
    window.location.reload();
  };
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userCredential, setUserCredential] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userDetails = useSelector((state) => state.userProfile);
  const userProfileStatus = useSelector((state) => state.userProfile.status);

  useEffect(() => {
    if (userProfileStatus === "fulfilled") {
      setUserCredential(userDetails.user);
    }
    // eslint-disable-next-line
  }, [userProfileStatus]);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={popupRef}>
        <div
          className={`cursor-pointer flex gap-1 center font-inter hover:bg-gray-0 hover:shadow-lg transition-all duration-200 p-1 rounded-full px-2 ${
            isOpen ? "bg-gray-0 shadow-lg" : ""
          }`}
          onClick={toggleDropdown}
        >
          <UserInitials colorCode={colorCode} />
          <ChevronDownIcon className="h-4 text-gray-400" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="profileDropdown"
              initial={{ scale: 0.9, y: -10, x: "10%", opacity: 0 }}
              animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -10, x: "10%", opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute mt-3 top-[100%] cardShadow rounded-2xl overflow-hidden bg-gray-0 right-0 z-[30]"
            >
              <div className="relative w-[328px]">
                <div className="">
                  <div className="relative z-[1]">
                    <div className="px-4 pt-5">
                      <div className="flex gap-2 ">
                        <UserInitials colorCode={colorCode} />
                        <div>
                          <div className="flex gap-1 items-center">
                            <p className="text-md font-medium text-gray-600">
                              {userCredential.account_type === "Personal"
                                ? truncateText(
                                    `${userCredential.first_name} ${userCredential.last_name}`,
                                    15
                                  )
                                : ""}{" "}
                              {userCredential.account_type === "Business"
                                ? truncateText(userCredential.business_name, 15)
                                : ""}
                            </p>
                            <CheckBadgeIcon
                              className={`${
                                !userCredential.kyc_verified
                                  ? "text-gray-300"
                                  : userCredential.account_type === "Business"
                                  ? "text-yellow-400"
                                  : "text-lightBlue-400"
                              } h-5 `}
                            />
                          </div>
                          <p className="text-sm text-gray-400">
                            {userCredential && userCredential.email}
                          </p>
                        </div>
                      </div>
                      <div className="h-4" />
                      <div className="h-[1px] w-full bg-gray-100" />
                    </div>
                    <div className="p-3">
                      <Link
                        to="/settings"
                        className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl cursor-pointer"
                      >
                        <img src={userSettings} alt="" />
                        <p className="text-sm font-medium text-gray-500">
                          Account Settings
                        </p>
                      </Link>
                      <div className="h-3" />
                      <div className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl">
                        <img src={wallet} alt="" />
                        <p className="text-sm font-medium text-gray-500">
                          Hide Balances
                        </p>
                      </div>
                      <div className="h-3" />

                      {!userCredential.kyc_verified ? (
                        <>
                          <div className="h-[1px] w-full bg-gray-100" />
                          <div className="h-4" />
                          <Link to="/kyc" className="px-3 flex justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <img src={warnings} alt="" />
                                <p className="text-sm font-medium text-gray-600">
                                  KYC Required
                                </p>
                              </div>
                              <p className="text-xs text-gray-400">
                                Please verify your account
                              </p>
                            </div>
                            <button className="border border-primary-300 bg-primary-100 text-primary-500 rounded-lg px-5 py-2 text-md font-medium">
                              Verify
                            </button>
                          </Link>
                        </>
                      ) : null}
                      <div className="h-4" />

                      <div className="h-[1px] w-full bg-gray-100" />
                      <div className="h-3" />
                      <div
                        className="hover:bg-gray-50 flex items-center gap-2 p-3 rounded-xl cursor-pointer"
                        onClick={handleLogout}
                      >
                        <img src={signOut} alt="" />
                        <p className="text-sm font-medium text-gray-500">
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monie-gradient absolute top-0 h-[73px] w-full z-0" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfileMenu;
