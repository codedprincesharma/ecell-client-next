// src/components/registration/ErrorMessage.jsx
import { motion } from "framer-motion";

export default function ErrorMessage({ error }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-8 p-5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center"
    >
      {error}
    </motion.div>
  );
}