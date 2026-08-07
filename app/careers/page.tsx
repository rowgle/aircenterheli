"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { useState } from "react";
import Image from "next/image";

export default function CareersPage() {
  const [openPosition, setOpenPosition] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const positions = [
    {
      id: "ap-mechanic",
      title: "A&P Mechanic (Part 145)",
      location: "Burleson, TX (Spinks Airport)",
      type: "Full-Time",
      department: "Maintenance",
      experience: "2+ years recent helicopter experience",
      description:
        "Air Center Helicopters is accepting resumes for licensed A&P Helicopter Mechanics to fill immediate openings at the Burleson, Texas location. Ideal candidates will have 2yrs recent helicopter experience, FAR Part 135/Part 145 experience preferred. Airbus AS350, EC225/AS332, Bell 206, 212/412 experience is a plus. Relocation assistance available for the right candidates. Preference will be given to applicants with verifiable Sheet Metal experience. Part 135 positions will require travel up to 50% of the time.",
      requirements: [
        "Candidates must hold an A&P License",
        "Candidates must be US citizens",
        "FAA Part 135/145 experience preferred",
        "Must be familiar with FAA Regulations and Standards",
        "Must be able to multi task and handle a fast paced environment",
        "Must be able to travel at short notice",
        "Maintenance and Modification experience",
        "Avionics installation experience",
        "Sheet metal experience",
      ],
    },
    {
      id: "PIC",
      title: "VertRep SIC Pilot (H225)",
      location: "Fort Worth, TX + Worldwide Deployments",
      type: "Full-Time",
      department: "Flight Operations",
      experience: "1,500 Helicopter Flight Hours",
      description:
        "As an H225 Vertical Replenishment Second in Command pilot, you'll be joining an elite group of aviators providing global airlift support services to the U.S. Navy and the Department of Defense supporting their Combat Logistics Force ships that are deployed worldwide. In this position, you'll be instrumental in upholding Air Center's reputation for operational and performance excellence while maintaining unparalleled safety and operational readiness. Rotational Schedule is 45 days on/45 days off.",
      requirements: [
        "1,500 Helicopter flight hours",
        "100 hrs flight time within the past 12 months",
        "Current FAA Class II Medical Certificate",
        "Must be able to obtain/maintain DOD Secret Clearance",
        "External load experience",
        "Night flying experience (NVG)",
        "Experience with Offshore Operations, Shipboard, VERTREP or other Navy Operations",
        "Type-certificated with multi-engine aircraft H225 (similar size) flying with a two-pilot (PIC/SIC) operation",
        "Must be a US Citizen",
      ],
    },
  ];

  const filteredPositions =
    filter === "All"
      ? positions
      : positions.filter((pos) => pos.department === filter);

  const openApplyModal = (job: any) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add a clear subject line for Formspree emails
    formData.append(
      "_subject",
      `Job Application: ${selectedJob?.title || "General Application"}`
    );

    try {
      const response = await fetch("https://formspree.io/f/meajobla", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        setTimeout(() => {
          setShowApplicationModal(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again or email careers@achi-tx.com");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* Page Title */}
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-black/60 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            AIR CENTER HELICOPTERS
          </p>
          <h1 className="ach-heading text-5xl md:text-6xl lg:text-7xl">
            OPEN POSITIONS
          </h1>
        </div>
      </div>

      {/* Simple Filter */}
      <div className="max-w-6xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {["All", "Maintenance", "Flight Operations", "Management"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Open Positions */}
      <section id="open-positions" className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-6">
            {filteredPositions.map((pos) => (
              <div
                key={pos.id}
                className="border border-gray-200 rounded-3xl p-8 md:p-10 cursor-pointer hover:border-black transition-all duration-300"
                onClick={() =>
                  setOpenPosition(openPosition === pos.id ? null : pos.id)
                }
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {pos.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {pos.location} • {pos.type}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openApplyModal(pos);
                    }}
                    className="px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium self-start"
                  >
                    Apply Now
                  </button>
                </div>

                {openPosition === pos.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200 text-gray-700">
                    <p className="mb-6 text-lg leading-relaxed">
                      {pos.description}
                    </p>
                    <p className="mb-3">
                      <strong>Experience Required:</strong> {pos.experience}
                    </p>
                    <p className="mb-2 font-medium">Key Requirements:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-8">
                      {pos.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplyModal(pos);
                      }}
                      className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                      Submit Application
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              No positions currently available in this category.
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-black/60 text-sm uppercase tracking-[0.3em] mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="ach-heading text-4xl md:text-5xl">
              BENEFITS & SUPPORT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Compensation & Retirement
                </h3>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li>• Competitive base salary aligned with industry standards</li>
                  <li>• Performance-based incentives where applicable</li>
                  <li>• 401(k) plan with company matching contributions</li>
                  <li>• Opportunities for advancement and long-term career growth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li>• Comprehensive medical, dental, and vision coverage</li>
                  <li>• Company-supported wellness initiatives</li>
                  <li>• Access to mental health resources</li>
                  <li>• Flexible options designed for active professionals</li>
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Time Off & Flexibility
                </h3>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li>• Paid time off and company holidays</li>
                  <li>• Support for work-life balance across operational demands</li>
                  <li>• Paid leave for qualifying life events</li>
                  <li>• Schedule considerations for deployment and training cycles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Professional Development
                </h3>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li>• Access to the only H225 Level D full-motion simulator in the U.S.</li>
                  <li>• Structured recurrent training and certification support</li>
                  <li>• Opportunities for advanced ratings and specialized qualifications</li>
                  <li>• Mentorship and continuous learning culture</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Benefits are designed to support both our domestic and deployed team
              members. Specific packages may vary by position and location. Full
              details are provided during the onboarding process.
            </p>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="ach-heading text-3xl md:text-4xl mb-6">
            DON’T SEE YOUR ROLE?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            We’re always interested in hearing from talented professionals. Send us
            your resume and tell us how you can contribute.
          </p>
          <button
            onClick={() =>
              openApplyModal({
                title: "General Application",
                location: "Fort Worth, TX",
              })
            }
            className="px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-medium"
          >
            Submit General Application
          </button>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6">
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="p-8 border-b flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">
                  Apply for {selectedJob.title}
                </h2>
                <p className="text-gray-600 mt-1">{selectedJob.location}</p>
              </div>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="text-3xl text-gray-400 hover:text-black leading-none"
              >
                ×
              </button>
            </div>

            {/* Success State */}
            {submitSuccess ? (
              <div className="p-16 text-center">
                <p className="text-2xl font-semibold mb-3">Application Received</p>
                <p className="text-gray-600">
                  Thank you. We’ll review your application and be in touch soon.
                </p>
              </div>
            ) : (
              /* Form */
              <form
                className="flex-1 overflow-y-auto p-8 space-y-8"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <input type="hidden" name="position" value={selectedJob.title} />

                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                    />
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="LinkedIn Profile (optional)"
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black md:col-span-2"
                    />
                  </div>
                </div>

                {/* Location & Availability */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Location & Availability
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="location"
                      placeholder="Current City / State *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                    />
                    <select
                      name="relocate"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black bg-white"
                    >
                      <option value="">Willing to relocate or deploy? *</option>
                      <option value="Yes – Fully">Yes – Fully</option>
                      <option value="Yes – Limited">Yes – Limited</option>
                      <option value="No">No</option>
                    </select>
                    <input
                      type="text"
                      name="start_date"
                      placeholder="Available Start Date (e.g. Immediately, 2 weeks, etc.) *"
                      required
                      className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black md:col-span-2"
                    />
                  </div>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Qualifications
                  </h3>
                  <div className="space-y-5">
                    <textarea
                      name="education"
                      rows={3}
                      placeholder="Highest education, certificates, and ratings (A&P, Commercial, Instrument, NVG, etc.) *"
                      required
                      className="w-full border border-gray-300 p-4 rounded-2xl resize-y focus:outline-none focus:border-black"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="years_experience"
                        placeholder="Years of Relevant Experience *"
                        required
                        className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black"
                      />
                      <select
                        name="clearance"
                        required
                        className="border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black bg-white"
                      >
                        <option value="">Security Clearance Status *</option>
                        <option value="None">None</option>
                        <option value="Secret">Secret</option>
                        <option value="Top Secret">Top Secret</option>
                        <option value="TS/SCI">TS/SCI</option>
                        <option value="Other / Eligible">Other / Eligible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Experience & Fit */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Experience & Fit
                  </h3>
                  <textarea
                    name="experience"
                    rows={5}
                    placeholder="Describe your relevant experience and why you are a strong fit for this role *"
                    required
                    className="w-full border border-gray-300 p-4 rounded-2xl resize-y focus:outline-none focus:border-black"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Resume
                  </h3>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full border border-gray-300 p-4 rounded-2xl"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                {/* Additional */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Additional Information
                  </h3>
                  <textarea
                    name="additional"
                    rows={3}
                    placeholder="Anything else you'd like us to know (optional)"
                    className="w-full border border-gray-300 p-4 rounded-2xl resize-y focus:outline-none focus:border-black"
                  />
                  <select
                    name="source"
                    className="w-full border border-gray-300 p-4 rounded-2xl focus:outline-none focus:border-black bg-white mt-5"
                  >
                    <option value="">How did you hear about this opportunity?</option>
                    <option value="Company Website">Company Website</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Employee Referral</option>
                    <option value="Job Board">Job Board</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT APPLICATION"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Equal Opportunity Note */}
      <div className="py-8 bg-white text-center text-sm text-gray-500">
        Air Center Helicopters is an Equal Opportunity Employer.
      </div>

      {/* Employee Gallery */}
<section className="w-full py-12 bg-white">
  <div className="max-w-[1400px] mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { src: "/images/nvgpersonnel.jpg", alt: "Air Center team member 01" },
        { src: "/images/bladedude.jpg", alt: "Air Center team member 02" },
        { src: "/images/careerscrew.jpg", alt: "Air Center team member 03" },
        { src: "/images/careerspilot2.jpg", alt: "Air Center team member 04" },
        { src: "/images/backender1.jpg", alt: "Air Center team member 05" },
        { src: "/images/backender2.jpg", alt: "Air Center team member 06" },
        { src: "/images/careerspilot3.jpg", alt: "Air Center team member 07" },
        { src: "/images/backender4.jpg", alt: "Air Center team member 08" },
        { src: "/images/careerspilot5.jpg", alt: "Air Center team member 09" },
      ].map((img, i) => (
        <div
          key={i}
          onClick={() => setLightboxImage(img)}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl group cursor-pointer"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>
      ))}
    </div>
  </div>

  {/* Lightbox Modal */}
  {lightboxImage && (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
      onClick={() => setLightboxImage(null)}
    >
      <button
        onClick={() => setLightboxImage(null)}
        className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-gray-300 transition-colors z-10"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )}
</section>

      <FooterSection />
    </main>
  );
}