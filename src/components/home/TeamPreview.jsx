'use client';

import { motion } from "framer-motion";
import { Users2, ArrowRight } from "lucide-react";
import Link from "next/link"; // Next.js Link

const teamMembers = [
  {
    name: "Ishmit Anand",
    role: "Head",
    img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176851/Ishmit_Anand_HEAD_wz7eks.jpg",
    linkedin: "https://www.linkedin.com/in/ishmit-anand-2300ab24b/",
  },
  {
    name: "Shashank Vijay",
    role: "General Secretary",
    img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176894/Shashank_Vijay_GENERAL_SECRETARY_ewcwuu.jpg",
    linkedin: "https://www.linkedin.com/in/shashank-vijay-60a80a24b/",
  },
  {
    name: "Sakshi Sharma",
    role: "Event & Management Head",
    img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176895/Sakshi_Sharma_EVENT_MANAGEMENT_HEAD_d4op1c.jpg",
    linkedin: "https://www.linkedin.com/in/sakshi-sharma-04585824b/",
  },
];

export default function TeamPreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Subtle Ambient Blue Glow */}
      <div className="fixed inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Meet Our <span className="text-blue-500">Team</span>
          </h2>
          <p className="mt-3 text-lg text-white/70 font-light">
            The visionaries driving E-Cell HIT forward
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl overflow-hidden shadow-2xl 
                         hover:border-blue-500/30 hover:shadow-blue-500/10 
                         transition-all duration-500 cursor-pointer"
            >
              {/* Inner Glow on Hover */}
              <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative p-6 text-center">
                {/* Avatar */}
                <div className="relative mx-auto w-32 h-32 mb-5 overflow-hidden rounded-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover border-4 border-white/10 
                               group-hover:border-blue-500/40 group-hover:scale-110 
                               transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-blue-300 text-sm font-medium mb-4">
                  {member.role}
                </p>

                {/* LinkedIn Link */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium 
                           hover:text-blue-300 transition-colors"
                >
                  <Users2 size={16} />
                  Connect
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button → /team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 backdrop-blur-sm 
                       border border-blue-500/30 rounded-full text-blue-400 font-semibold
                       hover:bg-blue-500 hover:text-white hover:border-blue-500
                       transition-all duration-300 shadow-lg group"
          >
            View Full Team
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}