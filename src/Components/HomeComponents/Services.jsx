import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFlask,
  FaUsers,
} from "react-icons/fa";
import { MdSchool, MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

const ServicesBanner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const { t } = useTranslation();

  const serviceIcons = [
    {
      icon: <FaGraduationCap />,
      color: "from-indigo-500 to-purple-600",
      accent: "#6366f1",
    },
    {
      icon: <FaBook />,
      color: "from-emerald-500 to-teal-600",
      accent: "#10b981",
    },
    {
      icon: <FaChalkboardTeacher />,
      color: "from-amber-500 to-orange-600",
      accent: "#f59e0b",
    },
    {
      icon: <FaLaptopCode />,
      color: "from-violet-500 to-purple-600",
      accent: "#8b5cf6",
    },
    {
      icon: <FaFlask />,
      color: "from-red-500 to-pink-600",
      accent: "#ef4444",
    },
    {
      icon: <MdSchool />,
      color: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
    },
    {
      icon: <FaUsers />,
      color: "from-lime-500 to-green-600",
      accent: "#84cc16",
    },
    {
      icon: <MdQuiz />,
      color: "from-orange-500 to-red-600",
      accent: "#f97316",
    },
  ];

  const serviceContent = t("home.services.items", { returnObjects: true });

  const services = serviceContent.map((item, index) => ({
    ...item,
    ...serviceIcons[index],
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".service-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500  bg-clip-text text-transparent mb-6 leading-tight">
            {t("home.services.heading")}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("home.services.subheading")}
          </p>

          <div className="flex justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500  rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative transform transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="relative h-80 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                {/* Simple gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-8 transition-opacity duration-200 ease-out`}
                ></div>

                {/* Content container */}
                <div className="relative h-full flex flex-col">
                  {/* Icon container */}
                  <div className="relative p-8 flex-shrink-0">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform transition-all duration-150 ease-out group-hover:scale-110`}
                    >
                      <div className="text-2xl">{service.icon}</div>
                    </div>

                    {/* Simple floating icon */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 text-6xl text-gray-400 transform transition-all duration-200 ease-out">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative px-8 pb-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight transition-colors duration-150 ease-out">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-150 ease-out flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left`}
                ></div>

                {/* Simple decorative dots */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-150 ease-out"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-150 ease-out"></div>
              </div>

              {/* Number badge */}
              <div
                className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br ${
                  service.color
                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform transition-all duration-150 ease-out ${
                  hoveredCard === index ? "scale-110" : "scale-100"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link to="/services">
              <button className="px-8 py-4 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]  text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-500 transform hover:scale-105 transition-all duration-200 ease-out shadow-lg hover:shadow-xl">
                {t("home.services.buttons.explore")}
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out">
                {t("home.services.buttons.contact")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
