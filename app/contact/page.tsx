"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
     const response = await fetch("https://formspree.io/f/xppawevk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            CONTACT US
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
            Ready to discuss your mission requirements? Reach out to our team.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-3">
                Headquarters
              </h3>
              <p className="text-lg leading-relaxed">
                Spinks Airport<br />
                Burleson, Texas
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-3">
                Email
              </h3>
              <a
                href="mailto:contact@achi-tx.com"
                className="text-lg hover:underline"
              >
                contact@achi-tx.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-3">
                Phone
              </h3>
              <p className="text-lg">
                817-624-6300
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-3">
                Capabilities
              </h3>
              <ul className="space-y-2 text-black/80">
                <li>• Expeditionary Airlift</li>
                <li>• Ship-Based Operations</li>
                <li>• Personnel Recovery</li>
                <li>• Aircraft Management</li>
                <li>• Maintenance & Training</li>
              </ul>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <h3 className="text-2xl font-semibold mb-4">Thank You</h3>
                <p className="text-black/70 text-lg">
                  Your message has been received. Our team will respond shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="Charter Services">Charter Services</option>
                    <option value="Aircraft Management">Aircraft Management</option>
                    <option value="Government Contracts">Government Contracts</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Training">Training</option>
                    <option value="Careers">Careers</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Ticker + Image */}
<div>
  {/* Premium Ticker */}
<div className="bg-black py-3.5 overflow-hidden border-y border-white/10">
  <div className="flex w-max animate-marquee">
    {/* Content repeated twice */}
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-12 px-8 text-sm md:text-[15px] font-medium tracking-wide shrink-0"
      >
        <span className="text-white/90">21× H225 Super Puma Fleet</span>
        <span className="text-white/30">•</span>
        <span className="text-emerald-400">99%+ Operational Readiness</span>
        <span className="text-white/30">•</span>
        <span className="text-white/90">VERTREP • Personnel Recovery • CASEVAC</span>
        <span className="text-white/30">•</span>
        <span className="text-white/90">NASA Commercial Crew Support</span>
        <span className="text-white/30">•</span>
        <span className="text-sky-400">CAMTS Special Operations Accredited</span>
        <span className="text-white/30">•</span>
        <span className="text-white/90">Worldwide Deployments</span>
        <span className="text-white/30">•</span>
        <span className="text-amber-400">Now Hiring: VERTREP SIC Pilots & A&P Mechanics</span>
        <span className="text-white/30">•</span>
        <span className="text-white/90">FAA Part 145 Repair Station</span>
        <span className="text-white/30">•</span>
        <span className="text-white/90">H225 Level D Full Motion Simulator</span>
        <span className="text-white/30">•</span>
        <span className="text-emerald-400">40+ Years of Mission Success</span>
        <span className="text-white/30">•</span>
      </div>
    ))}
  </div>
</div>

  {/* Image */}
  <div className="relative aspect-[16/9] w-full">
    <Image
      src="/images/noseshot.jpg"
      alt="Air Center Helicopters SpaceX Staging"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
  </div>
</div>

      <FooterSection />
    </main>
  );
}