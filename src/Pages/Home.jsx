import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import img1 from "../assets/Images/img1.jpeg";
import img2 from "../assets/Images/img2.jpeg";
import img3 from "../assets/Images/img3.jpeg";
import img4 from "../assets/Images/img4.jpeg";
import img5 from "../assets/Images/img5.jpeg";
import Introduction from "../Components/HomeComponents/Introduction";
import Services from "../Components/HomeComponents/Services";
import WhyChooseUS from "../Components/HomeComponents/WhyChooseUS";
import FeaturedUniversities from "../Components/HomeComponents/FeaturedUniversities";
import SmallGallery from "../Components/HomeComponents/SmallGallery";
import GetInTouch from "../Components/HomeComponents/GetInTouch";
import Testimonials from "../Components/HomeComponents/Testimonials";

import patternBg from "../assets/pattern.png";

const customHeroImages = [
  {
    url: img1,
    title: "Start you journey with us.",
    subtitle: "Your custom subtitle description here",
  },
  {
    url: img2,
    title: "Join us in your coming educational journey",
    subtitle: "Another engaging subtitle for your business",
  },
  {
    url: img3,
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
  {
    url: img4,
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
  {
    url: img5,
    title: "Wnat to study in japan",
    subtitle: "Professional description of your services",
  },
];
export default function Home() {
  return (
    <div className="">
      <HeroSection
        images={customHeroImages}
        autoPlayInterval={5000}
        height="80vh"
      />
      <Introduction />
      <Services />
      <WhyChooseUS />
      <FeaturedUniversities />
      {/* <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white"> */}
      <SmallGallery />
      {/* </div> */}
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
