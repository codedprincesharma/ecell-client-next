// src/components/FounderHeader.jsx

import { motion } from "framer-motion";

const FounderHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
        Meet the <span className="text-blue-500">Founders</span>
      </h1>
      <p className="text-white/60 text-lg max-w-2xl mx-auto">
        Visionaries who turned a late-night idea into HIT's entrepreneurial revolution.
      </p>
    </motion.div>
  );
};

export default FounderHeader;