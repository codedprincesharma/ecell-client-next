// components/TimelineSection.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimelineSection = ({ timelineSteps }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl md:text-5xl font-black mb-20 tracking-tight"
        >
          Building of <span className="text-blue-500">E-Cell</span>
        </motion.h2>

        <div ref={timelineRef} className="relative">
          {/* Central Line (Background) */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-white/10 h-full rounded-full" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/30"
          />

          {/* Timeline Steps */}
          {timelineSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for ultra-smooth
                }}
                className={`relative flex md:items-center items-start mb-24 md:mb-32 ${
                  isLeft ? "md:justify-start justify-start" : "md:justify-end justify-start"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full 
                         border-4 border-black z-20"
                >
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full pl-12 md:pl-0 md:w-5/12 ${
                    isLeft ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 
                            hover:border-blue-500/40 hover:bg-white/8 
                            transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30"
                        >
                          <Icon className="h-6 w-6 text-blue-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm text-blue-300 font-medium">
                            {step.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-white/70 leading-relaxed tracking-wide">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="mt-28 text-center text-xl md:text-2xl italic text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          <span className="block mb-3 text-3xl text-blue-400">“</span>
          What began as a late-night whisper became the driving force of HIT’s
          startup culture.
          <span className="block mt-3 text-3xl text-blue-400">”</span>
          <footer className="block mt-6 text-lg text-blue-400 font-bold tracking-wider">
            — E-Cell Legacy
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default TimelineSection;