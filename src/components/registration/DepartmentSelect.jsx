// src/components/registration/DepartmentSelect.jsx
const departments = [
  "Electrical Engineering",
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication Engineering",
  "Artificial Intelligence and Machine Learning",
  "Data Science Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biotechnology",
  "Food Technology",
  "Applied Electronics & Instrumentation Engineering",
];

export default function DepartmentSelect({ register, errors }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-2">
        Department
      </label>
      <select
        {...register("department", { required: "Department is required" })}
        defaultValue=""
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
          focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
          backdrop-blur-sm transition-all duration-300 text-white appearance-none cursor-pointer"
      >
        <option value="" disabled className="text-white/30">
          Select Department
        </option>
        {departments.map((dept) => (
          <option key={dept} value={dept} className="text-white bg-black">
            {dept}
          </option>
        ))}
      </select>
      {errors.department && (
        <p className="mt-1 text-red-400 text-xs">{errors.department.message}</p>
      )}
    </div>
  );
}