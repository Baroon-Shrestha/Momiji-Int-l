// components/TestimonialCarousel.jsx

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialCarousel({ title, subtitle, testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">{title}</h2>
          <p className="text-xl font-extralight text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((uni, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-12 text-center relative">
                    <div className="absolute top-8 left-8 text-amber-200">
                      <Quote size={48} />
                    </div>
                    <div className="relative mb-8">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                        <img
                          src={uni.logo}
                          alt={uni.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-300 text-white px-4 py-1 rounded-full text-sm font-medium">
                          {uni.name}
                        </div>
                      </div>
                    </div>
                    <div className="border-b">
                      <p className="font-semibold text-xl text-gray-800">
                        {uni.student}
                      </p>
                    </div>
                    <blockquote className="text-lg pt-6 text-gray-700 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                      "{uni.description}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-100 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-amber-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-100 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-amber-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
