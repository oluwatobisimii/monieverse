import React from "react";
import FlowNav from "../components/NavBar/FlowNav";
import KYCFrame from "../components/KYC/KYCFrame";
import { motion } from "framer-motion";

const KYCScreen = () => {
  return (
    <motion.section
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: "0.5" }}
      className="w-screen overflow-hidden"
    >
      <FlowNav />
      <KYCFrame />
    </motion.section>
  );
};

export default KYCScreen;
