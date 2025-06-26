import React from "react";
import OurVision from "./AboutMainComponents/OurVision";

export default function Vision() {
  return (
    <>
      <div className="pb-20">
        <section className="relative w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
          {/* Optional background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80"
              alt="vision background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Our Vision & Core Values
            </h1>
            <p className="text-lg md:text-xl max-w-2xl font-extralight">
              Empowering creativity, integrity, and innovation to shape a better
              future. We stand by our principles and push boundaries for growth
              that matters.
            </p>
          </div>
        </section>
        <OurVision />
      </div>
    </>
  );
}
