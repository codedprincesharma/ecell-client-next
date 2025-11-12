// src/components/EventHeader.jsx
"use client";

import { motion } from "framer-motion";

const EventHeader = ({ event, isPast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl overflow-hidden mb-20 shadow-xl border border-white/10 bg-white/5 backdrop-blur-md"
    >
      {/* 🖼️ Banner Image */}
      <div className="relative">
        <img
          src={event.coverImage || event.banner}
          alt={event.title}
          className="w-full h-96 md:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* 🏷️ Status Tag */}
        <div className="absolute bottom-6 left-6">
          <span
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md border ${
              isPast
                ? "bg-white/10 border-blue-500/30 text-blue-400"
                : "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
            }`}
          >
            {isPast ? "Completed" : "Upcoming"}
          </span>
        </div>
      </div>

      {/* 🧠 Event Title */}
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg"
        >
          {event.title}
        </motion.h1>

        {/* Underline */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="block h-[3px] bg-blue-500/60 rounded-full mt-4"
        />
      </div>
    </motion.div>
  );
};

export default EventHeader;
