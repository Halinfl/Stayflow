"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";
import { HOTEL_FORM_ENDPOINT } from "@/lib/forms";
import { submitLead } from "@/lib/submitLead";

const PROPERTY_TYPES = ["Golf Resort", "Beach Resort", "Boutique Hotel", "Urban Luxury", "Wellness Retreat", "Other"];
const LOOKING_FOR = ["Content Creation", "Direct Bookings", "Social Media Presence", "All of the Above"];

type HotelLeadFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type HotelLeadFormState = {
  propertyName: string;
  yourName: string;
  email: string;
  phone: string;
  propertyType: string;
  rooms: string;
  location: string;
  goal: string;
  referral: string;
};

export default function HotelLeadForm({ isOpen, onClose }: HotelLeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<HotelLeadFormState>({
    propertyName: "",
    yourName: "",
    email: "",
    phone: "",
    propertyType: "",
    rooms: "",
    location: "",
    goal: "",
    referral: "",
  });

  const update = (key: keyof HotelLeadFormState, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await submitLead(HOTEL_FORM_ENDPOINT, form);
      setSubmitted(true);
    } catch (submissionError) {
      console.error(submissionError);
      setError("Something went wrong - please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-brand-charcoal/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-brand-muted/60";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        >
          <div className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-brand-cream no-scrollbar sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-brand-charcoal/5 bg-brand-cream/95 px-6 pb-4 pt-6 backdrop-blur">
              <div>
                <h2 className="text-xl font-extrabold text-brand-charcoal">Get Matched with Creators</h2>
                <p className="mt-0.5 text-xs text-brand-muted">Takes 30 seconds - we&apos;ll do the rest.</p>
              </div>
              <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-muted transition-colors hover:text-brand-charcoal" aria-label="Close lead form">
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="px-6 py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal"><Check size={30} color="#FFF8F0" /></div>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">You&apos;re on the list!</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">Our team will reach out within 24 hours with creator matches for {form.propertyName || "your property"}.</p>
                <button onClick={onClose} className="mt-6 w-full rounded-2xl bg-brand-teal py-3.5 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">Done</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
                <input required disabled={isSubmitting} className={inputClass} placeholder="Property name *" value={form.propertyName} onChange={(event) => update("propertyName", event.target.value)} />
                <input required disabled={isSubmitting} className={inputClass} placeholder="Your name *" value={form.yourName} onChange={(event) => update("yourName", event.target.value)} />
                <input required type="email" disabled={isSubmitting} className={inputClass} placeholder="Email *" value={form.email} onChange={(event) => update("email", event.target.value)} />
                <input required type="tel" disabled={isSubmitting} className={inputClass} placeholder="Phone *" value={form.phone} onChange={(event) => update("phone", event.target.value)} />
                <select required disabled={isSubmitting} className={`${inputClass} ${!form.propertyType ? "text-brand-muted/60" : ""}`} value={form.propertyType} onChange={(event) => update("propertyType", event.target.value)}>
                  <option value="" disabled>Property type *</option>
                  {PROPERTY_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                <input required type="number" min={1} disabled={isSubmitting} className={inputClass} placeholder="Number of rooms *" value={form.rooms} onChange={(event) => update("rooms", event.target.value)} />
                <input required disabled={isSubmitting} className={inputClass} placeholder="City / Location *" value={form.location} onChange={(event) => update("location", event.target.value)} />
                <select required disabled={isSubmitting} className={`${inputClass} ${!form.goal ? "text-brand-muted/60" : ""}`} value={form.goal} onChange={(event) => update("goal", event.target.value)}>
                  <option value="" disabled>What are you looking for? *</option>
                  {LOOKING_FOR.map((goal) => <option key={goal} value={goal}>{goal}</option>)}
                </select>
                <input disabled={isSubmitting} className={inputClass} placeholder="How did you hear about us? (optional)" value={form.referral} onChange={(event) => update("referral", event.target.value)} />
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight disabled:opacity-60">
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Get Matched with Creators"}
                </button>
                <p className="text-center text-xs text-brand-muted">No spam. No hidden fees. Ever.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
