"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, School, User, Trophy,  Edit3 } from "lucide-react";
import { motion } from "framer-motion";

export default function ECellProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@college.edu",
    phone: "+91 98765 43210",
    department: "Computer Science & Engineering",
    rollNumber: "24/EE/72",
    eventsAttended: 12,
    avatar: null,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < profile.eventsAttended) {
        setCount(count + 1);
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [count, profile.eventsAttended]);

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Send updated profile to backend API
    console.log("Saving profile:", profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original (or fetch from API)
  };

  return (
    <div className="min-h-screen bg-black  py-25 px-4">
      <div >
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute  rounded-3xl blur-2xl opacity-20" />

          <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-950/30 via-black/80 to-purple-950/30 border-b border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="text-4xl md:text-5xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-400"
                      />
                    ) : (
                      <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {profile.name}
                      </h1>
                    )}
                    
                  </div>
                </div>

                {/* Events Badge */}
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-blue-500/30 shadow-md">
                  <Trophy className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                  <p className="text-sm text-blue-200 text-center">Events Attended</p>
                  <p className="text-3xl font-bold text-white text-center">{count}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Mail, label: "Email", value: profile.email, field: "email", color: "blue" },
                  { icon: Phone, label: "Phone", value: profile.phone, field: "phone", color: "green" },
                  { icon: School, label: "Department", value: profile.department, field: "department", color: "purple" },
                  { icon: User, label: "Roll Number", value: profile.rollNumber, field: "rollNumber", color: "cyan" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-${item.color}-600/20 to-${item.color}-700/20 border border-${item.color}-500/30`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{item.label}</p>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profile[item.field]}
                            onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                            className="font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-2 py-1 mt-1 w-full focus:outline-none focus:border-blue-400"
                          />
                        ) : (
                          <p className="font-semibold text-white mt-1">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Event Summary */}
              

              {/* Action Buttons */}
              <div className="mt-8 flex justify-end gap-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-gray-300 font-medium rounded-xl border border-white/20 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-200 flex items-center gap-2"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition-all duration-200 flex items-center gap-2"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}