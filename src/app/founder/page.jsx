// src/components/FounderSection.jsx
"use client"
import { founders } from "../../data/founders";

import FounderHeader from "@/components/founder/FounderHeader";
import FounderGrid from "@/components/founder/FounderGrid";

const FounderSection = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FounderHeader />
        <FounderGrid founders={founders} />
      </div>
    </div>
  );
};

export default FounderSection;