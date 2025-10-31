// src/components/eventDetails/EventActions.jsx
import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";

export default function EventActions({ id, isPast }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      {!isPast && (
        <Link
          href={`/registration/${id}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-400 active:scale-98 transition-all duration-200 text-lg shadow-lg shadow-blue-500/20"
        >
          <CalendarCheck className="h-6 w-6" />
          Register Now
        </Link>
      )}

      <Link
        href="/event"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Events
      </Link>
    </div>
  );
}