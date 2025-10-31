// src/components/idea/IdeaHeader.jsx
import { motion } from "framer-motion";

export default function IdeaHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        Submit Your <span className="text-blue-500">Idea</span>
      </h2>
      <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
        Share your vision. We’ll help you build it.
      </p>
    </motion.div>
  );
}