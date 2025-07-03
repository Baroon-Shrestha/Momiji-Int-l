import React from "react";
import Carousel from "../../HelperComponents/Carousel";

export default function Universities() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-[#FFFAE9] mx-2 md:mx-6 rounded-4xl py-12">
        <div className="container mx-auto my-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-12 pointer-events-none">
            <span className="text-8xl md:text-[12rem] lg:text-[15rem] font-extrabold text-wite opacity-10 select-none whitespace-nowrap">
              Partners
            </span>
          </div>

          {/* Header Section */}
          <div className="flex items-center justify-center flex-col gap-6 pb-16 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-whte">
                Affiliated Universities
              </h2>
              <div className="w-24 h-1 bg-[#FFFAE9] mx-auto rounded-full"></div>
            </div>
            <p className="max-w-3xl text-center text-lg font-extralight leading-relaxed">
              Prestigious partnerships with renowned institutions that provide
              our students with exceptional opportunities for academic
              excellence, research collaboration, and exposure.
            </p>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}
