import { useState } from "react";
import acmLogo from "../assets/image.png";
import { HomeIcon, TrophyIcon, UsersIcon, DocumentTextIcon, PhotoIcon, BookOpenIcon, PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/about", label: "About", icon: DocumentTextIcon },
    { to: "/events", label: "Events", icon: TrophyIcon },
    { to: "/gallery", label: "Gallery", icon: PhotoIcon },
    { to: "/team", label: "Team", icon: UsersIcon },
    { to: "/resources", label: "Resources", icon: BookOpenIcon },
    { to: "/contact", label: "Contact Us", icon: PhoneIcon },
  ];
  return (
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-white shadow-lg flex items-center justify-between px-6 py-2 transition-all duration-300 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
        <img src={acmLogo} alt="ACM Logo" className="h-12 w-auto" />
      </Link>
      {/* Hamburger for mobile */}
      <button className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <XMarkIcon className="h-7 w-7 text-blue-600" /> : <Bars3Icon className="h-7 w-7 text-blue-600" />}
      </button>
      {/* Nav Links (Right Side) */}
      <div className={`flex-col md:flex-row flex gap-6 items-center ml-auto md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-b-2xl md:rounded-none px-6 md:px-0 py-4 md:py-0 transition-all duration-300 z-40 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
        {/* eslint-disable-next-line no-unused-vars */}
        {navLinks.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 transition-colors duration-200 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-800 font-medium hover:text-blue-700'}`}
            >
              <Icon className="h-5 w-5" /> {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 