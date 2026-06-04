"use client";

import { FadeImage } from "@/components/fade-image";

const services = [
  {
    title: "Expeditionary Airlift",
    description: "Contingency Operations",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777320884/53782420911_a8ec282f26_b-2_ixvjgc.jpg",
  },
  {
    title: "Ship-Based Services",
    description: "Vertical Replenishment",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780598596/N552AC_2019_H225_002_xtmrk2.jpg",
  },
  {
    title: "Personnel Recovery & SAR",
    description: "Search and Rescue",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780060557/N591AC_2022_H225_Hoist_016_2_qsjr6k.jpg",
  },
  {
    title: "MEDEVAC / CASEVAC",
    description: "Medical Evacuation",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780060980/1759258804005_dyxofn.jpg",
  },
  {
    title: "Aircraft Management",
    description: "Fleet Operations & Maintenance",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777479616/USPH-0023-0278_jjw2q6.jpg",
  },
  {
    title: "Technical Training",
    description: "Pilots & Maintenance",
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777485729/IMG_3011_iilxb4.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="capabilities" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Mission-Ready Capabilities.
          <br />
          Proven Performance.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Core Services
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {services.map((service) => (
          <div key={service.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {service.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
