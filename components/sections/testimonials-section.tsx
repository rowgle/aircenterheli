"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Air Center Helicopters maintains its aircraft operations, maintenance, and training facilities at Spinks Airport in Fort Worth, Texas. Our corporate headquarters is located in Burleson, Texas. From these strategic bases, we deliver turnkey aviation solutions — providing the right aircraft, properly configured, exactly where and when it’s needed.
        </p>
      </div>

      {/* Core Values */}
      <div className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-3">Safety</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Safe transportation of passengers and cargo with accident prevention and injury reduction as primary objectives.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-3">Quality</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Multi-pronged approach patterned on DoD CARB requirements with comprehensive internal audit programs.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-3">Risk Management</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Structured, documented methods for continuous improvement and proactive identification of safety risks.
            </p>
          </div>
        </div>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/goldenhour.jpg"
          alt="Air Center Helicopters Antarctica operations"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
