import React from "react";
import { BookOpenIcon, AcademicCapIcon, GlobeAltIcon, UserGroupIcon, LinkIcon, SparklesIcon } from "@heroicons/react/24/outline";

const resources = [
  {
    title: "ACM Digital Library",
    description: "Access thousands of computing publications, journals, and conference proceedings.",
    link: "https://dl.acm.org/",
    icon: BookOpenIcon,
  },
  {
    title: "ACM Learning Center",
    description: "Online courses, books, and videos for lifelong learning in computing.",
    link: "https://learning.acm.org/",
    icon: AcademicCapIcon,
  },
  {
    title: "ACM TechTalks",
    description: "Webinars and talks from leading experts in computing and IT.",
    link: "https://learning.acm.org/techtalks",
    icon: SparklesIcon,
  },
  {
    title: "Membership & Benefits",
    description: "Join ACM for access to exclusive resources, networking, and career tools.",
    link: "https://www.acm.org/membership/membership-benefits",
    icon: UserGroupIcon,
  },
  {
    title: "Scholarships & Awards",
    description: "Explore scholarships, awards, and recognition programs for students.",
    link: "https://www.acm.org/chapters/student-chapter-excellence-awards",
    icon: GlobeAltIcon,
  },
  {
    title: "Chapter Management Toolkit",
    description: "Resources for running and growing your ACM student chapter.",
    link: "https://www.acm.org/chapters/chapter-management-toolkit",
    icon: LinkIcon,
  },
];

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center bg-gradient-to-r from-white via-blue-50 to-white ">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">ACM Resources</h1>
      <p className="mb-8 text-lg text-gray-700">Explore valuable resources, opportunities, and tools provided by ACM for students and professionals in computing.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map(({ title, description, link, icon: Icon }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg border border-blue-100 hover:border-blue-400 transition-all duration-200 text-left hover:scale-105"
          >
            <Icon className="h-10 w-10 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-1">{title}</h2>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-12 text-sm text-gray-500">
        <p>
          For more, visit the <a href="https://www.acm.org/chapters/students/student-chapter-resources-and-benefits" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">ACM Student Chapter Resources & Benefits</a> page.
        </p>
      </div>
    </div>
  );
} 