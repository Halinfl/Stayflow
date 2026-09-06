"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Camera } from "lucide-react";
import { slideUpCard, staggerContainer, viewportOnce } from "@/lib/motion";
import SafeImage from "@/components/SafeImage";

const paths = [
  {
    key: "hotel",
    title: "I'm a Hotel, Host, or Golf Resort",
    desc: "Match with vetted creators who showcase your property and drive direct bookings.",
    href: "/hotel-path",
    image: "/images/paths/hotel.jpg",
    icon: Building2,
    fallbackLabel: "Hotel path",
  },
  {
    key: "creator",
    title: "I'm a Creator or Travel Influencer",
    desc: "Qualify for complimentary stays & earn commission on bookings that convert from your content.",
    href: "/creator-path",
    image: "/images/paths/creator.jpg",
    icon: Camera,
    fallbackLabel: "Creator path",
  },
];

export default function PathCards() {
  return (
    <section className="relative px-6 py-20 sm:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2"
      >
        {paths.map((path) => {
          const Icon = path.icon;
          return (
            <motion.div key={path.key} variants={slideUpCard}>
              <Link
                href={path.href}
                className="group relative block overflow-hidden rounded-3xl bg-brand-charcoal shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={path.image}
                    alt={path.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackLabel={path.fallbackLabel}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} color="#1A1A2E" />
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{path.title}</h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{path.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
                    Get started
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
