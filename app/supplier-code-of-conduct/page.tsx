"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { HighlightText } from "@/components/highlight-text";

export default function SupplierCodeOfConductPage() {
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
            <HighlightText>SUPPLIER CODE OF CONDUCT</HighlightText>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <section className="mb-20">
          <div className="space-y-6 text-black/80 leading-relaxed">
            <p>
              Air Center Helicopters, Inc. (“ACHI,” “we,” “us,” or “our”) maintains a Supplier Code of Conduct that is published on this website and referenced on all purchase orders. Suppliers, subcontractors, and agents supporting ACHI work are expected to meet these standards.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Combating Trafficking in Persons
            </h2>
            <p>
              We expect our suppliers to not engage in the use of forced, bonded (including debt bondage) or indentured labor, involuntary prison labor, slavery, or trafficking of persons. This includes transporting, harboring, recruiting, transferring, or receiving vulnerable persons by means of threat, force, coercion, abduction, or fraud for the purpose of exploitation.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Additional Expectations
            </h2>
            <p>Suppliers are further expected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with all applicable laws and regulations related to labor, human trafficking, and forced labor, including FAR 52.222-50 where applicable.</li>
              <li>Flow these expectations down to their own suppliers and subcontractors supporting ACHI work.</li>
              <li>Maintain processes to detect, prevent, and address prohibited conduct in their operations and supply chain.</li>
              <li>Notify ACHI promptly of any credible information regarding a violation related to work performed for ACHI.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-4">
              Reporting
            </h2>
            <p>
              Questions about this code, or reports of suspected violations, may be directed to{" "}
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