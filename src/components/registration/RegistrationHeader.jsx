// src/components/registration/RegistrationHeader.jsx
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function RegistrationHeader({ event }) {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        Register for <span className="text-blue-500">Event</span>
      </h1>
      <div className="flex items-center justify-center gap-2 text-blue-500/80">
        <Calendar className="h-5 w-5" />
        <span className="font-medium text-lg">{formatDate(event.date)}</span>
      </div>
    </motion.div>
  );
}