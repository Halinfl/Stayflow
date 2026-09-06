"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Percent, Users } from "lucide-react";
import { fadeIn, viewportOnce } from "@/lib/motion";

const stats = [
  { icon: BadgeCheck, label: "Vetted properties only" },
  { icon: Percent, label: "Real, tracked commissions" },
  { icon: Users, label: "Growing creator network" },
  { icon: Handshake, label: "No fees to get matched." },
];

export default function TrustBar() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="px-6 pb-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-brand-muted">
          Built by hoteliers, powered by real commissions
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2.5">
                <Icon size={18} className="text-brand-teal" />
                <span className="text-sm font-medium text-brand-charcoal/80">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
