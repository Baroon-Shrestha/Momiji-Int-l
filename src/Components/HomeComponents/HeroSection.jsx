import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function HeroSection({
  images = [],
  autoPlayInterval = 5000,
  height = "80vh",
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const heroImages = images;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [heroImages.length, autoPlayInterval]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentSlide].url}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="text-2xl">Welcome to</span> <br />
              <Typewriter
                options={{
                  strings: [
                    " Momiji International Academy",
                    "モミジ国際アカデミー",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg font-extralight">
              Level Up Your Future — Study in Japan
            </p>
            <Link to="/about">
              <div className="flex flex-col w-[50%] gap-4">
                <button className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                  Learn More About Us
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
