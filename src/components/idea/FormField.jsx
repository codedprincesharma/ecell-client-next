// src/components/idea/FormField.jsx
import { forwardRef } from "react";
import { motion } from "framer-motion";

const FormField = forwardRef(
  ({ label, name, type = "text", tag = "input", rows, ...props }, ref) => {
    return (
      <motion.div ref={ref} className="group">
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
        {tag === "textarea" ? (
          <textarea
            name={name}
            rows={rows}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl 
                     focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
                     backdrop-blur-sm transition-all duration-300 resize-none
                     placeholder:text-white/30 text-white"
            {...props}
          />
        ) : (
          <input
            type={type}
            name={name}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl 
                     focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 
                     backdrop-blur-sm transition-all duration-300 
                     placeholder:text-white/30 text-white"
            {...props}
          />
        )}
      </motion.div>
    );
  }
);

FormField.displayName = "FormField";
export default FormField;