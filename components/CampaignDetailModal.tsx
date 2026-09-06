"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Camera, MapPin, Moon, Star, X } from "lucide-react";
import type { HotelCampaign } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

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
            className="relative max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white no-scrollbar sm:rounded-3xl"
          >
            <div className="relative h-64 overflow-hidden">
              <SafeImage src={campaign.image} alt={campaign.name} fill sizes="512px" className="object-cover" fallbackLabel={campaign.type} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent" />
              <button onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur" aria-label="Close campaign details"><X size={18} /></button>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-white/90">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold backdrop-blur">{campaign.type}</span>
                  {campaign.verified && <span className="flex items-center gap-1 rounded-full bg-brand-teal px-2.5 py-0.5 text-xs font-bold text-white"><BadgeCheck size={12} /> Verified</span>}
                  <span className="flex items-center gap-1"><Star size={13} fill="currentColor" className="text-brand-gold" /> {campaign.rating}</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">{campaign.name}</h2>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-white/80"><MapPin size={13} /> {campaign.location}</p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-2xl bg-brand-cream p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-muted">The Offer</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Offer icon={<Moon size={18} className="mt-0.5 shrink-0 text-brand-teal" />} title={`Complimentary stay · ${campaign.compNights} nights`} detail="Agreed nights for the collaboration" />
                  <Offer icon={<BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-teal" />} title="Tracked commission" detail="On bookings you drive" />
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-muted">Content You&apos;ll Deliver</p>
                <div className="flex items-center gap-2.5 rounded-2xl bg-brand-cream p-4"><Camera size={18} className="shrink-0 text-brand-teal" /><span className="text-sm font-semibold text-brand-charcoal">{campaign.deliverables}</span></div>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-muted"><BadgeCheck size={16} className="text-brand-teal" /><span>Verified property - commissions tracked and paid through the platform.</span></div>
              <button onClick={onApply} className="w-full rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">Apply for this Stay</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Offer({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return <div className="flex items-start gap-2.5"><div>{icon}</div><div><div className="font-extrabold text-brand-charcoal">{title}</div><div className="text-xs text-brand-muted">{detail}</div></div></div>;
}
