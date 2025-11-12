// src/components/registration/EventInfoCard.jsx
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function EventInfoCard({ event }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 hover:border-blue-500/20 transition-colors duration-300"
    >
      <h2 className="text-2xl font-black mb-3 group">
        {event.title}
        <span className="block w-24 h-px bg-blue-500/40 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </h2>

      <div className="flex flex-wrap gap-6 text-sm text-white/70">
        {/* 📍 Location */}
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500/80" />
          <span>{event.location || "Venue not available"}</span>
        </div>

        {/* 📅 Date */}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-500/80" />
          <span>{event.date ? formatDate(event.date) : "Date TBA"}</span>
        </div>

        {/* ⏰ Time */}
        {event.time && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-500/80" />
            <span>{event.time}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
