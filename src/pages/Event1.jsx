import React, { useState } from "react";
import EventCalendar from "./EventCalendar";
import EventCard from "./EventCard";
import events from "../data/events";

// Group events by date (YYYY-MM-DD)
const eventsByDate = events.reduce((acc, event) => {
  if (!acc[event.date]) acc[event.date] = [];
  acc[event.date].push(event);
  return acc;
}, {});

export default function Event1() {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = selectedDate ? eventsByDate[selectedDate] || [] : [];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Left: Event cards */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-center p-8">
        {selectedDate ? (
          events.length > 0 ? (
            events.map((event, idx) => {
              // Format date as 'MMM DD, YYYY'
              const dateObj = new Date(selectedDate);
              const options = { year: 'numeric', month: 'short', day: '2-digit' };
              const formattedDate = dateObj.toLocaleDateString('en-US', options);
              return <EventCard key={idx} event={event} date={formattedDate} />;
            })
          ) : (
            <div className="bg-white/80 rounded-xl shadow p-8 w-80 text-center text-gray-400 border border-dashed border-blue-200">
              No events for this date.
            </div>
          )
        ) : (
          <div className="bg-white/80 rounded-xl shadow p-8 w-80 text-center text-gray-400 border border-dashed border-blue-200">
            Select a date from the calendar to view events.
          </div>
        )}
      </div>
      {/* Right: Calendar */}
      <div className="w-full md:w-[600px] flex flex-col items-center p-8">
        <EventCalendar
          year={2025}
          month={6}
          eventsByDate={eventsByDate}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
      </div>
    </div>
  );
}
