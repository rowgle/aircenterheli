"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onCharterRequest?: () => void;
}

export function Header({ onCharterRequest }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCharterClick = () => {
    console.log("CHARTER REQUEST button clicked!");
    if (onCharterRequest) {
      onCharterRequest();
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled
          ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoblack.png"
            alt="Air Center Helicopters"
            width={240}
            height={80}
            className={`h-16 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="#services"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="#capabilities"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Capabilities
          </Link>
          <Link
            href="#fleet"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Fleet
          </Link>
          <Link
            href="#credentials"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Credentials
          </Link>
          <Link
            href="#about"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={`text-sm transition-colors ${
              isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            onClick={handleCharterClick}
            className={`px-4 py-2 text-sm font-heading font-black transition-all rounded-full ${
              isScrolled
                ? "bg-foreground text-background hover:opacity-80"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            CHARTER REQUEST
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link href="#services" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#capabilities" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Capabilities
            </Link>
            <Link href="#fleet" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Fleet
            </Link>
            <Link href="#credentials" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Credentials
            </Link>
            <Link href="#about" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/careers" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>

            {/* Mobile Charter Request Button */}
            <button
              onClick={handleCharterClick}
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-heading font-black text-background rounded-full"
            >
              CHARTER REQUEST
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}