// components/MissionVisionSection.jsx

import { motion } from "framer-motion";

const MissionVisionSection = ({ missionVisionData }) => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        {missionVisionData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <h3 className="text-4xl font-black">{item.title}</h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MissionVisionSection;