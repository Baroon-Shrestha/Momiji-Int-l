import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import img1 from "../../../assets/Images/img02.avif";
import img2 from "../../../assets/Images/about2.png";
import img3 from "../../../assets/Images/img3.jpeg";
import SmallerServicesContent from "./SmallerServicesContent";

const sections = [
  {
    id: "section-1",
    title: "Free 1-on-1 Counseling — Let’s Talk!",
    content:
      "We start by truly getting to know you — your goals, your dreams, and what you’re passionate about. Whether you’re still confused about which university to choose or what course is best for your future, we’ll help you figure it out.",
    conv: "We’re committed to making your journey stress-free right from day one.",
    image: img1,
  },
  {
    id: "section-2",
    title: "University & Course Selection in Japan — Personalized Guidance",
    content:
      "Japan has a wide range of top universities and language schools, each with its own strengths. Based on your interests, budget, and long-term goals, we’ll help you choose the best-fit institution and course — whether it’s a language program, vocational course, or full degree.",
    conv: "We recommend what’s best for you — not just what’s popular.",
    image: img2,
  },
  {
    id: "section-3",
    title: "Document Preparation — No Confusion, No Mistakes",
    content:
      "We’ll guide you through every document you need — from your SOP (Statement of Purpose) to recommendation letters, CV, and more. Plus, we’ll review and polish them so you make a strong impression.",
    conv: "No more guessing what to write — we’ll help you present your story perfectly.",
    image: img3,
  },
  {
    id: "section-4",
    title: "Fast & Smooth Application Process",
    content:
      "Once your documents are ready, we handle the entire application process — making sure everything is submitted correctly and on time. You’ll be informed at every step.",
    conv: "Your application is handled with precision and professionalism — no delays, no confusion.",
    image: img1,
  },
  {
    id: "section-5",
    title: "Interview & Test Guidance",
    content:
      "Need to take NAT, JLPT, or prepare for your student visa interview? Don’t worry — we offer mock tests, expert coaching, and personalized practice sessions to ensure you’re fully prepared.",
    conv: "We help you boost your confidence, not just your scores.",
    image: img3,
  },
  {
    id: "section-6",
    title: "Visa Filing to Departure — Full Support",
    content:
      "We handle your visa application, double-check everything, and guide you until it’s approved. Once you’re ready to go, we’ll help you with ticketing, accommodation, and even pre-departure orientation.",
    conv: "Yes, we’ll still be with you even after you land.",
    image: img3,
  },
];

export default function ServicesContent() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) return;

    setSectionProgress(new Array(sections.length).fill(0));

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionHeight = 1 / sections.length;
      const adjustedProgress = Math.min(latest * 1.01, 1);
      const currentSection = Math.min(
        Math.floor(adjustedProgress / sectionHeight),
        sections.length - 1
      );
      setActiveSection(currentSection);

      const newProgress = sections.map((_, index) => {
        const sectionStart = index * sectionHeight;
        const sectionEnd = (index + 1) * sectionHeight;

        if (adjustedProgress < sectionStart) return 0;
        if (adjustedProgress > sectionEnd) return 1;

        return (adjustedProgress - sectionStart) / sectionHeight;
      });

      setSectionProgress(newProgress);
    });

    return () => unsubscribe();
  }, [scrollYProgress, windowWidth]);

  if (windowWidth < 1024) {
    return <SmallerServicesContent sections={sections} />;
  }

  return (
    <section className="relative bg-white text-black">
      <div ref={containerRef} className="h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-9xl mx-auto flex flex-col md:flex-row">
            {/* Left */}
            <div className="w-full md:w-full px-16 md:pt-8">
              <h2 className="text-4xl font-bold my-10 text-black capitalize">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                  Proven process
                </span>{" "}
                for excellence
              </h2>

              <div className="relative pl-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    animate={{ opacity: index === activeSection ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 relative"
                  >
                    <div className="relative">
                      <div className="absolute left-[-1.15rem] top-0 bottom-0 w-1">
                        <motion.div
                          className="w-full bg-amber-400 rounded-full"
                          style={{
                            height: "100%",
                            scaleY: sectionProgress[index],
                            originY: 0,
                          }}
                        />
                      </div>

                      <h3
                        className={`pl-5 text-2xl font-bold transition-transform ${
                          index === activeSection
                            ? "scale-105 text-black"
                            : "scale-95 text-gray-400"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: index === activeSection ? "auto" : 0,
                          opacity: index === activeSection ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-5 pr-2 text-lg text-black">
                          {section.content}
                        </div>
                        <div className="border-l-4 border-amber-400 pl-4 ml-6 font-extralight italic">
                          {section.conv}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <div className="relative h-[500px] lg:h-[600px] mt-16 rounded-lg overflow-hidden shadow-lg">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.02, zIndex: 0 }}
                    animate={{
                      opacity: index === activeSection ? 1 : 0,
                      scale: index === activeSection ? 1 : 1.02,
                      zIndex: index === activeSection ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
