import { motion } from "framer-motion";
import { WarningOctagon, X } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Toaster = ({ error, onClose }) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  useEffect(() => {
    if (error === "") {
      setVisible(false);
    } else setVisible(true);
  }, [error]);

  return (
    <>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" absolute left-1/2 -translate-x-1/2 
    shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] p-4 w-[calc(100%-32px)] md:w-[546px] bg-gray-0 top-14 z-20 rounded-lg overflow-hidden flex justify-between
    "
        >
          <div className="absolute w-[20] h-0.5 bg-primary-300 bottom-0 left-0"></div>
          <div className="flex items-center gap-2">
            <WarningOctagon
              size={20}
              weight="duotone"
              className="text-error-500"
            />
            <p className="text-gray-500 text-xs md:text-sm font-medium">
              {error}
            </p>
          </div>
          <div
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-25"
            onClick={handleClose}
          >
            <X />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Toaster;
