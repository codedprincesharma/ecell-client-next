// src/components/contact/ContactMap.jsx
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/20 transition-colors duration-300"
    >
      <div className="aspect-video flex items-center justify-center">
        <p className="text-white/50 font-medium">Interactive Map Placeholder</p>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-500 text-white font-bold rounded-full text-sm shadow-lg shadow-blue-500/20">
        HIT Campus
      </div>
    </motion.div>
  );
}