import React from "react";
import logo from "../../assets/logo/logo-lg.svg";
import top from "../../assets/receipt/Group 27.svg";
import bottom from "../../assets/receipt/Group 30.svg";
import { motion } from "framer-motion";

const Receipt = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className="appOverlay h-screen w-screen fixed top-0 left-0 p-4 flex center z-[999]"
          onClick={() => {
            onClose();
          }}
        >
          <page
            size="A4"
            className="p-10 bg-gray-0 aspect-[1/1.414] w-[595px] font-inter relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <img src={logo} alt="" className="w-[115px]" />
                <p className="text-primary-600 text-xs font-medium font-inter">
                  www.monieverse.com
                </p>
              </div>
              <div className="h-10"></div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-[10px]">Transfer to</p>
                  <p className="text-gray-600 text-[10px]">
                    Dennison Soroptuchi Nwachu
                  </p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-gray-600 text-d-xs font-semibold font-clashGrotesk">
                    $150,220
                  </p>
                  <p className="text-gray-400 text-[10px]">USD</p>
                </div>
              </div>
              <div className="h-[25px]"></div>
              <div>
                <div className="flex items-center">
                  <div className="text-center text-gray-400 text-[10px] font-medium uppercase leading-[18px] tracking-wide">
                    transfer details
                  </div>
                  <div className="flex-1 w-full h-[1px] bg-gray-100" />
                </div>
                <div className="h-4" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Transfer Created
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      April 19, 2023. 12:38:23 WAT
                    </div>
                  </div>
                  <div className="w-[136px]"></div>

                  <div>
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Funded
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      April 19, 2023. 12:38:23 WAT
                    </div>
                  </div>
                </div>
                <div className="h-6" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Paid Out
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      April 19, 2023.
                    </div>
                  </div>
                  <div className="w-[136px]"></div>

                  <div>
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Funds Available
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      April 30, 2023. (Could be earlier)
                    </div>
                  </div>
                </div>
                <div className="h-6" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Reference
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      #2324238023
                    </div>
                  </div>
                  <div className="w-[136px]"></div>
                </div>
              </div>
              <div className="h-10" />
              <div>
                <div className="flex items-center">
                  <div className="text-center text-gray-400 text-[10px] font-medium uppercase leading-[18px] tracking-wide">
                    your details
                  </div>
                  <div className="flex-1 w-full h-[1px] bg-gray-100" />
                </div>
                <div className="h-4" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Name
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      Martha Soroptuchi
                    </div>
                  </div>
                  <div className="w-[136px]"></div>

                  <div>
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Address
                    </p>
                    <p className=" text-gray-500 text-[10px] w-[120px] ">
                      234 Palms Spring Avn Boulevard, 343433 LA, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-10" />
              <div>
                <div className="flex items-center">
                  <div className="text-center text-gray-400 text-[10px] font-medium uppercase leading-[18px] tracking-wide">
                    transfer overview
                  </div>
                  <div className="flex-1 w-full h-[1px] bg-gray-100" />
                </div>
                <div className="h-4" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Recipient
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      Dennison Soroptuchi Nwachu
                    </div>
                  </div>
                  <div className="w-[136px]"></div>

                  <div>
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Amount Received
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      150,220.00 USD
                    </div>
                  </div>
                </div>
                <div className="h-6" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Transfer Amount
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      150,234.52 USD
                    </div>
                  </div>
                  <div className="w-[136px]"></div>

                  <div>
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Fee
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      <p>Swift 6.00 USD</p>
                      <p>Monieverse 8.52 USD</p>
                      <div className="h-2"></div>
                      <p>Total fees (included) 14.52 USD</p>
                    </div>
                  </div>
                </div>
                <div className="h-6" />
                <div className="flex ">
                  <div className="w-1/4">
                    <p className="text-gray-600 text-[10px] font-medium ">
                      Exchange Rate
                    </p>
                    <div className=" text-gray-500 text-[10px] ">
                      1.00 USD = 1.00 USD
                    </div>
                  </div>
                  <div className="w-[136px]"></div>
                </div>
              </div>
              <div className="h-10"></div>
              <div className="w-[496.33px] text-gray-400 text-[8px] font-normal leading-[14px] tracking-tight">
                Monieverse Limited is registered in Nigeria and is authorised by
                the Central Bank of Nigeria under reference 80023243. Call +234
                (0) 893 7834 232 or mail help@monieverse.com
              </div>
            </div>
            <div className="absolute top-0 left-0 z-0 monie-gradient w-[595px] h-[141px]"></div>
            <div className="absolute top-0 -right-10 z-0 ">
              <img src={top} alt="" />
            </div>
            <div className="absolute bottom-0 -right-10 z-0 ">
              <img src={bottom} alt="" />
            </div>
          </page>
        </motion.div>
      )}
    </>
  );
};

export default Receipt;
