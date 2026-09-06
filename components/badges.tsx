import { BadgeCheck } from "lucide-react";

export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-brand-teal px-2.5 py-1 text-xs font-bold text-white ${className}`}
    >
      <BadgeCheck size={12} /> Verified
    </span>
  );
}

export function TcsBadge({
  score,
  size = "md",
}: {
  score: number;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg"
      ? "h-14 w-14 text-xl"
      : size === "sm"
        ? "h-9 w-9 text-sm"
        : "h-12 w-12 text-lg";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-brand-gold font-extrabold text-brand-charcoal ${box}`}
      >
        {score}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-bold text-white">TCS Score</div>
        <div className="text-xs text-white/50">Illustrative · Travel Commerce</div>
      </div>
    </div>
  );
}
