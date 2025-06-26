import React from "react";
import TestimonialCarousel from "../HelperComponents/TestimonialCarousel";

const img1 =
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop&crop=center";
const img2 =
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop&crop=center";
const img3 =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop&crop=center";

const testimonialsData = [
  {
    name: "ABC University",
    logo: img1,
    description:
      "An exceptional institution that transformed my academic journey. The quality of education, research opportunities, and networking possibilities exceeded all my expectations.",
    student: "Sarah Johnson",
    degree: "Computer Science",
  },
  {
    name: "DEF University",
    logo: img2,
    description:
      "The innovation hub of the world! My experience here was nothing short of extraordinary. The entrepreneurial spirit, cutting-edge research facilities, and collaborative environment fostered my growth immensely.",
    student: "Michael Chen",
    degree: "Engineering",
  },
  {
    name: "HIJ University",
    logo: img3,
    description:
      "Where impossible becomes possible. The rigorous academic program challenged me to think differently and approach problems from multiple angles.",
    student: "Emily Rodriguez",
    degree: "Physics",
  },
];

export default function Testimonials() {
  return (
    <TestimonialCarousel
      title="Testimonials"
      subtitle="Discover what our students say about their transformative educational journey"
      testimonials={testimonialsData}
    />
  );
}
