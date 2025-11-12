// src/components/registration/RegistrationHeader.jsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function RegistrationHeader({ event }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      {/* Event title */}
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
        Registation Form
      </h1>

      

      {/* Optional tagline or event type */}
      {event.category && (
        <p className="mt-3 text-white/60 font-medium tracking-wide">
          {event.category}
        </p>
      )}
    </motion.div>
  );
}
