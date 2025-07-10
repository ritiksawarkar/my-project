import React, { useState, useMemo } from "react";
import events from "../data/events";
import EventCard from "./EventCard";

const badgeOptions = [
  ...Array.from(new Set(events.map(e => e.badge))).filter(Boolean)
];

export default function Events() {
  const [search, setSearch] = useState("");
  const [badge, setBadge] = useState("");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(events[0] || null);

  // Filtered events
  const filtered = useMemo(() => {
    return events.filter(e => {
      const matchesSearch =
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase()) ||
        (e.location && e.location.toLowerCase().includes(search.toLowerCase()));
      const matchesBadge = badge ? e.badge === badge : true;
      return matchesSearch && matchesBadge;
    });
  }, [search, badge]);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 animate-fadein bg-gradient-to-r from-white via-blue-50 to-white ">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">Events</h1>
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-blue-200 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={badge}
          onChange={e => setBadge(e.target.value)}
          className="border border-blue-200 rounded-lg px-4 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Types</option>
          {badgeOptions.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <div className="flex gap-2 ml-auto">
          <button
            className={`px-3 py-2 rounded-lg border ${view === "grid" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            onClick={() => setView("grid")}
          >Grid</button>
          <button
            className={`px-3 py-2 rounded-lg border ${view === "list" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            onClick={() => setView("list")}
          >List</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Event details */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          {selected ? (
            <EventCard event={selected} date={selected.date} />
          ) : (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400 border border-dashed border-blue-200">
              Select an event to see details.
            </div>
          )}
        </div>
        {/* Right: Event list */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-400 border border-dashed border-blue-200">
              No events found. Try a different search or filter.
            </div>
          ) : (
            <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "flex flex-col gap-6"}>
              {filtered.map(event => (
                <div key={event.title} onClick={() => setSelected(event)} className="cursor-pointer">
                  <EventCard event={event} date={event.date} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 