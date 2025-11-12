// src/components/eventDetails/EventActions.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarCheck } from "lucide-react";

export default function EventActions({ id, isPast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
    >
      {/* ✅ Register Button (if event is upcoming) */}
      {!isPast && (
        <Link
          href={`/registration/${id}`}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-blue-400 hover:to-blue-500 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          <CalendarCheck className="h-6 w-6 group-hover:rotate-6 transition-transform duration-300" />
          <span className="tracking-wide">Register Now</span>
        </Link>
      )}

      {/* 🔙 Back Button */}
      <Link
        href="/event"
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-500 hover:text-blue-400 font-medium px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/30 transition-all duration-300"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back to Events</span>
      </Link>
    </motion.div>
  );
}
