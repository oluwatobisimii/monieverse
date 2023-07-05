import React, { useEffect, useState } from "react";
import Overlay from "../UtilityComponents/Overlay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Check, IdentificationBadge, Info } from "phosphor-react";
// import { baseApiCall } from "../../api/MakeApiCallswithHeader";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getKyc } from "../../features/kycStatusSlice";

const KycRequired = ({ isOpen, onClose }) => {
  const [kycLevel, setKycLevel] = useState("");

  const kycData = useSelector((state) => state.getKyc.kyc);
  const getKycReduxStatus = useSelector((state) => state.getKyc.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKyc());
    // eslint-disable-next-line
  }, []);

  const getKycStatusRedux = () => {
    if (getKycReduxStatus === "fulfilled") {
      let empty_fields = kycData.empty_fields;
      if (empty_fields?.length > 0 && !empty_fields.includes("Address")) {
        console.log(empty_fields);
        console.log(!empty_fields.includes("Address"));

        setKycLevel("bank");
      }
      if (
        empty_fields &&
        empty_fields.length === 1 &&
        empty_fields[0] === "IdentityDocument"
      ) {
        console.log("document");
        setKycLevel("document");
      }

      if (empty_fields === null) {
        console.log("done");
        setKycLevel("done");
      }
    }
  };

  useEffect(() => {
    getKycStatusRedux();
    // eslint-disable-next-line
  }, [getKycReduxStatus]);

  const navigate = useNavigate();
  return (
    <>
      {
        <Overlay isOpen={isOpen} onClose={onClose}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl"
          >
            <div className="px-4 py-[22px] flex items-center justify-between  border-gray-100">
              <div />
              <div className="h-10 w-10 flex center" onClick={onClose}>
                <XMarkIcon className="h-6 text-gray-300" />
              </div>
            </div>
            <div
              className={`w-14 h-14 rounded-lg ${
                kycLevel === "done" ? "bg-green-100" : "bg-orange-100"
              } flex center mx-auto`}
            >
              <IdentificationBadge
                weight="duotone"
                className={`${
                  kycLevel === "done" ? "text-green-400" : "text-orange-400"
                } text-[32px]`}
              />
            </div>
            <div className="h-4" />
            <p className="text-d-sm text-grey-600 font-medium font-clashGrotesk text-center">
              {kycLevel === "done"
                ? "Verification in Progress"
                : "KYC Required"}
            </p>
            <div className="h-1" />
            <div className="flex center gap-1 px-8">
              <p className="text-md text-gray-400 text-center ">
                {kycLevel === "done"
                  ? "Your account is being reviewed, you’ll be able to start moving money once your documents have been verified."
                  : "We need to verify your identity first"}
              </p>
              <Info className="text-gray-400 text-[16px]" />
            </div>

            <div className="p-4 md:p-6">
              <div className="flex center flex-wrap gap-4">
                <div className="gap-1 flex items-center">
                  <div className="bg-green-100 text-green-500 flex center h-8 w-8 rounded-full">
                    <Check className="text-[18]" />
                  </div>
                  <p className="text-sm text-gray-600">Account created</p>
                </div>
                <div className="gap-1 flex items-center">
                  <div
                    className={` ${
                      kycLevel === "bank" ||
                      kycLevel === "document" ||
                      kycLevel === "done"
                        ? "bg-green-100 text-green-500"
                        : "bg-gray-50 text-grey-500"
                    }  flex center h-8 w-8 rounded-full`}
                  >
                    <Check className="text-[18]" />
                  </div>
                  <p
                    className={`text-sm ${
                      kycLevel === "bank" ||
                      kycLevel === "document" ||
                      kycLevel === "done"
                        ? " text-gray-600"
                        : "text-grey-500"
                    } `}
                  >
                    Address Details
                  </p>
                </div>
                <div className="gap-1 flex items-center">
                  <div
                    className={` ${
                      kycLevel === "document" || kycLevel === "done"
                        ? "bg-green-100 text-green-500"
                        : "bg-gray-50 text-grey-500"
                    }  flex center h-8 w-8 rounded-full`}
                  >
                    <Check className="text-[18]" />
                  </div>
                  <p
                    className={`text-sm ${
                      kycLevel === "document" || kycLevel === "done"
                        ? " text-gray-600"
                        : "text-grey-500"
                    } `}
                  >
                    Bank Details
                  </p>
                </div>
                <div className="gap-1 flex items-center">
                  <div
                    className={` ${
                      kycLevel === "done"
                        ? "bg-green-100 text-green-500"
                        : "bg-gray-50 text-grey-500"
                    }  flex center h-8 w-8 rounded-full`}
                  >
                    <Check className="text-[18]" />
                  </div>
                  <p
                    className={`text-sm ${
                      kycLevel === "done" ? " text-gray-600" : "text-grey-500"
                    } `}
                  >
                    ID Document
                  </p>
                </div>
              </div>

              <div className="h-[38px] md:h-14" />
              <div className="flex gap-x-6">
                <button
                  className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
                  onClick={() => {
                    if (kycLevel === "done") {
                      onClose();
                      return;
                    }
                    navigate("/dashboard/kyc");
                    onClose();
                  }}
                >
                  {kycLevel === "done"
                    ? "Return Home"
                    : "Proceed to KYC verification"}
                </button>
              </div>
            </div>
          </motion.div>
        </Overlay>
      }
    </>
  );
};

export default KycRequired;
