import React, { useState } from "react";
import Accordion from "../../HelperComponents/Accordion";
import { Award, BookOpen, Globe } from "lucide-react";

export default function FAQ() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "Are scholarships available?",
      description:
        "Yes, many Japanese institutions and government bodies offer scholarships for international students. These may cover full or partial tuition, living expenses, or travel costs. Popular scholarships include MEXT, JASSO, and private university-specific grants. Eligibility depends on academic performance, attendance, and sometimes a separate scholarship entrance test. Our team helps you identify suitable scholarships, prepare the required documents, and apply ahead of deadlines. We also offer tips for writing impactful scholarship essays and personal statements.",
      isOpen: false,
    },
    {
      id: 2,
      title:
        "Are there scholarships available for academically strong students?",
      description:
        "Yes, students with excellent academic records can apply for merit-based scholarships such as the MEXT Scholarship or university-specific excellence awards. These often cover tuition fees and living expenses. We help you shortlist suitable options and prepare a competitive application.",
      isOpen: false,
    },
    {
      id: 3,
      title: "Do Japanese universities offer need-based scholarships?",
      description:
        "Yes, many institutions and private foundations in Japan offer need-based scholarships for students from low-income backgrounds. These typically require proof of financial need and a personal statement. We assist in documentation and ensure your case is presented clearly and honestly.",
      isOpen: false,
    },
    {
      id: 4,
      title: "Can I get a scholarship based on my Japanese language skills?",
      description:
        "Absolutely. Some institutions offer scholarships to students who hold JLPT N4 or higher, as strong language skills show commitment and integration potential. We guide you on which universities or programs value JLPT scores and help you highlight this in your application.",
      isOpen: false,
    },
    {
      id: 5,
      title: "What is the MEXT Scholarship and who can apply?",
      description:
        "The MEXT (Monbukagakusho) Scholarship is a prestigious government-funded program that covers tuition, flights, and living expenses. It is open to students with strong academic backgrounds and leadership potential. We provide coaching for the MEXT exam, interview, and application process.",
      isOpen: false,
    },
    {
      id: 6,
      title: "What documents are required for scholarship applications?",
      description:
        "Most scholarship applications require academic transcripts, recommendation letters, a personal essay or statement of purpose, financial documents (for need-based), and proof of language proficiency (like JLPT or IELTS). We help you prepare each document to meet scholarship standards.",
      isOpen: false,
    },
    {
      id: 7,
      title: "Can I apply for multiple scholarships at once?",
      description:
        "Yes, in most cases you can apply for multiple scholarships, but you may only accept one major financial aid offer. We help you prioritize high-value scholarships and understand their terms so you don’t miss better opportunities while applying.",
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionId) => {
    const updatedAccordions = accordion.map((accord) =>
      accord.id === accordionId
        ? { ...accord, isOpen: !accord.isOpen }
        : { ...accord, isOpen: false }
    );
    setAccordion(updatedAccordions);
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Frequenty Asked Questions related to{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              Scholarshop & Financial Aids
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ullam velit nihil eaque modi nemo distinctio id veniam, quae
            incidunt.
          </p>
        </div>
        <div className="space-y-2">
          {accordion.map((accor) => (
            <Accordion
              key={accor.id}
              id={accor.id}
              title={accor.title}
              description={accor.description}
              isOpen={accor.isOpen}
              toggleAccordion={() => toggleAccordion(accor.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
