// eslint-disable-next-line
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Overlay = ({ isOpen, onClose, children }) => {
  const popupRef = useRef(null);

  // React.useEffect(() => {
  //   isOpen
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "scroll");
  // }, [isOpen]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   const handleEscapeKey = (event) => {
  //     if (event.keyCode === 27) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEscapeKey);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEscapeKey);
  //   };
  //   // eslint-disable-next-line
  // }, []);

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
        >
          <div className="w-full md:max-w-[542px] bg-gray-0 rounded-3xl" ref={popupRef}>
            {children}
            </div>
        </motion.div>
      )}
    </>
  );
};

export default Overlay;
