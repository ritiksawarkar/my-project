import React from "react";

export default function EventCard({ event, date }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-0 w-96 md:w-[500px] border border-blue-100 hover:shadow-2xl transition-all overflow-hidden relative">
      {/* Image section */}
      <div className="md:w-1/3 w-full h-40 md:h-auto flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl"
        />
      </div>
      {/* Content section */}
      <div className="flex-1 flex flex-col justify-between p-6 gap-2">
        {/* Date badge */}
        {date && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
            {date}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-1 text-blue-700">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <button className="mt-auto self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
} 