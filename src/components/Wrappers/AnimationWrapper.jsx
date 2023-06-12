import React from "react";

import { motion } from "framer-motion";

const AnimationWrapper = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default AnimationWrapper;
