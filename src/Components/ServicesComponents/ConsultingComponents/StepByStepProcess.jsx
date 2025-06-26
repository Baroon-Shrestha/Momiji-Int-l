import React from "react";
import {
  CheckCircle,
  Users,
  GraduationCap,
  FileText,
  Languages,
  CreditCard,
  MapPin,
} from "lucide-react";

const steps = [
  {
    title: "Counseling Session",
    icon: <Users className="w-8 h-8" />,
    points: [
      "One-on-one consultation with expert advisors",
      "Comprehensive assessment of academic background",
      "Discussion of career goals and preferences",
      "Personalized roadmap creation",
    ],
  },
  {
    title: "University Selection",
    icon: <GraduationCap className="w-8 h-8" />,
    points: [
      "Curated list of top universities matching your profile",
      "Analysis of admission requirements and deadlines",
      "Comparison of programs, rankings, and opportunities",
      "Alternative options in multiple countries",
    ],
  },
  {
    title: "Application Assistance",
    icon: <FileText className="w-8 h-8" />,
    points: [
      "Professional document preparation and review",
      "Statement of purpose and essay writing support",
      "Application form completion and submission",
      "Portfolio development for specific programs",
    ],
  },
  {
    title: "Language & Test Prep",
    icon: <Languages className="w-8 h-8" />,
    points: [
      "JLPT preparation with native Japanese instructors",
      "IELTS/TOEFL coaching with proven strategies",
      "Mock tests and performance analysis",
      "Flexible class schedules and online options",
    ],
  },
  {
    title: "Visa Support",
    icon: <CreditCard className="w-8 h-8" />,
    points: [
      "Complete visa documentation assistance",
      "Interview preparation and mock sessions",
      "Financial document verification",
      "Embassy liaison and application tracking",
    ],
  },
  {
    title: "Pre-Departure Support",
    icon: <MapPin className="w-8 h-8" />,
    points: [
      "Accommodation booking and guidance",
      "Cultural orientation and etiquette training",
      "Travel planning and airport assistance",
      "Local contact setup and emergency support",
    ],
  },
];

export default function StepByStepProcess() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Journey to Study Abroad
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our proven 6-step process designed to make your study abroad
            dreams a reality
          </p>
          <div className="w-24 h-1 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon and Title */}
              <div className="flex items-center mb-6 pt-2">
                <div className="text-amber-500 mr-4 group-hover:text-amber-500 transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                {step.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step towards
              your study abroad adventure
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Free Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
