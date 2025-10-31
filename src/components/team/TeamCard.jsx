// src/components/TeamCard.jsx

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const placeholderImg = "https://via.placeholder.com/150";

const TeamCard = ({ member }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500"
    >
      {/* Profile Image */}
      <div className="relative w-28 h-28 mx-auto mb-5 overflow-hidden rounded-full bg-white/5 border-2 border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
        <img
          src={member.img || placeholderImg}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors duration-300">
        {member.name || "Anonymous"}
      </h3>
      <p className="text-blue-500/80 text-sm mb-4 font-medium">
        {member.role || "Team Member"}
      </p>

      {/* LinkedIn */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      )}
    </motion.div>
  );
};

export default TeamCard;