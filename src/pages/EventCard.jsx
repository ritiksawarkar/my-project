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
    <div className="flex flex-col bg-white rounded-2xl shadow-xl w-full max-w-md border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200 overflow-hidden group">
      {/* Image section at top */}
      <div className="w-full h-48 md:h-56 flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-90 transition"
        />
      </div>
      {/* Content section below image */}
      <div className="flex flex-col justify-between p-6 gap-2">
        {/* Badge and Title Row */}
        <div className="flex items-center gap-3 mb-2">
          {event.badge && (
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeColor(event.badge)} font-sans tracking-wide shadow-sm border border-blue-100 text-center`}>{event.badge}</span>
          )}
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 leading-tight font-sans">{event.title}</h2>
        </div>
        {/* Date and Location Row */}
        <div className="flex items-center gap-4 mb-2 text-sm text-gray-500 font-sans">
          {date && (
            event.link ? (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 cursor-pointer hover:underline"
              >
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>{date}</span>
              </a>
            ) : (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>{date}</span>
              </span>
            )
          )}
          {event.location && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" /></svg>
              <span>{event.location}</span>
            </span>
          )}
        </div>
        {/* Description */}
        <div className="mb-2">
          <p className="text-gray-700 text-base font-normal font-sans leading-snug min-h-[60px]">{event.description}</p>
        </div>
        {/* Time and Speaker Row */}
        <div className="flex flex-wrap gap-4 mb-2 text-sm text-gray-500 font-sans">
          {event.time && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>
              <span>{event.time}</span>
            </span>
          )}
          {event.speaker && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a7.5 7.5 0 0113 0"/></svg>
              <span>{event.speaker}</span>
            </span>
          )}
        </div>
        {/* Agenda List */}
        {event.agenda && event.agenda.length > 0 && (
          <ul className="mb-2 pl-5 list-disc text-gray-600 text-sm font-sans">
            {event.agenda.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {/* Divider */}
        <div className="border-t border-blue-100 my-2"></div>
        {/* Learn More button or link */}
        {event.link ? (
          <a
            href={event.link}
            className="mt-2 self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        ) : (
          <button className="mt-2 self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all">
            Learn More
          </button>
        )}
      </div>
    </div>
  );
} 