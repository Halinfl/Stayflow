"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, MapPin, Users, X } from "lucide-react";
import type { Creator } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

type CreatorProfileModalProps = {
  creator: Creator | null;
  onClose: () => void;
  onMatch: (creator: Creator) => void;
};

export default function CreatorProfileModal({
  creator,
  onClose,
  onMatch,
}: CreatorProfileModalProps) {
  return (
    <AnimatePresence>
      {creator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm" />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-brand-cream no-scrollbar sm:rounded-3xl"
          >
            <div className="relative h-72 overflow-hidden">
              <SafeImage src={creator.image} alt={creator.name} fill sizes="512px" className="object-cover" fallbackLabel={creator.niche} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent" />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur"
                aria-label="Close creator profile"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">{creator.name}</h2>
                <p className="text-sm text-white/70">{creator.handle}</p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex items-center gap-2 text-sm text-brand-muted">
                <MapPin size={14} />
                {creator.location}
                <span className="mx-1">•</span>
                <BadgeCheck size={14} className="text-brand-teal" />
                <span className="font-medium text-brand-teal">Verified creator</span>
              </div>

              <p className="leading-relaxed text-brand-charcoal">{creator.bio}</p>

              <div className="grid grid-cols-3 gap-3">
                <Metric value={creator.tcs} label="TCS Score" />
                <Metric value={creator.followers.toLocaleString()} label="Followers" />
                <Metric value={`${creator.engagement}%`} label="Engagement" />
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">Audience</h3>
                <div className="space-y-2.5 rounded-2xl bg-white p-4 text-sm">
                  <Detail label="Age range" value={creator.audience.ageRange} />
                  <Detail label="Top locations" value={creator.audience.topLocations.join(", ")} />
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Est. income</span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Users size={12} /> {creator.audience.income}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-2xl bg-white py-3 font-semibold text-brand-charcoal transition-colors hover:bg-brand-creamDark"
                >
                  Keep browsing
                </button>
                <button
                  onClick={() => onMatch(creator)}
                  className="flex-1 rounded-2xl bg-brand-teal py-3 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight"
                >
                  Match with {creator.name.split(" ")[0]}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-soft">
      <div className="text-2xl font-extrabold text-brand-teal">{value}</div>
      <div className="mt-1 text-xs text-brand-muted">{label}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-brand-muted">{label}</span>
      <span className="text-right font-semibold">{value}</span>
    </div>
  );
}
