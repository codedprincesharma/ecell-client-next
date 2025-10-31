// components/WhoWeAreSection.jsx

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl hover:border-blue-500/30 transition-all"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-black">
              Who <span className="text-blue-500">We Are</span>
            </h2>
            <div className="space-y-4 text-lg text-white/70">
              <p>
                The{" "}
                <span className="font-bold text-white">
                  official Entrepreneurship Cell
                </span>{" "}
                of
                <span className="font-bold text-blue-400">
                  {" "}
                  Haldia Institute of Technology
                </span>
                .
              </p>
              <p>
                In active collaboration with
                <span className="font-bold text-blue-400">
                  {" "}
                  E-Cell IIT Bombay
                </span>{" "}
                and
                <span className="font-bold text-blue-400">
                  {" "}
                  E-Cell NIT Hamirpur
                </span>
                .
              </p>
            </div>
            <motion.button
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-3 text-blue-400 font-semibold"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full flex items-center justify-center border border-blue-500/30 backdrop-blur-sm"
            >
              <Sparkles className="h-24 w-24 text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;