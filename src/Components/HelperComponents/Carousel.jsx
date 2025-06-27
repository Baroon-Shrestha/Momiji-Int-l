import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  // Universities data
  const universities = [
    {
      logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      description:
        "Japan's most prestigious national university, established in 1877. Known for producing Nobel laureates and influential leaders across various fields. Our partnership provides access to cutting-edge research facilities, international exchange programs, and collaboration opportunities with world-renowned faculty. Students benefit from exposure to Japan's rich academic tradition and innovative research methodologies.",
    },
    {
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Kyoto University",
      location: "Kyoto, Japan",
      description:
        "One of Japan's oldest and most distinguished universities, founded in 1897. Renowned for its strong emphasis on independent research and academic freedom. Through our affiliation, students gain access to traditional Japanese scholarly approaches combined with modern research methodologies. The university's beautiful historic campus and proximity to cultural landmarks provide a unique learning environment.",
    },
    {
      logo: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Osaka University",
      location: "Osaka, Japan",
      description:
        "A leading comprehensive research university established in 1931, known for its innovative approach to education and groundbreaking research. Our partnership offers students opportunities to engage in interdisciplinary studies, advanced research projects, and cultural immersion programs. The university's strong industry connections provide excellent pathways for career development and practical experience.",
    },
    {
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Tokyo Institute of Technology",
      location: "Tokyo, Japan",
      description:
        "Japan's premier technological university, specializing in science, technology, and engineering education since 1881. This partnership provides access to state-of-the-art laboratories, cutting-edge research in robotics, AI, and materials science. Students can participate in joint research projects and benefit from the institute's strong connections with Japan's leading technology companies and startups.",
    },
    {
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Waseda University",
      location: "Tokyo, Japan",
      description:
        "A prestigious private university founded in 1882, known for its liberal academic atmosphere and international outlook. Our collaboration opens doors to diverse academic programs, extensive alumni networks, and unique opportunities for cultural exchange. Waseda's emphasis on practical learning and global perspectives makes it an ideal partner for developing internationally-minded professionals.",
    },
    {
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Keio University",
      location: "Tokyo, Japan",
      description:
        "Japan's oldest private university, established in 1858, with a strong tradition of innovation and entrepreneurship. Through this partnership, students access world-class business and economics programs, research opportunities, and extensive industry connections. Keio's emphasis on practical application and leadership development aligns perfectly with our mission to prepare future global leaders.",
    },
    {
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Tohoku University",
      location: "Sendai, Japan",
      description:
        "A prestigious national university founded in 1907, renowned for its research excellence and progressive academic policies. Our affiliation provides students with access to advanced research facilities, international collaboration programs, and opportunities to work alongside leading scientists. The university's commitment to innovation and global engagement creates ideal conditions for academic and personal growth.",
    },
    {
      logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Nagoya University",
      location: "Nagoya, Japan",
      description:
        "A distinguished national university established in 1939, known for producing multiple Nobel Prize winners and leading researchers. This partnership offers students access to exceptional research opportunities in science and engineering, collaborative projects with industry leaders, and exposure to Japan's manufacturing hub. The university's strong emphasis on practical research and innovation provides invaluable learning experiences.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % universities.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + universities.length) % universities.length
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Reset animation state after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const getVisibleCards = () => {
    const cards = [];
    // Show more cards for smooth sliding effect
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentSlide + i + universities.length) % universities.length;
      cards.push({
        ...universities[index],
        position: i,
        index: index,
        key: `${index}`,
      });
    }
    return cards;
  };

  return (
    <div className="text- rounded-4xl">
      <div className="container mx-auto px-4 relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Desktop Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className={`hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-30 bg-white/90 hover:bg-white shadow-xl rounded-full p-4 transition-all duration-300 border border-white/20 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:shadow-2xl active:scale-95"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className={`hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-30 bg-white/90 hover:bg-white shadow-xl rounded-full p-4 transition-all duration-300 border border-white/20 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:shadow-2xl active:scale-95"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center h-80 px-8 relative overflow-hidden">
            {getVisibleCards().map((university) => {
              const isCenter = university.position === 0;
              const isVisible = Math.abs(university.position) <= 1;
              const isClickable = !isCenter && !isAnimating && isVisible;

              return (
                <div
                  key={university.key}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isClickable
                      ? "cursor-pointer hover:scale-105"
                      : "cursor-default"
                  }`}
                  style={{
                    width: isCenter ? "555px" : "500px",
                    height: isCenter ? "320px" : "280px",
                    transform: `translateX(${
                      university.position * 340
                    }px) scale(${isCenter ? 1 : 0.9})`,
                    opacity: isVisible ? (isCenter ? 1 : 0.7) : 0,
                    filter: isCenter
                      ? "brightness(1) saturate(1.1)"
                      : "brightness(0.9) saturate(0.8)",
                    zIndex: isCenter ? 20 : isVisible ? 10 : 1,
                  }}
                  onClick={() => isClickable && goToSlide(university.index)}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                    <div className="flex h-full">
                      {/* Logo Section */}
                      <div className="relative w-1/3 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-amber-100">
                            <img
                              src={university.logo}
                              alt={`${university.name} logo`}
                              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-2/3 p-3 flex flex-col h-full">
                        <div className="flex-shrink-0 space-y-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            {university.name}
                          </h3>

                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-amber-500" />
                            <span className="text-sm font-medium">
                              {university.location}
                            </span>
                          </div>

                          <div className="w-12 h-0.5 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] rounded-full"></div>
                        </div>

                        <div className="flex-1 overflow-hidden">
                          <div
                            className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 hover:scrollbar-thumb-blue-400"
                            style={{
                              scrollbarWidth: "thin",
                              scrollbarColor: "#F78C1F",
                            }}
                          >
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {university.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Buttons - Bottom positioned, visible only on mobile */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className={`bg-white/90 hover:bg-white shadow-xl rounded-full p-4 transition-all duration-300 border border-white/20 ${
                isAnimating
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 hover:shadow-2xl active:scale-95"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-amber-600" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className={`bg-white/90 hover:bg-white shadow-xl rounded-full p-4 transition-all duration-300 border border-white/20 ${
                isAnimating
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110 hover:shadow-2xl active:scale-95"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-amber-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #f78c1f;
          border-radius: 3px;
          transition: background-color 0.2s ease;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #f78c1f;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #f78c1f #f3f4f6;
        }
      `}</style>
    </div>
  );
}
