"use client";

import { motion } from "framer-motion";
import { Handshake, Hotel, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: Handshake,
    title: "Match",
    desc: "Hotels and creators connect by niche, audience, and Travel Commerce Score — not vanity metrics.",
  },
  {
    icon: Hotel,
    title: "Stay",
    desc: "Creators experience the property with complimentary nights and clear deliverables agreed up front.",
  },
  {
    icon: Sparkles,
    title: "Earn",
    desc: "Content drives tracked bookings. Creators earn real commissions; hotels grow direct demand.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 pb-16 pt-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
            Match → Stay → Earn
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-muted">
            Not barter-only. Not pay-for-posts-only. Match, stay, and tracked bookings.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream">
                    <Icon size={22} className="text-brand-teal" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-brand-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
