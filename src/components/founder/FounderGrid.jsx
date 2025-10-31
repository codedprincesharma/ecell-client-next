// src/components/FounderGrid.jsx

import { motion } from "framer-motion";

import FounderCard from "./FounderCard";

const FounderGrid = ({ founders }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {founders.map((founder, index) => (
        <FounderCard key={index} founder={founder} />
      ))}
    </motion.div>
  );
};

export default FounderGrid;
