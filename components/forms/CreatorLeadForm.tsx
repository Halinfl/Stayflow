"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";
import { CREATOR_FORM_ENDPOINT } from "@/lib/forms";
import { submitLead } from "@/lib/submitLead";

const NICHES = ["Luxury Travel", "Golf", "Wellness", "Family", "Culinary", "Adventure", "Budget Travel"];
const FOLLOWER_RANGES = ["1K-10K", "10K-50K", "50K-100K", "100K-500K", "500K+"];
const PROPERTY_TYPES = ["Golf Resorts", "Beach Resorts", "Boutique Hotels", "Urban Luxury", "Wellness Retreats"];

type CreatorLeadFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CreatorLeadFormState = {
  name: string;
  email: string;
  instagram: string;
  tiktok: string;
  niche: string;
  followers: string;
  engagement: string;
};

export default function CreatorLeadForm({ isOpen, onClose }: CreatorLeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [form, setForm] = useState<CreatorLeadFormState>({ name: "", email: "", instagram: "", tiktok: "", niche: "", followers: "", engagement: "" });

  const update = (key: keyof CreatorLeadFormState, value: string) => setForm((previous) => ({ ...previous, [key]: value }));
  const toggleInterest = (interest: string) => setInterests((previous) => previous.includes(interest) ? previous.filter((item) => item !== interest) : [...previous, interest]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await submitLead(CREATOR_FORM_ENDPOINT, { ...form, interests: interests.join(", ") });
      setSubmitted(true);
    } catch (submissionError) {
      console.error(submissionError);
      setError("Something went wrong - please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-xl border border-brand-charcoal/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-brand-muted/60";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 32 }} className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white no-scrollbar sm:rounded-3xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-brand-charcoal/5 bg-white/95 px-6 pb-4 pt-6 backdrop-blur">
              <div><h2 className="text-xl font-extrabold text-brand-charcoal">Start Matching with Hotels</h2><p className="mt-0.5 text-xs text-brand-muted">Tell us about you &amp; your audience.</p></div>
              <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-cream text-brand-muted transition-colors hover:text-brand-charcoal" aria-label="Close creator lead form"><X size={18} /></button>
            </div>
            {submitted ? (
              <div className="px-6 py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal"><Check size={30} color="#FFF8F0" /></div>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">Welcome aboard!</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">We&apos;ll review your profile and send you personalized property matches within 24 hours.</p>
                <button onClick={onClose} className="mt-6 w-full rounded-2xl bg-brand-teal py-3.5 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">Done</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
                <input required disabled={isSubmitting} className={inputClass} placeholder="Your name *" value={form.name} onChange={(event) => update("name", event.target.value)} />
                <input required type="email" disabled={isSubmitting} className={inputClass} placeholder="Email *" value={form.email} onChange={(event) => update("email", event.target.value)} />
                <input required disabled={isSubmitting} className={inputClass} placeholder="Instagram handle *" value={form.instagram} onChange={(event) => update("instagram", event.target.value)} />
                <input disabled={isSubmitting} className={inputClass} placeholder="TikTok handle (optional)" value={form.tiktok} onChange={(event) => update("tiktok", event.target.value)} />
                <select required disabled={isSubmitting} className={`${inputClass} ${!form.niche ? "text-brand-muted/60" : ""}`} value={form.niche} onChange={(event) => update("niche", event.target.value)}><option value="" disabled>Primary niche *</option>{NICHES.map((niche) => <option key={niche} value={niche}>{niche}</option>)}</select>
                <select required disabled={isSubmitting} className={`${inputClass} ${!form.followers ? "text-brand-muted/60" : ""}`} value={form.followers} onChange={(event) => update("followers", event.target.value)}><option value="" disabled>Follower count *</option>{FOLLOWER_RANGES.map((range) => <option key={range} value={range}>{range}</option>)}</select>
                <input disabled={isSubmitting} className={inputClass} placeholder="Average engagement rate (optional)" value={form.engagement} onChange={(event) => update("engagement", event.target.value)} />
                <div><p className="mb-2 text-sm font-semibold text-brand-charcoal">What type of properties interest you most?</p><div className="flex flex-wrap gap-2">{PROPERTY_TYPES.map((propertyType) => <button key={propertyType} type="button" onClick={() => toggleInterest(propertyType)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${interests.includes(propertyType) ? "bg-brand-teal text-brand-cream" : "bg-brand-cream text-brand-charcoal/70 hover:bg-brand-creamDark"}`}>{propertyType}</button>)}</div></div>
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight disabled:opacity-60">{isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Start Matching with Hotels"}</button>
                <p className="text-center text-xs text-brand-muted">Join 5,000+ creators. No hidden fees. Ever.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
