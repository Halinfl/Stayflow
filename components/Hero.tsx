"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex">
        <motion.div
          className="h-full w-1/2"
          initial={{ x: "-4%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a850609dd5d?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury resort"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="h-full w-1/2"
          initial={{ x: "4%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <img
            src="https://images.unsplash.com/photo-1544642009-907223768efb?auto=format&fit=crop&w=1600&q=80"
            alt="Creator at a resort"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-brand-charcoal/50 to-brand-charcoal/90" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur"
        >
          Travel Marketplace
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl"
        >
          Free stays.
          <br />
          Real commissions.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl"
        >
          The first platform where hotels and creators match, stay, and earn together.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-white/70"
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
