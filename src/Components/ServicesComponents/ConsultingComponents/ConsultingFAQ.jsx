import React, { useState } from "react";
import Accordion from "../../HelperComponents/Accordion";
import { Award, BookOpen, Globe } from "lucide-react";

export default function ConsultingFAQ() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: "Do I need to know Japanese to study in Japan?",
      description:
        "Not necessarily. Many programs offer courses in English, but knowing Japanese is definitely a plus.",
      isOpen: false,
    },

    {
      id: 2,
      title: "How long does the application process take?",
      description:
        "It usually takes 3 to 6 months, including counseling, application, and visa processing.",

      isOpen: false,
    },
    {
      id: 3,
      title: "Can I apply without IELTS?",
      description:
        "Some institutions in Japan accept students without IELTS, especially if the medium of instruction was English.",

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
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              (FAQ's)
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quae pariatur sequi esse qui nostrum quia, deleniti sint vel
            aspernatur.
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
