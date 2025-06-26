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

        <p className="text-base sm:text-lg md:text-xl font-extralight text-center text-gray-700 max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          cupiditate suscipit officia id in veniam laudantium fuga ipsa
          voluptates, ratione minima aperiam ipsum asperiores laboriosam
          praesentium debitis totam dolor animi aut veritatis repudiandae ullam?
          Quas rerum iusto magni? Nostrum velit dolores eius obcaecati enim quod
          reprehenderit beatae cupiditate molestiae magni tempore iusto iure,
          consequuntur aliquid veritatis? Voluptatibus blanditiis nobis,
          exercitationem atque praesentium accusamus tempora, perferendis
          officiis omnis sunt ipsa aliquam dolorum illum veritatis ipsum optio
          porro magni cupiditate, quos vel laudantium eos eveniet amet!
          Excepturi, repellendus! Eligendi facilis architecto, amet earum
          perferendis illum, molestiae ab aperiam ut reprehenderit similique
          dolorem qui dolores obcaecati cumque animi aliquid et quod dignissimos
          nobis optio velit porro. Inventore, minus fugit.
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
