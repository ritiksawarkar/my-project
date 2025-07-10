import React from "react";
import { Link } from "react-router-dom";

const events = [
    {
        badge: "Hackathon",
        title: "ACM CodeSprint 2024",
        description:
            "A 24-hour coding marathon where teams tackle real-world problems. Open to all students. Prizes for top performers!",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=600",
        link: "/events/codesprint-2024",
        date: "April 20-21, 2024",
        location: "Main Auditorium",
    },
    {
        badge: "Workshop",
        title: "Git & GitHub Essentials",
        description:
            "Hands-on workshop covering version control basics, collaborative workflows, and open source contributions. Bring your laptop!",
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=600",
        link: "/events/git-github-workshop",
        date: "May 5, 2024",
        location: "Lab 2",
    },
    {
        badge: "Seminar",
        title: "Women in Computing: Breaking Barriers",
        description:
            "Inspiring talks and panel discussions with women leaders in tech. Networking and Q&A included. All are welcome!",
        image:
            "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=compress&w=600",
        link: "/events/women-in-computing",
        date: "May 18, 2024",
        location: "Seminar Hall",
    },
    {
        badge: "Guest Lecture",
        title: "AI in Everyday Life",
        description:
            "Industry expert shares insights on how artificial intelligence is transforming daily experiences and future careers.",
        image:
            "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=compress&w=600",
        link: "/events/ai-guest-lecture",
        date: "June 2, 2024",
        location: "Conference Room",
    },
    {
        badge: "Coding Contest",
        title: "ACM Algorithm Challenge",
        description:
            "Test your problem-solving skills in this fast-paced algorithmic contest. Solo and team participation allowed.",
        image:
            "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=compress&w=600",
        link: "/events/algorithm-challenge",
        date: "June 15, 2024",
        location: "Online & Onsite",
    },
    {
        badge: "Tech Talk",
        title: "The Future of Quantum Computing",
        description:
            "A deep dive into quantum computing trends, applications, and career opportunities. Open Q&A at the end.",
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=600",
        link: "/events/quantum-computing-talk",
        date: "June 28, 2024",
        location: "Auditorium B",
    },
];

export default function Events() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4 animate-fadein bg-gradient-to-r from-white via-blue-50 to-white ">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">Events</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {events.map((event, idx) => (
                    <Link
                        to={event.link}
                        key={event.title}
                        className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            } bg-[#17555b] rounded-2xl shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full md:w-1/2 h-56 md:h-auto object-cover"
                        />
                        <div className="p-6 flex flex-col justify-center text-white w-full md:w-1/2 relative flex-1">
                            <div className="inline-flex w-auto">
                                <span className="bg-white text-[#17555b] text-xs font-semibold px-3 py-1 rounded-full mb-2 whitespace-nowrap">
                                    {event.badge}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-2 hover:underline flex items-center">
                                {event.title}
                                <span className="ml-2 opacity-0 hover:opacity-100 transition-opacity duration-200 text-white text-2xl">→</span>
                            </h2>
                            <p className="text-sm opacity-80 mb-3">{event.description}</p>
                            <div className="flex flex-col gap-1 text-xs opacity-90 mt-auto">
                                <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> {event.date}</span>
                                <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" /></svg> {event.location}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 