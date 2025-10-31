// components/CoreValuesSection.jsx

import { motion } from "framer-motion";

const CoreValuesSection = ({ values }) => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-black text-center mb-20"
        >
          Core <span className="text-blue-500">Values</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  rotate: idx % 2 === 0 ? 3 : -3,
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30"
                  >
                    <Icon className="h-12 w-12 text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;