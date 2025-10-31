// src/components/EventError.jsx

const EventError = ({ error }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-red-500 text-center p-8 bg-white/5 rounded-xl border border-white/10">
        {error}
      </div>
    </div>
  );
};

export default EventError;