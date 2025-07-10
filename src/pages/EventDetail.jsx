import React from "react";
import { useParams, Link } from "react-router-dom";
import events from "../data/events";
import EventCard from "./EventCard";

export default function EventDetail() {
  const { date } = useParams();
  const eventsForDate = events.filter(e => e.date === date);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-fadein">
      <Link to="/events" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Events</Link>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Events on {date}</h1>
      {eventsForDate.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400 border border-dashed border-blue-200">
          No events found for this date.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {eventsForDate.map((event, idx) => (
            <EventCard key={idx} event={event} date={event.date} />
          ))}
        </div>
      )}
    </div>
  );
} 