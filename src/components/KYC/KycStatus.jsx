import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import kycIllustration from "../../assets/icons/kyc/KycIllustration.svg";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getKyc } from "../../features/kycStatusSlice";

const KycStatus = () => {
  const [kycDone, setKycDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfileStatus === "fulfilled") {
      let kycVerified = JSON.parse(localStorage.getItem("user"))?.kyc_verified;
      if (!kycVerified) {
        dispatch(getKyc());
      }
    }
    // eslint-disable-next-line
  }, []);

  const kycDatas = useSelector((state) => state.getKyc.kyc);
  const getKycReduxStatus = useSelector((state) => state.getKyc.status);

  const getKycStatusRedux = () => {
    if (getKycReduxStatus === "fulfilled") {
      console.log(kycDatas.is_valid);
      if (kycDatas.is_valid) {
        setKycDone(true);
      }
    }
  };

  const navigate = useNavigate();

  const [kycStatus, setKycStatus] = useState("");
  const [kycStatusVisible, setKycStatusVisible] = useState(true);
  const userProfileStatus = useSelector((state) => state.userProfile.status);

  useEffect(() => {
    if (userProfileStatus === "fulfilled") {
      let kycVerified = JSON.parse(localStorage.getItem("user"))?.kyc_verified;
      setKycStatus(kycVerified);
    }
  }, [userProfileStatus]);

  useEffect(() => {
    getKycStatusRedux();
    // eslint-disable-next-line
  }, [getKycReduxStatus]);

  return (
    <>
      {!kycStatus && kycStatusVisible && (
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className=" w-full overflow-hidden"
        >
          <div className="container mx-auto px-4 py-6 lg:pt-16">
            <div className="bg-[linear-gradient(100.48deg,_#F6F4FF_-4.42%,_#FFF5F1_130.5%)] p-4 md:p-8 rounded-3xl relative flex w-full">
              <div className="relative z-10 w-full">
                <p className="text-lg lg:text-d-xs font-medium font-clashGrotesk text-primary-600 w-[190px] md:w-auto">
                  {kycDone
                    ? "Verification in Progress"
                    : "Complete Your Account Verification"}
                </p>
                <div className="h-1"></div>
                <p className="text-xs lg:text-sm leading-tight text-gray-500 w-[190px] md:w-auto md:max-w-[477px]">
                  {kycDone
                    ? "Your account is being reviewed, you’ll be able to start moving money once your documents have been verified."
                    : "Unlock seamless global transfers. Begin by completing your KYC process."}
                </p>
                <div className="h-6"></div>
                <div className="flex gap-3 flex-row-reverse md:flex-row md:gap-6 w-full ">
                  {!kycDone && (
                    <div
                      className="bg-[linear-gradient(250.22deg,_#E8E4FE_-1.2%,_rgba(232,_228,_254,_0)_77.4%)]
              p-[1px] rounded-lg flex-1 md:flex-initial"
                    >
                      <button
                        className={`text-md font-medium text-primary-600 bg-gray-0 rounded-[8px] px-5 py-2 w-full`}
                        onClick={() => {
                          navigate("/kyc");
                        }}
                      >
                        Complete KYC
                      </button>
                    </div>
                  )}
                  <button
                    className={`text-md font-medium text-primary-600 bg-[#E8E4FE] md:bg-opacity-0 rounded-[8px] ${
                      kycDone ? "px" : "px-5"
                    } py-2 flex-1 md:flex-initial`}
                    onClick={() => {
                      setKycStatusVisible(false);
                    }}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              <div className="absolute md:top-1/2 -translate-y-1/2 -right-16 top-10 md:-right-14 scale-[60%] z-[5] md:scale-100">
                <img src={kycIllustration} alt="" />
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default KycStatus;
