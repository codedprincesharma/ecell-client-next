// components/ImpactStatsSection.jsx

import { motion } from "framer-motion";

const ImpactStatsSection = ({ stats }) => {
  return (
    <section className="py-32 px-6 bg-white/5 backdrop-blur-xl">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-black text-center mb-20"
        >
          Our <span className="text-blue-500">Impact</span>
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-24 h-24 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30"
                >
                  <Icon className="h-12 w-12 text-blue-400" />
                </motion.div>
                <motion.div className="text-5xl md:text-6xl font-black text-blue-400 mb-3">
                  {stat.number}
                </motion.div>
                <div className="text-white/60 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;