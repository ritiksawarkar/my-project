import React from "react";

const coreTeam = [
  { name: "Ritik Uttam Sawarkar", role: "Chair", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Chetan Nandurkar", role: "Vice Chair", photo: "https://randomuser.me/api/portraits/men/33.jpg" },
  { name: "Rameshwari Sandile", role: "Event Head", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Shruti Amle", role: "Design Lead", photo: "https://randomuser.me/api/portraits/women/45.jpg" },
];

const eventImages = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://cdn.pixabay.com/photo/2022/10/24/09/31/flower-7543035_640.jpg",
  "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_640.jpg",
];

export default function About() {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white max-w-3xl mx-auto py-12 px-4 animate-fadein">
      {/* 1. ACM Global Introduction */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">About ACM</h1>
      <p className="text-gray-800 mb-2">
        The Association for Computing Machinery (ACM) is the world's largest computing society, aimed at advancing computing as a science and profession worldwide.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Founded in 1947, present in 100+ countries</li>
        <li>Promotes innovation, collaboration, and research</li>
      </ul>

      {/* 2. About Our Chapter */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">About ACM JIT Student Chapter</h2>
      <p className="text-gray-800 mb-2">
        ACM JIT Student Chapter fosters a culture of innovation, collaboration, and continuous learning through workshops, coding events, speaker sessions, and real-world projects.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Established in 2022</li>
        <li>Mission: Empower students of Jhulelal Institute of Technology with opportunities in tech</li>
        <li>Open-for-all, inclusive tech community</li>
      </ul>

      {/* 3. Vision & Mission Statements */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Vision & Mission</h2>
      <div className="mb-6">
        <p className="font-semibold text-gray-800 mb-1">Vision:</p>
        <p className="mb-2 text-gray-700">To empower students with cutting-edge tech exposure and a collaborative learning environment.</p>
        <p className="font-semibold text-gray-800 mb-1">Mission:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Organize tech-focused events</li>
          <li>Develop leadership & teamwork</li>
          <li>Connect students with global ACM community</li>
        </ul>
      </div>

      {/* 4. Faculty Advisor */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Faculty Advisor</h2>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Prof. XYZ" className="w-16 h-16 rounded-full object-cover border-2 border-blue-200" />
        <div>
          <p className="font-bold text-gray-800">Prof. XYZ</p>
          <p className="text-gray-600 text-sm">Assistant Professor, Computer Science</p>
          <p className="italic text-gray-500 mt-1">"We guide, you lead. Our chapter helps students grow technically and professionally."</p>
        </div>
      </div>

      {/* 5. Meet the Core Team */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Meet the Core Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {coreTeam.map((member) => (
          <div key={member.name} className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200 p-3 group">
            <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-blue-100 group-hover:scale-105 transition-transform duration-200" />
            <span className="font-semibold text-gray-800 text-sm">{member.name}</span>
            <span className="text-blue-600 text-xs font-medium">{member.role}</span>
          </div>
        ))}
      </div>

      {/* 6. Achievements / Milestones */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Achievements & Milestones</h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>15+ Events organized</li>
        <li>500+ student participants</li>
        <li>Hackathon wins and ACM recognitions</li>
        <li>Industry guest sessions</li>
      </ul>

      {/* 7. Past Event Highlights (Mini Gallery) */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Past Event Highlights</h2>
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {eventImages.map((src, idx) => (
          <img key={idx} src={src} alt={`Event ${idx + 1}`} className="w-40 h-28 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-200" />
        ))}
      </div>

      {/* 8. Quote or Motto */}
      <div className="text-center mt-8">
        <blockquote className="text-xl italic text-blue-700 font-semibold">"Where ideas meet execution."</blockquote>
      </div>
    </section>
  );
} 