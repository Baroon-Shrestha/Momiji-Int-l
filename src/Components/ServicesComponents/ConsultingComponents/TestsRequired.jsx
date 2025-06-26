import React from "react";
import { BookOpen, Users, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const tests = [
  {
    name: "JLPT (Japanese Language Proficiency Test)",
    description:
      "Essential for students applying to Japanese universities. We support JLPT N5 to N2 preparation.",
    icon: BookOpen,
    color: "from-[#F05A22] via-[#F78C1F] to-[#FBC21B]",
    bgColor: "bg-white",
  },
  {
    name: "University-specific Entrance Exams",
    description:
      "Some institutions may require additional exams. We help you prepare based on your target university.",
    icon: Target,
    color: "from-[#F05A22] via-[#F78C1F] to-[#FBC21B]",
    bgColor: "bg-white",
  },
];

const features = [
  "Personalized study plans",
  "Practice tests & mock exams",
  "Expert guidance & feedback",
  "Progress tracking",
];

export default function TestsRequired() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] rounded-full mb-6 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Test Preparation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master the essential exams for Japanese university admission with
            our comprehensive preparation programs
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tests.map((test, index) => {
            const IconComponent = test.icon;
            return (
              <div
                key={index}
                className={`${test.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 translate-x-8 -translate-y-8">
                  <IconComponent className="w-full h-full" />
                </div>

                {/* Icon Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-b ${test.color} rounded-xl flex items-center justify-center shadow-lg `}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {test.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300">
              Get In Touch With Us.
            </button>
          </Link>
          <p className="text-gray-600 mt-4">
            Join thousands of students who achieved their Japanese university
            dreams
          </p>
        </div>
      </div>
    </section>
  );
}
