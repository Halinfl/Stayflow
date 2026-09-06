import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SwipeDeck from "@/components/SwipeDeck";

export default function HotelPathPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/5 bg-brand-cream/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <span className="hidden text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase sm:inline">
              StayForum
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-base font-extrabold tracking-tight text-brand-charcoal sm:text-lg">
              Find your perfect creator match
            </h1>
          </div>
          <div className="w-16 sm:w-24" />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pt-4 text-center">
        <p className="text-sm font-medium text-brand-charcoal">
          Same comps you already give — now with tracked direct bookings.
        </p>
        <p className="mt-1 text-sm text-brand-muted">Match creators to soft nights.</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-muted">Sample creators &amp; properties for demo</p>
      </div>

      <SwipeDeck />
    </main>
  );
}
