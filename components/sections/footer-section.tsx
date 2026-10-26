"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Aircraft Management", href: "/aircraft-management" },
    { label: "Technical Training", href: "/capabilities#training" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Fleet", href: "/#fleet" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Disclaimers", href: "/disclaimers" },
    { label: "Supplier Code of Conduct", href: "/supplier-code-of-conduct" },
    { label: "Export Control", href: "/export-control" },
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
            <Link href="/">
              <Image
                src="/images/usa-achi-logo.png"
                alt="Air Center Helicopters"
                width={280}
                height={80}
                className="h-auto w-full max-w-[200px] object-contain"
              />
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
            <h4 className="mb-4 text-sm font-semibold text-foreground">SERVICES</h4>
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
            <h4 className="mb-4 text-sm font-semibold text-foreground">COMPANY</h4>
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

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
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
            © 2026 Air Center Helicopters. All rights reserved. | Designed by{" "}
            <a
              href="https://rowgle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff6600] transition-colors"
            >
              Rowgle
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            <span>Fly America Act</span>
            <span className="text-muted-foreground/40">|</span>
            <span>Buy American Act</span>
            <span className="text-muted-foreground/40">|</span>
            <span>ITAR/EAR Compliant</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/aircenterheli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              X
            </Link>
            <Link
              href="https://www.instagram.com/aircenterhelicopters/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/aircenter"
              target="_blank"
              rel="noopener noreferrer"
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