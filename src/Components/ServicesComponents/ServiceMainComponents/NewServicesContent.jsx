import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Merit-Based Scholarship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus veritatis doloremque odit, nemo quos nisi laudantium? Similique ex esse laboriosam ducimus accusamus, quasi corrupti repellendus, assumenda dicta, blanditiis eveniet aperiam aliquid ipsa cupiditate. Enim culpa ipsum quia fugit, similique suscipit alias eum aut sequi, veritatis provident, a perspiciatis voluptatem?",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Need-Based Scholarship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at itaque veniam nihil, quaerat assumenda ex qui cumque pariatur voluptatibus distinctio quia eum repellendus molestias! Libero architecto nisi neque quae consequuntur debitis! Alias ex hic, velit minus et ut, atque ad optio minima molestias officia similique amet quisquam recusandae sit!",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Language Proficiency Scholarships",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum vel dolores harum sint inventore explicabo saepe aspernatur mollitia, tenetur molestiae asperiores impedit. Dolorem eveniet nemo ipsam minus doloribus iusto ipsum laboriosam! Saepe, repudiandae ex quas reprehenderit voluptas pariatur molestiae amet provident totam explicabo ipsam quia, consectetur laborum assumenda error.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
];

export default function NewServicesContent() {
  return (
    <>
      <div className="container mx-auto px-4 pb-12" id="services-container">
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={service.id} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-6 transition-all duration-700 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="flex-1 lg:px-8">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] lg:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 lg:px-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 py-8 rounded-full flex items-center justify-center font-extrabold text-7xl opacity-40">
                        {service.id}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xl lg:text-2xl font-bold">
                          {service.title}
                        </div>
                        <div className="pt-2">
                          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
