import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-white via-blue-50 to-white text-gray-800 py-10 px-4 border-t border-blue-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding & Mission */}
        <div>
          <div className="text-2xl font-extrabold text-blue-700 mb-2">JIT ACM Student Chapter</div>
          <div className="text-sm text-gray-500">Empowering students in technology and innovation.</div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-center">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/about" className="hover:text-blue-700">About</Link>
          <Link to="/events" className="hover:text-blue-700">Events</Link>
          <Link to="/gallery" className="hover:text-blue-700">Gallery</Link>
          <Link to="/team" className="hover:text-blue-700">Team</Link>
          <Link to="/resources" className="hover:text-blue-700">Resources</Link>
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
        </div>
        {/* Contact & Socials */}
        <div className="flex flex-col items-end gap-2">
          <div className="text-sm">📍 Jhulelal Institute of Technology, Nagpur</div>
          <div className="text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
            jitacm@jit.edu.in
          </div>
          <div className="flex gap-3 mt-2">
            {/* GitHub */}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            {/* Discord */}
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-indigo-500 hover:text-indigo-700 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.078.037c-.34.607-.719 1.396-.984 2.013a18.524 18.524 0 0 0-5.59 0 12.51 12.51 0 0 0-.995-2.013.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.369a.069.069 0 0 0-.032.027C.533 8.159-.32 11.81.099 15.415a.082.082 0 0 0 .031.056c2.104 1.547 4.13 2.488 6.123 3.115a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.248-2.063a.076.076 0 0 0-.041-.104c-.671-.253-1.31-.558-1.922-.892a.077.077 0 0 1-.008-.128c.129-.098.258-.197.382-.299a.074.074 0 0 1 .077-.01c4.027 1.84 8.38 1.84 12.365 0a.073.073 0 0 1 .078.009c.124.102.253.201.382.299a.077.077 0 0 1-.006.128 12.298 12.298 0 0 1-1.923.892.076.076 0 0 0-.04.105c.36.722.782 1.412 1.247 2.063a.076.076 0 0 0 .084.028c1.993-.627 4.02-1.568 6.123-3.115a.077.077 0 0 0 .031-.055c.5-4.09-.838-7.713-3.548-10.989a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900 transition-colors">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.12 20.452H3.56V9.034h3.56v11.418zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm15.112 12.819h-3.56v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3.56V9.034h3.418v1.561h.049c.477-.902 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.455v6.252z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} JIT ACM. All rights reserved.</div>
    </footer>
  );
} 