"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { useState } from "react";


export default function CareersPage() {
  const [openPosition, setOpenPosition] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [filter, setFilter] = useState("All");

  const positions = [
    {
      id: "ap-mechanic",
      title: "A&P Mechanic (Part 145)",
      location: "Fort Worth, TX (Spinks Airport)",
      type: "Full-Time",
      department: "Maintenance",
      experience: "3+ years",
      description:
        "Join our FAA Part 145 Repair Station team maintaining H225, AS350, and Bell 412 helicopters. You will perform scheduled and unscheduled maintenance, inspections, and repairs to keep our fleet mission-ready.",
      requirements: [
        "Current A&P certificate",
        "Experience with Airbus and/or Bell platforms preferred",
        "Strong attention to detail and documentation skills",
        "Ability to work in a fast-paced, safety-focused environment",
      ],
    },
    {
      id: "PIC",
      title: "Pilot Second in Command",
      location: "Fort Worth, TX + Worldwide Deployments",
      type: "Full-Time",
      department: "Flight Operations",
      experience: "Commercial Certificate + 1,500 hours",
      description:
        "Fly charter, utility, SAR, and expeditionary missions. Experience with Airbus H225, AS350, or Bell 412 is a plus. Deployments may include austere and shipboard environments.",
      requirements: [
        "Commercial Helicopter Certificate with Instrument Rating",
        "1,500 total helicopter hours preferred",
        "NVG experience preferred",
        "Clean FAA and medical record",
      ],
    },
    {
      id: "avionics-technician",
      title: "Avionics Technician",
      location: "Fort Worth, TX",
      type: "Full-Time",
      department: "Maintenance",
      experience: "2+ years",
      description:
        "Install, troubleshoot, and maintain advanced avionics systems on modern helicopter platforms. Work closely with the Part 145 team to keep aircraft fully mission capable.",
      requirements: [
        "Avionics experience on rotorcraft preferred",
        "Familiarity with glass cockpits and modern avionics suites",
        "Strong troubleshooting and diagnostic skills",
        "Ability to read and interpret wiring diagrams",
      ],
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      location: "Fort Worth, TX",
      type: "Full-Time",
      department: "Management",
      experience: "5+ years",
      description:
        "Lead flight operations, scheduling, and compliance for charter and government contract programs. Ensure safe, efficient, and regulatory-compliant operations.",
      requirements: [
        "Strong background in helicopter operations or aviation management",
        "Experience with Part 135 and/or government contracts preferred",
        "Excellent leadership and communication skills",
        "Ability to manage multiple priorities under pressure",
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

      {/* Benefits – Expanded & Premium */}
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
      {/* Column 1 */}
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Compensation & Retirement</h3>
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

      {/* Column 2 */}
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Time Off & Flexibility</h3>
          <ul className="space-y-2 text-gray-600 leading-relaxed">
            <li>• Paid time off and company holidays</li>
            <li>• Support for work-life balance across operational demands</li>
            <li>• Paid leave for qualifying life events</li>
            <li>• Schedule considerations for deployment and training cycles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
          <ul className="space-y-2 text-gray-600 leading-relaxed">
            <li>• Access to the only H225 Level D full-motion simulator in the U.S.</li>
            <li>• Structured recurrent training and certification support</li>
            <li>• Opportunities for advanced ratings and specialized qualifications</li>
            <li>• Mentorship and continuous learning culture</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="mt-20 pt-12 border-t border-gray-200 text-center">
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Benefits are designed to support both our domestic and deployed team members. 
        Specific packages may vary by position and location. Full details are provided 
        during the interview process.
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
          <p className="text-white/80 mb-10 text-lg">
            We’re always interested in hearing from talented professionals. Send us your resume and tell us how you can contribute.
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

      {/* Application Modal – Expanded */}
{showApplicationModal && selectedJob && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6">
    <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden max-h-[92vh] flex flex-col">
      
      {/* Header */}
      <div className="p-8 border-b flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">Apply for {selectedJob.title}</h2>
          <p className="text-gray-600 mt-1">{selectedJob.location}</p>
        </div>
        <button
          onClick={() => setShowApplicationModal(false)}
          className="text-3xl text-gray-400 hover:text-black leading-none"
        >
          ×
        </button>
      </div>

      {/* Scrollable Form */}
      <form
        className="flex-1 overflow-y-auto p-8 space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);

          const body = `
Name: ${formData.get("first_name")} ${formData.get("last_name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
LinkedIn: ${formData.get("linkedin") || "Not provided"}
Current Location: ${formData.get("location")}
Willing to Relocate/Deploy: ${formData.get("relocate")}
Available Start Date: ${formData.get("start_date")}

Highest Education / Certifications:
${formData.get("education")}

Years of Relevant Experience: ${formData.get("years_experience")}
Security Clearance: ${formData.get("clearance")}

Why You're a Strong Fit:
${formData.get("experience")}

Additional Information:
${formData.get("additional") || "None"}

How did you hear about us: ${formData.get("source")}
          `.trim();

          const mailto = `mailto:careers@achi-tx.com?subject=Application for ${encodeURIComponent(
            selectedJob.title
          )}&body=${encodeURIComponent(body)}`;

          window.location.href = mailto;
          setShowApplicationModal(false);
        }}
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
          className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all"
        >
          SUBMIT APPLICATION
        </button>
      </form>
    </div>
  </div>
)}

      {/* Equal Opportunity Note */}
      <div className="py-8 bg-white text-center text-sm text-gray-500">
        Air Center Helicopters is an Equal Opportunity Employer.
      </div>

      <FooterSection />
    </main>
  );
}

