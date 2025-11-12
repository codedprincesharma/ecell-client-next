// src/components/registration/DepartmentSelect.jsx
"use client";

const departments = [
  "Computer Science and Engineering (CSE)",
  "Computer Science and Engineering (AI & ML)",
  "Computer Science and Engineering (Data Science)",
  "Information Technology (IT)",
  "Electronics and Communication Engineering (ECE)",
  "Electrical Engineering (EE)",
  "Mechanical Engineering (ME)",
  "Civil Engineering (CE)",
  "Chemical Engineering (CHE)",
  "Biotechnology (BT)",
  "Food Technology (FT)",
  "Agriculture Engineering (AG)",
  "Applied Electronics and Instrumentation Engineering (AEIE)",
];

export default function DepartmentSelect({ register, errors }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-white/80 mb-2 tracking-wide">
        Department
      </label>
      <div className="relative">
        <select
          {...register("department", { required: "Department is required" })}
          defaultValue=""
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
            focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
            backdrop-blur-md transition-all duration-300 text-white 
            appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-white/40">
            Select Department
          </option>
          {departments.map((dept) => (
            <option key={dept} value={dept} className="text-white bg-black">
              {dept}
            </option>
          ))}
        </select>

        {/* custom arrow icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            className="h-4 w-4 text-white/60"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {errors.department && (
        <p className="mt-1 text-red-400 text-xs font-medium">
          {errors.department.message}
        </p>
      )}
    </div>
  );
}
