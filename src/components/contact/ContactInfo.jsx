// src/components/contact/ContactInfo.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6 text-white/80"
    >
      <a
        href="mailto:ecell@hit.edu.in"
        className="flex items-center gap-4 hover:text-blue-400 transition-colors group"
      >
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30 group-hover:border-blue-500/50 transition-colors">
          <Mail className="h-6 w-6 text-blue-400" />
        </div>
        <span className="font-medium">ecell@hit.edu.in</span>
      </a>

      <a
        href="tel:+918102685851"
        className="flex items-center gap-4 hover:text-blue-400 transition-colors group"
      >
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30 group-hover:border-blue-500/50 transition-colors">
          <Phone className="h-6 w-6 text-blue-400" />
        </div>
        <span className="font-medium">+91 81026 85851</span>
      </a>

      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <MapPin className="h-6 w-6 text-blue-400" />
        </div>
        <span className="font-medium">
          Haldia Institute of Technology<br />
          ICARE Complex, Hatiberia, Haldia<br />
          West Bengal 721657
        </span>
      </div>
    </motion.div>
  );
}