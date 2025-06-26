import { Award, BookOpen, Target, Users } from "lucide-react";
import React from "react";

const teamImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";

export default function TeamDesc() {
  const features = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Tailored learning paths for every student",
    },
    {
      icon: BookOpen,
      title: "Expert Curriculum",
      description: "Industry-leading educational content",
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "98% of our students achieve their goals",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join thousands of successful learners",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="min-h-[70vh] bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-[#FFFAE9] rounded-3xl shadow-2xl overflow-hidden my-16">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full border border-orange-200">
                <Users className="w-5 h-5 mr-2" />
                <span className=" font-medium">Meet Team Momiji</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-blackleading-tight">
                We Are <span className="font-extrabold">Momiji</span>
              </h2>

              <p className="text-lgleading-relaxed">
                Your dedicated partners in shaping a bright and successful
                future. With years of expertise and unwavering commitment, we're
                here to guide you through every step of your educational
                journey.
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
                <p className="text-slate-900 font-medium text-lg italic">
                  "At Momiji, we believe every student has the potential to
                  achieve greatness. Our mission is to provide the tools,
                  guidance, and support needed to turn that potential into
                  reality."
                </p>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden lg:rounded-l-3xl">
            <img
              src={teamImage}
              alt="Momiji team collaborating and supporting students"
              className="w-full h-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Floating Stats */}
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">10K+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
