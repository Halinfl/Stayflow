import Link from "next/link";
import { ArrowLeft, BadgeCheck, ShieldCheck } from "lucide-react";

const VERIFIED = [
  "Property identity confirmed",
  "Offer terms published",
  "StayForum can track bookings from creator links",
] as const;

const TCS = [
  "Audience–travel fit",
  "Engagement quality",
  "Commerce proof",
  "Brand safety",
] as const;

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/5 bg-brand-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <span className="text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase">StayForum</span>
          <div className="w-16" />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Trust</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
          How StayForum builds trust
        </h1>
        <p className="mt-3 max-w-2xl text-brand-muted">
          Verification and Travel Commerce Score (TCS) help hotels and creators match with clearer signals.
          This demo uses pilot criteria — not live underwriting, and never a promise of revenue or an OTA replacement.
        </p>

        <section className="mt-10 rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal px-3 py-1 text-xs font-bold text-white">
              <BadgeCheck size={12} /> Verified
            </span>
            <h2 className="text-xl font-extrabold text-brand-charcoal">How verification works</h2>
          </div>
          <ul className="space-y-3">
            {VERIFIED.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-brand-charcoal">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-brand-teal" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-brand-muted">
            Pilot only in this demo. No revenue guarantees.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-sm font-extrabold text-brand-charcoal">
              TCS
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-brand-charcoal">TCS · Illustrative</h2>
              <p className="text-xs text-brand-muted">Estimates booking-commerce fit, not follower fame</p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {TCS.map((item) => (
              <li key={item} className="rounded-2xl bg-brand-cream p-4 text-sm font-semibold text-brand-charcoal">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-start gap-2 text-xs text-brand-muted">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-brand-teal" />
            Scores are illustrative in this demo. No live ML.
          </p>
        </section>
      </div>
    </main>
  );
}
