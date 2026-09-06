"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, Percent, ShieldCheck } from "lucide-react";
import { hotelCampaigns, type HotelCampaign } from "@/lib/data";
import FilterChips from "@/components/FilterChips";
import CampaignCard from "@/components/CampaignCard";
import CampaignDetailModal from "@/components/CampaignDetailModal";
import CreatorLeadForm from "@/components/forms/CreatorLeadForm";

const TYPE_MAP: Record<string, string[]> = {
  Golf: ["Golf Resort"],
  Beach: ["Beach Resort"],
  Boutique: ["Boutique Hotel"],
  Urban: ["Urban Luxury"],
  Wellness: ["Wellness Retreat"],
};

const INITIAL_COUNT = 6;
const LEAD_FORM_AFTER_VIEWS = 4;

export default function CreatorPathPage() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selected, setSelected] = useState<HotelCampaign | null>(null);
  const [detailViews, setDetailViews] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formDismissed, setFormDismissed] = useState(false);

  const filtered = filter === "All" ? hotelCampaigns : hotelCampaigns.filter((hotel) => TYPE_MAP[filter]?.includes(hotel.type));
  const visible = filtered.slice(0, visibleCount);
  const handleCardOpen = (campaign: HotelCampaign) => { setSelected(campaign); setDetailViews((views) => views + 1); };
  const handleCloseDetail = () => { setSelected(null); if (detailViews >= LEAD_FORM_AFTER_VIEWS && !formDismissed) setTimeout(() => setShowLeadForm(true), 200); };

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal"><ArrowLeft size={20} /><span className="text-sm font-medium">Back</span></Link>
            <span className="hidden text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase sm:inline">StayFlow</span>
          </div>
          <div className="text-center"><h1 className="text-base font-extrabold tracking-tight text-brand-charcoal sm:text-lg">Free stays. Real commissions.</h1><p className="text-xs text-brand-muted">Browse verified properties offering stays + commission</p></div>
          <div className="w-16 sm:w-24" />
        </div>
      </header>

      <div className="border-b border-brand-charcoal/5 bg-brand-cream/50"><div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 px-6 py-3"><span className="flex items-center gap-1.5 text-xs font-medium text-brand-charcoal/70"><ShieldCheck size={14} className="text-brand-teal" /> Verified Properties</span><span className="flex items-center gap-1.5 text-xs font-medium text-brand-charcoal/70"><Percent size={14} className="text-brand-teal" /> Real Commissions</span><span className="flex items-center gap-1.5 text-xs font-medium text-brand-charcoal/70"><BadgeCheck size={14} className="text-brand-teal" /> No Hidden Fees</span></div></div>

      <div className="mx-auto max-w-6xl px-6 pt-6"><FilterChips active={filter} onChange={(value) => { setFilter(value); setVisibleCount(INITIAL_COUNT); }} /></div>
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{visible.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} onOpen={() => handleCardOpen(campaign)} />)}</div>
        {visibleCount < filtered.length && <div className="mt-10 text-center"><button onClick={() => setVisibleCount((count) => count + 4)} className="rounded-2xl border-2 border-brand-charcoal/10 px-8 py-3.5 font-semibold text-brand-charcoal transition-colors hover:border-brand-teal hover:text-brand-teal">Load More ({filtered.length - visibleCount} remaining)</button></div>}
        {visibleCount >= filtered.length && <div className="mt-12 rounded-3xl bg-brand-cream p-8 text-center"><h3 className="text-xl font-extrabold text-brand-charcoal">Ready to start matching?</h3><p className="mb-5 mt-1 text-sm text-brand-muted">Tell us about you and we&apos;ll match you with properties that fit your audience.</p><button onClick={() => setShowLeadForm(true)} className="rounded-2xl bg-brand-teal px-8 py-3.5 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">Start Matching with Hotels</button></div>}
      </div>

      <CampaignDetailModal campaign={selected} onClose={handleCloseDetail} onApply={() => { setSelected(null); setShowLeadForm(true); }} />
      <CreatorLeadForm isOpen={showLeadForm} onClose={() => { setShowLeadForm(false); setFormDismissed(true); }} />
    </main>
  );
}
