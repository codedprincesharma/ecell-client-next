// src/components/EventDescription.jsx

const EventDescription = ({ description }) => {
  return (
    <div className="max-w-3xl mx-auto text-start mb-16 px-4 md:px-0">
      <p className="whitespace-pre-line text-lg md:text-xl leading-relaxed text-white/80 font-light tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default EventDescription;  