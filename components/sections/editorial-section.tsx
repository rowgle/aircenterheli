"use client";

const metrics = [
  { label: "Passengers", value: "93,000+" },
  { label: "Cargo (lbs)", value: "87.5M+" },
  { label: "Deck Landings", value: "18,000+" },
  { label: "External Loads", value: "31,700+" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Navy Contract Highlight */}
      <div className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Recent Contract Award
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-snug">
            $300M U.S. Navy Contract
          </h3>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Vertical replenishment services for Combat Logistics Force ships supporting Seventh and Fifth Fleet requirements through 2030.
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {metric.label}
            </p>
            <p className="font-semibold text-foreground text-3xl md:text-4xl">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Video */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/dtbz0xaw6/video/upload/v1780081807/2245-landing-page-v03_d2kllr.mp4"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
