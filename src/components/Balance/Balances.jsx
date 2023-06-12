import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import BalanceCard from "./BalanceCard";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import KycRequired from "./KycRequired";
import { fetchWallets } from "../../features/walletSlice";
import UK from "../../assets/countries/Country = UK.svg";
import Europe from "../../assets/countries/Country = Europe.svg";
import China from "../../assets/countries/Country = China.svg";
import { Wallet } from "phosphor-react";
import { CreateWallets } from "./AddWalletApi";

const Balances = () => {
  const [kycStatus, setKycStatus] = useState(false);
  const [walletsCreated, setWalletsCreated] = useState(false);
  const userProfileStatus = useSelector((state) => state.userProfile.status);
  const fetchWalletStatus = useSelector((state) => state.wallets.status);
  const Wallets = useSelector((state) => state.wallets.wallets);

  const [activateScrollLeft, setActivateScrollLeft] = useState(false);
  const [activateScrollRight, setActivateScrollRight] = useState(true);
  const container = useRef(null);
  const containerInside = useRef(null);
  const dispatch = useDispatch();

  const createWalletFunc = async () => {
    try {
      const response = await CreateWallets();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      userProfileStatus === "fulfilled" &&
      fetchWalletStatus === "fulfilled"
    ) {
      if (
        JSON.parse(localStorage.getItem("user"))?.kyc_verified &&
        Wallets.length === 0
      ) {
        console.log("here");
        createWalletFunc();
        dispatch(fetchWallets());
        setWalletsCreated(true);
        return;
      }

      if (
        JSON.parse(localStorage.getItem("user"))?.kyc_verified &&
        Wallets.length > 0
      ) {
        setWalletsCreated(true);
      }

      if (
        JSON.parse(localStorage.getItem("user"))?.kyc_verified &&
        Wallets.length !== 0
      ) {
        setKycStatus(true);
      }
    }
    // eslint-disable-next-line
  }, [userProfileStatus, fetchWalletStatus]);

  const moveRight = function () {
    const element = document.getElementById("outsider");
    element.scrollLeft += 350;
  };
  const moveLeft = function () {
    const element = document.getElementById("outsider");
    element.scrollLeft -= 350;
  };

  const handleScroll = () => {
    const div = container.current;
    if (div.scrollLeft > 0) {
      setActivateScrollLeft(true);
    } else {
      setActivateScrollLeft(false);
    }

    if (div.scrollLeft + div.offsetWidth === div.scrollWidth) {
      setActivateScrollRight(false);
    } else {
      setActivateScrollRight(true);
    }
  };

  useEffect(() => {
    const div = container.current;
    if (div.offsetWidth <= div.scrollWidth) {
      console.log("here");
      setActivateScrollRight(false);
    }
  }, []);

  const [kycOverlay, setKycOverlay] = useState(false);

  const toggleKycOverlay = () => {
    setKycOverlay(!kycOverlay);
  };

  const [remainingWidth, setRemainingWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const elementWidth = containerInside.current.offsetWidth; // Width of the element you want to subtract
      const windowWidth = window.innerWidth;
      const calculatedRemainingWidth = windowWidth - elementWidth;
      setRemainingWidth(calculatedRemainingWidth);
    };

    handleResize(); // Initial calculation

    // Update remaining width when the window is resized
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const RenderBalances = () => {
    return (
      <>
        {Wallets.length > 0
          ? Wallets.map((wallet, index) => {
              return (
                <BalanceCard
                  key={index}
                  currency={wallet.currency}
                  framerKey={index}
                  balance={wallet.balance}
                  kycStatus={kycStatus}
                  currency_id={wallet.currency_id}
                />
              );
            })
          : null}
      </>
    );
  };

  return (
    <>
      {/* Overlays */}
      {kycOverlay && (
        <KycRequired
          isOpen={kycOverlay}
          onClose={toggleKycOverlay}
          setBankTransfer={setKycOverlay}
        />
      )}

      <section className=" w-full overflow-hidden">
        <div className="container mx-auto px-4 pt-6 lg:pt-10">
          <div className="flex justify-between items-center ">
            <p className="text-[20px] lg:text-d-xs font-medium font-clashGrotesk">
              Your Balances
            </p>
            <div className="flex gap-4">
              <div
                className={`p-2 rounded-full border border-gray-100 transition-all duration-300 ${
                  activateScrollLeft
                    ? "text-gray-600 hover:bg-gray-50 hover:border-opacity-0"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  moveLeft();
                }}
              >
                <ChevronLeftIcon className={`h-6 w-6  `} />
              </div>
              <div
                className={`p-2 rounded-full border border-gray-100 transition-all duration-300 ${
                  activateScrollRight
                    ? "text-gray-600 hover:bg-gray-50 hover:border-opacity-0"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  moveRight();
                }}
              >
                <ChevronRightIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="h-7" />
        </div>

        {/* Balances */}
        <div
          className=" overflow-x-scroll no-scrollbar w-full"
          id="outsider"
          ref={container}
          style={{ scrollBehavior: "smooth" }}
          onScroll={handleScroll}
        >
          <div
            className={`container pl-4 pb-6 lg:pb-10`}
            style={{
              marginLeft: remainingWidth / 2,
            }}
            ref={containerInside}
          >
            <motion.div
              className="flex gap-6 w-fit lg:min-w-[100%]"
              style={{
                paddingRight: remainingWidth / 2,
              }}
            >
              {!walletsCreated ? (
                <>
                  <BalanceCard
                    currency={"Nigeria Naira"}
                    framerKey={"Nigeria"}
                    balance={0.0}
                    kycStatus={kycStatus}
                    toggleKycOverlay={toggleKycOverlay}
                  />
                  <BalanceCard
                    currency={"U.S. Dollar"}
                    framerKey={"USA"}
                    kycStatus={kycStatus}
                    toggleKycOverlay={toggleKycOverlay}
                  />
                </>
              ) : (
                <RenderBalances />
              )}

              {kycStatus ? (
                <div className="rounded-3xl flex-1 border border-primary-300 hover:bg-primary-100 cursor-pointer bg-[#FCFCFF] flex gap-2 center min-w-[300px] border-dashed">
                  <div className="py-2 px-4 rounded-full bg-primary-100">
                    <Wallet
                      weight="fill"
                      className="text-primary-400 text-[24px]"
                    />
                  </div>
                  <div className="h-4" />
                  <p className="text-primary-500 text-md font-medium text-center">
                    Add New Balance
                  </p>
                </div>
              ) : (
                <div className="rounded-3xl flex-1 border border-gray-100 flex flex-col center min-w-[300px]">
                  <div className="flex">
                    <div className="w-8 h-8 border-2 border-gray-0 rounded-full">
                      <img src={UK} alt="" />
                    </div>
                    <div className="ml-[-5px] w-8 h-8 border-2 border-gray-0 rounded-full">
                      <img src={Europe} alt="" />
                    </div>
                    <div className="ml-[-5px] flex items-center">
                      <div className="w-8 h-8 border-2 border-gray-0 rounded-full">
                        <img src={China} alt="" />
                      </div>

                      <p className="ml-[-10px] rounded-full py-1.5 px-2.5 text-gray-400 bg-gray-50 font-medium text-sm">
                        {" "}
                        + more
                      </p>
                    </div>
                  </div>
                  <div className="h-4" />
                  <p className="text-primary-500 text-md font-medium text-center">
                    Unlock more balances by completing your KYC
                  </p>
                </div>
              )}
              <div style={{ width: remainingWidth / 2 }} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Balances;
