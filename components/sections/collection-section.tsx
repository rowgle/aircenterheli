"use client";

import { FadeImage } from "@/components/fade-image";
import { Shield, Award, FileCheck, Plane, Flame, CheckCheck, Wrench, Weight, Anchor, Biohazard } from "lucide-react";

const credentials = [
  {
    id: 1,
    name: "DoD CARB Approved",
    description: "Air Carrier approved since 1991",
    icon: Plane,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780070584/2007_B407_002_viiddc.jpg",
  },
  {
    id: 2,
    name: "FAA Part 135",
    description: "HAA, NVG, IFR & HAZMAT Operations",
    icon: Biohazard,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780070688/image13_jfrxf1.jpg",
  },
  {
    id: 3,
    name: "FAA Part 133",
    description: "External Loads A, B, C, D certified",
    icon: Weight,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780071126/N582AC_2021_H225_Hoist_VERTREP_003_qm5grq.jpg",
  },
  {
    id: 4,
    name: "FAA Part 137",
    description: "Aerial Firefighting certified",
    icon: Flame,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777479970/USPH-0023-0350_l4phot.jpg",
  },
  {
    id: 5,
    name: "FAA Part 145 MRO",
    description: "Repair Facility certified",
    icon: Wrench,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777390459/USPH-0023-0277_okpqby.jpg",
  },
  {
    id: 6,
    name: "Navy DLQ Certified",
    description: "Day/Night Deck Landing Qualification",
    icon: Anchor,
    image: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780599414/NAVCENT_Det_Oct_29_2023_foh7mx.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="credentials" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Certifications & Credentials
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          ITAR/EAR Compliant. Department of Interior Carded Aircraft & Crews.
        </p>
      </div>

      {/* Credentials Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {credentials.map((credential) => (
            <div key={credential.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={credential.image || "/placeholder.svg"}
                  alt={credential.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {credential.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {credential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {credentials.map((credential) => (
            <div key={credential.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={credential.image || "/placeholder.svg"}
                  alt={credential.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {credential.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {credential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
