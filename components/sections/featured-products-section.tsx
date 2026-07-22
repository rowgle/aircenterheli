"use client";

import { FadeImage } from "@/components/fade-image";

const services = [
  {
    title: "Expeditionary Airlift",
    description: "Contingency Operations",
    image: "/images/evacuationpolice.jpg",
  },
  {
    title: "Ship-Based Services",
    description: "Vertical Replenishment",
    image: "/images/hookem.jpg",
  },
  {
    title: "Personnel Recovery & SAR",
    description: "Search and Rescue",
    image: "/images/rainbowboat.jpg",
  },
  {
    title: "MEDEVAC / CASEVAC",
    description: "Medical Evacuation",
    image: "/images/prcasevac.jpg",
  },
  {
    title: "Aircraft Management",
    description: "Fleet Operations & Maintenance",
    image: "/images/mechanicsun.jpg",
  },
  {
    title: "Technical Training",
    description: "Pilots & Maintenance",
    image: "/images/simlegs.jpg",
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
