import React, { useState } from "react";
import { motion } from "framer-motion";
import LazyMotionItem from "../HelperComponents/LazyMotionItem";

export default function FullGallery() {
  const [layoutType] = useState("improved-masonry");

  const imageModules = import.meta.glob(
    "../../assets/Images/*.{jpeg,jpg,avif,mp4}",
    { eager: true }
  );

  const mediaFiles = Object.entries(imageModules).map(([path, mod]) => {
    const ext = path.split(".").pop();
    return {
      src: mod.default,
      type: ext === "mp4" ? "video" : "image",
    };
  });

  const createImprovedMasonry = (media) => {
    const columns = [[], [], [], []];
    const columnHeights = [0, 0, 0, 0];

    media.forEach((file) => {
      const shortestColIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      columns[shortestColIndex].push(file);
      columnHeights[shortestColIndex] += 250 + Math.random() * 100;
    });

    return columns;
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const renderImprovedMasonry = () => {
    const columns = createImprovedMasonry(mediaFiles);

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            {column.map((file, index) => (
              <LazyMotionItem key={index} type={file.type} src={file.src} />
            ))}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="">
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
          <div className=" relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl font-extralight">
              From classrooms to culture, Momiji is where journeys to Japan
              begin—with guidance, growth, and glimpses of unforgettable
              memories.
            </p>
          </div>
        </section>

        <div className="container mx-auto my-20">
          {layoutType === "improved-masonry" && renderImprovedMasonry()}

          <div className="text-2xl font-extralight capitalize text-center my-8">
            You have reached the end of our gallery.
          </div>
        </div>
      </div>
    </>
  );
}
