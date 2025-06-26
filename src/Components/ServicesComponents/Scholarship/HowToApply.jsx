import { CheckCircle } from "lucide-react";
import React from "react";

export default function HowToApply() {
  const process = [
    {
      id: 1,
      title: "Explore Scholarship Availablity",
      description:
        "Applicants must have a strong academic record and consistently high grades throughout their previous education.",
    },
    {
      id: 2,
      title: "Counseling Session",
      description:
        "Demonstrated Japanese or English proficiency (JLPT, IELTS, or TOEFL) depending on the program requirements.",
    },
    {
      id: 3,
      title: "Document Preparation",
      description:
        "A well-written study plan that clearly states your goals, motivations, and academic interests.",
    },
    {
      id: 4,
      title: "Application Submittion",
      description:
        "Applicants must have a clean disciplinary record and show respect for cultural and institutional values.",
    },
    {
      id: 5,
      title: "Interview Preparation",
      description:
        "Most institutions have a minimum age requirement, often 18 years or older at the time of enrollment.",
    },
  ];
  return (
    <>
      <div className="container mx-auto pb-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            How to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              Apply
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            possimus! Hic explicabo earum sunt possimus recusandae dolore optio
            nisi dolorem!
          </p>
        </div>
        <div>
          <div className="p-8">
            <ul className="space-y-6">
              {process.map((item, index) => (
                <li key={item.id} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
