import React from "react";
import TestimonialCarousel from "../HelperComponents/TestimonialCarousel";
import { useTranslation } from "react-i18next";

const img1 =
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop&crop=center";
const img2 =
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop&crop=center";
const img3 =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop&crop=center";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t("home.testimonials.items", { returnObjects: true });

  const testimonialsWithImages = testimonials.map((item, index) => ({
    ...item,
    logo: [img1, img2, img3][index],
  }));

  return (
    <TestimonialCarousel
      title={t("home.testimonials.title")}
      subtitle={t("home.testimonials.subtitle")}
      testimonials={testimonialsWithImages}
    />
  );
}
