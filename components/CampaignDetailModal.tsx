"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Camera, Link2, MapPin, Moon, Sparkles, Star, X } from "lucide-react";
import type { HotelCampaign } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import { VerifiedBadge } from "@/components/badges";

type CampaignDetailModalProps = {
  campaign: HotelCampaign | null;
  onClose: () => void;
  onApply: () => void;
};

export default function CampaignDetailModal({ campaign, onClose, onApply }: CampaignDetailModalProps) {
  return (
    <AnimatePresence>
      {campaign && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-brand-cream no-scrollbar sm:rounded-3xl"
          >
            <div className="relative h-64 overflow-hidden">
              <SafeImage src={campaign.image} alt={campaign.name} fill sizes="512px" className="object-cover" fallbackLabel={campaign.type} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent" />
              <button onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur" aria-label="Close campaign details"><X size={18} /></button>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-white/90">
                  <span className="rounded-full bg-brand-teal px-2.5 py-0.5 text-xs font-bold text-white">Stay Shop</span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold backdrop-blur">{campaign.type}</span>
                  {campaign.verified && <VerifiedBadge />}
                  <span className="flex items-center gap-1"><Star size={13} fill="currentColor" className="text-brand-gold" /> {campaign.rating}</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">{campaign.name}</h2>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-white/80"><MapPin size={13} /> {campaign.location}</p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-2xl border border-brand-charcoal/5 bg-white p-5 shadow-soft">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-muted">
                  <Sparkles size={14} className="text-brand-gold" /> Stay Shop story
                </p>
                <p className="text-sm leading-relaxed text-brand-charcoal">{campaign.creatorAngle}</p>
                {campaign.bookingProofHint && (
                  <p className="mt-2 text-xs text-brand-muted">{campaign.bookingProofHint}</p>
                )}
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-soft">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-muted">The Offer</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Offer icon={<Moon size={18} className="mt-0.5 shrink-0 text-brand-teal" />} title={`Complimentary stay · ${campaign.compNights} nights`} detail="Agreed nights for the collaboration" />
                  <Offer icon={<BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-teal" />} title="Tracked commission" detail="On bookings you drive — no raw % in demo" />
                </div>
              </div>

              <div className="rounded-2xl border border-brand-teal/20 bg-white p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-cream">
                    <Link2 size={18} className="text-brand-teal" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">Your tracked link</p>
                    <p className="mt-1 break-all font-mono text-sm font-semibold text-brand-teal">{campaign.attributionPreview}</p>
                    <p className="mt-2 text-xs text-brand-muted">Travelers book → you earn. Attribution is illustrative in this demo.</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-muted">Sample content</p>
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-brand-charcoal/15 bg-white">
                  <div className="px-4 text-center">
                    <Camera size={28} className="mx-auto text-brand-teal/60" />
                    <p className="mt-2 text-sm font-semibold text-brand-charcoal">{campaign.sampleContentLabel}</p>
                    <p className="mt-1 text-xs text-brand-muted">Placeholder for demo — not live property media</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-muted">Content you&apos;ll deliver</p>
                <div className="flex items-center gap-2.5 rounded-2xl bg-white p-4 shadow-soft">
                  <Camera size={18} className="shrink-0 text-brand-teal" />
                  <span className="text-sm font-semibold text-brand-charcoal">{campaign.deliverables}</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-brand-muted">
                Demo Stay Shop — sample property &amp; illustrative tracking. No revenue guarantees.
              </p>

              <button onClick={onApply} className="w-full rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">
                Activate stay
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Offer({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <div>{icon}</div>
      <div>
        <div className="font-extrabold text-brand-charcoal">{title}</div>
        <div className="text-xs text-brand-muted">{detail}</div>
      </div>
    </div>
  );
}
