import React from "react";
import { motion } from "framer-motion";
const Overlay = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isOpen]);

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
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Overlay;
