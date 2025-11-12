// src/components/EventMeta.jsx
"use client";

import { Calendar, Clock, MapPin, BadgeDollarSign } from "lucide-react";

const EventMeta = ({ event, formatDate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
      {/* 📅 Date */}
      <div className="flex items-center gap-3 group">
        <Calendar className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <p className="text-sm text-white/60 uppercase tracking-wider">Date</p>
          <p className="font-semibold text-lg text-white">
            {formatDate(event.date)}
          </p>
        </div>
      </div>

      {/* ⏰ Time */}
      <div className="flex items-center gap-3 group">
        <Clock className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <p className="text-sm text-white/60 uppercase tracking-wider">Time</p>
          <p className="font-semibold text-lg text-white">{event.time}</p>
        </div>
      </div>

      {/* 📍 Location */}
      <div className="flex items-center gap-3 group">
        <MapPin className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <p className="text-sm text-white/60 uppercase tracking-wider">Venue</p>
          <p className="font-semibold text-lg text-white">
            {event.location || event.venue}
          </p>
        </div>
      </div>

      {/* 💰 Price */}
      <div className="flex items-center gap-3 group">
        <BadgeDollarSign className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <p className="text-sm text-white/60 uppercase tracking-wider">Entry</p>
          <p className="font-semibold text-lg text-white">Free</p>
        </div>
      </div>
    </div>
  );
};

export default EventMeta;
