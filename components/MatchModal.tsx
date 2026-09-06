"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { Creator } from "@/lib/data";

type MatchModalProps = {
  creator: Creator | null;
  onClose: () => void;
  onLeaveInfo: () => void;
};

export default function MatchModal({
  creator,
  onClose,
  onLeaveInfo,
}: MatchModalProps) {
  return (
    <AnimatePresence>
      {creator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          <div
            className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-sm rounded-3xl bg-brand-cream p-8 text-center shadow-lift"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold">
              <Heart size={30} color="#1A1A2E" fill="#1A1A2E" />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-brand-charcoal">
              It&apos;s a match with {creator.name.split(" ")[0]}!
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Interested in working with {creator.name}? Leave your info and we&apos;ll connect you.
            </p>

            <button
              onClick={onLeaveInfo}
              className="mt-6 w-full rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight"
            >
              Leave my info
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full py-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-charcoal"
            >
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
