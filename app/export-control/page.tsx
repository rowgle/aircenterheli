"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { HighlightText } from "@/components/highlight-text";

export default function ExportControlPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Back to Home */}
      <div className="pt-8 px-8">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            HOME
          </a>
        </div>
      </div>

      {/* Page Title */}
      <div className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-black/60 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            AIR CENTER HELICOPTERS
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            <HighlightText>EXPORT CONTROL</HighlightText>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <section className="mb-20">
          <div className="space-y-6 text-black/80 leading-relaxed">
            <p>
              Certain technical data, software, and services associated with Air Center Helicopters, Inc. (“ACHI”) operations may be controlled under the International Traffic in Arms Regulations (ITAR) or the Export Administration Regulations (EAR).
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Controlled Information
            </h2>
            <p>
              Access to ITAR- or EAR-controlled technical data, drawings, software, or services is restricted to U.S. persons unless authorized by the appropriate U.S. Government agency. No controlled technical data is intentionally published on this website. If you believe you have received controlled information in error, do not further disseminate it and contact ACHI immediately.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Export Authorization
            </h2>
            <p>
              Export, re-export, or transfer of defense articles, technical data, or defense services controlled under ITAR requires prior authorization from the U.S. Department of State, Directorate of Defense Trade Controls, unless an exemption applies. Items controlled under the EAR require authorization from the U.S. Department of Commerce, Bureau of Industry and Security, as applicable.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Company Status
            </h2>
            <p>
              Air Center Helicopters, Inc. is a U.S.-owned company and maintains compliance with applicable export control requirements, including ITAR and EAR. Facility access, visitor procedures, and technical data handling are managed under ACHI’s technology control and security programs.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Contact
            </h2>
            <p>
              Questions regarding export control, ITAR, or technical data handling may be directed to{" "}
              <a href="mailto:contact@achi-tx.com" className="underline hover:text-black">
                contact@achi-tx.com
              </a>.
            </p>
          </div>
        </section>

        <p className="mt-16 text-sm text-black/50">
          Last updated: October 2026
        </p>
      </div>

      <FooterSection />
    </main>
  );
}