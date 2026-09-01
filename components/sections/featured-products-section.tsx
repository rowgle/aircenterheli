"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";

const services = [
  {
    title: "Expeditionary Airlift",
    description: "Contingency Operations",
    image: "/images/evacuationpolice.jpg",
    href: "/capabilities#airlift",
  },
  {
    title: "Ship-Based Services",
    description: "Vertical Replenishment",
    image: "/images/hookem.jpg",
    href: "/capabilities#ship",
  },
  {
    title: "Personnel Recovery & SAR",
    description: "Search and Rescue",
    image: "/images/rainbowboat.jpg",
    href: "/capabilities#sar",
  },
  {
    title: "MEDEVAC / CASEVAC",
    description: "Medical Evacuation",
    image: "/images/prcasevac.jpg",
    href: "/capabilities#medevac",
  },
  {
    title: "Aircraft Management",
    description: "Fleet Operations & Maintenance",
    image: "/images/mechanicsun.jpg",
    href: "/aircraft-management",
  },
  {
    title: "Technical Training",
    description: "Pilots & Maintenance",
    image: "/images/simlegs.jpg",
    href: "/capabilities#training",
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
        {services.map((service) => {
          const card = (
            <>
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

                {/* Clickable cue — only shows when linked */}
                {"href" in service && service.href && (
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
                      View page →
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="py-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {service.description}
                </p>
                <h3
                  className={`text-xl font-semibold text-foreground transition-colors duration-300 ${
                    "href" in service && service.href
                      ? "group-hover:text-foreground/70"
                      : ""
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            </>
          );

          if ("href" in service && service.href) {
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 rounded-2xl"
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={service.title} className="group">
              {card}
            </div>
          );
        })}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20" />
    </section>
  );
}