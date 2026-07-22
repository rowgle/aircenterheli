"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";

// Import the charter request modal
import CharterRequestForm from "@/components/charter-request-form";

export default function Home() {
  const [isCharterModalOpen, setIsCharterModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header 
        onCharterRequest={() => setIsCharterModalOpen(true)} 
      />

      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
      <FooterSection />

      {/* Charter Request Modal */}
      <CharterRequestForm 
        isOpen={isCharterModalOpen} 
        onClose={() => setIsCharterModalOpen(false)} 
      />
    </main>
  );
}
