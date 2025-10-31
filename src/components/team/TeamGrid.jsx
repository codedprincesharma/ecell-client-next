// src/components/TeamGrid.jsx

import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

import TeamCard from "./TeamCard";

const TeamGrid = ({ members, selectedTeam }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTeam}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {members?.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <Users className="h-16 w-16 text-blue-500/30 mx-auto mb-4" />
          <p className="text-white/50 text-lg">No members in this team yet.</p>
        </motion.div>
      )}
    </>
  );
};

export default TeamGrid;