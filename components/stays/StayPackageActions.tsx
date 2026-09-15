"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Link2 } from "lucide-react";
import CreatorLeadForm from "@/components/forms/CreatorLeadForm";
import HotelLeadForm from "@/components/forms/HotelLeadForm";
import { buildGoHref } from "@/lib/go";

type StayPackageActionsProps = {
  slug: string;
  campaignId: string;
  attributionPreview: string;
  bookingHref?: string;
  bookingProofHint?: string;
  name: string;
};

export default function StayPackageActions({
  slug,
  campaignId,
  attributionPreview,
  bookingHref,
  bookingProofHint,
  name,
}: StayPackageActionsProps) {
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);
  const bookHref =
    bookingHref ??
    buildGoHref({ slug, campaignId, src: "stay-detail" });

  return (
    <>
      <div className="rounded-3xl border border-brand-teal/20 bg-white p-6 shadow-soft">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-cream">
            <Link2 size={18} className="text-brand-teal" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">Your tracked link</p>
            <p className="mt-1 break-all font-mono text-sm font-semibold text-brand-teal">{attributionPreview}</p>
            <p className="mt-2 text-xs text-brand-muted">
              Travelers book → you earn. Attribution is illustrative in this demo.
              {bookingProofHint ? ` ${bookingProofHint}` : ""}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setCreatorOpen(true)}
            className="w-full rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight"
          >
            Activate stay
          </button>
          <button
            type="button"
            onClick={() => setHotelOpen(true)}
            className="w-full rounded-2xl border-2 border-brand-charcoal/10 bg-brand-cream py-3.5 font-semibold text-brand-charcoal transition-colors hover:border-brand-teal hover:text-brand-teal"
          >
            I&apos;m a hotel — claim this listing
          </button>
          <Link
            href={bookHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-charcoal/10 py-3 text-sm font-semibold text-brand-muted transition-colors hover:border-brand-teal hover:text-brand-teal"
          >
            Continue to book
            <ExternalLink size={14} />
          </Link>
          <p className="text-center text-[11px] text-brand-muted">
            Opens StayForum /go first — never a naked OTA link. {name} booking completes with the
            property or their seller.
          </p>
        </div>
      </div>

      <CreatorLeadForm isOpen={creatorOpen} onClose={() => setCreatorOpen(false)} />
      <HotelLeadForm isOpen={hotelOpen} onClose={() => setHotelOpen(false)} />
    </>
  );
}
