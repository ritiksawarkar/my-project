import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../index.css"; // Ensure custom styles are loaded
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const sliderImages = [
  {
    src: "https://cdn.pixabay.com/photo/2022/10/24/09/31/flower-7543035_640.jpg",
    alt: "Group photo 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_640.jpg",
    alt: "Group photo 2",
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/06/15/04/46/duckling-9660597_640.jpg",
    alt: "Group photo 3",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    alt: "Group photo 4",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Group photo 5",
  },
];

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="bg-gradient-to-r from-white via-blue-50 to-white flex flex-col md:flex-row items-center justify-between gap-16 px-4 md:px-16 py-12 md:py-20 min-h-[80vh] animate-fadein">
        {/* Hero Text */}
        <div className="max-w-xl min-w-[280px] text-left md:text-left mx-auto md:mx-0 order-1 md:order-1 animate-fadein delay-100">
          <div className="inline-block  px-5 py-2 rounded-full mb-7 text-gray-600 text-base font-medium ">
            Checkout our latest events! <Link to="/events" className="text-blue-600 underline font-semibold hover:text-blue-700 transition-colors">More info →</Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-slate-800 tracking-tight drop-shadow">JIT ACM Student Chapter</h1>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-0 mt-0">Student Chapter</h2> */}
          {/* <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-5 mt-0">Technology 2025-26</h3> */}
          <p className="text-lg text-slate-600 mb-10 font-normal">Empowering Minds, Igniting Futures and Building Leaders</p>
          <div className="mt-2 flex gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 animate-bounce-slow">Join Us</Link>
            <Link to="/team" className="text-blue-600 font-semibold text-lg flex items-center hover:underline hover:text-blue-700 transition-colors">Meet our team <span className="ml-1">→</span></Link>
          </div>
        </div>
        {/* Swiper Slider */}
        <div className="relative w-full max-w-[700px] mx-auto flex items-center justify-center order-2 md:order-2 animate-fadein delay-200">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-blue-100 blur-lg opacity-70 -z-10" />
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-blue-600 hover:text-white text-blue-600 rounded-full shadow-lg p-2 transition-all duration-200 border-2 border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-blue-600 hover:text-white text-blue-600 rounded-full shadow-lg p-2 transition-all duration-200 border-2 border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRightIcon className="h-7 w-7" />
          </button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow, A11y]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              // Add custom class to second previous slide
              swiper.slides.forEach(slide => slide.classList.remove('swiper-slide-prev2'));
              let prev2 = swiper.activeIndex - 2;
              if (prev2 < 0) prev2 = swiper.slides.length + prev2;
              swiper.slides[prev2].classList.add('swiper-slide-prev2');
            }}
            onSlideChange={(swiper) => {
              swiper.slides.forEach(slide => slide.classList.remove('swiper-slide-prev2'));
              let prev2 = swiper.activeIndex - 2;
              if (prev2 < 0) prev2 = swiper.slides.length + prev2;
              swiper.slides[prev2].classList.add('swiper-slide-prev2');
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            speed={700}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 300,
              modifier: 1,
              slideShadows: false,
              scale: 0.85,
            }}
            a11y={{
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
            }}
            className="w-full h-[360px] custom-coverflow-swiper flex items-center custom-slider-container"
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {sliderImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-2xl mx-auto object-cover shadow-2xl border-4 border-white custom-slide-img custom-slider-image transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About ACM Section */}
      <section className="bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10 border-b border-gray-100">
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About JIT ACM</h2>
          <p className="text-gray-700 text-lg mb-4">
            JIT ACM is the student chapter of the Association for Computing Machinery at Jhulelal Institute of Technology. Our mission is to foster a vibrant technical community, empower students with knowledge, and organize events, workshops, and competitions that ignite innovation and leadership among budding engineers.
          </p>
          <p className="text-gray-600 text-base">
            We strive to bridge the gap between academia and industry, promote collaborative learning, and provide a platform for students to showcase their talents in computing and technology.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/src/assets/image.png" alt="ACM JIT group" className="rounded-xl  w-full max-w-xs object-cover" />
        </div>
      </section>

      {/* Our Recent Events Section */}
      <section className="bg-blue-50 py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Recent Events</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Event 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] max-w-xs mx-auto">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="CodeMania 2024" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CodeMania 2024</h3>
            <p className="text-gray-600 text-sm">A coding competition that challenged students to solve real-world problems and enhance their programming skills.</p>
          </div>
          {/* Event 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] max-w-xs mx-auto">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="TechTalks" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">TechTalks</h3>
            <p className="text-gray-600 text-sm">A series of expert sessions on emerging technologies, career guidance, and industry trends for ACM JIT members.</p>
          </div>
          {/* Event 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[250px] max-w-xs mx-auto">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0" alt="Web Dev Bootcamp" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Dev Bootcamp</h3>
            <p className="text-gray-600 text-sm">Hands-on workshop introducing students to modern web development tools and best practices.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Faculty Incharges Section */}
      <section className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Meet Our Faculty Incharges</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Faculty 1 */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs mx-auto flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Dr. Priya Sharma" className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-white shadow" />
            <h3 className="text-lg font-semibold text-gray-800">Dr. Priya Sharma</h3>
            <p className="text-blue-700 text-sm mb-1">Faculty Advisor</p>
            <p className="text-gray-600 text-xs text-center">Guiding the ACM JIT chapter with vision and dedication.</p>
          </div>
          {/* Faculty 2 */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs mx-auto flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Prof. Amit Deshmukh" className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-white shadow" />
            <h3 className="text-lg font-semibold text-gray-800">Prof. Amit Deshmukh</h3>
            <p className="text-blue-700 text-sm mb-1">Co-Advisor</p>
            <p className="text-gray-600 text-xs text-center">Supporting student initiatives and technical growth.</p>
          </div>
          {/* Faculty 3 */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs mx-auto flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="Prof. Suresh Patil" className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-white shadow" />
            <h3 className="text-lg font-semibold text-gray-800">Prof. Suresh Patil</h3>
            <p className="text-blue-700 text-sm mb-1">Event Coordinator</p>
            <p className="text-gray-600 text-xs text-center">Ensuring smooth execution of ACM JIT events.</p>
          </div>
        </div>
      </section>
    </>
  );
} 