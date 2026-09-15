import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Handshake,
  Link2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import PreferredLeadForm from "@/components/forms/PreferredLeadForm";
import PreferredFaq from "@/components/preferred/PreferredFaq";

export const metadata: Metadata = {
  title: "StayForum Preferred | Turn comps into bookings you can measure",
  description:
    "Hotel-first Preferred program: match creators on soft nights, keep bookings on your site, and earn on attributed stays. Hotel remains merchant of record.",
};

const HOW_IT_WORKS = [
  {
    icon: Link2,
    title: "Set the channel",
    desc: "Share a deep link or booking code so attributed stays are tracked back to Preferred creators.",
  },
  {
    icon: Users,
    title: "Match creators on soft nights",
    desc: "Invite creators who fit your property — focused on nights you actually want to fill.",
  },
  {
    icon: TrendingUp,
    title: "Earn on attributed stays",
    desc: "When guests book through that channel, you keep the stay on your site and measure what comps produce.",
  },
] as const;

const WHY_PREFERRED = [
  {
    label: "vs unpaid influencer",
    title: "Same comps, now tracked",
    desc: "You already host creators. Preferred turns those nights into measurable bookings — not just content.",
  },
  {
    label: "vs OTA",
    title: "Keep the relationship and the margin",
    desc: "Bookings stay on your site. You remain merchant of record. Guest relationship stays yours.",
  },
  {
    label: "vs fake / viral noise",
    title: "Authenticity + travel-commerce fit",
    desc: "Match for real travel audiences and commerce fit — not vanity reach or one-off virality.",
  },
] as const;

const YOU_PROVIDE = [
  "Soft or need nights for Preferred creator stays",
  "A deep link or booking code channel",
  "A contact who can approve matches",
] as const;

const YOU_GET = [
  "Creator matches aimed at nights you want to fill",
  "Attribution on stays booked through your channel",
  "Bookings on your site — hotel remains MoR",
] as const;

const TRUST_POINTS = [
  { icon: Handshake, text: "Built by hoteliers" },
  { icon: ShieldCheck, text: "Not an OTA" },
  { icon: BadgeCheck, text: "Hotel remains MoR" },
  { icon: Sparkles, text: "Pilot-honest — no invented metrics" },
] as const;

function CtaRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row ${className}`}>
      <a
        href="#apply"
        className="inline-flex items-center justify-center rounded-2xl bg-brand-teal px-7 py-3.5 text-base font-semibold text-brand-cream shadow-lift transition-colors hover:bg-brand-tealLight"
      >
        Become Preferred
      </a>
      <a
        href="#apply"
        className="inline-flex items-center justify-center rounded-2xl border-2 border-brand-gold bg-transparent px-7 py-3.5 text-base font-semibold text-brand-charcoal transition-colors hover:bg-brand-gold/15"
      >
        Talk to us
      </a>
    </div>
  );
}

export default function PreferredPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/5 bg-brand-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <span className="text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase">
            StayForum
          </span>
          <a
            href="#apply"
            className="text-sm font-semibold text-brand-teal transition-colors hover:text-brand-tealLight"
          >
            Become Preferred
          </a>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="px-6 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            StayForum Preferred
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl md:text-6xl">
            Turn comps into bookings you can measure.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
            Put soft nights to work: match creators, keep{" "}
            <span className="font-semibold text-brand-charcoal">bookings on your site</span>, and stay
            hotel merchant of record — with attribution you can actually see.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaRow className="justify-center" />
          </div>
        </div>
      </section>

      {/* 2. How it works */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
              Channel → Match → Earn
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream">
                      <Icon size={22} className="text-brand-teal" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Preferred */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Why Preferred
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
              Built for hotels who already give comps
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {WHY_PREFERRED.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-brand-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. You provide / You get */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Preferred exchange
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
              You provide · You get
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-extrabold text-brand-charcoal">You provide</h3>
              <ul className="mt-4 space-y-3">
                {YOU_PROVIDE.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-brand-charcoal">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-brand-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-extrabold text-brand-charcoal">You get</h3>
              <ul className="mt-4 space-y-3">
                {YOU_GET.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-brand-charcoal">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-brand-muted">
            Standard Preferred terms apply — we&apos;ll walk you through them.
          </p>
        </div>
      </section>

      {/* 5. Trust */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-brand-charcoal/5 bg-white px-6 py-10 shadow-soft sm:px-10">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-muted">
            Trust
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text} className="flex items-center gap-2.5">
                  <Icon size={18} className="text-brand-teal" />
                  <span className="text-sm font-medium text-brand-charcoal">{point.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
              Straight answers
            </h2>
          </div>
          <PreferredFaq />
          <p className="mt-4 text-center text-sm text-brand-muted">
            Remittance: typically ~30 days after checkout.
          </p>
        </div>
      </section>

      {/* 7. Apply form */}
      <section id="apply" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Apply
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
              Start a Preferred conversation
            </h2>
            <p className="mt-3 text-brand-muted">
              Tell us about your property. We&apos;ll follow up and walk you through Preferred terms.
            </p>
          </div>
          <PreferredLeadForm />
        </div>
      </section>

      <footer className="border-t border-brand-charcoal/5 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-brand-muted sm:flex-row">
          <span className="font-extrabold tracking-[0.15em] text-brand-teal uppercase">
            StayForum
          </span>
          <p>Preferred · hotel-first · bookings on your site</p>
        </div>
      </footer>
    </main>
  );
}
