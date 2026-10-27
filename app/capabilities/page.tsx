"use client";

import { HighlightText } from "@/components/highlight-text";
import { FormEvent, useState } from "react";
import {
  Crosshair,
  GraduationCap,
  HeartPulse,
  LifeBuoy,
  Plane,
  Radio,
  ShieldCheck,
  Ship,
  Users,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import CharterRequestForm from "@/components/charter-request-form";

const IMG =
  "https://raw.githubusercontent.com/rowgle/aircenterheli/main/public/images";

const photos = {
  hero: "/images/missileshot.jpg",
  airlift: "/images/evacuationpolice.jpg",
  ship: "/images/loaddrop.jpg",
  sar: "/images/swimteam.jpg",
  medevac: "/images/milcasevac.jpg",
  training: "/images/simulator.jpg",
  nvg: "/images/nvgpersonnel.jpg",
  twin: "/images/twinlifters.jpg",
  nose: "/images/slingload.jpg",
  side: "/images/sideprofile.jpg",
};

const jumps = [
  { href: "#airlift", label: "EXPEDITIONARY AIRLIFT" },
  { href: "#ship", label: "SHIP-BASED" },
  { href: "#sar", label: "PR & SAR" },
  { href: "#medevac", label: "MEDEVAC" },
  { href: "#training", label: "TRAINING" },
  { href: "#credentials", label: "CREDENTIALS" },
];

const overviewCards = [
  {
    title: "GLOBAL REACH",
    copy: "Operations from Africa to Afghanistan to Antarctica — self-sustaining airlift in austere, hostile, and remote environments for DoD, partner nations, and commercial clients.",
  },
  {
    title: "MULTI-MISSION FLEET",
    copy: "H225 Super Puma, Bell 412, AS350, and light types configured for passenger, cargo, COMBI, hoist, VERTREP, NVG, and medical profiles under one certificate.",
  },
  {
    title: "PROVEN READINESS",
    copy: "DoD CARB since 1991, CAMTS Special Operations medical accreditation, 99%+ operational readiness rates, and an uncompromised safety record across four decades.",
  },
];

const airliftPoints = [
  {
    icon: Plane,
    title: "Passenger, Cargo & COMBI",
    copy: "Internal and external loads, rapid reconfiguration, and combination passenger/cargo profiles for contingency and expeditionary tasking.",
  },
  {
    icon: Crosshair,
    title: "Contingency Support",
    copy: "Rapid alert, mobilization, and forward deployment — self-sustaining packages that meet or exceed DoD CARB and Part 135 standards.",
  },
  {
    icon: ShieldCheck,
    title: "Austere Environments",
    copy: "Day/night NVG overland and sea, high-altitude range work, polar and offshore support, and disaster recovery when infrastructure is limited or gone.",
  },
];

const shipPoints = [
  {
    icon: Ship,
    title: "Vertical Replenishment",
    copy: "Navy VERTREP support for Combat Logistics Force ships worldwide — external cargo transfer under demanding deck and weather conditions.",
  },
  {
    icon: Radio,
    title: "Deck Landing Qualified",
    copy: "U.S. Navy Day/Night Deck Landing Qualification (DLQ) certified training and operations — ship-to-shore, shore-to-ship, and ship-to-ship.",
  },
  {
    icon: Users,
    title: "Platform Landings",
    copy: "Offshore platforms, research vessels, and tactical decks with crews experienced in confined-area and moving-deck procedures.",
  },
];

const sarPoints = [
  {
    icon: LifeBuoy,
    title: "Personnel Recovery",
    copy: "PR/SAR for conventional and special operations forces in hostile and remote theaters — Class D rescue hoist and rapid configuration.",
  },
  {
    icon: Crosshair,
    title: "Day / Night NVG",
    copy: "Significant experience supporting night-vision operations over land and sea, with crews trained for low-intensity conflict tactics and techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Global Theater Experience",
    copy: "Africa, Afghanistan, Antarctica, and points in between — proven alert posture and worldwide operating authority.",
  },
];

const medevacPoints = [
  {
    icon: HeartPulse,
    title: "CAMTS Special Operations",
    copy: "Only commercial operator in the world with CAMTS Special Operations / Expeditionary accreditation — the gold standard in medical air transport.",
  },
  {
    icon: Users,
    title: "Special Medical Teams",
    copy: "NREMT-P medics with BLS, ACLS, PALS, PHTLS, TCCC, blood product administration, and ventilator credentials. Many are JSOMTC graduates.",
  },
  {
    icon: ShieldCheck,
    title: "Critical Care",
    copy: "Advanced Life Support and select Critical Care capability under Board-Certified Medical Director oversight — including MASCAL response.",
  },
];

const trainingPoints = [
  {
    icon: GraduationCap,
    title: "H225 Level D Simulator",
    copy: "The only H225 FAA-approved Level D full-motion simulator in the United States — on campus at Spinks for initial, recurrent, and mission-specific profiles.",
  },
  {
    icon: Wrench,
    title: "Pilots & Mechanics",
    copy: "In-house FAA-approved training for flight crews and maintenance technicians, integrated into pre-deployment, recurring, and annual cycles.",
  },
  {
    icon: Crosshair,
    title: "Tactical & Mission Training",
    copy: "Fast rope, specialized insertion/extraction, land/water, high-altitude range, and custom profiles that reduce risk before the real mission.",
  },
];

const metrics = [
  { value: ">93,000", label: "Passengers transported" },
  { value: ">20.7M", label: "Pounds of cargo" },
  { value: ">18,000", label: "Ship deck landings" },
  { value: ">11,100", label: "External loads" },
];

const credentials = [
  "DoD CARB Approved Air Carrier Since 1991",
  "FAA Part 135 — HAA, NVG, IFR & HAZMAT OpSpecs",
  "FAA Part 133 — External Loads A, B, C, D (Rescue Hoist)",
  "FAA Part 137 — Aerial Firefighting",
  "FAA Part 145 — Repair Station",
  "U.S. Navy Day/Night DLQ Certified Training",
  "CAMTS Special Operations / Expeditionary Medical Accreditation",
  "ITAR / EAR compliant · DOI Carded Aircraft & Crews",
  "Fly America & Buy American Act compliant",
];

const ticker = [
  "Expeditionary Airlift",
  "Ship-Based VERTREP",
  "Personnel Recovery & SAR",
  "MEDEVAC / CASEVAC",
  "Technical Training",
  "DoD CARB Since 1991",
  "CAMTS Special Operations",
  "H225 Level D Simulator",
  "Spinks Airport · Burleson, TX",
];

export default function CapabilitiesPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [isCharterModalOpen, setIsCharterModalOpen] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("https://formspree.io/f/xppawevk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, subject: "Capabilities Inquiry" }),
      });
      if (res.ok) {
        setDone(true);
        form.reset();
      } else {
        alert("Something went wrong. Please email contact@achi-tx.com.");
      }
    } catch {
      alert("Something went wrong. Please email contact@achi-tx.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--am-bg)] text-[var(--am-fg)]">
      <style>{`
        :root {
          --am-bg: #ffffff;
          --am-fg: #0a0a0a;
          --am-muted: #737373;
          --am-subtle: #f5f5f5;
          --am-border: #e5e5e5;
          --am-paper: #fafafa;
        }
        html { scroll-behavior: smooth; }
        @keyframes am-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .am-marquee { animation: am-marquee 42s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .am-marquee { animation: none; }
        }
      `}</style>

      <Header onCharterRequest={() => setIsCharterModalOpen(true)} />

      {/* Hero */}
<section className="relative min-h-[92vh] overflow-hidden">
  <img
    src={photos.hero}
    alt="Air Center Helicopters expeditionary operations"
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
  <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36 md:px-12 lg:px-16">
    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
      Core Services
    </p>
    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
      <HighlightText>CAPABILITIES</HighlightText>
    </h1>
    <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
      Expeditionary airlift, VERTREP, personnel recovery, MEDEVAC, and
      technical training — flown to the same standard for DoD, special
      operations, and commercial partners.
    </p>
    <div className="mt-10">
      <a
        href="#request"
        className="inline-flex min-h-11 items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
      >
        Request Capabilities Brief
      </a>
    </div>
  </div>
</section>

{/* Jump nav */}
<nav
  aria-label="On this page"
  className="sticky top-0 z-40 bg-black"
>
  <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 overflow-x-auto px-6 py-4 md:px-12 lg:px-16">
    {jumps.map((j) => (
      <a
        key={j.href}
        href={j.href}
        className="shrink-0 text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white"
      >
        {j.label}
      </a>
    ))}
  </div>
</nav>

      {/* Overview */}
      <section
        id="overview"
        className="scroll-mt-28 px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Why Air Center
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
  PROVEN PERFORMANCE. <HighlightText>EXPEDITIONARY DNA.</HighlightText>
</h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--am-muted)]">
            Established in 1986, Air Center Helicopters is a U.S.-owned Small
            Business specializing in conventional, expeditionary, and
            contingency airlift — often in austere and hostile environments. We
            hold DoD CARB approval since 1991, the first-ever CAMTS Special
            Operations medical accreditation, and a multi-mission fleet led by
            the H225 Super Puma.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {overviewCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[var(--am-border)] bg-[var(--am-paper)] p-8"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                {c.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expeditionary Airlift */}
      <section id="airlift" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src={photos.airlift}
            alt="Expeditionary airlift operations"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-20 md:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Contingency Operations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            EXPEDITIONARY AIRLIFT
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            Fully self-sustaining passenger, cargo, and COMBI airlift for
            contingency and expeditionary tasking. Modernized H225LP Super
            Pumas deliver unmatched range, payload, and rapid reconfiguration —
            day or night, over land or sea.
          </p>
          <div className="mt-10 space-y-8">
            {airliftPoints.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={1.6}
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ship-Based Services */}
      <section id="ship" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-8 py-20 md:px-14 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Vertical Replenishment
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            SHIP-BASED SERVICES
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            Vertical replenishment and deck operations for U.S. Navy Combat
            Logistics Force ships and allied platforms worldwide. Our crews
            bring DLQ-certified proficiency and more than 18,000 ship deck
            landings of institutional experience.
          </p>
          <div className="mt-10 space-y-8">
            {shipPoints.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={1.6}
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 min-h-[420px] lg:order-2">
          <img
            src={photos.ship}
            alt="Ship-based vertical replenishment"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Personnel Recovery & SAR */}
      <section
        id="sar"
        className="scroll-mt-28 bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
              Search and Rescue
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              PERSONNEL RECOVERY
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
              Specialty niche experience recovering personnel in hostile,
              austere, and remote environments for U.S. conventional and
              special operations forces and partner nations. Class D rescue
              hoist, NVG, and rapid medical integration on the same airframe.
            </p>
            <div className="mt-10 space-y-8">
              {sarPoints.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    strokeWidth={1.6}
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={photos.sar}
              alt="Personnel recovery and search and rescue"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEDEVAC / CASEVAC */}
      <section id="medevac" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src={photos.medevac}
            alt="MEDEVAC and CASEVAC operations"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-20 md:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Medical Evacuation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            MEDEVAC / CASEVAC
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            En-route care under the only commercial CAMTS Special Operations /
            Expeditionary accreditation in the world. Medical teams deliver
            Advanced Life Support and select Critical Care from the cabin of
            multi-mission Super Pumas configured for the mission.
          </p>
          <div className="mt-10 space-y-8">
            {medevacPoints.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={1.6}
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Training */}
      <section
        id="training"
        className="scroll-mt-28 bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <img
              src={photos.training}
              alt="H225 Level D full-motion simulator training"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
              Pilots &amp; Maintenance
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              TECHNICAL TRAINING
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
              World-class pilots and mechanics trained in-house under FAA
              approval. Pre-deployment, recurring, and annual cycles live in
              our corporate training system — anchored by the only H225 Level D
              full-motion simulator in the United States.
            </p>
            <div className="mt-10 space-y-8">
              {trainingPoints.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    strokeWidth={1.6}
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-[var(--am-border)] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-[var(--am-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section
        id="credentials"
        className="scroll-mt-28 px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Approvals &amp; Standards
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            CREDENTIALS
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-2xl border border-[var(--am-border)] bg-[var(--am-paper)] p-5 text-sm leading-relaxed"
              >
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0"
                  strokeWidth={1.6}
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Request form */}
      <section
        id="request"
        className="scroll-mt-28 bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
              CAPABILITIES BRIEF
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
  <HighlightText>
    REQUEST CAPS BRIEF
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className="ml-3 inline-block align-middle"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </HighlightText>
</h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
              Tell us about the mission set, theater, and timeline. We will
              respond with a tailored overview of airlift, recovery, medical,
              ship-based, or training support.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-[var(--am-muted)]">
              Spinks Airport, Burleson, TX
              <br />
              <a href="tel:18176246300" className="hover:text-[var(--am-fg)]">
                817-624-6300
              </a>
              <br />
              <a
                href="mailto:contact@achi-tx.com"
                className="hover:text-[var(--am-fg)]"
              >
                contact@achi-tx.com
              </a>
            </p>
            <a
              href="/aircraft-management"
              className="mt-8 inline-flex text-sm text-[var(--am-muted)] hover:text-[var(--am-fg)]"
            >
              AIRCRAFT MANAGEMENT →
            </a>
          </div>
          <div className="lg:col-span-3">
            {done ? (
              <div className="rounded-2xl bg-[var(--am-bg)] p-12 text-center">
                <h3 className="text-2xl font-semibold">Received</h3>
                <p className="mt-3 text-[var(--am-muted)]">
                  The operations team will follow up shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 rounded-2xl bg-[var(--am-bg)] p-6 md:p-8"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Full name *"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                  <input
                    name="organization"
                    placeholder="Organization / agency"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                </div>
                <select
                  name="interest"
                  className="min-h-11 w-full rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                >
                  <option value="Expeditionary Airlift">
                    Expeditionary Airlift
                  </option>
                  <option value="Ship-Based / VERTREP">
                    Ship-Based / VERTREP
                  </option>
                  <option value="Personnel Recovery & SAR">
                    Personnel Recovery &amp; SAR
                  </option>
                  <option value="MEDEVAC / CASEVAC">MEDEVAC / CASEVAC</option>
                  <option value="Technical Training">Technical Training</option>
                  <option value="Multiple / Other">Multiple / Other</option>
                </select>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Mission profile, theater, timeline, or questions *"
                  className="w-full resize-y rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-11 rounded-full bg-[var(--am-fg)] px-10 py-3.5 text-sm font-medium text-[var(--am-bg)] hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <img
          src={photos.nose}
          alt="Air Center Super Puma"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--am-bg)] via-transparent to-transparent" />
      </div>

      <FooterSection />

      <CharterRequestForm
        isOpen={isCharterModalOpen}
        onClose={() => setIsCharterModalOpen(false)}
      />
    </main>
  );
}
