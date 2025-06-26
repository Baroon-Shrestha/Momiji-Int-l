import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const points = [
  {
    id: 1,
    title: "End-to-End Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore, quo natus sint accusamus molestiae ducimus ea illum cupiditate saepe.",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore, quo natus sint accusamus molestiae ducimus ea illum cupiditate saepe.",
  },
  {
    id: 3,
    title: "Post Arrival Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore, quo natus sint accusamus molestiae ducimus ea illum cupiditate saepe.",
  },
];

export default function ServicesContent2() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-amber-400">Services</span>
        </h2>
        {/* <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100"> */}
          <p className="text-gray-700 leading-relaxed text-md font-extralight text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste
            unde officia, rerum dicta autem qui saepe suscipit ratione velit, ea
            repellat? Asperiores dolorum minima eius iure sed. Dignissimos
            adipisci nam hic cum eius. Autem cupiditate minima sit, eius
            necessitatibus praesentium dolore nemo? Qui quo facere veritatis
            consectetur, alias ex aperiam quos accusantium nisi provident nemo?
            Facere fugit, reprehenderit ut, laboriosam incidunt neque, nisi
            dolor harum at obcaecati cumque necessitatibus aut accusantium omnis
            ipsa perferendis. Earum rem nobis esse corrupti dolore saepe
          </p>
          {/* </div> */}

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop&crop=center"
                alt="Educational Excellence"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-semibold text-gray-800">
                Excellence in Education
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {points.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="flex items-center justify-center text-black font-bold text-4xl shaow-lg">
                    {item.id}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
