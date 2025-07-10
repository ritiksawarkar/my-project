import React from "react";
import acmLogo from "../assets/image.png"; // Use your chapter or ACM logo here

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 md:px-8 bg-gradient-to-r from-white via-blue-50 to-white ">
      <div className="flex flex-col items-center mb-8">
        <img src={acmLogo} alt="JIT ACM Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold text-center mb-2">Contact JIT ACM Student Chapter</h1>
        <p className="text-center text-gray-600 mb-4">
          The JIT ACM Student Chapter is dedicated to advancing computing as a science and profession at Jhulelal Institute of Technology. Connect with us for events, membership, and collaboration opportunities!
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-10">
        {/* Left: Chapter Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-2xl mb-2">Chapter Contact</h2>
          <div className="text-gray-700 space-y-2">
            <div>
              <span className="font-medium">Email:</span> <a href="mailto:jitacm@yourcollege.edu" className="text-blue-700 hover:underline">jitacm@yourcollege.edu</a>
            </div>
            <div>
              <span className="font-medium">Faculty Advisor:</span> Prof. [Advisor Name] (<a href="mailto:advisor@yourcollege.edu" className="text-blue-700 hover:underline">advisor@yourcollege.edu</a>)
            </div>
            <div>
              <span className="font-medium">Student Chair:</span> [Student Name] (<a href="mailto:student@yourcollege.edu" className="text-blue-700 hover:underline">student@yourcollege.edu</a>)
            </div>
            <div>
              <span className="font-medium">Address:</span><br />
              Jaya Institute of Technology<br />
              [Department/Block, if any]<br />
              [City, State, ZIP]<br />
              [Country]
            </div>
          </div>
        </div>
        {/* Right: Social Media & Hours */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-2xl mb-2">Connect with Us</h2>
          <div className="text-gray-700 space-y-2">
            <div>
              <span className="font-medium">Instagram:</span> <a href="https://instagram.com/jitacm" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">@jitacm</a>
            </div>
            <div>
              <span className="font-medium">Facebook:</span> <a href="https://facebook.com/jitacm" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">facebook.com/jitacm</a>
            </div>
            <div>
              <span className="font-medium">LinkedIn:</span> <a href="https://linkedin.com/company/jitacm" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">linkedin.com/company/jitacm</a>
            </div>
            <div>
              <span className="font-medium">Office Hours:</span> Mon–Fri, 10:00am – 4:00pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 