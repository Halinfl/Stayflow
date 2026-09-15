"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PREFERRED_FORM_ENDPOINT } from "@/lib/forms";
import { submitLead } from "@/lib/submitLead";

const ROLES = [
  "Owner / GM",
  "Revenue / Sales",
  "Marketing",
  "Brand / Partnerships",
  "Other",
] as const;

type PreferredFormState = {
  propertyName: string;
  contactName: string;
  email: string;
  role: string;
  workingWithInfluencers: string;
  marketCity: string;
  niche: string;
  notes: string;
};

const initialForm: PreferredFormState = {
  propertyName: "",
  contactName: "",
  email: "",
  role: "",
  workingWithInfluencers: "",
  marketCity: "",
  niche: "",
  notes: "",
};

export default function PreferredLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<PreferredFormState>(initialForm);

  const update = (key: keyof PreferredFormState, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await submitLead(PREFERRED_FORM_ENDPOINT, {
        source: "preferred",
        propertyName: form.propertyName,
        contactName: form.contactName,
        email: form.email,
        role: form.role,
        workingWithInfluencers: form.workingWithInfluencers,
        marketCity: form.marketCity || undefined,
        niche: form.niche || undefined,
        notes: form.notes || undefined,
      });
      setSubmitted(true);
    } catch (submissionError) {
      console.error(submissionError);
      setError("Something went wrong — please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-brand-charcoal/10 bg-white px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-brand-muted/60 disabled:opacity-60";

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-charcoal/5 bg-white px-6 py-12 text-center shadow-soft sm:px-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal">
          <Check size={30} color="#FFF8F0" />
        </div>
        <h3 className="text-2xl font-extrabold text-brand-charcoal">We&apos;ll be in touch</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-muted">
          Thanks — our Preferred team will follow up about{" "}
          {form.propertyName || "your property"} and walk you through next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Property name *"
          value={form.propertyName}
          onChange={(event) => update("propertyName", event.target.value)}
          autoComplete="organization"
        />
        <input
          required
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Contact name *"
          value={form.contactName}
          onChange={(event) => update("contactName", event.target.value)}
          autoComplete="name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="email"
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Work email *"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          autoComplete="email"
        />
        <select
          required
          disabled={isSubmitting}
          className={`${inputClass} ${!form.role ? "text-brand-muted/60" : ""}`}
          value={form.role}
          onChange={(event) => update("role", event.target.value)}
        >
          <option value="" disabled>
            Your role *
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="rounded-2xl border border-brand-charcoal/5 bg-brand-cream/60 px-4 py-3">
        <legend className="px-1 text-sm font-semibold text-brand-charcoal">
          Already working with influencers / comps? *
        </legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {(["Yes", "No"] as const).map((option) => (
            <label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-brand-charcoal">
              <input
                type="radio"
                name="workingWithInfluencers"
                required
                disabled={isSubmitting}
                value={option}
                checked={form.workingWithInfluencers === option}
                onChange={(event) => update("workingWithInfluencers", event.target.value)}
                className="accent-brand-teal"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Market / city (optional)"
          value={form.marketCity}
          onChange={(event) => update("marketCity", event.target.value)}
        />
        <input
          disabled={isSubmitting}
          className={inputClass}
          placeholder="Creator niche focus (optional)"
          value={form.niche}
          onChange={(event) => update("niche", event.target.value)}
        />
      </div>

      <textarea
        disabled={isSubmitting}
        rows={3}
        className={`${inputClass} resize-y`}
        placeholder="Anything else we should know? (optional)"
        value={form.notes}
        onChange={(event) => update("notes", event.target.value)}
      />

      {error && <p className="text-center text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          "Start Preferred conversation"
        )}
      </button>
      <p className="text-center text-xs text-brand-muted">
        Hotel-first. We&apos;ll walk you through Preferred terms — no spam.
      </p>
    </form>
  );
}
