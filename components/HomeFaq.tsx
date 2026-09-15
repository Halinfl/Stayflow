"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StayFaqAccordion from "@/components/stays/StayFaqAccordion";
import { HOME_FAQ_ITEMS } from "@/lib/homeFaq";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function HomeFaq() {
  return (
    <section className="px-6 pb-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
            Common questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-muted">
            Straight answers about matching, stays, and tracked bookings.{" "}
            <span className="text-brand-charcoal">Verified</span> properties and how we score
            trust —{" "}
            <Link
              href="/trust"
              className="font-semibold text-brand-teal underline-offset-2 hover:underline"
            >
              How StayForum builds trust
            </Link>
            .
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <StayFaqAccordion items={HOME_FAQ_ITEMS} />
        </motion.div>
      </motion.div>
    </section>
  );
}
