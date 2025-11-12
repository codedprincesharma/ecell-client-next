// src/components/registration/RollAndYear.jsx
"use client";

export default function RollAndYear({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 🎓 Class Roll Number */}
      <div>
        <label
          htmlFor="classRollNo"
          className="block text-sm font-semibold text-white/80 mb-2 tracking-wide"
        >
          Class Roll Number
        </label>
        <input
          id="classRollNo"
          type="text"
          placeholder="24/EE/072"
          {...register("classRollNo", {
            required: "Roll number is required",
            pattern: {
              value: /^\d{2}\/[A-Z]{2,3}\/\d{3}$/,
              message: "Invalid roll number format (e.g., 24/EE/072)",
            },
          })}
          onInput={(e) => {
            // 🔠 Auto uppercase for better UX
            e.target.value = e.target.value.toUpperCase();
          }}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
            focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
            hover:border-blue-400/30 backdrop-blur-md transition-all duration-300 
            placeholder:text-white/30 text-white focus:ring-2 focus:ring-blue-500/30"
        />

        {errors.classRollNo && (
          <p className="mt-1 text-red-400 text-xs font-medium">
            {errors.classRollNo.message}
          </p>
        )}
      </div>

      {/* 📅 Academic Year */}
      <div>
        <label
          htmlFor="year"
          className="block text-sm font-semibold text-white/80 mb-2 tracking-wide"
        >
          Year
        </label>
        <div className="relative">
          <select
            id="year"
            {...register("year", { required: "Year is required" })}
            defaultValue=""
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
              focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
              hover:border-blue-400/30 backdrop-blur-md transition-all duration-300 
              text-white appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500/30"
          >
            <option value="" disabled className="text-white/40">
              Select Year
            </option>
            {["1st", "2nd", "3rd", "4th"].map((y) => (
              <option key={y} value={`${y} Year`} className="text-white bg-black">
                {y} Year
              </option>
            ))}
          </select>

          {/* custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="h-4 w-4 text-white/60"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {errors.year && (
          <p className="mt-1 text-red-400 text-xs font-medium">
            {errors.year.message}
          </p>
        )}
      </div>
    </div>
  );
}
