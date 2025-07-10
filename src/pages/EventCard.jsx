import React from "react";

// Helper to get badge color class
const badgeColor = (type) => {
  switch (type) {
    case "Hackathon": return "bg-pink-100 text-pink-700";
    case "Workshop": return "bg-green-100 text-green-700";
    case "Seminar": return "bg-yellow-100 text-yellow-700";
    case "Guest Lecture": return "bg-blue-100 text-blue-700";
    case "Coding Contest": return "bg-purple-100 text-purple-700";
    case "Tech Talk": return "bg-indigo-100 text-indigo-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export default function EventCard({ event, date }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-0 w-full max-w-md md:w-[500px] border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200 overflow-hidden relative group">
      {/* Image section */}
      <div className="md:w-1/3 w-full h-40 md:h-auto flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl group-hover:brightness-90 transition"
        />
      </div>
      {/* Content section */}
      <div className="flex-1 flex flex-col justify-between p-6 gap-2">
        {/* Date badge */}
        {date && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="ml-1 font-medium">{date}</span>
          </span>
        )}
        {/* Event badge */}
        {event.badge && (
          <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${badgeColor(event.badge)} font-sans tracking-wide`}> {/* consistent font */}
            {event.badge}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-1 text-blue-700 leading-tight font-sans">{event.title}</h2>
        <p className="text-gray-600 mb-2 text-base font-normal font-sans leading-snug">{event.description}</p>
        {/* Location */}
        {event.location && (
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1 font-sans">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" /></svg>
            <span className="ml-1">{event.location}</span>
          </p>
        )}
        {/* Learn More button or link */}
        {event.link ? (
          <a
            href={event.link}
            className="mt-auto self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        ) : (
          <button className="mt-auto self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all">
            Learn More
          </button>
        )}
      </div>
    </div>
  );
} 