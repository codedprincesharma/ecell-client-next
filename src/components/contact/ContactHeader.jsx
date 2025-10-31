// src/components/contact/ContactHeader.jsx
import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-5xl md:text-6xl font-black tracking-tight group">
        Get in <span className="text-blue-500">Touch</span>
        <span className="block w-40 h-px bg-blue-500/40 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </h2>
      <p className="text-white/70 text-lg leading-relaxed max-w-lg">
        We foster entrepreneurial spirit at HIT. Connect with us to collaborate, innovate, or seek guidance on your startup journey.
      </p>
    </motion.div>
  );
}