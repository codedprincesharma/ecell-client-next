'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";

import EventLoading from "@/components/events/EventLoading";
import EventError from "@/components/events/EventError";
import EventHeader from "@/components/eventDetails/EventHeader";
import EventMeta from "@/components/eventDetails/EventMeta";
import EventDescription from "@/components/eventDetails/EventDescription";
import EventActions from "@/components/eventDetails/EventActions";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/events/${id}`
        );
        setEvent(res.data.event);
      } catch (err) {
        console.error(err);
        setError("Event not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const isPast = event && new Date(event.date) < new Date();

  if (loading) return <EventLoading />;
  if (error || !event) return <EventError error={error || "Event not found"} />;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Subtle Blue Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 py-24 max-w-6xl">
        <EventHeader event={event} isPast={isPast} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <EventMeta event={event} formatDate={formatDate} />
          <EventDescription description={event.description} />
          <EventActions id={id} isPast={isPast} />
        </motion.div>
      </div>
    </div>
  );
}