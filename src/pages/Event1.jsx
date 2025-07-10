import React, { useState } from "react";
import EventCalendar from "./EventCalendar";
import EventCard from "./EventCard";
import events from "../data/events";
import { useNavigate } from "react-router-dom";

// Group events by date (YYYY-MM-DD)
const eventsByDate = events.reduce((acc, event) => {
  if (!acc[event.date]) acc[event.date] = [];
  acc[event.date].push(event);
  return acc;
}, {});

export default function Event1() {
  const [selectedDate, setSelectedDate] = useState(null);
  // Show all events, not filtered by date
  // const events = selectedDate ? eventsByDate[selectedDate] || [] : [];
  const navigate = useNavigate();

  // Handler to navigate to event detail page
  const handleDateSelect = (dateStr) => {
    setSelectedDate(dateStr);
    if (eventsByDate[dateStr]) {
      navigate(`/events/${dateStr}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Left: Event cards grid */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {events.map((event, idx) => {
            // Format date as 'MMM DD, YYYY'
            const dateObj = new Date(event.date);
            const options = { year: 'numeric', month: 'short', day: '2-digit' };
            const formattedDate = dateObj.toLocaleDateString('en-US', options);
            return <EventCard key={idx} event={event} date={formattedDate} />;
          })}
        </div>
      </div>
      {/* Right: Calendar */}
      <div className="w-full md:w-[600px] flex flex-col items-center p-8">
        <EventCalendar
          year={2025}
          month={6}
          eventsByDate={eventsByDate}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>
    </div>
  );
}
