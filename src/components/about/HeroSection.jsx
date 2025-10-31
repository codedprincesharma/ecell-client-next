// components/HeroSection.jsx

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-blue-500/10 backdrop-blur-lg border border-blue-500/30 rounded-full shadow-2xl">
            <Zap className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-blue-300">
              OFFICIAL E-CELL
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            E-Cell <span className="text-blue-500">HIT</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed font-light">
            <span className="text-blue-400">Igniting</span> entrepreneurial
            fire •<span className="text-blue-400"> Building</span> tomorrow's
            leaders •<span className="text-blue-400"> Transforming</span>{" "}
            ideas into reality
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12"
          >
            <ArrowRight className="h-8 w-8 text-blue-400 rotate-90 inline-block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;