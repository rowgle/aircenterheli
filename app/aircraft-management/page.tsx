"use client";

import { HighlightText } from "@/components/highlight-text";
import { FormEvent, useState } from "react";
import {
  ClipboardCheck,
  FileSpreadsheet,
  Fuel,
  Gauge,
  GraduationCap,
  Landmark,
  LineChart,
  Radio,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import CharterRequestForm from "@/components/charter-request-form";

const IMG =
  "https://raw.githubusercontent.com/rowgle/aircenterheli/main/public/images";

const photos = {
  hero: "/images/antartica2.jpg",
  hangar: "/images/noseshot.jpg",
  mro: "/images/tailrotor.jpg",
  sim: "/images/simlegs.jpg",
  nose: "/images/sunlightshot.jpg",
  twin: "/images/double225.jpg",
  nvg: "/images/sideprofile.jpg",
  side: "/images/bell1.jpg",
  sunlight: "/images/antartica1.jpg",
};

const jumps = [
  { href: "#operations", label: "OPERATIONS" },
  { href: "#fiscal", label: "FISCAL" },
  { href: "#savings", label: "SAVINGS" },
  { href: "#mro", label: "MAINTENANCE" },
  { href: "#safety", label: "SAFETY" },
  { href: "#charter", label: "CHARTER" },
];

const pillars = [
  {
    title: "SAFETY",
    copy: "An SMS that exceeds Part 135 minimums, flight-data monitoring, and crews trained to the same expeditionary standard we fly for DoD, NASA recovery, and commercial missions.",
  },
  {
    title: "SERVICE",
    copy: "A dedicated aviation manager, 24/7 dispatch, and in-house Part 145 technicians who treat your tail number with the same pride as our own Super Puma fleet.",
  },
  {
    title: "SAVINGS",
    copy: "Fleet buying power on fuel, insurance, training, and dynamic components — 100% of negotiated discounts passed through. No markup. No commission.",
  },
];

const ownerBenefits = [
  {
    icon: Gauge,
    title: "Operational Control",
    copy: "Scheduling, dispatch, and professional crew management for H225, Bell 412, AS350, and light-fleet platforms. Day/night NVG, IFR, hoist, and long-line profiles.",
  },
  {
    icon: Wrench,
    title: "Maintenance Confidence",
    copy: "Proactive care with 24/7 access to our FAA Part 145 Repair Station at Spinks Airport — hangar, shops, NDT, and logistics under one roof.",
  },
  {
    icon: LineChart,
    title: "Financial Transparency",
    copy: "Segregated owner accounts, true pass-through costs, and monthly reporting on flight activity, fuel, component reserves, and charter revenue.",
  },
  {
    icon: Landmark,
    title: "Charter Offset",
    copy: "When you want it, we market residual capacity under Part 135 to offset ownership — balanced against your personal availability, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Programs",
    copy: "Tailored to travel, financial, and operational goals — corporate transport, utility, SAR, offshore, or mixed-use helicopter ownership.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Shield",
    copy: "Part 135 / 133 / 137 manuals, OpSpecs, insurance, and SMS handled as a single administrative umbrella so ownership never stalls on paperwork.",
  },
];

const opsPoints = [
  {
    icon: Users,
    title: "Dedicated Aviation Manager",
    copy: "One experienced professional owns your account. They work with you daily on schedule, crew, and mission configuration — with headquarters providing policy, manuals, and regulatory oversight.",
  },
  {
    icon: Radio,
    title: "24/7 Dispatch & Flight Following",
    copy: "Duty-time legal crews, weather, NOTAMs, and flight tracking from Spinks. Forward-deployed aircraft stay on the same ops picture we use for Navy VERTREP and recovery work.",
  },
  {
    icon: Gauge,
    title: "Codified Helicopter SOPs",
    copy: "Flight operations and maintenance have written our best practices into a complete set of manuals. Every PIC, SIC, and technician flies and wrenches to the same standard.",
  },
];

const fiscalHighlights = [
  {
    icon: Wallet,
    title: "Segregated Owner Account",
    copy: "Operating funds sit in an account in your name. We pay aircraft expenses from it. There is no commingling with Air Center operating accounts, and you control access.",
  },
  {
    icon: FileSpreadsheet,
    title: "Monthly Financial Package",
    copy: "Owner flight activity, fuel, labor, parts, component reserves, insurance, and charter revenue — delivered as a readable report with raw data available on request.",
  },
  {
    icon: ClipboardCheck,
    title: "Invoice Validation",
    copy: "Vendor invoices are checked against work orders and contracts before they hit your account. Crew expenses run through an electronic report with an audit trail.",
  },
  {
    icon: LineChart,
    title: "Budgeting Support",
    copy: "Annual operating budgets built around your hours, mission mix, and upcoming inspections — including engine, gearbox, and dynamic-component reserve planning.",
  },
];

const savings = [
  {
    icon: Fuel,
    title: "Fuel",
    copy: "Contract fuel at home base and preferred pricing on the destinations you fly most. Multi-vendor coverage so a single FBO never sets your rate.",
  },
  {
    icon: GraduationCap,
    title: "Crew Training",
    copy: "Recurrent training on the only H225 Level D full-motion simulator in the United States — on our campus — plus OEM programs for Bell and Airbus light/medium types at fleet rates.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    copy: "Hull, liability, and war-risk placed against a 40-year rotary-wing safety record and a heavy-lift fleet. Premium savings pass through 100%. We administer claims and renewals.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    copy: "In-house Part 145 labor plus Airbus HCare and Bell purchasing relationships. Volume on parts, tracking, and engineering — without a third-party middleman on the critical path.",
  },
];

const onboarding = [
  {
    step: "01",
    title: "Documentation & Compliance",
    copy: "Logs, certifications, and regulatory records transfer into our system so the aircraft enters management mission-ready — not stuck in a paperwork hold.",
  },
  {
    step: "02",
    title: "Technical Integration",
    copy: "Full service review against Air Center maintenance standards, component tracking, and OEM reach-back with Airbus and Bell.",
  },
  {
    step: "03",
    title: "Operational Setup",
    copy: "Crew pairing, SOPs, dispatch, and configuration for your mission set — NVG, long-line, offshore, executive, or mixed-use.",
  },
  {
    step: "04",
    title: "Ready for Flight",
    copy: "Your aircraft enters active service with zero gap in operational capability. Day one is a flying day.",
  },
];

const mro = [
  "Engine and dynamic-component overhaul and life-cycle management",
  "Avionics and glass-cockpit installation, troubleshooting, and upgrades",
  "Precision airframe repair and mission-specific modifications",
  "Nondestructive testing without compromising asset integrity",
  "Scheduled and unscheduled work — 100-hour inspections through major phase checks",
  "Global roving maintenance teams for forward-deployed aircraft",
];

const admin = [
  {
    title: "SMS Integration",
    copy: "A proactive Safety Management System with flight-data monitoring and audits that exceed standard FAA requirements — the same culture behind DoD CARB approval since 1991.",
  },
  {
    title: "Part 135 / 133 / 137 Compliance",
    copy: "FAA liaison, manual revisions, and certification renewals so on-demand, external-load, and firefighting operations never pause for a compliance gap.",
  },
  {
    title: "Crew Resource & Training",
    copy: "Vetting, hiring, and recurrent training — including the H225 FAA Level D full-motion simulator on campus at Spinks.",
  },
  {
    title: "Emergency Response",
    copy: "A maintained emergency response plan covering notification, family assistance, investigation support, and continuity — rehearsed, not a binder on a shelf.",
  },
];

const programs = [
  {
    title: "Full Management",
    copy: "The private flight-department model: operational control, professional crew, dispatch, Part 145 maintenance, fiscal management, and SMS under one certificate.",
  },
  {
    title: "Technical & MRO",
    copy: "Keep your crews. Put the aircraft on our Part 145 line for inspections, components, tracking, and OEM support — with fleet parts pricing and 24/7 coverage.",
  },
  {
    title: "Charter Offset",
    copy: "Place unused capacity on our Part 135 certificate. We build a charter plan around your availability and market it to government, commercial, and utility customers we already serve.",
  },
];

const platforms = [
  {
    title: "Heavy",
    types: "Airbus H225 · AS332 · Super Puma family",
    copy: "Utility, VERTREP, SAR, and expeditionary Super Puma programs — backed by the only H225 Level D full-motion simulator in the United States. If you own an H225 or AS332, you are already in our daily operation.",
    image: photos.twin,
  },
  {
    title: "Medium",
    types: "Bell 412 · Bell 212 · Airbus medium twins",
    copy: "Corporate, offshore, hoist, and mixed-use twins. In-house 412 experience and Bell proximity in Fort Worth — same dispatch, SMS, and Part 145 line we use on our own medium aircraft.",
    image: photos.side,
  },
  {
    title: "Light",
    types: "AS350 / H125 · Bell 407 · Bell 206 · light twins",
    copy: "Executive, utility, and training aircraft under the same flight department as the heavy fleet. If it is Airbus or Bell and it flies your mission, we can manage it.",
    image: photos.sunlight,
  },
];

const ticker = [
  "H225 Super Puma Fleet",
  "99%+ Operational Readiness",
  "FAA Part 145 Repair Station",
  "H225 Level D Full Motion Simulator",
  "Fly America & Buy American",
  "Spinks Airport · Burleson, TX",
  "40+ Years of Mission Success",
];

export default function AircraftManagementPage() {
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, subject: "Aircraft Management Inquiry" }),
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
    alt="Air Center Helicopters maintenance team on the line"
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
  <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36 md:px-12 lg:px-16">
    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
      Fleet Operations & Maintenance
    </p>
    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
      <HighlightText>AIRCRAFT MANAGEMENT</HighlightText>
    </h1>
    <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
      Owning a helicopter is a major investment with considerable
      responsibility. We take operational control, Part 145 maintenance,
      and the administrative burden — so you keep the flexibility,
      convenience, and reliability.
    </p>
    <div className="mt-10">
      <a
        href="#request"
        className="inline-flex min-h-11 items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
      >
        Contact Us
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

      <section id="overview" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Why Air Center
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            YOUR HELICOPTER. OUR FLIGHT DEPARTMENT.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--am-muted)]">
            With over 40 years of operational excellence, Air Center Helicopters
            provides comprehensive aircraft management for government,
            institutional, and commercial owners. As a U.S.-owned Small Business
            compliant with the Fly America and Buy American Acts, we offer a
            secure domestic solution for asset oversight. We manage every tail
            number with the same pride and safety standards that have defined
            our reputation since 1986 — protecting your investment and keeping
            it mission-ready.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[var(--am-border)] bg-[var(--am-paper)] p-8"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="operations" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src={photos.hangar}
            alt="Air Center technician with rotor system"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-20 md:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Operations Support
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            A decentralized model. Centralized standards.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            Helicopter ownership pays off when the people closest to the
            aircraft can move. Your aviation manager and crew work with you
            daily. Headquarters holds the manuals, the certificate, and the
            safety system — so service stays personal without going freelance.
          </p>
          <div className="mt-10 space-y-8">
            {opsPoints.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} />
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

      <section className="bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Owner Benefits
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Everything a flight department does — without building one.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ownerBenefits.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[var(--am-bg)] p-8">
                <item.icon className="h-5 w-5" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fiscal" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
                Fiscal Management
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Your money. Your aircraft. Our books.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
                Complete, transparent fiscal management of the helicopter —
                staffed by people who understand component times, fuel uplifts,
                and charter offsets, not just general ledgers.
              </p>
            </div>
            <blockquote className="border-l-2 border-[var(--am-fg)] pl-6 text-lg leading-relaxed">
              You control access to the account. It is used only to pay your
              aircraft operating expenses. Each month you receive a report
              tracking flight activity, expenditures, fuel, and charter revenue.
            </blockquote>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {fiscalHighlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--am-muted)]">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="savings"
        className="scroll-mt-28 bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Fleet Discount Savings
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Buying power of a fleet. Economics of a single tail.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--am-muted)]">
            Long-term vendor relationships and a Super Puma–class operation let
            us negotiate fuel, training, insurance, and maintenance programs
            that a standalone owner cannot. Any discount we secure is passed
            through 100% — no markup, no commission. In many cases the savings
            offset a substantial portion of the annual management fee.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {savings.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[var(--am-bg)] p-7">
                <item.icon className="h-5 w-5" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mro" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src={photos.mro}
            alt="Part 145 tail-rotor and dynamic-component work"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-[var(--am-fg)] px-8 py-20 text-[var(--am-bg)] md:px-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            In-House MRO
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The aircraft never leaves our watch.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Housing a full-time FAA Part 145 repair station at Spinks eliminates
            third-party scheduling delays. Technicians who maintain our
            expeditionary fleet maintain yours — Airbus H225LP, AS332, AS350,
            Bell 412, 407, 212, and 206 series.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {mro.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/70" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-white/60">
            Close proximity to Bell Helicopter and direct Airbus reach-back
            means 24/7 parts access and expedited resolution — the same
            relationships behind our industry-leading readiness rates.
          </p>
        </div>
      </section>

      <section id="safety" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-8 py-20 md:px-14 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Culture of Safety
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Every service we provide revolves around the next safe flight.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            A dedicated safety function monitors flight operations, manages crew
            training, and runs a Safety Committee with representation from every
            department. The SMS is not a binder for the audit — it is how the
            line is run, including NVG, IFR, external load, and shipboard work.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {admin.map((a) => (
              <div key={a.title}>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {a.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 min-h-[420px] lg:order-2">
          <img
            src={photos.nvg}
            alt="Night-vision operations with Air Center crews"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Aircraft Onboarding
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Zero downtime. Mission-critical integration.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--am-muted)]">
            We treat your aircraft’s arrival as an operation. Structured
            onboarding covers compliance, technical alignment, and crew
            configuration so assets perform from day one — without the friction
            of a typical fleet transition.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {onboarding.map((s) => (
              <div key={s.step} className="border-t border-[var(--am-fg)] pt-6">
                <p className="text-xs tracking-[0.2em] text-[var(--am-muted)]">
                  {s.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Multiple Options
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Safe, reliable, efficient management — sized to how you fly.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--am-muted)]">
            Not every owner needs a full flight department. Some need the
            certificate, the shop, and the books. Others want residual charter
            revenue. We dedicate experienced people to each account and keep
            customer service close to the aircraft.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programs.map((p) => (
              <div key={p.title} className="rounded-2xl bg-[var(--am-bg)] p-8">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="charter" className="scroll-mt-28 grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-8 py-20 md:px-14 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Charter Offset
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Fly when you want. Earn when you don’t.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
            Owners who want a private flight department and residual revenue can
            place unused capacity on our Part 135 certificate. We build a
            charter plan around your availability and market to government,
            commercial, and utility customers we already serve — including
            HAA, external load, and special-mission profiles the aircraft is
            actually equipped for.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--am-muted)]">
            Crews train in-house on the H225 Level D full-motion simulator,
            reducing training cost while raising proficiency for both owner and
            charter missions. 24/7 charter ops handles lead qualification,
            broker relationships, and trip delivery so your manager stays
            focused on you.
          </p>
        </div>
        <div className="relative order-1 min-h-[420px] lg:order-2">
          <img
            src={photos.sim}
            alt="H225 Level D full-motion simulator at Spinks"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
            Platforms
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Heavy, medium, and light — one management system.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {platforms.map((p) => (
              <article key={p.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-[var(--am-muted)]">
                  {p.types}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--am-muted)]">
                  {p.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="request"
        className="scroll-mt-28 bg-[var(--am-subtle)] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--am-muted)]">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Request a Management Briefing.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--am-muted)]">
              Tell us about the aircraft, basing, and how you fly. We’ll come
              back with a tailored program — operations, maintenance, and
              projected ownership economics.
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
  href="/capabilities"
  className="mt-8 inline-flex text-sm text-[var(--am-muted)] hover:text-[var(--am-fg)]"
>
  ← Back to capabilities
</a>
          </div>
          <div className="lg:col-span-3">
            {done ? (
              <div className="rounded-2xl bg-[var(--am-bg)] p-12 text-center">
                <h3 className="text-2xl font-semibold">Received</h3>
                <p className="mt-3 text-[var(--am-muted)]">
                  The management team will follow up shortly.
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
                    name="aircraft"
                    placeholder="Aircraft type / tail number"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <input
                    name="base"
                    placeholder="Home base / hangar"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                  <input
                    name="hours"
                    placeholder="Estimated annual hours"
                    className="min-h-11 rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                  />
                </div>
                <select
                  name="interest"
                  className="min-h-11 w-full rounded-xl border border-[var(--am-border)] bg-[var(--am-bg)] px-5 py-3.5 outline-none focus:ring-2 focus:ring-[var(--am-fg)]/15"
                >
                  <option value="Full management">Full management</option>
                  <option value="Maintenance only">Technical & MRO</option>
                  <option value="Charter offset">Charter offset</option>
                  <option value="Onboarding / transition">
                    Onboarding / transition
                  </option>
                </select>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="How do you use the aircraft, and what would success look like? *"
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