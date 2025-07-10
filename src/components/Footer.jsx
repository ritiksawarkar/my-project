import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 border-t border-blue-100 mt-12 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700">ACM JIT</span>
          <span className="text-gray-400 text-sm">| Jhulelal Institute of Technology</span>
        </div>
        {/* Quick Links */}
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link to="/" className="hover:underline text-blue-600">Home</Link>
          <Link to="/about" className="hover:underline text-blue-600">About</Link>
          <Link to="/events" className="hover:underline text-blue-600">Events</Link>
          <Link to="/gallery" className="hover:underline text-blue-600">Gallery</Link>
          <Link to="/team" className="hover:underline text-blue-600">Team</Link>
          <Link to="/resources" className="hover:underline text-blue-600">Resources</Link>
          <Link to="/contact" className="hover:underline text-blue-600">Contact</Link>
        </nav>
        {/* Socials */}
        <div className="flex gap-3">
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900">
            {/* Official LinkedIn SVG */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.12 20.452H3.56V9.034h3.56v11.418zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm15.112 12.819h-3.56v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3.56V9.034h3.418v1.561h.049c.477-.902 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.455v6.252z"/></svg>
          </a>
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="text-blue-500 hover:text-blue-700">
            {/* Official Twitter SVG */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 5.924c.017.24.017.48.017.72 0 7.34-5.59 15.8-15.8 15.8-3.14 0-6.07-.92-8.54-2.51.44.05.87.08 1.33.08 2.61 0 5.01-.88 6.93-2.36-2.44-.05-4.5-1.66-5.21-3.88.34.06.68.1 1.04.1.5 0 .99-.07 1.45-.19-2.55-.51-4.47-2.77-4.47-5.48v-.07c.75.42 1.61.67 2.53.7-1.5-1-2.48-2.7-2.48-4.62 0-1.02.27-1.98.74-2.8C4.09 7.86 7.29 9.5 10.87 9.67c-.09-.41-.14-.84-.14-1.28 0-3.09 2.5-5.59 5.59-5.59 1.61 0 3.07.68 4.09 1.77 1.27-.25 2.46-.71 3.53-1.34-.42 1.3-1.3 2.39-2.45 3.08 1.13-.13 2.21-.44 3.21-.89-.75 1.12-1.68 2.1-2.76 2.88z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-700">
            {/* Official Instagram SVG */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} ACM JIT. All rights reserved.</div>
    </footer>
  );
} 