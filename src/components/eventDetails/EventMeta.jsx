// src/components/EventMeta.jsx

import { Calendar, Clock, MapPin, BadgeDollarSign } from "lucide-react";

const EventMeta = ({ event, formatDate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/20 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <Calendar className="h-6 w-6 text-blue-500/80" />
        <div>
          
          <p className="font-bold text-lg">{formatDate(event.date)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Clock className="h-6 w-6 text-blue-500/80" />
        <div>
          
          <p className="font-bold text-lg">{event.time}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="h-6 w-6 text-blue-500/80" />
        <div>
          
          <p className="font-bold text-lg">{event.venue}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BadgeDollarSign className="h-6 w-6 text-blue-500/80" />
        <div>
          
          <p className="font-bold text-lg">Free</p>
        </div>
      </div>
    </div>
  );
};

export default EventMeta;