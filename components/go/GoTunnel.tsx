"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MapPin, Moon } from "lucide-react";
import type { HotelCampaign } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import { sourceLabel } from "@/lib/go";

export type GoTunnelProps = {
  campaign: HotelCampaign;
  creatorHandle?: string;
  src: string;
  outboundUrl: string;
  backHref: string;
  backLabel: string;
  guideBackHref?: string;
};

export default function GoTunnel({
  campaign,
  creatorHandle,
  src,
  outboundUrl,
  backHref,
  backLabel,
  guideBackHref,
}: GoTunnelProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!leaving) return;
    const id = window.setTimeout(() => {
      window.location.assign(outboundUrl);
    }, 280);
    return () => window.clearTimeout(id);
  }, [leaving, outboundUrl]);

  const whySource = sourceLabel(src);
  const creatorLabel = creatorHandle ? `@${creatorHandle}` : null;
  const vouch =
    campaign.creatorAngle?.trim() ||
    campaign.blurb?.trim() ||
    `${campaign.type} · ${campaign.location}`;

  function onContinue() {
    if (leaving) return;
    setLeaving(true);
  }

  return (
    <main className="min-h-svh bg-brand-cream text-brand-charcoal">
      {/* 1. Why you’re here — sticky */}
      <div className="sticky top-0 z-30 border-b border-brand-charcoal/5 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-lg items-center gap-3 px-4 py-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal text-xs font-extrabold text-brand-cream"
            aria-hidden
          >
            {creatorLabel ? creatorLabel.slice(1, 3).toUpperCase() : "SF"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
              Why you’re here
            </p>
            <p className="truncate text-sm font-semibold text-brand-charcoal">
              {creatorLabel ? (
                <>
                  <span className="text-brand-teal">{creatorLabel}</span>
                  <span className="text-brand-muted"> · </span>
                </>
              ) : null}
              <span>{whySource}</span>
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-brand-charcoal/10 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-muted">
            Sample / pilot
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-lg space-y-5 px-4 pb-10 pt-5">
        {/* 2. StayPackage identity */}
        <section className="overflow-hidden rounded-3xl border border-brand-charcoal/5 bg-white shadow-soft">
          <div className="flex gap-3 p-3">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
              <SafeImage
                src={campaign.image}
                alt={campaign.name}
                fill
                sizes="80px"
                className="object-cover"
                fallbackLabel={campaign.type}
              />
            </div>
            <div className="min-w-0 flex-1 py-0.5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                StayPackage
              </p>
              <h1 className="mt-0.5 text-lg font-extrabold leading-tight text-brand-charcoal">
                {campaign.name}
              </h1>
              <p className="mt-1 flex items-center gap-1 text-sm text-brand-muted">
                <MapPin size={13} className="shrink-0" />
                <span className="truncate">{campaign.location}</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 border-t border-brand-charcoal/5 bg-brand-cream/50 px-4 py-3">
            <Moon size={16} className="mt-0.5 shrink-0 text-brand-teal" />
            <p className="text-sm font-semibold leading-snug text-brand-charcoal">
              Complimentary stay · {campaign.compNights} nights
              <span className="font-medium text-brand-muted">
                {" "}
                · tracked commission on bookings you drive
              </span>
            </p>
          </div>
        </section>

        {/* 3. Creator vouch */}
        <section className="rounded-3xl border border-brand-charcoal/5 bg-white px-4 py-4 shadow-soft">
          <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
            {creatorLabel ? `${creatorLabel} picked this` : "Why this books"}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-charcoal">
            {creatorLabel ? (
              <>
                <span className="font-semibold">I picked this because… </span>
                {vouch}
              </>
            ) : (
              vouch
            )}
          </p>
        </section>

        {/* 4. Primary CTA */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={onContinue}
            disabled={leaving}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-teal py-4 text-base font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight disabled:opacity-80"
          >
            {leaving ? "Continuing…" : "Continue to book"}
            {!leaving && <ExternalLink size={16} />}
          </button>

          {/* 5. Trust / not-MoR */}
          <p className="text-center text-xs leading-relaxed text-brand-muted">
            Booking completes with the property (or their seller). StayForum tracks the
            referral.
          </p>
        </div>

        {/* 6. Secondary back links */}
        <div className="flex flex-col items-stretch gap-2 pt-1">
          <Link
            href={backHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-charcoal/10 bg-white py-3 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-teal hover:text-brand-teal"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
          {guideBackHref && (
            <Link
              href={guideBackHref}
              className="inline-flex items-center justify-center py-2 text-sm font-semibold text-brand-muted transition-colors hover:text-brand-teal"
            >
              Back to guide
            </Link>
          )}
          <Link
            href="/"
            className="inline-flex items-center justify-center py-2 text-xs font-medium text-brand-muted transition-colors hover:text-brand-teal"
          >
            StayForum home
          </Link>
        </div>

        <p className="pt-2 text-center text-[11px] text-brand-muted">
          Sample / pilot · illustrative tracking · no revenue guarantees
        </p>
      </div>
    </main>
  );
}
