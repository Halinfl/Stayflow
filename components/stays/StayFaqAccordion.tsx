"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { StayFaq } from "@/lib/data";

export default function StayFaqAccordion({ items }: { items: StayFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-brand-charcoal/5 bg-white shadow-soft"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
            >
              <span className="text-sm font-bold text-brand-charcoal">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-brand-teal transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-brand-charcoal/5 px-5 pb-4 pt-3">
                <p className="text-sm leading-relaxed text-brand-muted">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
