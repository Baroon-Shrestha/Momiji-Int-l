import React from "react";
import img1 from "../../assets/Images/img1.jpeg";

export default function Introduction() {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-[#F78C1F]">MOMIJI INTERNATIONAL ACADEMY</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
            Leading students to a bright future in JAPAN.
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bolder text-center text-gray-700 max-w-7xl">
          Momiji International Academy warmly welcomes you to a place where
          dreams take flight and futures are shaped. As an institution committed
          to guiding students on their journey to Japan, we provide expert
          support in education, language training, cultural adaptation, and
          career development. <br />
          <br />
          <b>Our mission</b> is simple — to open doors for Nepali students and
          job seekers who aspire to build a better future in Japan. Whether
          you're interested in nursing care, food service, civil engineering, or
          academic studies, we are here to walk beside you every step of the
          way. At Momiji, we believe that education is more than just books — it
          is preparation for life. That’s why we offer both online and offline
          support, real-time counseling, job interview preparation, and language
          courses designed to help you succeed in Japan's competitive and
          dynamic environment. We understand that moving abroad is a big step.
          That’s why we are not just a consultancy — we are a family. A family
          that listens, guides, and stands by you from the first inquiry to your
          successful settlement in Japan. Thousands of students have already
          taken the step forward with Momiji.
          <br />
          <br />
          <span className="text-[#F78C1F] font-bold">
            Now, it’s your turn. Join us. Let’s build your future together.{" "}
          </span>
          <br />{" "}
          <span className="font-extralight text-center">
            "Your journey to Japan begins at Momiji."
          </span>
        </p>

        <img
          src={img1}
          alt="Momiji Academy"
          className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] object-cover object-bottom rounded-2xl"
        />
      </div>
    </div>
  );
}
