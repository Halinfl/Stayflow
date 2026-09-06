"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Hotel } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SafeImage from "@/components/SafeImage";

export default function Hero() {
  return (
    <section className="relative min-h-[85svh] overflow-hidden">
      <div className="absolute inset-0 flex">
        <motion.div
          className="relative h-full w-1/2"
          initial={{ x: "-4%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <SafeImage
            src="/images/hero/hotel.jpg"
            alt="Luxury resort"
            fill
            priority
            sizes="50vw"
            className="object-cover"
            fallbackLabel="Resort"
          />
        </motion.div>
        <motion.div
          className="relative h-full w-1/2"
          initial={{ x: "4%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <SafeImage
            src="/images/hero/creator.jpg"
            alt="Creator shooting content on location"
            fill
            priority
            sizes="50vw"
            className="object-cover"
            fallbackLabel="Creator"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-brand-charcoal/50 to-brand-charcoal/90" />

      {/* Top-left chrome wordmark — cream on dark hero, enlarged ~25% */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-5 sm:pt-6">
          <span className="text-lg font-black tracking-[0.16em] text-brand-cream uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-xl">
            StayForum
          </span>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-[85svh] flex-col items-center justify-center px-6 py-20 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="mb-6 inline-block rounded-full bg-white/8 px-3 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur"
        >
          Travel Marketplace
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl"
        >
          Bookings you own.
          <br />
          Stays that inspire the story.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl"
        >
          The first platform where hotels and creators match, stay, and earn together.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <Link
            href="/hotel-path"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-teal px-7 py-3.5 text-base font-semibold text-brand-cream shadow-lift transition-colors hover:bg-brand-tealLight"
          >
            <Hotel size={20} className="shrink-0 text-brand-cream" aria-hidden />
            I&apos;m a Resort / Host
          </Link>
          <Link
            href="/creator-path"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-brand-gold bg-transparent px-7 py-3.5 text-base font-semibold text-brand-cream transition-colors hover:bg-brand-gold/15"
          >
            I&apos;m a Creator
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-14 text-white/40"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
