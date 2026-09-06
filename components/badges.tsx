"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, X } from "lucide-react";
import Link from "next/link";

const VERIFIED_BULLETS = [
  "Property identity confirmed",
  "Offer terms published",
  "StayForum can track bookings from creator links",
] as const;

const TCS_ROWS = [
  {
    title: "Audience–travel fit",
    detail: "How well followers look like people who book trips like this property.",
  },
  {
    title: "Engagement quality",
    detail: "Comments and saves that suggest real interest — not vanity reach alone.",
  },
  {
    title: "Commerce proof",
    detail: "Signals that content has driven consideration or bookings before.",
  },
  {
    title: "Brand safety",
    detail: "Fit for hospitality partners — tone, topics, and trust basics.",
  },
] as const;

export function VerifiedBadge({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}
        className="inline-flex items-center gap-1 rounded-full bg-brand-teal px-2.5 py-1 text-xs font-bold text-white"
      >
        <BadgeCheck size={12} /> Verified
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="How verification works"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(event) => event.stopPropagation()}
            className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-brand-charcoal/10 bg-brand-cream p-4 text-left shadow-lift"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-brand-teal">Verified</p>
            <ul className="mt-2 space-y-2">
              {VERIFIED_BULLETS.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-xs leading-snug text-brand-charcoal">
                  <BadgeCheck size={14} className="mt-0.5 shrink-0 text-brand-teal" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-brand-muted">
              Pilot criteria in this demo — not a revenue guarantee or OTA replacement.
            </p>
            <Link
              href="/trust"
              onClick={(event) => event.stopPropagation()}
              className="mt-3 inline-flex text-xs font-semibold text-brand-teal underline-offset-2 hover:underline"
            >
              How verification works
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

type TcsBadgeProps = {
  score: number;
  size?: "sm" | "md" | "lg";
  /** When true, label text uses charcoal (for cream/white shells). Default white for dark cards. */
  lightShell?: boolean;
};

export function TcsBadge({ score, size = "md", lightShell = false }: TcsBadgeProps) {
  const [open, setOpen] = useState(false);
  const box =
    size === "lg" ? "h-14 w-14 text-xl" : size === "sm" ? "h-9 w-9 text-sm" : "h-12 w-12 text-lg";
  const titleClass = lightShell ? "text-brand-charcoal" : "text-white";
  const subtitleClass = lightShell ? "text-brand-muted" : "text-white/70";

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
        className="flex items-center gap-3 text-left"
        aria-label={`Travel Commerce Score ${score}. Open details.`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-full bg-brand-gold font-extrabold text-brand-charcoal ${box}`}
        >
          {score}
        </div>
        <div className="leading-tight">
          <div className={`text-sm font-bold ${titleClass}`}>TCS · Illustrative</div>
          <div className={`text-xs ${subtitleClass}`}>Estimates booking-commerce fit, not follower fame</div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
            onClick={(event) => {
              event.stopPropagation();
              setOpen(false);
            }}
          >
            <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm" />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md rounded-t-3xl bg-brand-cream p-6 shadow-lift sm:rounded-3xl"
              role="dialog"
              aria-label="Travel Commerce Score details"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-lg font-extrabold text-brand-charcoal">
                    {score}
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-brand-charcoal">TCS · Illustrative</p>
                    <p className="text-xs text-brand-muted">Estimates booking-commerce fit, not follower fame</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-charcoal"
                  aria-label="Close TCS details"
                >
                  <X size={16} />
                </button>
              </div>

              <ul className="space-y-3">
                {TCS_ROWS.map((row) => (
                  <li key={row.title} className="rounded-2xl border border-brand-charcoal/5 bg-white p-4">
                    <p className="text-sm font-bold text-brand-charcoal">{row.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-muted">{row.detail}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-center text-xs font-medium text-brand-muted">
                Scores are illustrative in this demo. No live ML.
              </p>
              <Link
                href="/trust"
                className="mt-3 block text-center text-xs font-semibold text-brand-teal underline-offset-2 hover:underline"
                onClick={() => setOpen(false)}
              >
                How StayForum builds trust
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
