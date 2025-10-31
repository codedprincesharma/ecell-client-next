// src/components/TeamHeader.jsx

import { motion } from "framer-motion";

const TeamHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
        E-Cell <span className="text-blue-500">Team</span>
      </h1>
      <p className="text-white/60 text-lg max-w-2xl mx-auto">
        Meet the passionate leaders driving entrepreneurship at HIT.
      </p>
    </motion.div>
  );
};

export default TeamHeader;