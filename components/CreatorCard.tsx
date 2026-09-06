"use client";

import { Users } from "lucide-react";
import type { Creator } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import { TcsBadge } from "@/components/badges";

type CreatorCardProps = {
  creator: Creator;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-3xl bg-brand-charcoal shadow-lift">
      <div className="relative h-[70%]">
        <SafeImage
          src={creator.image}
          alt={creator.name}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
          draggable={false}
          fallbackLabel={creator.niche}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur">
          <span className="text-xs font-bold uppercase tracking-wide text-white">{creator.niche}</span>
        </div>

        <div className="absolute bottom-4 left-5 right-5">
          <h2 className="text-4xl font-extrabold leading-none tracking-tight text-white">{creator.name}</h2>
          <p className="mt-1 text-sm text-white/70">{creator.handle}</p>
        </div>
      </div>

      <div className="flex h-[30%] items-center justify-between bg-brand-charcoal px-5">
        <TcsBadge score={creator.tcs} />

        <div className="flex gap-6">
          <div className="text-right">
            <div className="text-lg font-bold text-white">{(creator.followers / 1000).toFixed(0)}K</div>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Users size={12} /> followers
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-white">{creator.engagement}%</div>
            <div className="text-xs text-white/50">engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
}
