// src/components/PastEventsSection.jsx

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const PastEventsSection = ({ past, formatDate }) => {
  return (
    <>
      {past.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
              Past <span className="text-blue-500">Events</span>
            </h2>
            <div className="w-24 h-px bg-blue-500/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past.map((event, index) => (
              <motion.article
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.banner}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  {/* Date */}
                  <p className="text-blue-500/80 text-sm mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(event.date)}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-black mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-5 line-clamp-2">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/event/${event._id}`}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
};

export default PastEventsSection;