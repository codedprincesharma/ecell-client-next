// src/components/idea/SubmitButton.jsx
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const SubmitButton = forwardRef(({ loading }, ref) => {
  return (
    <motion.div ref={ref} className="pt-4">
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 bg-blue-500 text-white font-bold rounded-xl
                 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20
                 hover:bg-blue-400 active:scale-98
                 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          "Submitting..."
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Idea
          </>
        )}
      </button>
    </motion.div>
  );
});

SubmitButton.displayName = "SubmitButton";
export default SubmitButton;