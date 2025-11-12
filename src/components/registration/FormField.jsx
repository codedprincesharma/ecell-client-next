// src/components/registration/FormField.jsx
"use client";

export default function FormField({
  label,
  name,
  type = "text",
  register,
  errors,
  placeholder,
  required,
}) {
  return (
    <div className="relative">
      {/* Label */}
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-white/80 mb-2 tracking-wide"
      >
        {label}
      </label>

      {/* Input Field */}
      <input
        id={name}
        type={type}
        {...register(name, { required: required && `${label} is required` })}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
          focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
          hover:border-blue-400/30 
          backdrop-blur-md transition-all duration-300 placeholder:text-white/30 text-white
          focus:ring-2 focus:ring-blue-500/30"
      />

      {/* Error Message */}
      {errors[name] && (
        <p className="mt-1 text-red-400 text-xs font-medium">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
