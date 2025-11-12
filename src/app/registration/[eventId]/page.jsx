// src/app/registration/[eventId]/page.jsx
'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import RegistrationHeader from "@/components/registration/RegistrationHeader";
import EventInfoCard from "@/components/registration/EventInfoCard";
import RegistrationForm from "@/components/registration/RegistrationForm";
import LoadingSpinner from "@/components/registration/LoadingSpinner";
import ErrorMessage from "@/components/registration/ErrorMessage";

export default function RegistrationPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!eventId) {
      setError("Event ID missing");
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        // ✅ fetch event details from event service, not register service
        const { data } = await axios.get(
          `http://localhost:3002/api/event/${eventId}`
        );
        setEvent(data.event || data);
      } catch (err) {
        setError(err.response?.data?.message || "Event not found");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <LoadingSpinner />;
  if (error || !event) return <ErrorMessage error={error || "Event not found"} />;

  return (
    <div className="min-h-screen bg-black text-white py-25 px-6">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <RegistrationHeader event={event} />
        <EventInfoCard event={event} />
        <RegistrationForm eventId={eventId} />
      </div>
    </div>
  );
}
