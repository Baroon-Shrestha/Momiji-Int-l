import React from "react";

export default function OurVision() {
  // Placeholder images - replace with your actual image imports
  const visionImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  const coffeeImage =
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="bg-gray-50">
      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam ut vel numquam ratione! Non quidem cum ipsam harum,
                  autem necessitatibus delectus eveniet dicta explicabo rerum
                  itaque quisquam quaerat blanditiis at commodi vel quam quae.
                  Minus saepe accusamus nobis aspernatur ut!
                </p>
                <p className="mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore ducimus excepturi fuga doloribus adipisci alias
                  delectus porro perferendis animi quaerat architecto fugiat
                  illum error impedit dolorum libero, ea nesciunt necessitatibus
                  velit suscipit officiis nihil dolor. Doloremque iusto
                  consequuntur aspernatur soluta!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>First:</strong> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Qui minus iusto itaque
                      pariatur modi similique.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Second:</strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Ullam fugiat sequi optio eum
                      earum dolorem ducimus aliquam, omnis nam aliquid.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Third:</strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Veniam velit tenetur quas
                      deleniti voluptatum modi sequi sapiente maiores sunt
                      excepturi?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={visionImage}
                  alt="Team collaboration representing our vision"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-2"></h3>
                  <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Hic, atque et quam, dolore, obcaecati voluptas facere
                    consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mx-2 md:mx-6 relative overflow-hidden bg-gradient-to-r from-[#FFE04F] to-[#FF8B0f] text-white rounded-4xl">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={coffeeImage}
                alt="Person enjoying coffee representing our mission"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="font-bold text-gray-900 mb-2"></h3>
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                  atque et quam, dolore, obcaecati voluptas facere consectetur
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:pl-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg leading-relaxed">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis quibusdam ipsa blanditiis veniam animi voluptatem
                  deleniti ab aperiam enim quae praesentium vero eum ipsam
                  nulla, consequatur, sequi aut. Ea unde ullam accusamus
                  eligendi voluptatibus delectus inventore a voluptatem quasi
                  mollitia!
                </p>
                <p className="mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati iste soluta asperiores omnis quam dolorum dicta
                  dolores et sunt voluptas, assumenda non aspernatur cumque,
                  laboriosam nemo! Maxime reiciendis cumque aliquid minima,
                  corrupti cum porro, sequi repellat quos eveniet earum quasi!
                </p>

                {/* Mission Points */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>First:</strong> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Qui minus iusto itaque
                      pariatur modi similique.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Second:</strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Ullam fugiat sequi optio eum
                      earum dolorem ducimus aliquam, omnis nam aliquid.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="">
                      <strong>Third:</strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Veniam velit tenetur quas
                      deleniti voluptatum modi sequi sapiente maiores sunt
                      excepturi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
