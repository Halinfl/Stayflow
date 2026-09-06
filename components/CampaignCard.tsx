"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import type { HotelCampaign } from "@/lib/data";

type CampaignCardProps = {
  campaign: HotelCampaign;
  onOpen: () => void;
};

export default function CampaignCard({ campaign, onOpen }: CampaignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="group cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
        <img src={campaign.image} alt={campaign.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/0 transition-colors duration-300 group-hover:bg-brand-charcoal/30">
          <span className="translate-y-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">View Details</span>
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-charcoal backdrop-blur">{campaign.type}</span>
          {campaign.verified && <span className="flex items-center gap-1 rounded-full bg-brand-teal px-2.5 py-1 text-xs font-bold text-white"><BadgeCheck size={12} /> Verified</span>}
        </div>
      </div>

      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold leading-tight text-brand-charcoal">{campaign.name}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-brand-muted"><MapPin size={13} /> {campaign.location}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-charcoal"><Star size={14} className="text-brand-gold" fill="currentColor" /> {campaign.rating}</span>
        </div>
        <p className="mt-2 text-sm font-bold text-brand-teal">Free Stay + {campaign.commission}% Commission</p>
        <p className="mt-1 text-xs text-brand-muted">{campaign.deliverables}</p>
        <button
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
          className="mt-3 w-full rounded-xl bg-brand-cream py-2.5 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-teal hover:text-brand-cream"
        >
          Apply
        </button>
      </div>
    </motion.div>
  );
}
