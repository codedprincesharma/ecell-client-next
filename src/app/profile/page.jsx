"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, School, User, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function ECellProfile() {
  const [profile, setProfile] = useState(null);
  const [count, setCount] = useState(0);

  // ✅ Fetch profile from backend API
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("http://localhost:3000/api/auth/profile", {
          credentials: "include", // send cookie for auth
        });
        if (!res.ok) throw new Error("Failed to fetch profile");

        const data = await res.json();
        const user = data.user;

        setProfile({
          id: user.id,
          name: `${user.fullName.firstName} ${user.fullName.lastName}`,
          email: user.email,
          phone: user.phone || "Not Provided",
          avatar: user.picture,
          role: user.role,
          department: "Not Provided",
          eventsAttended: 0, // example count
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchProfile();
  }, []);

  // ✅ Animate Events Count
  useEffect(() => {
    if (!profile) return;
    const timer = setTimeout(() => {
      if (count < profile.eventsAttended) setCount((prev) => prev + 1);
    }, 80);
    return () => clearTimeout(timer);
  }, [count, profile]);

  // 🕐 Loading state
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="animate-pulse text-gray-400 text-lg">
          Loading your profile...
        </p>
      </div>
    );
  }

  // ✅ UI
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-blue-950/30 via-black/80 to-purple-950/30 border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Avatar + Name Section */}
              <div className="flex flex-col md:flex-row items-center gap-8 flex-1">
                {/* Avatar */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                  {profile.avatar ? (
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <User className="w-16 h-16 text-blue-400" />
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {profile.name}
                  </h1>
                  <p className="text-blue-300 font-medium mt-1 capitalize">
                    {profile.role}
                  </p>
                </div>
              </div>

              {/* Events Count Badge */}
              
            </div>
          </div>

          {/* Body Section */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: "Email", value: profile.email, color: "blue" },
                { icon: Phone, label: "Phone", value: profile.phone, color: "green" },
                { icon: School, label: "Department", value: profile.department, color: "purple" },
                { icon: User, label: "User ID", value: profile.id, color: "cyan" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br from-${item.color}-600/20 to-${item.color}-700/20 border border-${item.color}-500/30`}
                    >
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-semibold text-white mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
