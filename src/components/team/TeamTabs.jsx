// src/components/TeamTabs.jsx

import { motion } from "framer-motion";

const TeamTabs = ({ teams, selectedTeam, onSelectTeam }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {teams.map((team) => (
        <motion.button
          key={team}
          onClick={() => onSelectTeam(team)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-3 cursor-pointer rounded-xl font-medium text-sm transition-all duration-300 ${
            selectedTeam === team
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500"
          }`}
        >
          {team}
        </motion.button>
      ))}
    </div>
  );
};

export default TeamTabs;