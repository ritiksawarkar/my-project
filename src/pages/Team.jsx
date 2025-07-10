import React from "react";
import { FaLinkedin } from "react-icons/fa";

const leadership = [
  {
    name: "Aarav Sharma",
    title: "Chair",
    desc: "Leads the ACM student chapter and oversees all activities.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Priya Patel",
    title: "Vice Chair",
    desc: "Assists the chair and coordinates technical events.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Rahul Verma",
    title: "Secretary",
    desc: "Manages chapter records and communications.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Sneha Gupta",
    title: "Treasurer",
    desc: "Handles finances and sponsorships for ACM events.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Vikram Singh",
    title: "Technical Head",
    desc: "Leads workshops, hackathons, and coding competitions.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Meera Nair",
    title: "Design Lead",
    desc: "Designs graphics and manages ACM's visual identity.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Karan Mehta",
    title: "Publicity Head",
    desc: "Promotes ACM events and manages social media outreach.",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    socials: ["linkedin"],
  },
  {
    name: "Ananya Rao",
    title: "Membership Chair",
    desc: "Coordinates member registrations and engagement.",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
    socials: ["linkedin"],
  },
];

const board = [
  {
    name: "Dr. S. Kumar",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Prof. R. Iyer",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Ms. T. Desai",
    img: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Mr. P. Chatterjee",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

function SocialIcons({ socials }) {
  return (
    <div className="flex gap-2 mt-2 justify-center">
      {socials.includes("linkedin") && <FaLinkedin className="h-5 w-5 text-blue-700 hover:text-blue-900 cursor-pointer" />}
    </div>
  );
}

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-r from-white via-blue-50 to-white ">
      {/* Team Video Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Team,<br />Our Strength</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">Together, we strive to deliver the best solutions for our clients, while also supporting each other's growth and development.</p>
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-3xl aspect-video bg-gray-100">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=800&q=80" alt="Team video" className="object-cover w-full h-full group-hover:opacity-80 transition" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
                  <svg className="h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-12">
        <div className="text-sm text-gray-500 font-semibold mb-2">Our team</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leadership team</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Meet the core team of ACM Student Chapter, dedicated to fostering technical growth and community engagement.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {leadership.map((member) => (
          <div key={member.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-blue-100" />
            <div className="font-semibold text-gray-900">{member.name}</div>
            <div className="text-blue-700 text-sm font-medium mb-1">{member.title}</div>
            <div className="text-gray-500 text-xs mb-2">{member.desc}</div>
            <SocialIcons socials={member.socials} />
          </div>
        ))}
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Board members</h2>
        <p className="text-gray-600 max-w-lg mx-auto">Guided by our esteemed faculty and advisors.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {board.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-blue-100" />
            <div className="font-medium text-gray-800 text-sm">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 