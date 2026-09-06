"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { creators, type Creator } from "@/lib/data";
import CreatorCard from "./CreatorCard";
import CreatorProfileModal from "./CreatorProfileModal";
import MatchModal from "./MatchModal";
import HotelLeadForm from "@/components/forms/HotelLeadForm";

const SWIPE_THRESHOLD = 120;
const LEAD_FORM_AFTER_SWIPES = 3;

export default function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const [swipes, setSwipes] = useState(0);
  const [showProfile, setShowProfile] = useState<Creator | null>(null);
  const [matchedCreator, setMatchedCreator] = useState<Creator | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormDismissed, setLeadFormDismissed] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-12, 0, 12]);
  const likeOpacity = useTransform(x, [40, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-120, -40], [1, 0]);
  const current = creators[index];
  const next = creators[index + 1];

  const advance = () => {
    x.set(0);
    y.set(0);
    setIndex((currentIndex) => currentIndex + 1);
    const newCount = swipes + 1;
    setSwipes(newCount);
    if (newCount === LEAD_FORM_AFTER_SWIPES && !leadFormDismissed) {
      setTimeout(() => setShowLeadForm(true), 400);
    }
  };

  const handleSkip = () => {
    animate(x, -500, { type: "spring", stiffness: 300, damping: 30 });
    setTimeout(advance, 250);
  };

  const handleMatch = (creator: Creator) => {
    animate(x, 500, { type: "spring", stiffness: 300, damping: 30 });
    setTimeout(() => {
      advance();
      setMatchedCreator(creator);
    }, 250);
  };

  const handleSuperLike = (creator: Creator) => {
    animate(y, -500, { type: "spring", stiffness: 300, damping: 30 });
    setTimeout(() => {
      advance();
      setMatchedCreator(creator);
    }, 250);
  };

  const onDragEnd = () => {
    const xValue = x.get();
    const yValue = y.get();
    if (yValue < -100) {
      y.set(0);
      setShowProfile(current);
      return;
    }
    if (xValue > SWIPE_THRESHOLD) handleMatch(current);
    else if (xValue < -SWIPE_THRESHOLD) handleSkip();
  };

  if (index >= creators.length) {
    return (
      <>
        <div className="mx-auto max-w-md px-6 pt-24 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal">
            <Sparkles size={36} color="#FFF8F0" />
          </div>
          <h2 className="text-3xl font-extrabold text-brand-charcoal">That&apos;s everyone for now!</h2>
          <p className="mt-3 text-brand-muted">New creators join every week. Leave your info and we&apos;ll connect you with your best matches.</p>
          <button onClick={() => setShowLeadForm(true)} className="mt-8 w-full rounded-2xl bg-brand-teal py-4 font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight">Get Matched with Creators</button>
        </div>
        <HotelLeadForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="relative mx-auto h-[560px] max-w-md px-6 pt-8">
          <div className="relative h-full w-full">
            {next && (
              <div className="absolute inset-x-6 top-8 z-0 h-full origin-top scale-95 rounded-3xl bg-white shadow-soft">
                <div className="h-full w-full overflow-hidden rounded-3xl"><img src={next.image} alt="" className="h-full w-full object-cover opacity-50" /></div>
              </div>
            )}
            <motion.div
              drag
              dragElastic={0.6}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={onDragEnd}
              style={{ x, y, rotate, zIndex: 10 }}
              className="absolute inset-x-6 top-0 h-full cursor-grab active:cursor-grabbing"
            >
              <motion.div style={{ opacity: likeOpacity }} className="absolute left-6 top-6 z-20 rotate-[-12deg] rounded-2xl border-4 border-brand-teal px-4 py-1.5"><span className="text-2xl font-extrabold tracking-widest text-brand-teal">MATCH</span></motion.div>
              <motion.div style={{ opacity: nopeOpacity }} className="absolute right-6 top-6 z-20 rotate-[12deg] rounded-2xl border-4 border-red-400 px-4 py-1.5"><span className="text-2xl font-extrabold tracking-widest text-red-400">SKIP</span></motion.div>
              <CreatorCard creator={current} />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <ActionButton label="Skip" onClick={handleSkip} className="text-red-500 hover:bg-red-50"><X size={28} /></ActionButton>
          <ActionButton label="Super like" onClick={() => handleSuperLike(current)} className="text-brand-gold hover:bg-brand-gold/10"><Sparkles size={26} /></ActionButton>
          <ActionButton label="Match" onClick={() => handleMatch(current)} className="bg-brand-teal text-brand-cream hover:bg-brand-tealLight"><Heart size={28} fill="currentColor" /></ActionButton>
        </div>
        <p className="mt-4 text-center text-xs text-brand-muted">{swipes === 0 ? "Swipe or use the buttons" : `${swipes} ${swipes === 1 ? "creator" : "creators"} swiped`}</p>
      </div>

      <CreatorProfileModal creator={showProfile} onClose={() => setShowProfile(null)} onMatch={(creator) => { setShowProfile(null); setMatchedCreator(creator); }} />
      <MatchModal creator={matchedCreator} onClose={() => setMatchedCreator(null)} onLeaveInfo={() => { setMatchedCreator(null); setShowLeadForm(true); }} />
      <HotelLeadForm isOpen={showLeadForm} onClose={() => { setShowLeadForm(false); setLeadFormDismissed(true); }} />
    </>
  );
}

function ActionButton({ label, onClick, className, children }: { label: string; onClick: () => void; className: string; children: React.ReactNode }) {
  return <motion.button whileTap={{ scale: 0.85 }} onClick={onClick} className={`flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lift transition-colors ${className}`} aria-label={label}>{children}</motion.button>;
}
