import React from "react";
import AccordionSlider from "../../HelperComponents/AccordionSlider";
import { CheckCircle } from "lucide-react";

export default function Why() {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why Choose Us?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl font-extralight mx-auto">
            We treat your dream like our own. When you choose us, you’re not
            just getting a consultancy — you’re gaining a committed partner for
            your future.
          </p>
        </div>
        <AccordionSlider />
      </div>
    </>
  );
}
