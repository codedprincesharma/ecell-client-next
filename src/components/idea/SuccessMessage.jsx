// src/components/idea/SuccessMessage.jsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mb-8 p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl backdrop-blur-sm flex items-center justify-center gap-3 text-blue-400"
    >
      <CheckCircle className="h-6 w-6" />
      <span className="font-medium">Idea submitted successfully!</span>
    </motion.div>
  );
}