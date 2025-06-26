// SmallerServicesContent.jsx
import React from "react";

export default function SmallerServicesContent({ sections }) {
  return (
    <section className="p-4 bg-white text-black space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
          Proven Process{" "}
        </span>
        For Excellence
      </h2>
      {sections.map((section) => (
        <div key={section.id} className="bg-gray-50 p-4 rounded-lg shadow">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-48 object-cover rounded mb-3"
          />
          <h3 className="text-lg font-semibold">{section.title}</h3>
          <p className="text-gray-700 text-sm mt-2">{section.content}</p>
          <blockquote className="italic border-l-4 border-amber-400 pl-4 mt-2 text-sm text-gray-600">
            {section.conv}
          </blockquote>
        </div>
      ))}
    </section>
  );
}
