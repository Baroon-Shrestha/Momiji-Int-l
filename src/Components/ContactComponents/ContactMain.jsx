import React from "react";

export default function ContactMain() {
  return (
    <div>
      <section className="relative w-full bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] text-white py-24 overflow-hidden">
        {/* Optional background image or overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8f9f75c3f5?auto=format&fit=crop&w=1920&q=80"
            alt="contact background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 mb-6">
            We'd love to hear from you — whether it's a question, suggestion, or
            just a greeting.
          </p>

          {/* Optional contact preview or button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-gray-300 text-sm md:text-base">
              email us at <span className="underline">info@momijiedu.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
