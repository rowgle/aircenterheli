"use client";

import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Expeditionary Airlift", href: "#services" },
    { label: "Ship-Based Services", href: "#capabilities" },
    { label: "Personnel Recovery", href: "#capabilities" },
    { label: "Technical Training", href: "#capabilities" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Credentials", href: "#credentials" },
    { label: "Fleet", href: "#fleet" },
    { label: "Careers", href: "/careers" },
  ],
  contact: [
    { label: "Headquarters", href: "#" },
    { label: "Spinks Airport", href: "#" },
    { label: "Burleson, TX", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export function FooterSection() {
  return (
    <footer id="contact" className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-semibold text-foreground">
              AIR CENTER HELICOPTERS, INC.
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Over 40 years of aviation support excellence. U.S. owned and operated helicopter services for government, defense, and commercial customers worldwide.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Spinks Airport | Burleson, TX
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Air Center Helicopters. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Fly America Act</span>
            <span>|</span>
            <span>Buy American Act</span>
            <span>|</span>
            <span>ITAR/EAR Compliant</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="mailto:contact@achi-tx.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              contact@achi-tx.com
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
