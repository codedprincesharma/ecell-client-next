"use client"

import { useState } from "react";
import { teamData } from "../../data/team"; 

import TeamHeader from "@/components/team/TeamHeader";
import TeamTabs from "@/components/team/TeamTabs";
import TeamGrid from "@/components/team/TeamGrid";

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(Object.keys(teamData)[0]);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <TeamHeader />
        <TeamTabs
          teams={Object.keys(teamData)}
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />
        <TeamGrid
          members={teamData[selectedTeam]}
          selectedTeam={selectedTeam}
        />
      </div>
    </div>
  );
};

export default Team;