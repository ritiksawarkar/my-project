import React, { useState } from "react";
import EventCalendar from "./EventCalendar";
import EventCard from "./EventCard";

// Mock event data by date (YYYY-MM-DD)
const eventsByDate = {
  "2025-07-10": [
    {
      title: "Hackathon: CodeSprint 2025",
      description: "A 24-hour coding marathon where teams tackle real-world problems. Open to all students. Prizes for top performers!",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=600",
    },
  ],
  "2025-07-14": [
    {
      title: "Summer Coding Jam",
      description: "Celebrate with code! Fun challenges and prizes for creative solutions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=600",
    },
  ],
  "2025-07-21": [
    {
      title: "AI in Everyday Life",
      description: "Industry expert shares insights on how artificial intelligence is transforming daily experiences and future careers.",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=compress&w=600",
    },
  ],
};

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
