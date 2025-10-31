// src/components/EventList.jsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import EventLoading from "@/components/events/EventLoading";
import EventError from "@/components/events/EventError";
import UpcomingEventsSection from "@/components/events/UpcomingEventsSection";
import PastEventsSection from "@/components/events/PastEventsSection";

const Events = () => {
  const [events, setEvents] = useState({ upcoming: [], past: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/events");
        const allEvents = res.data.events || [];

        const now = new Date();
        const upcoming = allEvents
          .filter((e) => new Date(e.date) > now)
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        const past = allEvents
          .filter((e) => new Date(e.date) <= now)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setEvents({ upcoming, past });
      } catch (err) {
        setError("Failed to load events.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <EventLoading />;
  }

  if (error) {
    return <EventError error={error} />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Subtle Blue Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 py-24 max-w-7xl">
        <UpcomingEventsSection
          upcoming={events.upcoming}
          formatDate={formatDate}
        />
        <PastEventsSection past={events.past} formatDate={formatDate} />
        {events.past.length === 0 && events.upcoming.length === 0 && (
          <div className="text-center py-32">
            <p className="text-blue-500/40 text-lg">No events to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
