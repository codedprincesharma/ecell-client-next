// src/components/EventHeader.jsx

import { motion } from "framer-motion";

const EventHeader = ({ event, isPast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl"
    >
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-4 group">
        {event.title}
        <span className="block w-32 h-px bg-blue-500/40 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </h1>

      <img
        src={event.banner}
        alt={event.title}
        className="w-full h-96 md:h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Status Tag */}
      <div className="absolute bottom-6 left-6">
        <span
          className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm border ${
            isPast
              ? "bg-white/10 border-blue-500/30 text-blue-400"
              : "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
          }`}
        >
          {isPast ? "Completed" : "Upcoming"}
        </span>
      </div>
    </motion.div>
  );
};

export default EventHeader;