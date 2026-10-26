"use client";

import { FooterSection } from "@/components/sections/footer-section";
import { HighlightText } from "@/components/highlight-text";

export default function DisclaimersPage() {
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
            <HighlightText>DISCLAIMERS</HighlightText>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        {/* Privacy Policy */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-black/80 leading-relaxed">
            <p>
              Air Center Helicopters, Inc. (“ACHI,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or submit information through our contact forms, career applications, or service request forms.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Information We Collect
            </h3>
            <p>
              We may collect personal information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company or organization name</li>
              <li>Information submitted through contact, charter, or service request forms</li>
              <li>Résumés and application materials submitted through our careers page</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p>
              We may also automatically collect limited technical information such as IP address, browser type, device type, referring URL, and pages visited. This information is used for site operation, security, and basic analytics.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              How We Use Your Information
            </h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and service requests</li>
              <li>Process employment applications</li>
              <li>Provide requested information about our services</li>
              <li>Operate, secure, and improve our website</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Information Sharing
            </h3>
            <p>
              We do not sell your personal information. We may share information with trusted service providers who assist us in operating our website or conducting business (such as hosting, form processing, or email delivery), or when required by law or to protect the rights and safety of ACHI and others.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Cookies and Similar Technologies
            </h3>
            <p>
              This website may use cookies and similar technologies that are necessary for basic site function, security, and understanding general usage. We do not use advertising or cross-context behavioral tracking cookies. You can control cookies through your browser settings. Blocking certain cookies may affect site functionality.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Form Submissions
            </h3>
            <p>
              By submitting a form on this website, you consent to ACHI using the information you provide to respond to your inquiry or process your application, as described in this Privacy Policy.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Data Security
            </h3>
            <p>
              We take reasonable measures to protect the personal information submitted to us. However, no method of transmission over the internet is 100% secure.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Contact Us
            </h3>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:contact@achi-tx.com" className="underline hover:text-black">
                contact@achi-tx.com
              </a>.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Terms of Use */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Terms of Use
          </h2>

          <div className="space-y-6 text-black/80 leading-relaxed">
            <p>
              By accessing and using the Air Center Helicopters website, you agree to the following terms and conditions.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Use of Website
            </h3>
            <p>
              This website is provided for informational purposes. Content on this site is subject to change without notice. While we strive to keep information accurate and up to date, we make no warranties regarding the completeness or accuracy of the content. Nothing on this site constitutes an offer to enter into a contract, a guarantee of service availability, or professional, legal, or regulatory advice.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Intellectual Property
            </h3>
            <p>
              All content on this website, including text, graphics, logos, images, and design elements, is the property of Air Center Helicopters, Inc. or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this site without prior written permission.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Limitation of Liability
            </h3>
            <p>
              Air Center Helicopters shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or any information contained herein.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              External Links
            </h3>
            <p>
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party sites.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Governing Law
            </h3>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Changes to These Terms
            </h3>
            <p>
              We reserve the right to update these Terms of Use at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Contact
            </h3>
            <p>
              For questions regarding these Terms of Use, please contact us at{" "}
              <a href="mailto:contact@achi-tx.com" className="underline hover:text-black">
                contact@achi-tx.com
              </a>.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Additional Notices */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Additional Notices
          </h2>

          <div className="space-y-6 text-black/80 leading-relaxed">
            <h3 className="text-lg font-semibold text-black mt-2 mb-3">
              Export Control
            </h3>
            <p>
              Certain technical data and services related to ACHI operations may be controlled under the International Traffic in Arms Regulations (ITAR) or the Export Administration Regulations (EAR). No controlled technical data is intentionally published on this website. For more information, see our{" "}
              <a href="/export-control" className="underline hover:text-black">
                Export Control notice
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              Supplier Standards
            </h3>
            <p>
              ACHI maintains a Supplier Code of Conduct that is published on this website and referenced on purchase orders. Suppliers and subcontractors are expected to comply. See our{" "}
              <a href="/supplier-code-of-conduct" className="underline hover:text-black">
                Supplier Code of Conduct
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-black mt-10 mb-3">
              No Controlled or Classified Information
            </h3>
            <p>
              Do not submit classified information, controlled unclassified information, or export-controlled technical data through any form or email address on this website. Use only authorized channels for such information.
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <p className="mt-16 text-sm text-black/50">
          Last updated: October 2026
        </p>
      </div>

      <FooterSection />
    </main>
  );
}