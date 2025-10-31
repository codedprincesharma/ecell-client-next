// src/components/registration/RollAndYear.jsx
export default function RollAndYear({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Class Roll No
        </label>
        <input
          type="text"
          {...register("classRollNo", { required: "Roll number is required" })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
            focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
            backdrop-blur-sm transition-all duration-300 placeholder:text-white/30 text-white"
          placeholder="24/EE/071"
        />
        {errors.classRollNo && (
          <p className="mt-1 text-red-400 text-xs">{errors.classRollNo.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Year
        </label>
        <select
          {...register("year", { required: "Year is required" })}
          defaultValue=""
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
            focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
            backdrop-blur-sm transition-all duration-300 text-white appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-white/30">
            Select Year
          </option>
          {["First Year", "Second Year", "Third Year", "Fourth Year"].map((y) => (
            <option key={y} value={y} className="text-white bg-black">
              {y}
            </option>
          ))}
        </select>
        {errors.year && (
          <p className="mt-1 text-red-400 text-xs">{errors.year.message}</p>
        )}
      </div>
    </div>
  );
}