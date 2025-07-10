import React from "react";

// Helper to get days in month
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export default function EventCalendar({ year, month, eventsByDate, selectedDate, onDateSelect }) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Format date as YYYY-MM-DD
  const formatDate = (day) => `${year}-07-${day.toString().padStart(2, "0")}`;

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-12 border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-blue-600">{year}</span>
        <span className="text-xl font-semibold text-gray-700">July</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-semibold text-xs text-gray-500 py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {/* Empty slots for first day */}
        {Array(firstDayOfWeek).fill(null).map((_, i) => (
          <div key={"empty-" + i}></div>
        ))}
        {/* Days */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const dateStr = formatDate(day);
          const hasEvent = !!eventsByDate[dateStr];
          return (
            <button
              key={day}
              className={`rounded-lg aspect-square w-14 h-14 flex items-center justify-center text-base font-bold transition-all
                ${selectedDate === dateStr ? "bg-blue-600 text-white shadow-lg scale-105" : hasEvent ? "bg-blue-100 text-blue-900 hover:bg-blue-200 border border-blue-200" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}
              `}
              onClick={() => onDateSelect(dateStr)}
              aria-label={`Select ${dateStr}`}
            >
              {day}
              {hasEvent && <span className="ml-1 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
} 