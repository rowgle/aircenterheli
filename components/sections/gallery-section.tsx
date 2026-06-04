"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777470839/220629-N-DW158-1064_leymoi.jpg", alt: "H225 Pre-mission preparation" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780060732/N591AC_2022_H225_008_jzkujy.jpg", alt: "B407 Venice operations" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780599283/2021_FlyingPair_Hoist_001_rigma0.jpg", alt: "Helicopter operations" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780060526/N591AC_2022_H225_006_cf9llz.jpg", alt: "AS350 Antarctica operations" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777320602/thumbnail_Image-1_1_-2_b5oswg.jpg", alt: "H225 in flight" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1775505708/201229-N-NH257-1095_zafryx.jpg", alt: "H225 Hoist operations" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1777403442/2021_H225_FlyingPair_Hoist_001_fwcmpn.jpg", alt: "H225 Flying pair hoist" },
    { src: "https://res.cloudinary.com/dtbz0xaw6/image/upload/v1780598596/N552AC_2019_H225_002_xtmrk2.jpg", alt: "Air Center mission support" },
  ];

  // Calculate section height based on content width
  useEffect(() => {
    const calculateHeight = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // Height = viewport height + the extra scroll needed to reveal all content
      const totalHeight = viewportHeight + (containerWidth - viewportWidth);
      setSectionHeight(`${totalHeight}px`);
    };

    // Small delay to ensure container is rendered
    const timer = setTimeout(calculateHeight, 100);
    window.addEventListener("resize", calculateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // Total scroll distance needed to reveal all images
    const totalScrollDistance = containerWidth - viewportWidth;
    
    // Current scroll position within this section
    const scrolled = Math.max(0, -rect.top);
    
    // Progress from 0 to 1
    const progress = Math.min(1, scrolled / totalScrollDistance);
    
    // Calculate new translateX
    const newTranslateX = progress * -totalScrollDistance;
    
    setTranslateX(newTranslateX);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  return (
    <section 
      id="fleet"
      ref={galleryRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          {/* Horizontal scrolling container */}
          <div 
            ref={containerRef}
            className="flex gap-6 px-6"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: 1000,
              WebkitPerspective: 1000,
              touchAction: 'pan-y',
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw]"
                style={{
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
