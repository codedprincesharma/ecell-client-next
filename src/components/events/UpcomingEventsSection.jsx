// src/components/UpcomingEventsSection.jsx

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, BadgeDollarSign } from "lucide-react";

const UpcomingEventsSection = ({ upcoming, formatDate }) => {
  return (
    <>
      {upcoming.length > 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
              Upcoming <span className="text-blue-500">Event</span>
            </h2>
            <div className="w-24 h-px bg-blue-500/30 mx-auto" />
          </div>

          {upcoming.slice(0, 1).map((event) => (
            <motion.article
              key={event._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-80 lg:h-full">
                  <img
                    src={event.banner}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-full text-xs font-medium uppercase tracking-wider text-blue-400">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-blue-500/80 mb-4">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        {formatDate(event.date)}
                      </span>
                    </div>

                    {/* Time & Venue */}
                    <div className="flex flex-wrap gap-6 text-sm text-white/60 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <BadgeDollarSign className="h-5 w-4" />
                        <span >
                          free
                        </span>
                      </div>
                    </div>




                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8 line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/event/${event._id}`}
                      className="inline-flex items-center gap-3 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 active:scale-98 transition-all duration-200 shadow-lg shadow-blue-500/20"
                    >
                      View Details
                      <ArrowRight className="h-5 w-5" />
                    </Link>



                    <div className="text-right">
                      <span className="block text-xs uppercase tracking-widest text-blue-500/60 font-medium">
                        Next Event
                      </span>
                      <span className="block text-2xl font-black text-blue-500">
                        Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>
      ) : (
        <div className="text-center py-20">
          <p className="text-white/50 text-lg">
            No upcoming events scheduled.
          </p>
        </div>
      )}
    </>
  );
};

export default UpcomingEventsSection;