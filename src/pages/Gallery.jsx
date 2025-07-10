import React from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    caption: "Inter-College Coding Competition",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    caption: "24-Hour Hackathon Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    caption: "Seminar: The Future of Computing",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    caption: "ACM Chapter Group Photo",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    caption: "Hands-on Workshop: Web Development",
  },
  {
    src: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=800&q=80",
    caption: "Guest Lecture: AI & Machine Learning",
  },
];

export default function Gallery() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadein bg-gradient-to-r from-white via-blue-50 to-white">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 text-center">Gallery</h1>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Explore highlights from our events, workshops, and chapter activities. JIT ACM is always buzzing with energy, innovation, and collaboration!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200 p-3 group">
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-56 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            <span className="font-medium text-gray-800 text-center text-base">{img.caption}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <span className="text-blue-600 font-semibold">Want your event featured? Contact us to share your JIT ACM moments!</span>
      </div>
    </section>
  );
} 