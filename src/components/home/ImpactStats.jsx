'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Active Members" },
  { value: 20, suffix: "+", label: "Events Annually" },
  { value: 5, suffix: "+", label: "Startups Launched" },
  { value: 20, suffix: "+", label: "Founder & CEO" },
];

const Counter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 60, damping: 15 });

  // State to hold display value
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    } else {
      count.set(0);
    }
  }, [isInView, value, count]);

  // Subscribe to spring changes
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      className="text-5xl md:text-6xl font-black text-blue-400 inline-block"
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default function ImpactStats() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Subtle Ambient Glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-black mb-16 text-white"
        >
          Our <span className="text-blue-500">Impact</span> in Numbers
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl p-8 text-center shadow-2xl 
                         hover:border-blue-500/30 hover:shadow-blue-500/10 
                         transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                <p className="mt-3 text-white/70 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}