// src/components/EventDescription.jsx
"use client";

import { motion } from "framer-motion";

const EventDescription = ({ description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto mb-20 px-5 md:px-0"
    >
      {/* Decorative heading line */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-[2px] bg-blue-500/60 rounded-full" />
        <h2 className="text-2xl font-bold text-white/90 tracking-tight">
          About the Event
        </h2>
      </div>

      {/* Description */}
      <p className="whitespace-pre-line text-lg md:text-xl leading-relaxed text-white/80 font-light tracking-wide bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-400/30 transition-all duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export default EventDescription;
