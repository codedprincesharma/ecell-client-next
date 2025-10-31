// src/components/registration/FormField.jsx
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
    <div>
      <label className="block text-sm font-medium text-white/80 mb-2">
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required: required && `${label} is required` })}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
          focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
          backdrop-blur-sm transition-all duration-300 placeholder:text-white/30 text-white"
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 text-red-400 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
}