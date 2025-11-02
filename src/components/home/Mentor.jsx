'use client';

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Dr. Sandip Kr. Ojha",
    title: "Electrical Engineering",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEyYi0Q4gzf4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667653362189?e=1763596800&v=beta&t=xVLjZ30OeVQXmnySKQMns8RoKfw4h1uHTksX321RWJk",
    linkedin:
      "https://www.linkedin.com/in/dr-sandip-ojha-2b4b3715?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Mr. Debadatta Ghosh",
    title: "AEI Engineering",
    image: "https://via.placeholder.com/150",
    linkedin:
      "https://www.linkedin.com/in/debadatta-ghosh-76a8519b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Mr. Tilak Raj Maiti",
    title: "Biotechnology Engineering",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFGuEL8_jIFjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723137573845?e=1763596800&v=beta&t=L82YhPyBx3Ado1mk6c47KDmDW_ikskpFXt0u04cQs8s",
    linkedin:
      "https://www.linkedin.com/in/dr-tilak-raj-maity-44971089?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Mentor() {
  return (
    <section className="py-24 px-6 overflow-hidden bg-black">
      {/* Subtle Ambient Blue Glow */}
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
          Meet Our <span className="text-blue-500">Mentors</span>
        </motion.h2>

        {/* Mentor Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl p-6 shadow-2xl 
                         hover:border-blue-500/30 hover:shadow-blue-500/10 
                         transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Inner Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 text-center">
                {/* Profile Image */}
                <div className="relative mx-auto w-32 h-32 mb-5 overflow-hidden rounded-full">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover border-4 border-white/10 
                               group-hover:border-blue-500/40 group-hover:scale-110 
                               transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Name & Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
                  {mentor.name}
                </h3>
                <p className="text-blue-300 text-sm font-medium mb-4">
                  {mentor.title}
                </p>

                {/* LinkedIn Button */}
                <motion.a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-12 h-12 
                           bg-blue-500/10 rounded-full border border-blue-500/30 
                           text-blue-400 hover:bg-blue-500 hover:text-white 
                           transition-all duration-300 shadow-lg"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}