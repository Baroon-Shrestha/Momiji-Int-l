import React from "react";
import img1 from "../../../assets/Images/img10.jpeg";
import img2 from "../../../assets/Images/img10.jpeg";
import img3 from "../../../assets/Images/img10.jpeg";
import { div } from "framer-motion/client";

const cardData = [
  {
    id: 1,
    image: img3,
    icon: "🎓",
    title: "Language Classes",
    description:
      "Learn Japanese with expert guidance and interactive sessions. Master grammar, vocabulary, and conversation skills through immersive learning experiences.",
  },
  {
    id: 2,
    image: img1,
    icon: "🎌",
    title: "Cultural Immersion",
    description:
      "Discover the rich traditions and customs of Japan. Experience authentic cultural practices, festivals, and traditional arts in our immersive programs.",
  },
  {
    id: 3,
    image: img2,
    icon: "🏯",
    title: "Study Abroad",
    description:
      "Take your learning to the next level with our study abroad programs in Japan. Live with host families and experience daily life in Japan.",
  },
];

export default function Find() {
  return (
    <div className="my-16">
      <div className="container mx-auto px-4 py-8">
        <div>
          {/* Header Section */}
          <div className="flex flex-row md:flex-col gap-4 items-center justify-around mb-12 text-center md:text-left">
            <div className="text-4xl md:text-4xl font-bold mb-4 md:mb-0">
              Start your journey
            </div>
            <div className="text-xl font-extralight text-center">
              At Momiji, we teach Japanese language and culture through
              immersive experiences
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="group relative h-60 w-full perspective-1000"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
                      <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>
                      <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
                      <div className="w-16 h-1 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden rotate-y-180 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 z-10">
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="font-bold text-xl mb-4">{card.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <p className="text-sm text-gray-500">
              Tap cards to see more details
            </p>
          </div>
        </div>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }

          /* Mobile touch enhancements */
          @media (max-width: 768px) {
            .group:active .group-hover\\:rotate-y-180 {
              transform: rotateY(180deg);
            }

            .group {
              cursor: pointer;
            }
          }

          /* Enhanced animations for mobile */
          @media (hover: none) and (pointer: coarse) {
            .group:active .group-hover\\:rotate-y-180 {
              transform: rotateY(180deg);
            }

            .group:active .group-hover\\:scale-110 {
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
